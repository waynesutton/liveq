import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation, useConvexAuth } from "convex/react";
import { useUser, useAuth } from "@clerk/clerk-react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

const AdminEventPage: React.FC = () => {
  const { eventTitle } = useParams<{ eventTitle: string }>();
  const { isLoaded: authIsLoaded, isSignedIn } = useAuth();
  const { isLoading: convexAuthLoading, isAuthenticated } = useConvexAuth();
  const { user } = useUser();

  const [activeAnswerBox, setActiveAnswerBox] = useState<string | null>(null);
  const [answerContent, setAnswerContent] = useState<string>("");

  // State for delete confirmation modal
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    questionId: Id<"questions">;
    questionContent: string;
  } | null>(null);

  // Fetch event and questions
  const event = useQuery(
    api.functions.getEventBySlug,
    convexAuthLoading || !isAuthenticated
      ? "skip"
      : { eventSlug: eventTitle as any },
  );
  const questions = useQuery(
    api.functions.listQuestionsForAdmin,
    convexAuthLoading || !isAuthenticated || !event?._id
      ? "skip"
      : { eventId: event._id },
  );

  // Mutations
  const markAnswered = useMutation(api.functions.markQuestionAnswered);
  const markAsAnswered = useMutation(api.functions.markQuestionAsAnswered);
  const toggleVisibility = useMutation(api.functions.toggleQuestionVisibility);
  const deleteQuestion = useMutation(api.functions.deleteQuestion);

  // Handler functions for moderation
  const handleToggleAnswerBox = (
    questionId: Id<"questions">,
    existingAnswer?: string,
  ) => {
    if (activeAnswerBox === questionId) {
      // Close the answer box
      setActiveAnswerBox(null);
      setAnswerContent("");
    } else {
      // Open the answer box with existing answer if available
      setActiveAnswerBox(questionId);
      setAnswerContent(existingAnswer || "");
    }
  };

  const handleSubmitAnswer = async (questionId: Id<"questions">) => {
    if (!answerContent.trim()) return;

    try {
      await markAnswered({ questionId, answer: answerContent.trim() });
      setActiveAnswerBox(null);
      setAnswerContent("");
    } catch (error) {
      console.error("Failed to submit answer:", error);
    }
  };

  const handleCancelAnswer = () => {
    setActiveAnswerBox(null);
    setAnswerContent("");
  };

  const handleToggleVisibility = async (
    questionId: any,
    isVisible: boolean,
  ) => {
    await toggleVisibility({ questionId, hide: isVisible });
  };

  const handleDeleteQuestion = async (
    questionId: Id<"questions">,
    questionContent: string,
  ) => {
    setDeleteConfirmation({
      questionId,
      questionContent:
        questionContent.substring(0, 50) +
        (questionContent.length > 50 ? "..." : ""),
    });
  };

  const confirmDelete = async () => {
    if (deleteConfirmation) {
      await deleteQuestion({ questionId: deleteConfirmation.questionId });
      setDeleteConfirmation(null);
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

  const handleMarkAsAnswered = async (questionId: Id<"questions">) => {
    try {
      await markAsAnswered({ questionId });
    } catch (error) {
      console.error("Failed to mark question as answered:", error);
    }
  };

  // Check if user has admin role
  const userRole = user?.publicMetadata?.role;
  const isAdmin = userRole === "admin";

  // Handle Convex auth loading first (most critical for data fetching)
  if (convexAuthLoading) {
    return (
      <div className="page-container">
        <div className="loading">Loading authentication...</div>
      </div>
    );
  }

  // Handle Clerk auth loading
  if (!authIsLoaded) {
    return (
      <div className="page-container">
        <div className="loading">Loading authentication...</div>
      </div>
    );
  }

  // Handle not authenticated
  if (!isAuthenticated || !isSignedIn) {
    return (
      <div className="page-container">
        <div className="error">
          Please log in to access the admin dashboard.
        </div>
      </div>
    );
  }

  // Handle not admin
  if (!isAdmin) {
    return (
      <div className="page-container">
        <div className="error">
          Admin access required. Contact an administrator if you believe this is
          an error.
        </div>
      </div>
    );
  }

  if (event === undefined || questions === undefined) {
    return <div className="loading">Loading event details...</div>;
  }

  if (!event) {
    return <div className="error">Event not found</div>;
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/admin">&larr; Back to Admin Dashboard</Link>
        <h1>Manage Event: {event.title}</h1>
        <p>{event.description}</p>
      </div>
      <div className="admin-section">
        <h2>Questions ({questions?.length})</h2>
        <div className="questions-list">
          {questions?.map((question) => (
            <div
              key={question._id}
              className="question-item admin-question-item"
            >
              <div className="question-details">
                <p className="question-text">{question.content}</p>
                <small>
                  By: {question.authorName || "Anonymous"} | Upvotes:{" "}
                  {question.upvotes}
                </small>
              </div>
              <div className="moderation-actions">
                <button
                  onClick={() =>
                    handleToggleAnswerBox(question._id, question.answer)
                  }
                  className={`btn ${activeAnswerBox === question._id ? "btn-primary" : "btn-admin"}`}
                >
                  {activeAnswerBox === question._id
                    ? "Cancel"
                    : question.answered
                      ? "Edit Answer"
                      : "Answer"}
                </button>
                {!question.answered && (
                  <button
                    onClick={() => handleMarkAsAnswered(question._id)}
                    className="btn btn-admin"
                  >
                    Mark as Answered
                  </button>
                )}
                <button
                  onClick={() =>
                    handleToggleVisibility(question._id, question.isVisible)
                  }
                  className="btn btn-secondary"
                >
                  {question.isVisible ? "Hide" : "Unhide"}
                </button>
                <button
                  onClick={() =>
                    handleDeleteQuestion(question._id, question.content)
                  }
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>

              {/* Slide-open Answer Box */}
              {activeAnswerBox === question._id && (
                <div className="answer-box">
                  <div className="answer-box-header">
                    <h4>{question.answered ? "Edit Answer" : "Add Answer"}</h4>
                  </div>
                  <div className="answer-box-content">
                    <textarea
                      value={answerContent}
                      onChange={(e) => setAnswerContent(e.target.value)}
                      placeholder="Enter your answer here..."
                      className="form-textarea answer-textarea"
                      rows={4}
                      autoFocus
                    />
                    <div className="answer-box-actions">
                      <button
                        onClick={() => handleSubmitAnswer(question._id)}
                        className="btn btn-primary"
                        disabled={!answerContent.trim()}
                      >
                        {question.answered ? "Update Answer" : "Submit Answer"}
                      </button>
                      <button
                        onClick={handleCancelAnswer}
                        className="btn btn-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Display existing answer if question is answered */}
              {question.answered &&
                question.answer &&
                activeAnswerBox !== question._id && (
                  <div className="existing-answer">
                    <div className="answer-label">Answer:</div>
                    <div className="answer-content">{question.answer}</div>
                    {question.answeredBy && question.answeredBy !== "Admin" && (
                      <div className="answer-by">by {question.answeredBy}</div>
                    )}
                  </div>
                )}

              {/* Display simple "Answered" status if marked without answer text */}
              {question.answered && !question.answer && (
                <div className="answered-status">
                  <span className="answered-badge">Answered</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmation && (
        <div className="notification-modal">
          <div className="notification-content">
            <div className="notification-icon error">⚠️</div>
            <h3>Delete Question</h3>
            <p>
              Are you sure you want to delete this question?
              <br />
              <strong>"{deleteConfirmation.questionContent}"</strong>
              <br />
              This action cannot be undone.
            </p>
            <div className="notification-actions">
              <button onClick={cancelDelete} className="btn btn-secondary">
                Cancel
              </button>
              <button onClick={confirmDelete} className="btn btn-danger">
                Delete Question
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEventPage;

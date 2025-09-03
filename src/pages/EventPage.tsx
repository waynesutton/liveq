import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "convex/react";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/clerk-react";
import { api } from "../../convex/_generated/api";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import QRCodeComponent from "../components/QRCode";

const EventPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [questionContent, setQuestionContent] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [adminName, setAdminName] = useState("");
  const [sortBy, setSortBy] = useState("votes");
  const [showQr, setShowQr] = useState(false);

  const { user } = useUser();

  // Load Manrope font only on this page
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Get event by slug instead of ID
  const event = useQuery(api.functions.getEventBySlug, {
    eventSlug: eventId as any,
  });
  const questions = useQuery(
    api.functions.listQuestions,
    event?._id ? { eventId: event._id } : "skip",
  );
  const comments = useQuery(
    api.functions.listEventComments,
    event?._id ? { eventId: event._id } : "skip",
  );
  const eventStatus = useQuery(
    api.functions.isEventOpen,
    event?._id ? { eventId: event._id } : "skip",
  );

  const submitQuestion = useMutation(api.functions.submitQuestion);
  const upvoteQuestion = useMutation(api.functions.upvoteQuestion);
  const addComment = useMutation(api.functions.addComment);

  // Move useMemo hooks before any conditional returns
  const currentUrl = window.location.href;

  const sortedQuestions = React.useMemo(() => {
    if (!questions) return [];

    const allQuestions = [...questions];

    if (sortBy === "answered") {
      // Show answered questions first (sorted by answeredAt), then all other questions
      const answered = allQuestions.filter((q) => q.answered);
      const unanswered = allQuestions.filter((q) => !q.answered);

      // Sort answered by answeredAt (most recent first)
      answered.sort((a, b) => (b.answeredAt || 0) - (a.answeredAt || 0));

      // Sort unanswered by votes
      unanswered.sort((a, b) => b.upvotes - a.upvotes);

      return [...answered, ...unanswered];
    }

    return allQuestions.sort((a, b) => {
      if (sortBy === "votes") {
        return b.upvotes - a.upvotes;
      }
      if (sortBy === "recent") {
        return b._creationTime - a._creationTime;
      }
      // Default sort by votes
      return b.upvotes - a.upvotes;
    });
  }, [questions, sortBy]);

  const handleSubmitQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionContent.trim() || !event?._id) return;

    try {
      await submitQuestion({
        eventId: event._id,
        content: questionContent.trim(),
        authorName: user?.firstName || "Anonymous",
      });
      setQuestionContent("");
    } catch (error) {
      console.error("Failed to submit question:", error);
    }
  };

  const handleUpvote = async (questionId: any) => {
    try {
      await upvoteQuestion({ questionId });
    } catch (error) {
      console.error("Failed to upvote:", error);
    }
  };

  const handleAddAdminComment = async (questionId: any) => {
    if (!commentContent.trim() || !adminName.trim()) return;

    try {
      await addComment({
        questionId,
        content: commentContent.trim(),
        authorName: adminName.trim(),
        isAdmin: true,
        authorId: undefined,
      });
      setCommentContent("");
      setAdminName("");
    } catch (error) {
      console.error("Failed to add admin comment:", error);
    }
  };

  if (
    event === undefined ||
    questions === undefined ||
    eventStatus === undefined
  ) {
    return (
      <div className="page-container">
        <div className="loading">Loading event...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="page-container">
        <div className="error">Event not found</div>
      </div>
    );
  }

  return (
    <div className="event-page">
      {/* Left Panel - Questions */}
      <div className="event-left-panel">
        <div className="questions-list-container">
          <div className="list-header">
            <h3>Questions</h3>
          </div>
          {/* Questions List   ({questions.length})*/}
          {sortedQuestions.length === 0 ? (
            <p className="empty-state">
              No questions yet. Be the first to ask!
            </p>
          ) : (
            <div className="questions-list">
              {(() => {
                return sortedQuestions.map((question) => {
                  const questionComments =
                    comments?.filter((c) => c.questionId === question._id) ||
                    [];
                  const adminComments = questionComments.filter(
                    (c) => c.isAdmin,
                  );

                  // Debug logging
                  console.log(
                    `Question ${question._id}: answered=${question.answered}, answer=${question.answer}`,
                  );

                  return (
                    <div
                      key={`${question._id}-${question.answered}-${question.answer}`}
                      className="question-item"
                    >
                      <div className="question-content">
                        <div className="question-text-and-upvote">
                          <div className="question-body" style={{ flex: 1 }}>
                            <div
                              className="question-author"
                              style={{
                                marginBottom: 4,
                                fontSize: "0.85rem",
                                opacity: 0.9,
                              }}
                            >
                              {question.authorName || "Anonymous"}
                            </div>
                            <div
                              className="question-text"
                              style={{ fontFamily: '"Manrope", sans-serif' }}
                            >
                              {question.content}
                            </div>
                          </div>
                          <button
                            onClick={() => handleUpvote(question._id)}
                            className="upvote-button"
                          >
                            <ChevronUpIcon className="upvote-icon" />
                            <span className="upvote-count">
                              {question.upvotes}
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Admin Comments Display - Only show if admin comments exist */}
                      {adminComments.length > 0 && (
                        <div className="admin-comments-display">
                          <h4>Admin Comments</h4>
                          {adminComments.map((comment) => (
                            <div key={comment._id} className="admin-comment">
                              <div className="comment-author">
                                {comment.authorName}
                              </div>
                              <div className="comment-content">
                                {comment.content}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Answered Display - Show if admin has marked as answered */}
                      {question.answered && question.answer && (
                        <div className="answered-display">
                          <div className="answered-label">Answered</div>
                          <div className="answered-content">
                            {question.answer}
                          </div>
                          {question.answeredBy &&
                            question.answeredBy !== "Admin" && (
                              <div className="answered-by">
                                by {question.answeredBy}
                              </div>
                            )}
                        </div>
                      )}

                      {/* Simple "Answered" status if marked without answer text */}
                      {question.answered && !question.answer && (
                        <div className="answered-simple">
                          <span className="answered-badge">Answered</span>
                        </div>
                      )}

                      {/* Admin Comment Form - Only show if admin comments exist */}
                      {adminComments.length > 0 && (
                        <div className="admin-comment-section">
                          <h4>Add Admin Comment</h4>
                          <div className="admin-comment-form">
                            <input
                              type="text"
                              placeholder="Admin name"
                              value={adminName}
                              onChange={(e) => setAdminName(e.target.value)}
                              className="form-input admin-name-input"
                            />
                            <input
                              type="text"
                              placeholder="Admin comment..."
                              value={commentContent}
                              onChange={(e) =>
                                setCommentContent(e.target.value)
                              }
                              className="form-input comment-input"
                            />
                            <button
                              onClick={() =>
                                handleAddAdminComment(question._id)
                              }
                              className="btn btn-admin"
                            >
                              Add Comment
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                });
              })()}
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Event Details */}
      <div className="event-right-panel">
        <div className="event-details">
          <h2>Event Details</h2>

          <div className="event-info">
            <p>{event.title}</p>
            {/* <p className="event-description">{event.description}</p> */}
            {event.date && (
              <div className="event-date-box">
                Date: {new Date(event.date).toLocaleDateString()}
              </div>
            )}
          </div>

          {/* Event Status Message */}
          {eventStatus && !eventStatus.isOpen && eventStatus.message && (
            <div className="event-status-message">{eventStatus.message}</div>
          )}

          {/* Sort Options - Above Ask a Question */}
          <div className="sort-options-compact">
            <span className="sort-label-inline">Sort by:</span>
            <button
              onClick={() => setSortBy("votes")}
              className={`sort-btn-small ${sortBy === "votes" ? "active" : ""}`}
            >
              Most Voted
            </button>
            <button
              onClick={() => setSortBy("recent")}
              className={`sort-btn-small ${sortBy === "recent" ? "active" : ""}`}
            >
              Most Recent
            </button>
            <button
              onClick={() => setSortBy("answered")}
              className={`sort-btn-small ${sortBy === "answered" ? "active" : ""}`}
            >
              Answered
            </button>
          </div>

          {/* Ask a Question Form - Only show if event is open */}
          {eventStatus && eventStatus.isOpen && (
            <div className="question-form-section">
              <h3>Ask a Question</h3>

              <SignedOut>
                <div className="auth-required">
                  <p>Please sign in to submit a question</p>
                  <SignInButton mode="modal">
                    <button className="btn btn-primary">
                      Sign In to Ask Question
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>

              <SignedIn>
                <form onSubmit={handleSubmitQuestion} className="question-form">
                  <div className="form-group">
                    <textarea
                      placeholder="Type your question here..."
                      value={questionContent}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.length <= 249) {
                          setQuestionContent(value);
                        }
                      }}
                      className="form-textarea"
                      rows={5}
                      maxLength={249}
                      required
                    />
                    <div
                      className={`character-counter ${
                        questionContent.length > 225 ? "warning" : ""
                      } ${questionContent.length > 240 ? "danger" : ""}`}
                    >
                      {249 - questionContent.length} characters left
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Question
                  </button>
                </form>
              </SignedIn>
            </div>
          )}

          {/* QR Code in Bottom Right */}
          <div className="qr-code-toggle">
            <button
              onClick={() => setShowQr(!showQr)}
              className="btn btn-secondary"
            >
              {showQr ? "Hide QR Code" : "Show QR Code"}
            </button>
          </div>
          {showQr && (
            <div className="qr-code-section">
              <QRCodeComponent url={currentUrl} size={120} />
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <a
          href="https://convex.dev/?utm_source=convexamasite"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Convex
        </a>
      </footer>
    </div>
  );
};

export default EventPage;

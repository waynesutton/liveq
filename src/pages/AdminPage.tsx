import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useConvexAuth } from "convex/react";
import { useUser, useAuth } from "@clerk/clerk-react";
import { api } from "../../convex/_generated/api";

const AdminPage: React.FC = () => {
  const { isLoaded: authIsLoaded, isSignedIn } = useAuth();
  const { isLoading: convexAuthLoading, isAuthenticated } = useConvexAuth();
  const { user } = useUser();

  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [adminName, setAdminName] = useState("");
  const [openDate, setOpenDate] = useState("");
  const [closeDate, setCloseDate] = useState("");
  const [closedMessage, setClosedMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [activeTab, setActiveTab] = useState("manage");
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const createEvent = useMutation(api.functions.createEvent);
  const deleteEvent = useMutation(api.functions.deleteEvent);
  const toggleEventStatus = useMutation(api.functions.toggleEventStatus);
  const toggleEventArchive = useMutation(api.functions.toggleEventArchive);
  const allEvents = useQuery(
    api.functions.listAllEventsForAdmin,
    convexAuthLoading || !isAuthenticated ? "skip" : {},
  );

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventTitle.trim() || !eventDescription.trim()) return;

    try {
      await createEvent({
        title: eventTitle.trim(),
        description: eventDescription.trim(),
        date: eventDate || undefined,
        adminName: adminName.trim() || undefined,
        openDate: openDate || undefined,
        closeDate: closeDate || undefined,
        closedMessage: closedMessage.trim() || undefined,
      });

      // Reset form
      setEventTitle("");
      setEventDescription("");
      setEventDate("");
      setAdminName("");
      setOpenDate("");
      setCloseDate("");
      setClosedMessage("");

      // Show success modal
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Failed to create event:", error);
      setNotification({
        type: "error",
        message: "Failed to create event. Please try again.",
      });
    }
  };

  const handleDeleteEvent = async (eventId: any) => {
    if (
      !confirm(
        "Are you sure you want to delete this event? This will also delete all questions and comments associated with it.",
      )
    ) {
      return;
    }

    try {
      await deleteEvent({
        eventId: eventId as any,
      });
      setNotification({
        type: "success",
        message: "Event deleted successfully!",
      });
    } catch (error) {
      console.error("Failed to delete event:", error);
      setNotification({
        type: "error",
        message: "Failed to delete event. Please try again.",
      });
    }
  };

  const handleToggleEventStatus = async (
    eventId: any,
    currentStatus: boolean,
    closedMessage: string,
  ) => {
    try {
      const newStatus = !currentStatus;

      if (!newStatus) {
        if (
          !confirm(
            "Are you sure you want to close this event? Users will still be able to read questions but cannot submit new ones.",
          )
        ) {
          return;
        }
      }

      await toggleEventStatus({
        eventId: eventId as any,
        isActive: newStatus,
        closedMessage: closedMessage || undefined,
      });

      setNotification({
        type: "success",
        message: `Event ${newStatus ? "activated" : "closed"} successfully!`,
      });
    } catch (error) {
      console.error("Failed to toggle event status:", error);
      setNotification({
        type: "error",
        message: "Failed to update event status. Please try again.",
      });
    }
  };

  const handleToggleEventArchive = async (
    eventId: any,
    currentArchived: boolean,
  ) => {
    try {
      const newArchived = !currentArchived;

      if (newArchived) {
        if (
          !confirm(
            "Are you sure you want to archive this event? It will no longer appear on the homepage.",
          )
        ) {
          return;
        }
      }

      await toggleEventArchive({
        eventId: eventId as any,
        archived: newArchived,
      });

      setNotification({
        type: "success",
        message: `Event ${newArchived ? "archived" : "unarchived"} successfully!`,
      });
    } catch (error) {
      console.error("Failed to toggle event archive status:", error);
      setNotification({
        type: "error",
        message: "Failed to update event archive status. Please try again.",
      });
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const closeNotification = () => {
    setNotification(null);
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

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Admin Dashboard</h1>
        <p>Create and manage AMA events</p>
      </div>

      <div className="admin-nav">
        <button
          className={`nav-button ${activeTab === "manage" ? "active" : ""}`}
          onClick={() => setActiveTab("manage")}
        >
          Event Management
        </button>
        <button
          className={`nav-button ${activeTab === "create" ? "active" : ""}`}
          onClick={() => setActiveTab("create")}
        >
          Create New Event
        </button>
      </div>

      {activeTab === "create" && (
        <div className="admin-section">
          <h2>Create New Event</h2>
          <form onSubmit={handleCreateEvent} className="admin-form">
            <div className="form-group">
              <label htmlFor="adminName">Admin Name (Optional)</label>
              <input
                id="adminName"
                type="text"
                placeholder="Enter your name"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventTitle">Event Title *</label>
              <input
                id="eventTitle"
                type="text"
                placeholder="Enter event title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventDescription">Event Description *</label>
              <textarea
                id="eventDescription"
                placeholder="Enter event description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                className="form-textarea"
                rows={4}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventDate">Event Date (Optional)</label>
              <input
                id="eventDate"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="openDate">Open Date (Optional)</label>
              <input
                id="openDate"
                type="datetime-local"
                value={openDate}
                onChange={(e) => setOpenDate(e.target.value)}
                className="form-input"
              />
              <small>When questions can start being submitted</small>
            </div>

            <div className="form-group">
              <label htmlFor="closeDate">Close Date (Optional)</label>
              <input
                id="closeDate"
                type="datetime-local"
                value={closeDate}
                onChange={(e) => setCloseDate(e.target.value)}
                className="form-input"
              />
              <small>When questions stop being accepted</small>
            </div>

            <div className="form-group">
              <label htmlFor="closedMessage">Closed Message (Optional)</label>
              <textarea
                id="closedMessage"
                placeholder="Custom message when event is closed (supports links)"
                value={closedMessage}
                onChange={(e) => setClosedMessage(e.target.value)}
                className="form-textarea"
                rows={3}
              />
              <small>
                Message shown when event is closed. You can include links like
                [link text](url)
              </small>
            </div>

            <button type="submit" className="btn btn-primary">
              Create Event
            </button>
          </form>
        </div>
      )}

      {activeTab === "manage" && (
        <div className="admin-section">
          <h2>Event Management</h2>
          <div className="event-management">
            {allEvents === undefined ? (
              <div className="loading">Loading events...</div>
            ) : allEvents.length === 0 ? (
              <div className="empty-state">
                <h3>No events found</h3>
                <p>Create your first event above</p>
              </div>
            ) : (
              <div className="events-list">
                <h3>All Events ({allEvents.length})</h3>
                {allEvents.map((event) => (
                  <div key={event._id} className="event-item">
                    <div className="event-info">
                      <Link
                        to={`/admin/event/${event.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9-]/g, "")}`}
                      >
                        <h4>{event.title}</h4>
                      </Link>
                      <p>{event.description}</p>
                      <div className="event-meta">
                        <span
                          className={`status ${
                            event.isActive ? "active" : "inactive"
                          }`}
                        >
                          {event.isActive ? "Active" : "Inactive"}
                        </span>
                        {event.archived && (
                          <span className="status archived">Archived</span>
                        )}
                        {event.date && (
                          <span className="date">
                            {new Date(event.date).toLocaleDateString()}
                          </span>
                        )}
                        {event.adminName && (
                          <span className="admin">by {event.adminName}</span>
                        )}
                      </div>
                    </div>
                    <div className="event-actions">
                      <Link
                        to={`/admin/event/${event.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9-]/g, "")}`}
                        className="btn btn-secondary"
                      >
                        Manage
                      </Link>
                      <button
                        onClick={() =>
                          handleToggleEventStatus(
                            event._id,
                            event.isActive,
                            event.closedMessage || "",
                          )
                        }
                        className={`btn ${
                          event.isActive ? "btn-secondary" : "btn-admin"
                        }`}
                      >
                        {event.isActive ? "Close Event" : "Activate Event"}
                      </button>
                      <button
                        onClick={() =>
                          handleToggleEventArchive(
                            event._id,
                            event.archived || false,
                          )
                        }
                        className={`btn ${
                          event.archived ? "btn-admin" : "btn-secondary"
                        }`}
                      >
                        {event.archived ? "Unarchive Event" : "Archive Event"}
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(event._id)}
                        className="btn btn-danger"
                      >
                        Delete Event
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay" onClick={closeSuccessModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Event Created Successfully!</h3>
            <p>
              Your AMA event has been created and is now active. Users can start
              submitting questions.
            </p>
            <button className="btn btn-primary" onClick={closeSuccessModal}>
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Notification Modal */}
      {notification && (
        <div className="modal-overlay" onClick={closeNotification}>
          <div
            className="modal notification-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`notification-icon ${notification.type}`}>
              {notification.type === "success" ? "✓" : "✕"}
            </div>
            <h3>{notification.type === "success" ? "Success" : "Error"}</h3>
            <p>{notification.message}</p>
            <button className="btn btn-primary" onClick={closeNotification}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;

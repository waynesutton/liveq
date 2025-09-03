import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { api } from "../../convex/_generated/api";

const HomePage: React.FC = () => {
  const events = useQuery(api.functions.listActiveEvents);

  if (events === undefined) {
    return (
      <div className="page-container">
        <div className="loading">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Convex AMA Questions</h1>
        <p>Submit your questions for upcoming founder AMA live streams.</p>
      </div>

      {events.length === 0 ? (
        <div className="empty-state">
          <h3>No events scheduled</h3>
          <p>Check back later for upcoming AMA sessions with Convex</p>
        </div>
      ) : (
        <div
          className={`events-grid ${events.length === 1 ? "single-event" : ""}`}
        >
          {events.map((event) => (
            <div key={event._id} className="event-card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              {event.date && (
                <div className="event-date">
                  {new Date(event.date).toLocaleDateString()}
                </div>
              )}
              {/* Public view link above submit CTA for signed-out users */}
              <div style={{ marginBottom: 8 }}>
                <Link
                  to={`/event/${event.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")}`}
                  className="nav-link"
                  style={{ color: "#000" }}
                >
                  View questions
                </Link>
              </div>
              <SignedIn>
                <Link
                  to={`/event/${event.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")}`}
                  className="btn btn-primary"
                >
                  Submit Your Questions
                </Link>
              </SignedIn>

              <SignedOut>
                <SignInButton mode="modal">
                  <button className="btn btn-primary">
                    Sign In to Submit Questions
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="footer footer-home">
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

export default HomePage;

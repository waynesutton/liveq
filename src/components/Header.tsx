import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            <span className="logo-main">liveq</span>
            <span className="logo-tagline">Convex AMA Questions</span>
          </Link>
        </div>

        <nav className="header-nav">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Events
          </Link>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="nav-link auth-button">Sign In</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="nav-link auth-button">Sign Up</button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
};

export default Header;

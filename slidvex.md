# Product Requirements Document: Slidvex

## 1. Project Overview

LiveQ is an Convex AMA Questions - Convex AMA Questions platform built with Convex.dev and React, designed to facilitate real-time interactions during meetings and events. The application will offer features like Live Polls, Live Q&A, Word Clouds, Quizzes, Surveys, and Analytics, leveraging Convex.dev for data management.

## 2. Features and Functionalities

### 2.1 AMA Events (Primary Feature)

- **Description**: Admin-created Ask Me Anything events where users can submit questions and upvote without authentication.
- **Requirements**:
  - Admin creates events with title, description, and optional date/time
  - Users can submit questions anonymously (no login required)
  - Users can upvote questions without authentication (no downvotes)
  - All questions are public and visible to everyone
  - Questions display upvote count and submission time
  - Admin can leave comments on any question
  - Users must login to leave comments
  - Homepage displays list of upcoming events
  - Each event page displays a QR code for easy mobile access
  - Questions are displayed on the left with scrollable list
  - Event info is displayed above the question submission form on the left

### 2.2 Design Guidelines

- **Icons**: Only Radix UI icons should be used. No emojis are permitted within the application UI.
- **Modals**: All popup modals must adhere to the site's clean, minimalist, black-and-white design language as defined in `theme.md`.
- **Layout**: Two-panel layout with questions on the left and event details on the right
- **Mobile Optimization**: Responsive design that works seamlessly on mobile devices
- **Theme**: Clean, minimalist design inspired by colf.dev aesthetic

### 2.3 Live Polls

- **Description**: Enable hosts to create and manage real-time polls to gather audience opinions.
- **Requirements**:
  - Multiple poll types: multiple-choice, rating scales, open-ended questions.
  - Real-time result updates.
  - Option to display results to participants.
  - Admin moderation: Hosts with admin role can edit, hide, or remove inappropriate polls.

### 2.4 Live Q&A

- **Description**: Allow participants to submit and upvote questions during sessions.
- **Requirements**:
  - Anonymous question submissions.
  - Upvoting mechanism to prioritize questions.
  - Moderation tools for hosts.
  - Admin content management: Admins can hide, remove, or approve questions to prevent spam.
  - Spam detection: Automatic flagging of suspicious content for admin review.

### 2.5 Word Clouds

- **Description**: Visualize audience responses in a dynamic word cloud format.
- **Requirements**:
  - Aggregate open-ended responses.
  - Real-time visualization updates.
  - Filter out common words and inappropriate content.
  - Admin content filtering: Admins can manually remove inappropriate words or responses.
  - Content moderation queue: Flagged content appears in admin dashboard for review.

### 2.6 Quizzes

- **Description**: Create interactive quizzes to engage participants and assess knowledge.
- **Requirements**:
  - Multiple-choice questions with correct answer indicators.
  - Timed questions.
  - Leaderboard to display top participants.
  - Admin quiz management: Admins can edit, hide, or remove quizzes and questions.
  - Response validation: Admins can review and moderate participant responses for appropriateness.

### 2.7 Surveys

- **Description**: Collect feedback from participants through structured surveys.
- **Requirements**:
  - Multiple question types: multiple-choice, rating scales, open-ended.
  - Ability to schedule surveys before, during, or after events.
  - Anonymous response option.
  - Admin survey oversight: Admins can review, edit, or remove survey responses.
  - Content moderation: Automatic flagging of inappropriate survey responses for admin review.

### 2.8 Analytics

- **Description**: Provide hosts with insights into participant engagement and feedback.
- **Requirements**:
  - Dashboard displaying key metrics: participation rates, poll results, Q&A activity.
  - Exportable reports.
  - Trend analysis over multiple events.
  - Admin analytics: Enhanced dashboard for admins showing moderation metrics and flagged content.
  - Content health monitoring: Track spam attempts, inappropriate content, and moderation actions.

## 3. Development Plan

### 3.1 Phase 1: Database Design and Setup

- **Objective**: Establish the foundational data structures in Convex.dev.
- **Tasks**:
  - Define schemas for Events, Questions, Comments, Users, Admin Actions, and Analytics.
  - Set up relationships and indexes for efficient querying.
  - Implement data validation rules.
  - Design content moderation tables for flagged items and admin actions.

### 3.2 Phase 2: Backend Development

- **Objective**: Develop the server-side logic to handle application functionalities.
- **Tasks**:
  - Create APIs for CRUD operations on Events, Questions, Comments, and Analytics.
  - Implement real-time data synchronization using Convex.dev's capabilities.
  - Develop business logic for features like upvoting, question management, and analytics aggregation.
  - Build admin-only functions for event creation and content management.
  - Implement content moderation system with automatic flagging and admin review workflows.

### 3.3 Phase 3: Frontend Development

- **Objective**: Build the user interface for hosts and participants.
- **Tasks**:
  - Design and implement responsive UI components for each feature.
  - Integrate frontend with backend APIs.
  - Ensure real-time updates are reflected in the UI.
  - Build admin dashboard for event creation and content management.
  - Implement content moderation interface for admins to review flagged content.
  - Create public homepage showing upcoming events.
  - Build question submission and upvoting interface (no auth required).
  - Implement two-panel layout with questions on left, event details on right.
  - Add QR code generation for each event page.
  - Ensure mobile-responsive design.

### 3.4 Phase 4: Testing and Quality Assurance

- **Objective**: Ensure the application is robust, secure, and user-friendly.
- **Tasks**:
  - Conduct unit and integration testing for backend and frontend components.
  - Perform user acceptance testing with sample events.
  - Optimize performance and address any identified issues.
  - Test mobile responsiveness across different devices.

### 3.5 Phase 5: Deployment and Monitoring

- **Objective**: Launch the application and monitor its performance.
- **Tasks**:
  - Deploy the application to a cloud environment.
  - Set up monitoring tools to track usage and performance metrics.
  - Establish a feedback loop for continuous improvement.

## 4. Technical Considerations

- **Real-Time Data Handling**: Leverage Convex.dev's real-time capabilities to ensure immediate data synchronization across clients.
- **Scalability**: Design the system to handle varying loads, especially during large events.
- **Security**: Implement data protection measures, even without authentication, to safeguard participant information.
- **Admin Role Protection**: Implement admin-only operations for event creation and content management.
- **Content Moderation**: Build automated flagging system with admin review workflows for inappropriate content.
- **Public Access**: Ensure questions and upvotes work without authentication while maintaining security.
- **Mobile Optimization**: Ensure all components are responsive and work well on mobile devices.
- **Type Safety**: Maintain strict TypeScript usage with Convex for all database operations.

## 5. Future Enhancements

- **Authentication Integration**: Add Clerk authentication for user comments and admin access.
- **Advanced Role Management**: Expand admin roles to include moderators, content reviewers, and event managers.
- **Branding and Customization**: Allow hosts to customize the interface to align with their branding.
- **Integrations**: Develop integrations with platforms like PowerPoint, Google Slides, and Microsoft Teams.
- **Support Features**: Implement help centers, tutorials, and customer support channels.
- **AI-Powered Moderation**: Integrate AI content analysis for automatic spam detection and content filtering.
- **Audit Logging**: Comprehensive logging of all admin actions for compliance and security purposes.

## 6. Core User Workflow

### 6.1 Public Users (No Login Required)

- View upcoming AMA events on homepage
- Submit questions to any active event
- Upvote questions from other users
- View all questions and upvote counts
- Read admin comments on questions
- Access events via QR code on mobile

### 6.2 Authenticated Users

- All public user capabilities
- Leave comments on questions
- View their comment history
- Edit/delete their own comments

### 6.3 Admin Users

- Create new AMA events with title and description
- Leave comments on any question (no login required)
- Moderate content (hide/remove inappropriate questions)
- Manage event settings and visibility
- View analytics and engagement metrics
- Access admin dashboard at `/admin` URL (not linked in header)

## 7. Implementation Priority

1. **Phase 1**: Build core AMA event system (events, questions, upvotes)
2. **Phase 2**: Add commenting system and admin functionality
3. **Phase 3**: Implement content moderation and admin dashboard
4. **Phase 4**: Add authentication for user comments
5. **Phase 5**: Build additional features (polls, quizzes, surveys)

## 8. Design Constraints

- **No Emojis**: Never use emojis in the application interface
- **Icons Only**: Use only Radix UI icons for all visual elements
- **Color Scheme**: Strict black and white design with minimal grays
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: Two-panel design with clear separation of concerns
- **Mobile First**: Design must work seamlessly on mobile devices

By following this PRD, we aim to create a robust and interactive platform that enhances audience engagement during events and meetings while providing comprehensive content moderation capabilities for administrators.

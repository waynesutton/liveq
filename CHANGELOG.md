# Changelog

All notable changes to the Slidvex project will be documented in this file.

## [0.9.0] - 2024-12-19

### Added

- **Complete Admin Overhaul**: All admin features now work without requiring admin name input
- **Event Moderation Page**: New `/admin/event/[event-name]` page for comprehensive question management
  - Mark questions as answered with custom answer text
  - Hide/show questions to control public visibility
  - Delete questions permanently
  - View question details with upvote counts and author information
- **Question Sorting System**: Users can now sort questions by:
  - Most Voted (default)
  - Most Recent
  - Answered (shows only answered questions)
- **Collapsible QR Code**: QR code is now hidden by default with a toggle button for cleaner UI
- **Dynamic Homepage Layout**:
  - Single event: Centered, wider card for better focus
  - Multiple events: Grid layout supporting up to 3 events per row
- **Admin Navigation**: Tab-based navigation between "Event Management" and "Create New Event"

### Changed

- **Backend Functions**: Made `adminName` parameter optional across all admin mutations
- **Event Status Display**: Custom close messages are now properly displayed when events are closed
- **Admin Workflow**: Streamlined admin actions without requiring name input for each operation
- **Event Management**: Simplified event closing process using predefined close messages

### Fixed

- **TypeScript Errors**: Resolved all build errors and type mismatches
- **Mutation Arguments**: Corrected parameter names and types for question moderation functions
- **Return Types**: Fixed validator return types to use `undefined` instead of `null`

### Technical

- **New Route**: Added `/admin/event/:eventTitle` route for event moderation
- **State Management**: Added sorting and QR visibility state to event page
- **CSS Enhancements**: New styles for admin navigation, sorting controls, and responsive layouts
- **Code Cleanup**: Removed unused imports and variables

## [0.8.1] - 2024-12-19

### Removed

- **Answer Question Button**: Removed from public event page as this feature belongs in admin dashboard
- **Question Answering UI**: Simplified question display to show only question content, author name, and upvote
- **Unused CSS Classes**: Cleaned up answer button and answered status styles

### Changed

- **Question Display**: Questions now show only essential information (content, author, upvote) without admin controls
- **Admin Functionality**: Moved question answering to future admin dashboard features
- **Public Interface**: Cleaner, simpler question display focused on content consumption

### Added

- **Future Admin Features Section**: Added placeholder section in admin panel for upcoming question management
- **Coming Soon Indicators**: Visual indicators for features that will be enabled with Clerk authentication
- **Admin Question Management Preview**: Outlined future capabilities for question moderation and content control

### Technical

- **Code Cleanup**: Removed unused functions and state variables related to question answering
- **Admin Panel Preparation**: Structured admin interface for future authentication-based features
- **CSS Optimization**: Removed unused styles and added new admin section styling

### Future Features (When Clerk Auth is Added)

- **Question Moderation**: Mark questions as answered, hide inappropriate content, delete spam
- **Admin Responses**: Add official responses to questions
- **Content Control**: Bulk operations, filtering rules, user moderation tools
- **Analytics Dashboard**: Question performance and engagement metrics

## [0.8.0] - 2024-12-19

### Added

- **Event Name URL Slugs**: Events now use their titles as URL slugs instead of IDs (e.g., `/event/my-event-title`)
- **Event Archiving System**: Admins can archive/unarchive events to control homepage visibility
- **Event Status Management**: Simplified close event flow without prompting for custom messages
- **Archive Button**: New archive/unarchive button in admin panel for each event
- **getEventByTitle Query**: New Convex function to fetch events by their title

### Changed

- **Homepage Display**: Shows both active and inactive events (closed events still visible for reading)
- **Archive Functionality**: Archived events are hidden from homepage but remain accessible via direct URL
- **Close Event Flow**: Removed custom message prompt, uses existing closedMessage from event creation
- **Event Management**: Enhanced admin panel with archive controls alongside existing status toggles
- **URL Structure**: Event URLs now use readable event names instead of cryptic IDs

### Removed

- **Event Card Shadows**: Removed box shadows from homepage event cards for cleaner Colf aesthetic
- **Close Message Prompt**: No longer prompts for custom message when closing events

### Technical

- **New Schema Field**: Added `archived` boolean field to events table
- **URL Routing**: Updated React Router to handle event name-based URLs
- **Query Updates**: Modified queries to filter out archived events from homepage
- **Index Updates**: Updated database index from `by_active` to `by_name` for title-based queries
- **Type Safety**: Proper handling of undefined event IDs in EventPage queries

### Styling

- **Colf Aesthetic**: Removed shadows and refined event card styling
- **Clean Design**: Simplified event card hover states for minimal appearance

## [0.7.5] - 2024-12-19

### Added

- **Event Status Management**: Admins can now close/activate events from the admin dashboard
- **Custom Close Messages**: When closing events, admins can set custom messages for users
- **Read-Only Mode**: Closed events allow users to read questions and admin comments but prevent new questions
- **Status Toggle Button**: New button in admin panel to easily switch between active/inactive status
- **Event Status Indicators**: Visual indicators show whether events are active or inactive

### Changed

- **Event Management UI**: Enhanced with status toggle functionality alongside delete options
- **Event Display**: Status indicators now clearly show active vs inactive events
- **User Experience**: Closed events show custom messages while preserving existing content
- **Admin Control**: Granular control over event lifecycle with custom messaging

### Technical

- **New Mutation**: `toggleEventStatus` function to manage event active/inactive states
- **Enhanced Schema**: Event `closedMessage` field properly utilized for custom close messages
- **Status Logic**: Proper handling of event status changes with admin action logging
- **UI Integration**: Seamless integration of status management in existing admin interface

## [0.7.4] - 2024-12-19

### Added

- **Event Deletion**: Admins can now delete events from the admin dashboard
- **Event Management UI**: New section in admin panel to view and manage all events
- **Cascading Deletion**: Deleting an event automatically removes all associated questions and comments
- **Admin Action Logging**: All event deletions are logged with admin name and timestamp
- **Confirmation Dialog**: Safety confirmation before deleting events to prevent accidental deletions

### Changed

- **Admin Dashboard**: Enhanced with comprehensive event management capabilities
- **Event List Display**: Shows all events with status indicators (Active/Inactive)
- **Delete Button**: Red danger button that's disabled until admin name is entered
- **Event Metadata**: Displays event status, date, and admin name for better visibility

### Technical

- **New Mutation**: `deleteEvent` function with proper cleanup of related data
- **New Query**: `listAllEvents` for admin event management (currently using `listActiveEvents`)
- **Cascade Delete**: Proper cleanup of questions and comments when events are deleted
- **Admin Validation**: Requires admin name for all deletion actions

## [0.7.3] - 2024-12-19

### Fixed

- **Event Loading Errors**: Fixed "Event not found" errors in `isEventOpen` query by ensuring proper loading states
- **Query Dependencies**: Added `eventStatus` to loading conditions to prevent premature query execution
- **Answer Question Button**: Fixed conditional rendering to properly show "Answered" status instead of button when question is marked as answered
- **Boolean Field Handling**: Improved handling of `question.answered` field to properly distinguish between `true`, `false`, and `undefined` values

### Changed

- **Answer Question Display**: Updated to show "Answered" status instead of button when question is marked as answered
- **Visual Feedback**: Added green "Answered" badge that appears after admin marks question as answered
- **User Experience**: Clearer indication of question status without redundant UI elements
- **Debug Logging**: Added console logging to help troubleshoot question state changes

## [0.7.2] - 2024-12-19

### Changed

- **Upvote Button Layout**: Moved upvote button to be positioned on the left side next to the question text (Reddit-style)
- **Question Display**: Improved visual hierarchy with upvote button on the left for better user experience
- **Layout Consistency**: Aligned with Reddit's familiar voting interface pattern

## [0.7.1] - 2024-12-19

### Fixed

- **Schema Validation Errors**: Fixed missing fields in `listActiveEvents` and `getEvent` function return types
- **Database Compatibility**: Added missing fields (`adminName`, `openDate`, `closeDate`, `closedMessage`) to event queries
- **Event Creation**: Resolved validation errors when creating new events with scheduling options
- **Admin Name Field**: Made `adminName` field optional in events table and all related functions
- **Type Safety**: Fixed TypeScript compilation errors related to optional admin name handling

### Changed

- **Success Modal**: Replaced browser alert with custom modal that matches the site's design
- **Modal Styling**: Added professional modal overlay with consistent typography and spacing
- **User Experience**: Better feedback when events are created successfully
- **Form Validation**: Admin name is now optional when creating events

### Technical Improvements

- **Type Safety**: All Convex functions now have complete and accurate return type validators
- **Error Handling**: Improved error handling for event creation and validation
- **UI Components**: Added reusable modal component with proper event handling
- **Schema Flexibility**: Events can now be created without requiring an admin name

## [0.7.0] - 2024-12-19

### Added

- **Event Scheduling**: Admins can now set open and close dates for events
- **Closed Event Messages**: Custom messages with link support when events are closed
- **Question Answering System**: Admins can mark questions as answered with detailed responses
- **Answer Button**: Emerald-colored button for admins to answer questions
- **Event Status Display**: Shows when events are open/closed with custom messages

### Changed

- **Question Spacing**: Reduced spacing between questions for more compact display
- **Thin Grey Lines**: Added subtle separators between questions and admin comments
- **Event Details**: Made event details more compact like Reddit community pages
- **Admin Names**: Made question authors and admin names bold for better readability
- **Admin Comments**: Added light grey background and proper spacing for admin comments

### Updated

- **Database Schema**: Added openDate, closeDate, closedMessage, and answered fields
- **Admin Form**: Enhanced event creation with scheduling options
- **Question Display**: Added answered status and answer content display
- **Event Status Logic**: Automatic checking of event open/close dates

### Technical Improvements

- **Convex Functions**: Added markQuestionAnswered and isEventOpen functions
- **Type Safety**: Updated schema and function return types for new fields
- **UI Components**: Enhanced question items with answered display and answer buttons
- **Form Validation**: Better handling of optional date and message fields

## [0.6.0] - 2024-12-19

### Changed

- **App Spacing**: Reduced padding throughout the app for a more flush, edge-to-edge design
- **Event Details**: Made event details more compact (2 lines) to prioritize the Ask a Question section
- **Question Styling**: Made question authors and admin names bold for better readability
- **Admin Comments**: Added light grey background and proper spacing between admin comments and questions
- **Layout Proximity**: Moved main content area closer to the header for better visual flow

### Added

- **Footer**: Added a simple footer with link to convex.dev on both homepage and event pages
- **Full Height Scrolling**: Questions section now extends to the bottom of the page with proper scrolling

### Updated

- **Event Info Sizing**: Reduced event title, description, and date to compact 2-line format
- **Question Container**: Questions list now uses full viewport height with proper overflow handling
- **Visual Hierarchy**: Better spacing and typography for improved readability

### Technical Improvements

- **Responsive Layout**: Better use of available screen space
- **Scroll Behavior**: Improved scrolling experience for questions list
- **CSS Organization**: Cleaner, more maintainable styling structure

## [0.5.0] - 2024-12-19

### Changed

- **Design Cleanup**: Removed all grey boxes, borders, and visual containers for a cleaner minimalist look
- **Header Simplification**: Removed border from header for cleaner appearance
- **Question Display**: Simplified question items by removing borders and backgrounds
- **Upvote Button**: Removed border from upvote buttons for cleaner appearance

### Removed

- **Most Voted Section**: Eliminated separate "Most Voted" and "Other Questions" sections
- **Visual Dividers**: Removed borders between sections and containers
- **Background Containers**: Eliminated grey backgrounds from various UI elements

### Updated

- **Question Sorting**: Questions now display in a single scrollable list sorted by upvotes (highest first)
- **Admin Comment Visibility**: Admin comment sections only appear after an admin has added a comment
- **Event Details**: Simplified event details section without borders or backgrounds
- **Question Form**: Cleaned up question form section styling

### Technical Improvements

- **Cleaner CSS**: Reduced visual clutter and improved readability
- **Conditional Rendering**: Admin comment forms only show when comments exist
- **Simplified Layout**: Single question list with natural upvote-based ordering

## [0.4.0] - 2024-12-19

### Added

- **Most Voted Questions Section**: Questions with upvotes now appear in a dedicated "Most Voted" section at the top
- **Question Sorting**: Questions are automatically sorted by upvote count (highest first)
- **Visual Hierarchy**: Most voted questions have distinct styling with left border and background highlighting
- **Section Organization**: Clear separation between most voted questions and other questions

### Changed

- **Font Family**: Updated to use monospace fonts (ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono)
- **Font Size**: Set body font size to 16px with antialiasing for better readability
- **Question Display**: Questions now grouped into logical sections based on engagement

### Updated

- **Event Page Layout**: Questions now organized into "Most Voted" and "Other Questions" sections
- **CSS Styling**: Added distinct visual styles for most voted questions
- **Component Logic**: Enhanced question sorting and grouping functionality

### Technical Improvements

- **Performance**: Efficient question sorting and filtering
- **User Experience**: Better visual hierarchy and question organization
- **Code Quality**: Cleaner component structure with logical question grouping

## [0.3.0] - 2024-12-19

### Changed

- **Event Page Layout Restructure**: Moved "Ask a Question" form below Event Details in the right panel
- **Event Details Simplification**: Removed analytics stats (questions, upvotes, comments count) from Event Details
- **Event Details Content**: Now only displays event title, description, and date
- **Comment System Update**: Removed user comment functionality completely
- **Admin-Only Comments**: Only admins can add comments to questions
- **Question Display**: Questions now show only upvotes (no downvotes) with clean interface

### Removed

- **User Comments**: Users can no longer add comments to questions
- **Event Analytics Display**: Removed question count, upvote count, and comment count from event details
- **User Comment Forms**: All user-facing comment input fields removed

### Updated

- **Event Page Structure**: Right panel now shows Event Details → Ask a Question → QR Code
- **Admin Comment Interface**: Simplified admin comment form with name and comment fields
- **CSS Layout**: Updated styles to support new right panel layout structure
- **Component Logic**: Simplified comment handling to only support admin comments

### Technical Improvements

- **Code Cleanup**: Removed unused analytics queries and user comment handlers
- **Type Safety**: Maintained strict TypeScript usage throughout changes
- **Performance**: Reduced unnecessary data fetching for analytics
- **User Experience**: Cleaner interface focused on core functionality

## [0.2.0] - 2024-12-19

### Added

- **Design System Overhaul**: Complete redesign following colf.dev aesthetic with strict black and white theme
- **Two-Panel Layout**: Event page now uses left panel for questions and right panel for event details
- **QR Code Generation**: Each event page displays a QR code for mobile access using qrcode library
- **Radix UI Icons**: Replaced all icons with Radix UI icon system (no emojis allowed)
- **Modal Design System**: Comprehensive modal styling guidelines in theme.md
- **Mobile Optimization**: Responsive design that works seamlessly on mobile devices
- **Icon Guidelines**: Strict icon usage rules and implementation examples

### Changed

- **Event Page Layout**: Completely refactored to match wireframe mockup
  - Questions displayed on left with scrollable list
  - Event info moved above question submission form on left
  - Event details and stats moved to right panel
  - QR code positioned in bottom right of right panel
- **Question Display**: Updated to show only upvotes (no downvotes) with Reddit-style interface
- **Header Navigation**: Removed Admin link from header (admin still accessible at /admin URL)
- **CSS Architecture**: Restructured CSS with new two-panel grid layout and improved responsive design
- **Theme Documentation**: Enhanced theme.md with modal guidelines, icon requirements, and colf.dev inspiration

### Updated

- **slidvex.md**: Added design constraints, QR code requirements, and updated feature specifications
- **theme.md**: Comprehensive design system with modal guidelines, icon requirements, and responsive design
- **files.md**: Complete codebase documentation and file structure overview
- **CSS Variables**: Added new color variables for hover states, success, and error colors
- **Component Styling**: Updated all components to follow new design system

### Technical Improvements

- **Dependencies**: Added qrcode and @radix-ui/react-icons packages
- **Type Safety**: Maintained strict TypeScript usage throughout all new components
- **Convex Integration**: All new features properly integrated with existing Convex backend
- **Performance**: Optimized CSS with proper grid layouts and responsive breakpoints

### Design Principles

- **No Emojis**: Strict policy against emoji usage in application interface
- **Icon Consistency**: Only Radix UI icons permitted for visual consistency
- **Color Scheme**: Strict black and white design with minimal grays
- **Typography**: Clean, readable fonts with proper hierarchy
- **Mobile First**: Design optimized for mobile devices with responsive fallbacks

## [0.1.0] - 2024-12-19

### Added

- **Core AMA Event System**: Complete backend and frontend for Ask Me Anything events
- **Database Schema**: Convex schema with tables for events, questions, comments, users, admin actions, and flagged content
- **Real-time Functions**: Convex queries and mutations for all CRUD operations
- **React Frontend**: Modern React 19 application with TypeScript and Vite
- **Routing System**: React Router DOM for navigation between pages
- **Admin Dashboard**: Admin page for creating and managing events
- **Question System**: Anonymous question submission and upvoting without authentication
- **Comment System**: Admin and user commenting capabilities
- **Content Moderation**: Basic admin tools for hiding/removing questions
- **Analytics**: Event statistics and engagement metrics
- **Responsive Design**: Mobile-friendly CSS with clean, minimalist aesthetic

### Technical Foundation

- **Convex Backend**: Real-time database with TypeScript integration
- **Type Safety**: Strict TypeScript usage throughout the application
- **Build System**: Vite configuration for fast development and optimized builds
- **State Management**: Convex real-time state synchronization
- **Error Handling**: Comprehensive error handling for all user interactions
- **Performance**: Optimized queries and efficient data loading

### Project Structure

- **Component Architecture**: Modular React components with clear separation of concerns
- **File Organization**: Logical file structure following React and Convex best practices
- **Documentation**: Comprehensive README, PRD, and development guides
- **Development Workflow**: Clear setup instructions and development scripts

### Next Steps Identified

- Authentication system integration (Clerk)
- Advanced content moderation features
- Additional engagement tools (polls, quizzes, surveys)
- Enhanced admin dashboard capabilities
- Mobile application development

---

The foundation is solid for adding authentication, advanced moderation features, and additional engagement tools in future releases.

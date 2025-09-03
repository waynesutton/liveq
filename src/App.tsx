import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import AdminPage from "./pages/AdminPage";
import AdminEventPage from "./pages/AdminEventPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event/:eventId" element={<EventPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route
              path="/admin/event/:eventTitle"
              element={<AdminEventPage />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

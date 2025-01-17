import { createBrowserRouter } from "react-router-dom";
import EventDetailPage from "./pages/EventDetail";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/events/:eventId", element: <EventDetailPage /> },
  { path: "events/new", element: <NewEventPage /> },
]);

function App() {
  return <div></div>;
}

export default App;

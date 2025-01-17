import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEventPage from "./pages/EditEvent";
import EventDetailPage from "./pages/EventDetail";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/events/:eventId", element: <EventDetailPage /> },
  { path: "/events/new", element: <NewEventPage /> },
  { path: "/events/:eventId/edit", element: <EditEventPage /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

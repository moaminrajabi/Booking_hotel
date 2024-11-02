import Map from "../Map/Map";
import { Outlet } from "react-router-dom";
import { useBookmark } from "../../context/BookmarkListContext";

function BookMarkLayout() {
  const { bookmarks } = useBookmark();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerLocations={bookmarks} />
    </div>
  );
}

export default BookMarkLayout;

import { useParams } from "react-router-dom";
import Loader from "../Laader/Loader";
import { useHotel } from "../../context/HotelProvider";
import { useEffect } from "react";

function SingleHotel() {
  const { id } = useParams();
  const { getHotel, isLoadingCurrentHotle, currentHotle } = useHotel();

  useEffect(() => {
    getHotel(id);
  }, [id]);

  if (isLoadingCurrentHotle || !currentHotle) return <Loader />;

  return (
    <div className="room">
      <div className="roomDetail">
        <h2> {currentHotle.name} </h2>
        <div>
          {currentHotle.number_of_reviews} reviews &bull;{" "}
          {currentHotle.smart_location}
        </div>
        <img
          style={{ width: "680px" }}
          src={currentHotle.xl_picture_url}
          alt={currentHotle.name}
        />
      </div>
    </div>
  );
}

export default SingleHotel;

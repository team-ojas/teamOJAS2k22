import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.scss";

export default function EventCard({ event }) {
  if (!event) return null;
  return (
    <Link to={`/events/${event.slug}`}>
      <div className="event-card flex flex-col  border-2 rounded-md border-white border-opacity-20">
        <img src={event.imageSrc} className="h-40 w-53 " />
        <div className="title text-xl text-center mb-2">{event.title}</div>
        {/* <div className="description text-gray-200 text-center">{event.description}</div> */}
      </div>
    </Link>
  );
}
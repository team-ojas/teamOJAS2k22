import React from "react";
import "./Events.scss";
import { events } from "../../data/events";
import { EventCard } from "../../components";

export default function Events() {
  return (
    <div className="events flex- flex-col py-3 px-12 md:px-0 m-auto">
        
      <h1 className="text-4xl mt-3 mb-12 text-white text-center underline decoration-2 underline-offset-4 ">Our Events</h1>

      <div className="eve flex flex-wrap m-auto gap-12 ">
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </div>
  );
}
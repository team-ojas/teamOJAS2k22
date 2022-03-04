import React from "react";
import "./Events.scss";
import { events } from "../../data/events";
import { EventCard } from "../../components";

export default function Events() {
  return (
    <div className="events flex- flex-col py-3 px-12 md:px-0 m-auto">

      <div className="flex flex-wrap m-auto gap-12 ">
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </div>
  );
}
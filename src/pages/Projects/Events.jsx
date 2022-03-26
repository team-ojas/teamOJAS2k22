import React from "react";
import "./Events.scss";
import { events } from "../../data/events";
import { EventCard } from "../../components";

export default function Events() {
  return (
    <div className="events flex- flex-col p-24 md:p-36 m-auto">

      <div className="flex flex-wrap m-auto gap-12 ">
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </div>
  );
}
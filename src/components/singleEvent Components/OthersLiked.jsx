import React from "react";
import SectionHeading from "../SectionHeading";
import { events } from "../../data/data";
import EventCard from "../EventCard";

const OthersLiked = ({ similarEvents }) => {
  return (
    <div className="container">
      <SectionHeading heading="Other Events You Might Like" />
      <div
        className=" d-flex  align-items-center gap-4 event-container  my-3"
        style={{ overflowX: "scroll" }}
      >
        {similarEvents.map((event) => {
          return <EventCard key={event._id} {...event} />;
        })}
      </div>
    </div>
  );
};

export default OthersLiked;

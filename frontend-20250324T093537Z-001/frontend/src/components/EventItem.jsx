//EventItem Component
import React from "react";

const EventItem = ({event}) => {
    return(
        <div>
           <h3>{event.name}</h3>
           <p><strong>Date:</strong>{new Date(event.date).toLocaleDateString()}</p>
           <p><strong>Location:</strong>{event.location}</p>
        </div>
    );
};

export default EventItem;
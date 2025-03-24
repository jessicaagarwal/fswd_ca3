import React, { useEffect, useState } from "react";
import EventItem from "./EventItem";

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch("http://localhost:5000/events");
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    return (
        <div>
            <h2>Event List</h2>
            {events.length > 0 ? (
                events.map((event) => <EventItem key={event._id} event={event} />)
            ) : (
                <p>No events available.</p>
            )}
        </div>
    );
};

export default EventList;

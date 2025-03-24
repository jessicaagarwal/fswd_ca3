// src/components/EventList.jsx
import React, { useEffect, useState } from "react";
import EventItem from "./EventItem";
import EventForm from "./EventForm";

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/events")
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((err) => console.error("Error fetching events:", err));
    }, []);

    const addEvent = (newEvent) => {
        fetch("http://localhost:5000/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEvent),
        })
        .then((res) => res.json())
        .then((data) => setEvents([...events, data]))
        .catch((err) => console.error("Error adding event:", err));
    };

    return (
        <div>
            <EventForm addEvent={addEvent} />
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

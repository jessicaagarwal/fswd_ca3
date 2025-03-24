import React, { useState } from "react";

const EventForm = () => {
    const [event, setEvent] = useState({
        name: "",
        date: "",
        location: "",
    });

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(event),
            });

            if (!response.ok) throw new Error("Failed to add event");

            alert("Event added successfully!");
            setEvent({ name: "", date: "", location: "" });
        } catch (error) {
            console.error("Error adding event:", error);
        }
    };

    return (
        <div>
            <h2>Add New Event</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Event Name" value={event.name} onChange={handleChange} required />
                <input type="date" name="date" value={event.date} onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" value={event.location} onChange={handleChange} required />
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default EventForm;

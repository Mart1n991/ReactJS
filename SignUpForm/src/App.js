import React, { useState } from "react";
import Attendee from "./components/Attendee";
import SignUpForm from "./components/SignUpForm";

export default function App() {
  const [attendees, setAttendees] = useState([]);

  const signUpNewAttendee = (attendee) => {
    setAttendees([...attendees, attendee]);
  };

  const deleteAttendee = (attendee) => {
    setAttendees(attendees.filter((element) => element.id !== attendee.id));
  };

  console.log("attendees", attendees);

  return (
    <div className="app-container">
      <h1>Sign Up Form</h1>
      <SignUpForm signUpNewAttendee={signUpNewAttendee} />
      {attendees.length === 0 ? (
        <div className="empty-list">Zatiaľ tu nikto nie je </div>
      ) : (
        <Attendee attendees={attendees} deleteAttendee={deleteAttendee} />
      )}
    </div>
  );
}

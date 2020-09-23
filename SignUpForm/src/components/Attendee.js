import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function Attendee({ attendees, deleteAttendee }) {
  const trashAltIcon = <FontAwesomeIcon icon={faTrashAlt} />;

  return (
    <div className="attendees-container">
      {attendees.map((_attendee, index) => {
        return (
          <div key={index} className="attendee-container">
            <div onClick={() => deleteAttendee(_attendee)} className="icon">
              {trashAltIcon}
            </div>
            <div className="attendee-info">
              <h3>
                {_attendee.firstName} {_attendee.lastName} ({_attendee.age})
              </h3>
              <p>{_attendee.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

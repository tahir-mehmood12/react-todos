import React, { useState, useEffect } from "react";
import "../Styles/EditModalStyle.scss";
export default function EditTodoModal({ todo, onSave, onClose }) {
  const [updatedText, setUpdatedText] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    if (todo) {
      setUpdatedText(todo.text);
      setUpdatedDescription(todo.description);
    }
  }, [todo]);

  const handleSave = () => {
    onSave({
      ...todo,
      text: updatedText,
      description: updatedDescription,
    });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Todo</h2>
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
        <input
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        />
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

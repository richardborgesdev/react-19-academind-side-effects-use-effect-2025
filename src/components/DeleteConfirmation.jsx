import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const TIMER_DURATION = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log(">>> timeout set");

    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER_DURATION);

    return () => {
      console.log(">>> timeout cleared");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timerDuration={TIMER_DURATION} />
    </div>
  );
}

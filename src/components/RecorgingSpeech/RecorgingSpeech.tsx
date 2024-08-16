import React from "react";
import cn from "classnames";
import styles from "./RecordingSpeech.module.css";
import useRecording from "../../hooks/useRecording";

const RecorgingSpeech = () => {
  const { canRecord, resultRecord, recorder } = useRecording();

  const toggleMic = () => {
    if (!canRecord) return;
    recorder?.state === "recording" ? recorder?.stop() : recorder?.start();
  };

  return (
    <main>
      <button
        className={cn(
          styles.micToggle,
          recorder?.state === "recording" ? styles.isRecording : null
        )}
        onClick={toggleMic}
      >
        <span className="material-icons">mic</span>
      </button>
      <audio
        src={resultRecord || undefined}
        className="playback"
        controls
      ></audio>
    </main>
  );
};

export default RecorgingSpeech;

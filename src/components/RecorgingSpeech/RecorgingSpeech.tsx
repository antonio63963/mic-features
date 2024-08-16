import React, { useState } from "react";
import cn from "classnames";
import styles from "./RecordingSpeech.module.css";
import useRecording from "../../hooks/useRecording";

const RecorgingSpeech = () => {
  const [isRecording, setIsRecording] = useState(false);

  const { canRecord, resultRecord, recorder } = useRecording();

  console.log(canRecord)

  const toggleMic = () => {
    if (!canRecord) return;
    setIsRecording(!isRecording);
    isRecording ? recorder?.start() : recorder?.stop();
  };

  return (
    <main>
      <button
        className={cn(styles.micToggle, isRecording ? "isRecording" : null)}
        onClick={toggleMic}
      >
        <span className="material-icons">mic</span>
      </button>
      <audio src={resultRecord || undefined} className="playback" controls></audio>
    </main>
  );
};

export default RecorgingSpeech;

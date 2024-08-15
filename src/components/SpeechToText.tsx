import { FC } from "react";
import useSpeech from "../hooks/useSpeechToText";

const SpeechToText = () => {
  const {
    text,
    isListening,
    startListenting,
    stopListenting,
    hasRecognitionSupport,
  } = useSpeech();
  return (
    <div>
      {hasRecognitionSupport ? (
        <>
          <div>
            <button onClick={startListenting}>Start</button>
            {isListening ? (
              <div>Your bowser currently listenning...</div>
            ) : null}
          </div>
          {text}
          <button onClick={stopListenting}>Stop</button>
        </>
      ) : (
        <h1>Your browser doesn't support speech</h1>
      )}
    </div>
  );
};

export default SpeechToText;

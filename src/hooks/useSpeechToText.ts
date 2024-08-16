import { useEffect, useState } from "react";

let recognition: SpeechRecognition | null = null;

if("webkitSpeechRecognition" in window) {
  console.log('RECOGNITION!!!')
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = document.documentElement.lang || 'en';
};

const useSpeechToText = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListenting] = useState(false);

  useEffect(() => {
    if(!recognition) return;
    console.log('USE EFFECT', recognition)
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      console.log('ON RESULT: ', event);
      console.log(event.results[0][0].transcript)
      setText(event.results[0][0].transcript);
      recognition?.stop();
      setIsListenting(false);
    }
  }, []);

  const startListenting = () => {
    setText('');
    setIsListenting(true);
    recognition?.start();
  };

  const stopListenting = () => {
    setIsListenting(false);
    recognition?.stop();
  }
  return {
    text,
    isListening,
    startListenting,
    stopListenting,
    hasRecognitionSupport: !!recognition
  }
};

export default useSpeechToText;

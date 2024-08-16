import { useEffect, useRef, useState } from "react";

const useRecording = () => {
  const [rec, setRec] = useState<MediaRecorder | null>(null);
  const [canRecord, setCanRecord] = useState(false);
  const recordsArr = useRef<BlobPart[]>([]);
  const [resultRecord, setResultRecord] = useState<string | null>(null);

  function SetupStream(stream: MediaStream) {
    // let record: Blob[] = [];
    const recorder = new MediaRecorder(stream);
    recorder.onstart = () => {
      console.log("RECORDER STARTED!...")
    }
    
    console.log(recorder.stream.active);
    // recorder.onstart = () => {
      //   recordsArr.current = []
      // }
      recorder.ondataavailable = (e: BlobEvent) => {
      console.log("STREAM: ", recorder)
      console.log(e.data)
      recordsArr.current.push(e.data);
    };


    recorder.onstop = (e) => {
      const blob = new Blob(recordsArr.current, { type: "audio/ogg; codecs=opus" });
      console.log(recordsArr.current)
      recordsArr.current = [];
      const audioURL = window.URL.createObjectURL(blob);
      setResultRecord(audioURL);
    };
    setRec(recorder);
    setCanRecord(true);
  }

  useEffect(() => {
    if (navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
        })
        .then((data: any) => {
          SetupStream(data);
        })
        .catch((err) => console.error(err));
    }
  }, []);
  return {
    canRecord,
    resultRecord,
    recorder: rec,
  };
};

export default useRecording;

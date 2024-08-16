import { useEffect, useState } from "react";

const useRecording = () => {
  const [rec, setRec] = useState<MediaRecorder | null>(null);
  const [canRecord, setCanRecord] = useState(false);
  const [resultRecord, setResultRecord] = useState<string | null>(null);

  function SetupStream(stream: MediaStream) {
    let record: Blob[] = [];
    const recorder = new MediaRecorder(stream);
 
      recorder.ondataavailable = (e: BlobEvent) => {
        record.push(e.data);
      };
    recorder.onstop = (e) => {
      const blob = new Blob(record, {type: 'audio/ogg; codecs=opus'});
      record = [];
      const audioURL = window.URL.createObjectURL(blob);
      setResultRecord(audioURL);
    };
    setCanRecord(true);
    setRec(recorder);
  }

  useEffect(() => {
    if (navigator.mediaDevices) {
      console.log('DEVICES: ', navigator.mediaDevices)
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
        })
        .then((data: any) => {
          console.log('DATA: ', data)
          SetupStream(data);
        })
        .catch((err) => console.error(err));
    }
  }, []);
  return {
    canRecord,
    resultRecord,
    recorder: rec
  }
};

export default useRecording;

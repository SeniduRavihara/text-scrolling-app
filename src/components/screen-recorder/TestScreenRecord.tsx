import { useReactMediaRecorder } from "react-media-recorder";
import { Button } from "../ui/button";

const TestScreenRecord = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true });

  return (
    <div>
      <p>{status}</p>
      <div className="flex gap-5">
        <Button onClick={startRecording}>Start Recording</Button>
        <Button onClick={stopRecording}>Stop Recording</Button>
      </div>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};
export default TestScreenRecord;

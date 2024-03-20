// import ScreenRecording from "@/components/ScreenRecording";
// import TestScreenRecord from "@/components/TestScreenRecord";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full h-full">
      {/* <ScreenRecording
        screen={true}
        audio={false}
        video={false}
        downloadRecordingPath="Screen_Recording_Demo"
        downloadRecordingType="mp4"
        emailToSupport="senidumee16@gmail.com"
      ></ScreenRecording> */}
      {/* <TestScreenRecord /> */}
      <Outlet />
    </div>
  );
};
export default RootLayout;

// import ScreenRecording from "@/components/ScreenRecording";
// import TestScreenRecord from "@/components/TestScreenRecord";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [parentWidth, setParentWidth] = useState(0);

  console.log("parentWidth", parentWidth);
  

  useEffect(() => {
    const parentElement = document.querySelector(".parent") as HTMLElement;
    if (parentElement) {
      setParentWidth(parentElement.offsetWidth);
    }

    // Optionally: Update width when the window resizes
    const handleResize = () => {
      setParentWidth(parentElement.offsetWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-green-500">
      {/* <ScreenRecording
        screen={true}
        audio={false}
        video={false}
        downloadRecordingPath="Screen_Recording_Demo"
        downloadRecordingType="mp4"
        emailToSupport="senidumee16@gmail.com"
      ></ScreenRecording> */}
      {/* <TestScreenRecord /> */}
      <div className="parent w-[400px] h-full bg-blue-400 relative">
        <Outlet context={{ parentWidth }} />
      </div>
    </div>
  );
};
export default RootLayout;

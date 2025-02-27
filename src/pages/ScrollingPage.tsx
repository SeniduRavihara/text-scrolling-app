import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { useData } from "@/hooks/useData";
import { cn } from "@/lib/utils";
import { Preferences } from "@capacitor/preferences";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import ReactHtmlParser from "react-html-parser";
import { FaReadme } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { MdEditSquare } from "react-icons/md";

const ScrollingPage = ({ setDisplayTextEditor }: any) => {
  const { setStory, story, background } = useData();
  const divRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);
  const [videoDuration, setVideoDuration] = useState(8);
  const [color, setColor] = useState("rgba(255,255,255,1)");
  const [fontSize, setFontSize] = useState(15);
  const [fontColor, setFontColor] = useState("rgba(0,0,0,1)");
  const [isEditing, setIsEditing] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [showDrawerIcon, setShowDrawerIcon] = useState(false);

  const handlePrevClick = () => {
    setDisplayTextEditor(true);
  };

  const clearStory = () => {
    setStory("");
    Preferences.remove({ key: "story" });
  };

  const startScroll = () => {
    if (divRef.current) {
      const div = divRef.current;
      const scrollHeight = div.scrollHeight;
      const clientHeight = div.clientHeight;
      const maxScrollTop = scrollHeight - clientHeight;
      let scrollTop = div.scrollTop;
      let lastTimestamp = performance.now();
      const scrollSpeed = maxScrollTop / (videoDuration * 60 * 1000); // Convert video duration from minutes to milliseconds

      const scrollDown = (timestamp: number) => {
        const deltaTime = timestamp - lastTimestamp;
        const distance = scrollSpeed * deltaTime; // Distance to scroll based on time elapsed
        scrollTop += distance;
        if (scrollTop > maxScrollTop) {
          scrollTop = maxScrollTop;
        }
        div.scrollTop = scrollTop;
        if (scrollTop < maxScrollTop) {
          setAnimationFrameId(requestAnimationFrame(scrollDown));
        } else {
          setIsPlaying(false);
        }
        lastTimestamp = timestamp;
      };

      setAnimationFrameId(requestAnimationFrame(scrollDown));
    }
  };

  const stopScroll = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      setAnimationFrameId(null);
    }
    setIsPlaying(false);
  };

  const toggleScroll = () => {
    if (isPlaying) {
      stopScroll();
      setIsPlaying(false);
    } else {
      startScroll();
      setIsPlaying(true);
    }
    setIsOpenDrawer(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transform = (node: any, index: any) => {
    if (node.type === "tag" && node.name === "button") {
      return (
        <React.Fragment key={index}>{node.children[0].data}</React.Fragment>
      );
    }
  };

  return (
    <div className={cn("w-full h-screen")} style={{ backgroundColor: color }}>
      {/* <div
        ref={divRef}
        className="p-3 text-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontSize: `${fontSize}px`,
          color: `${fontColor}`,
          overflowY: "auto",
          height: "96%", // Adjust the height as needed
        }}
        dangerouslySetInnerHTML={{ __html: story }}
      /> */}

      <div
        ref={divRef}
        className="text-center hide-scrollbar p-5"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontSize: `${fontSize}px`,
          color: `${fontColor}`,
          overflowY: "auto",
          height: "96%", // Adjust the height as needed
        }}
      >
        {ReactHtmlParser(story, { transform })}
      </div>

      <div
        className="w-[400px] fixed bottom-1 h-10 flex items-center justify-center"
        onMouseEnter={() => setShowDrawerIcon(true)}
        onMouseLeave={() => setShowDrawerIcon(false)}
      >
        <Drawer open={isOpenDrawer} onOpenChange={setIsOpenDrawer}>
          <DrawerTrigger
            className={cn(
              "flex items-center justify-center bg-white",
              showDrawerIcon ? "visible" : "invisible"
            )}
          >
            <HiMiniAdjustmentsHorizontal className="text-gray-300 shadow-md w-10 h-10 p-2" />
          </DrawerTrigger>
          <DrawerContent className="p-8">
            <DrawerHeader>
              <DrawerTitle>Control Your Video</DrawerTitle>
              <DrawerDescription>You can customize video</DrawerDescription>
            </DrawerHeader>

            <Button onClick={() => setIsEditing(!isEditing)} className="m-5">
              {isEditing ? (
                <div className="flex items-center justify-center gap-3">
                  <MdEditSquare className="text-lg" />
                  <div>Edit Mode</div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  <FaReadme className="text-lg" />
                  <div>Read Mode</div>
                </div>
              )}
            </Button>

            <div className="flex justify-between px-10">
              <div>
                <Label htmlFor="duration">Video duration</Label>
                <NumberInput
                  id="duration"
                  defaultValue={15}
                  min={1}
                  max={20}
                  maxW={100}
                  onChange={(valueString) =>
                    setVideoDuration(parseInt(valueString))
                  }
                  value={videoDuration}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>

              <div>
                <Label>Font Size</Label>
                <NumberInput
                  defaultValue={15}
                  min={10}
                  max={20}
                  maxW={100}
                  onChange={(valueString) => setFontSize(parseInt(valueString))}
                  value={fontSize}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>
            </div>

            <div className="flex gap5 justify-between mt-5">
              <Dialog>
                <DialogTrigger className="flex gap-2 items-center justify-center">
                  <label className="text-sm">Background color</label>
                  <div
                    style={{ backgroundColor: color }}
                    className="rounded-full border w-5 h-5"
                  ></div>
                </DialogTrigger>
                <DialogContent className="flex items-center justify-center">
                  <ColorPicker value={color} onChange={setColor} />
                  {/* <SketchPicker /> */}
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger className="flex gap-2 items-center justify-center">
                  <label className="text-sm">Font color</label>
                  <div
                    style={{ backgroundColor: fontColor }}
                    className="rounded-full border w-5 h-5"
                  ></div>
                </DialogTrigger>
                <DialogContent className="flex items-center justify-center">
                  <ColorPicker value={fontColor} onChange={setFontColor} />
                  {/* <SketchPicker /> */}
                </DialogContent>
              </Dialog>
            </div>

            <div className="w-full flex items-center justify-between mt-5">
              <div className="flex w-full justify-between">
                <Button
                  onClick={handlePrevClick}
                  variant="outline"
                  className="bg-blue-500 text-primary-foreground"
                >
                  <GrPrevious />
                </Button>
                <Button onClick={toggleScroll} variant="outline">
                  {isPlaying ? "Pause" : "Play"}
                </Button>
                <Button onClick={clearStory} variant="outline">
                  Clear
                </Button>
              </div>
            </div>
            {/* <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default ScrollingPage;

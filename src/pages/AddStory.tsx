import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useData } from "@/hooks/useData";
import { useNavigate } from "react-router-dom";
import ColorPicker from "react-best-gradient-color-picker";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { FaReadme } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const AddStory: React.FC = () => {
  const navigate = useNavigate();
  const { setStory, story, background } = useData();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);
  const [videoDuration, setVideoDuration] = useState(15);
  const [color, setColor] = useState("rgba(255,255,255,1)");
  const [fontSize, setFontSize] = useState(15);
  const [fontColor, setFontColor] = useState("rgba(0,0,0,1)");
  const [isEditing, setIsEditing] = useState(false);

  const handlePrevClick = () => {
    navigate("/add-background");
  };

  const clearStory = () => {
    setStory("");
    localStorage.removeItem("story");
  };

  const startScroll = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const scrollHeight = textarea.scrollHeight;
      const clientHeight = textarea.clientHeight;
      const maxScrollTop = scrollHeight - clientHeight;
      let scrollTop = textarea.scrollTop;
      let lastTimestamp = performance.now();
      const scrollSpeed = maxScrollTop / (videoDuration * 60 * 1000); // Convert video duration from minutes to milliseconds

      const scrollDown = (timestamp: number) => {
        const deltaTime = timestamp - lastTimestamp;
        const distance = scrollSpeed * deltaTime; // Distance to scroll based on time elapsed
        scrollTop += distance;
        if (scrollTop > maxScrollTop) {
          scrollTop = maxScrollTop;
        }
        textarea.scrollTop = scrollTop;
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
    } else {
      startScroll();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={cn("w-screen h-screen p-5")}
      style={{ backgroundColor: color }}
    >
      {/* <Label htmlFor="message">Add Your Story</Label> */}
      {/* <Textarea
        ref={textareaRef}
        placeholder="Type your message here."
        className="focus-visible:ring-0 h-[80%] shadow-lg text-center"
        onChange={(e) => setStory(e.target.value)}
        value={story}
      /> */}

      <Textarea
        ref={textareaRef}
        placeholder="Type your message here."
        className="focus-visible:ring-0 h-[96%] shadow-lg text-center font-semibold"
        onChange={(e) => setStory(e.target.value)}
        value={story}
        readOnly={isEditing}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          /* Additional inline CSS styles if needed */
          resize: "none", // Disable textarea resizing
          outline: "none", // Remove default outline
          fontSize: `${fontSize}px`,
          color: `${fontColor}`,
        }}
      />

      <Drawer>
        <DrawerTrigger className="flex items-center left-0 justify-center absolute bottom-3 w-full">
          <HiMiniAdjustmentsHorizontal />
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
              <Button onClick={handlePrevClick} variant="outline">
                Prev
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
  );
};

export default AddStory;

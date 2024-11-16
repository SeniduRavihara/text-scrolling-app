// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { GrPrevious } from "react-icons/gr";
// import ColorPicker from "react-best-gradient-color-picker";
// import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
// import { FaReadme } from "react-icons/fa";
// import { MdEditSquare } from "react-icons/md";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import {
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
// } from "@chakra-ui/react";
// import {
//   Drawer,
//   DrawerContent,
//   DrawerDescription,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";

// const ControlDrawer = ({
//   isEditing,
//   setIsEditing,
//   setVideoDuration,
//   videoDuration,
//   displayTextEditor,
// }) => {
//   return (
//     <Drawer>
//       <DrawerTrigger className="flex items-center left-0 justify-center absolute bottom-3 w-full">
//         <HiMiniAdjustmentsHorizontal className="text-gray-300 shadow-md" />
//       </DrawerTrigger>
//       <DrawerContent className="p-8">
//         <DrawerHeader>
//           <DrawerTitle>Control Your Video</DrawerTitle>
//           <DrawerDescription>You can customize video</DrawerDescription>
//         </DrawerHeader>

//         <Button onClick={() => setIsEditing(!isEditing)} className="m-5">
//           {isEditing ? (
//             <div className="flex items-center justify-center gap-3">
//               <MdEditSquare className="text-lg" />
//               <div>Edit Mode</div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center gap-3">
//               <FaReadme className="text-lg" />
//               <div>Read Mode</div>
//             </div>
//           )}
//         </Button>

//         <div className="flex justify-between px-10">
//           <div>
//             <Label htmlFor="duration">Video duration</Label>
//             <NumberInput
//               id="duration"
//               defaultValue={15}
//               min={1}
//               max={20}
//               maxW={100}
//               onChange={(valueString) =>
//                 setVideoDuration(parseInt(valueString))
//               }
//               value={videoDuration}
//             >
//               <NumberInputField />
//               <NumberInputStepper>
//                 <NumberIncrementStepper />
//                 <NumberDecrementStepper />
//               </NumberInputStepper>
//             </NumberInput>
//           </div>

//           <div>
//             <Label>Font Size</Label>
//             <NumberInput
//               defaultValue={15}
//               min={10}
//               max={20}
//               maxW={100}
//               onChange={(valueString) => setFontSize(parseInt(valueString))}
//               value={fontSize}
//             >
//               <NumberInputField />
//               <NumberInputStepper>
//                 <NumberIncrementStepper />
//                 <NumberDecrementStepper />
//               </NumberInputStepper>
//             </NumberInput>
//           </div>
//         </div>

//         <div className="flex gap5 justify-between mt-5">
//           <Dialog>
//             <DialogTrigger className="flex gap-2 items-center justify-center">
//               <label className="text-sm">Background color</label>
//               <div
//                 style={{ backgroundColor: color }}
//                 className="rounded-full border w-5 h-5"
//               ></div>
//             </DialogTrigger>
//             <DialogContent className="flex items-center justify-center">
//               <ColorPicker value={color} onChange={setColor} />
//               {/* <SketchPicker /> */}
//             </DialogContent>
//           </Dialog>

//           <Dialog>
//             <DialogTrigger className="flex gap-2 items-center justify-center">
//               <label className="text-sm">Font color</label>
//               <div
//                 style={{ backgroundColor: fontColor }}
//                 className="rounded-full border w-5 h-5"
//               ></div>
//             </DialogTrigger>
//             <DialogContent className="flex items-center justify-center">
//               <ColorPicker value={fontColor} onChange={setFontColor} />
//               {/* <SketchPicker /> */}
//             </DialogContent>
//           </Dialog>
//         </div>

//         <div className="w-full flex items-center justify-between mt-5">
//           <div className="flex w-full justify-between">
//             <Button
//               onClick={handlePrevClick}
//               variant="outline"
//               className="bg-blue-500 text-primary-foreground"
//             >
//               <GrPrevious />
//             </Button>

//             {!displayTextEditor && <Button onClick={toggleScroll} variant="outline">
//               {isPlaying ? "Pause" : "Play"}
//             </Button>}

//             {displayTextEditor && (
//               <Button onClick={clearStory} variant="outline">
//                 Clear
//               </Button>
//             )}

//             <Button
//               onClick={handleNextClick}
//               variant="outline"
//               className="bg-blue-500 text-primary-foreground"
//             >
//               <GrNext />
//             </Button>
//           </div>
//         </div>
//       </DrawerContent>
//     </Drawer>
//   );
// };
// export default ControlDrawer;

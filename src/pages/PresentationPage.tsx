import TextEditor from "@/components/text-editor/TextEditor";
import { Button } from "@/components/ui/button";
import { useData } from "@/hooks/useData";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import ScrollingPage from "./ScrollingPage";
import { useNavigate } from "react-router-dom";

const PresentationPage = () => {
  const [displayTextEditor, setDisplayTextEditor] = useState(true);

  const { setStory } = useData();
  const navigate = useNavigate()

  const handlePrevClick = () => {
    setDisplayTextEditor(true);
    navigate("/");
  };
  const handleNextClick = () => {
    setDisplayTextEditor(false);
  };
  const clearStory = () => {
    setStory("");
    //   Preferences.remove({ key: "story" });
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className={`${displayTextEditor ? "" : "hidden"}`}>
        <TextEditor />
      </div>

      <div className={`${!displayTextEditor ? "" : "hidden"}`}>
        <ScrollingPage
          setDisplayTextEditor={setDisplayTextEditor}
        />
      </div>

      {displayTextEditor && (
        <div className="w-full fixed bottom-0 left-0 bg-gray-100 flex items-center justify-between mt-2">
          <div className="flex w-full justify-between">
            <Button
              onClick={handlePrevClick}
              variant="outline"
              className="bg-blue-500 text-primary-foreground"
            >
              <GrPrevious />
            </Button>

            {displayTextEditor && (
              <Button onClick={clearStory} variant="outline">
                Clear
              </Button>
            )}

            <Button
              onClick={handleNextClick}
              variant="outline"
              className="bg-blue-500 text-primary-foreground"
            >
              <GrNext />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default PresentationPage;

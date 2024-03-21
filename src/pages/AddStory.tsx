import TextEditor from "@/components/text-editor/TextEditor";
import { Button } from "@/components/ui/button";
import { useData } from "@/hooks/useData";
import { Preferences } from "@capacitor/preferences";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const AddStory: React.FC = () => {
  const navigate = useNavigate();
  const { setStory } = useData();

  const handlePrevClick = () => {
    navigate("/add-background");
  };
  const handleNextClick = () => {
    navigate("/scrolling");
  };
  const clearStory = () => {
    setStory("");
    Preferences.remove({ key: "story" });
  };

  return (
    <div className="p-5">
      <TextEditor />
      {/* <Editor placeholder="Tell your story..." /> */}
      {/* <ReactQuill
        theme="snow"
        value={story}
        onChange={setStory}
        style={{ height: "90vh" }}
        className="rounded-xl bg-slate-100 overflow-scroll"
      /> */}

      <div className="w-full flex items-center justify-between mt-2">
        <div className="flex w-full justify-between">
          <Button
            onClick={handlePrevClick}
            variant="outline"
            className="bg-blue-500 text-primary-foreground"
          >
            <GrPrevious />
          </Button>

          <Button onClick={clearStory} variant="outline">
            Clear
          </Button>
          <Button
            onClick={handleNextClick}
            variant="outline"
            className="bg-blue-500 text-primary-foreground"
          >
            <GrNext />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddStory;

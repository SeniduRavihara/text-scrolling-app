import { Button } from "@/components/ui/button";
import { useData } from "@/hooks/useData";
import { Label } from "@radix-ui/react-label";
import { useNavigate } from "react-router-dom";

const AddBackground = () => {
  const { setBackground, background } = useData();

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/add-story");
  };

  const handlePrevClick = () => {
    navigate("/add-story");
  };

  const clearbackground = () => {
    setBackground("");
    localStorage.removeItem("background");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      if (typeof e.target?.result === "string") {
        setBackground(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-screen h-screen p-5">
      <Label htmlFor="message">Add Your Background</Label>

      {/* <input type="file" accept="image/*" onChange={handleChange} /> */}

      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleChange}
        required
        className="hidden"
      />
      <label
        htmlFor="fileInput"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Choose File
      </label>

      <img src={background} />

      <div className="w-full flex items-center justify-between">
        <Button onClick={handlePrevClick} variant="outline" className="mt-5">
          Prev
        </Button>
        <Button onClick={clearbackground} variant="outline" className="mt-5">
          Clear
        </Button>
        <Button onClick={handleNextClick} variant="outline" className="mt-5">
          Next
        </Button>
      </div>
    </div>
  );
};
export default AddBackground;

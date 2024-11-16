import { Button } from "@/components/ui/button";
import { useData } from "@/hooks/useData";
import { Label } from "@radix-ui/react-label";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const AddBackground = () => {
  const { setBackground, background } = useData();

  const navigate = useNavigate();


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
    <div className="flex flex-col items-center justify-center gap-2 bg-slate-100">
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
        className="bg-blue-500 hover:bg-blue-600 text-center text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Choose File
      </label>

      <img src={background} className="my-10 w-[100px]" />

      <Button onClick={clearbackground} variant="outline">
        Clear
      </Button>
    </div>
  );
};
export default AddBackground;

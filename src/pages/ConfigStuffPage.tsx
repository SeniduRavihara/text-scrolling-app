import { useNavigate } from "react-router-dom";
import AddBackground from "./AddBackground";
import { Button } from "@/components/ui/button";
import { GrNext, GrPrevious } from "react-icons/gr";
// import AddStory from "./AddStory";
import Accordion from "react-bootstrap/Accordion";

const ConfigStuffPage = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/presentation");
  };

  const handlePrevClick = () => {
    navigate("/add-story");
  };

  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Add Background Image</Accordion.Header>
          <Accordion.Body>
            <AddBackground />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Add Background Music</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="w-full flex items-center justify-between mt-2">
        <div className="flex w-full justify-between">
          <Button
            onClick={handlePrevClick}
            variant="outline"
            className="bg-blue-500 text-primary-foreground"
          >
            <GrPrevious />
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
export default ConfigStuffPage;

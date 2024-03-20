import { createContext, useEffect, useState } from "react";

export const DataContext = createContext<{
  story: string;
  setStory: React.Dispatch<React.SetStateAction<string>>;
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
}>({
  story: "",
  background: "",
  speed: 1,
  setBackground: () => {},
  setSpeed: () => {},
  setStory: () => {},
});

const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [story, setStory] = useState("");
  const [background, setBackground] = useState("");
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const savedStory = localStorage.getItem("story");
    setStory(savedStory || "");

    const savedbackground = localStorage.getItem("background");
    setBackground(savedbackground || "");
  }, []);

  useEffect(() => {
    if (story) {
      localStorage.setItem("story", story);
    }
  }, [story]);

  useEffect(() => {
    if (background) {
      localStorage.setItem("background", background);
    }
  }, [background]);

  useEffect(() => {
    console.log(background);
  }, [background]);

  const value = {
    story,
    setStory,
    background,
    setBackground,
    speed,
    setSpeed,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default DataContextProvider;

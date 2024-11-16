import { createContext, useEffect, useState } from "react";
import { Preferences } from "@capacitor/preferences";

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
    console.log(story);
  }, [story]);

  useEffect(() => {
    const getLocalData = async () => {
      try {
        const { value: lastSavedStory } = await Preferences.get({
          key: "story",
        });
        const { value: lastSavedBackgroung } = await Preferences.get({
          key: "background",
        });
        console.log(lastSavedStory);
        
        setBackground(lastSavedBackgroung || "");
        setStory(lastSavedStory || "");
      } catch (error) {
        console.log(error);
      }
    };

    getLocalData();
  }, []);

  useEffect(() => {
    const saveDataLocally = async () => {
      await Preferences.set({
        key: "story",
        value: story,
      });
    };
    if (story) {
      saveDataLocally();
    }
  }, [story]);

  useEffect(() => {
    const saveDataLocally = async () => {
      await Preferences.set({
        key: "background",
        value: background,
      });
    };
    if (background) {
      saveDataLocally();
    }
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

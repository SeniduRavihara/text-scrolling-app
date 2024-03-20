import { useData } from "@/hooks/useData";

const ScrollingPage = () => {
  const { background, story } = useData();
  return (
    <div className="w-screen h-screen">
      <img src={background} className="object-cover w-screen h-screen" />

      <p className="absolute top-0 w-screen h-screen text-blue-950 font-semibold">
        {story}
      </p>
    </div>
  );
};
export default ScrollingPage;

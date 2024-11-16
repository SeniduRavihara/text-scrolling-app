import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "@/layout/RootLayout";
import ConfigStuffPage from "@/pages/ConfigStuffPage";
import ScrollingPage from "@/pages/ScrollingPage";
import AddBackground from "@/pages/AddBackground";
import AddStory from "@/pages/AddStory";
import PresentationPage from "@/pages/PresentationPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<ConfigStuffPage />} />
      <Route path="/add-background" element={<AddBackground />} />
      <Route path="/add-story" element={<AddStory />} />
      <Route path="/scrolling" element={<ScrollingPage />} />
      <Route path="/presentation" element={<PresentationPage />} />
    </Route>
  )
)


function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router";
import { Portfolio } from "./Portfolio";
import { MICaseStudy } from "./MICaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/projects/mumbai-indians",
    Component: MICaseStudy,
  },
]);

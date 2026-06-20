import { createBrowserRouter } from "react-router";
import { Portfolio } from "./Portfolio";
import { MICaseStudy } from "./MICaseStudy";
import { JIODesignStudy } from "./JIODesignStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/projects/mumbai-indians",
    Component: MICaseStudy,
  },
  {
    path: "/projects/jio-design-system",
    Component: JIODesignStudy,
  },
]);

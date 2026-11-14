import { createBrowserRouter } from "react-router";
import { Home } from "./home/Home";
import { MumbaiIndians } from "./case/MumbaiIndians";
import { JioDesignSystem } from "./case/JioDesignSystem";
import { Presolv } from "./case/Presolv";
import { TataElxsi } from "./case/TataElxsi";
import { Fundrise } from "./case/Fundrise";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/projects/mumbai-indians", Component: MumbaiIndians },
  { path: "/projects/jio-design-system", Component: JioDesignSystem },
  { path: "/projects/presolv360", Component: Presolv },
  { path: "/projects/tata-elxsi-ai-healthcare", Component: TataElxsi },
  { path: "/ideas/fundrise", Component: Fundrise },
]);

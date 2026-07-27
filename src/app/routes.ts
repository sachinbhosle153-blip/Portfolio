import { createBrowserRouter } from "react-router";
import { Portfolio } from "./Portfolio";
import { MICaseStudy } from "./MICaseStudy";
import { JIODesignStudy } from "./JIODesignStudy";
import { PresolvCaseStudy } from "./PresolvCaseStudy";
import { TataElxsiCaseStudy } from "./TataElxsiCaseStudy";
import { FundriseCaseStudy } from "./FundriseCaseStudy";

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
  {
    path: "/projects/presolv360",
    Component: PresolvCaseStudy,
  },
  {
    path: "/projects/tata-elxsi-ai-healthcare",
    Component: TataElxsiCaseStudy,
  },
  {
    path: "/ideas/fundrise",
    Component: FundriseCaseStudy,
  },
]);

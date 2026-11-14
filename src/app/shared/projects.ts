import miImg from "../../assets/home/mi.webp";
import jioImg from "../../assets/home/jio.webp";
import presolvImg from "../../assets/home/presolv.webp";
import tataImg from "../../assets/home/tata.webp";
import fundriseImg from "../../assets/home/fundrise.webp";

export type Project = {
  to: string;
  label: string;
  year: string;
  img: string;
  alt: string;
  line: string;
  // Solid cover colour used for the project card and the case-study frame.
  bg: string;
};

export const PROJECTS: Project[] = [
  {
    to: "/projects/mumbai-indians",
    label: "Mumbai Indians — Intelligence Platform",
    year: "2023",
    img: miImg,
    alt: "Mumbai Indians player hub, welcome and GPS report screens",
    line: "45 to 500+ daily users: rebuilding a sports analytics tool coaches stopped opening",
    bg: "#1F2490",
  },
  {
    to: "/projects/jio-design-system",
    label: "JIO — Design System (SOI)",
    year: "2024",
    img: jioImg,
    alt: "JIO TV interface built on the SOI design system",
    line: "One system of components, tokens and docs, adopted by 20+ product teams",
    bg: "#4A2408",
  },
  {
    to: "/projects/presolv360",
    label: "Presolv360 — Dispute Resolution",
    year: "2025",
    img: presolvImg,
    alt: "Presolv360 dispute details screen",
    line: "A 5-step filing flow for people who have never been to mediation",
    bg: "#0F5A47",
  },
  {
    to: "/projects/tata-elxsi-ai-healthcare",
    label: "Tata Elxsi — AI for Healthcare",
    year: "2023",
    img: tataImg,
    alt: "Healthcare AI platform landing page",
    line: "Helping doctors trust AI with a hands-on medical-imaging sandbox",
    bg: "#2A313D",
  },
];

export const SIDE_PROJECT: Project = {
  to: "/ideas/fundrise",
  label: "Fundrise — Prop Trading Firm",
  year: "2025",
  img: fundriseImg,
  alt: "Fundrise landing page",
  line: "India's first prop trading firm: prove your edge, then trade the firm's capital",
  bg: "#0E3A24",
};

export const ALL_PROJECTS = [...PROJECTS, SIDE_PROJECT];

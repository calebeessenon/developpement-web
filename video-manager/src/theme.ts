import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

export const fontFamily = "Inter";

// Fonts are bundled locally so rendering works without network access.
for (const weight of ["400", "600", "800"]) {
  loadFont({
    family: fontFamily,
    url: staticFile(`fonts/inter-latin-${weight}-normal.woff2`),
    weight,
  });
}

export const COLORS = {
  bg: "#0B1220",
  bgSoft: "#131C2E",
  panel: "#1A2540",
  line: "#2A3756",
  text: "#F4F6FB",
  muted: "#9AA8C7",
  accent: "#4F8CFF",
  amber: "#FFB547",
  green: "#3DDC97",
  pink: "#FF6B8B",
};

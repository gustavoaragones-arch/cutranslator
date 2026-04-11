/**
 * Inline cow diagram: cut paths share one coordinate space (Illustrator export).
 * viewBox is larger than the raw artboard crop so we can scale + center the meat map.
 */
export const COW_DIAGRAM_VIEWBOX = {
  minX: 476,
  minY: 176,
  width: 248,
  height: 160,
} as const;

/**
 * Center of the cut paths in source coordinates (bbox ~508–656 × ~201–268).
 * Must match the meat cluster or transforms pull the diagram to the top-left of the frame.
 */
export const COW_DIAGRAM_CONTENT_CENTER = { x: 582, y: 235 } as const;

/** Visual scale vs raw path coordinates (120%). */
export const COW_DIAGRAM_SCALE = 1.2 as const;

export type CowDiagramRegionId =
  | "chuck"
  | "rib"
  | "ribeye"
  | "short_loin"
  | "striploin"
  | "tenderloin"
  | "sirloin"
  | "sirloin_cap"
  | "sirloin_flap"
  | "round"
  | "flank"
  | "plate"
  | "brisket"
  | "skirt";

export type CowDiagramCut = {
  id: CowDiagramRegionId;
  name: string;
  color: string;
  path: string;
};

/** Primal + retail regions drawn on the silhouette (single SVG coordinate space). */
export const COW_DIAGRAM_CUTS: readonly CowDiagramCut[] = [
  {
    id: "chuck",
    name: "Chuck",
    color: "#5c1a2a",
    path: "M544.14,201.5s-.42,14.31-.7,16.26c0,0,2.65,7.81,2.37,19.81l-35.97-2.43s-1.01-4.87-1.27-8.02-.44-5.02-1.79-6.6-3.78-5.43-3.39-8.09,1.84-8.52,4.47-11.72,3.25-3.84,5.4-5.4c0,0,2.68,3.39,4.87,4.5s4.06,1.64,4.06,1.64c0,0,2.29-1.72,6.47-1.57s9.39,1.03,11.45,1.25,4.03.36,4.03.36Z",
  },
  {
    id: "rib",
    name: "Rib",
    color: "#7b1f3d",
    path: "M574.49,205.52l-.91,6.8s4.19,8.93,5.86,20.65l-33.63,4.6s-.28-14.09-2.37-19.81l.7-16.26s5.21-.1,10.6.22,10.54,1.1,13.57,1.96,6.18,1.84,6.18,1.84Z",
  },
  {
    id: "ribeye",
    name: "Rib Eye",
    color: "#e2b85b",
    path: "M544.14,201.5l-.84,16.13h17.3l16.47,4.51s-1.68-5.98-3.35-9.4l.84-7.26s-6.84-2.33-12.28-3.16-11.3-.82-18.14-.82Z",
  },
  {
    id: "short_loin",
    name: "Short Loin",
    color: "#9b2336",
    path: "M602.04,212.95l3.65,27.35-26.26-7.33s-1.26-10.05-5.86-20.65l.91-6.8s5.98,2.03,10.26,3.56,7.69,3.26,17.29,3.87Z",
  },
  {
    id: "striploin",
    name: "Strip Loin",
    color: "#d9a049",
    path: "M574.55,205.48s9.62,3.36,14.51,5.16c3.21,1.19,8.14,2.12,12.98,2.31l1.53,9.57s-5.4.03-9.86-1.18-20-8.6-20-8.6l.84-7.26Z",
  },
  {
    id: "tenderloin",
    name: "Tenderloin",
    color: "#d48740",
    path: "M626.71,216.36s-6.5,2.65-12.63,4.43c-4.44,1.29-7.35,2.23-12.74,1.53s-7.63-.98-7.63-.98c0,0,.28,2.6,0,5.4l10.6,2.79,23.72-3.52-1.33-9.65Z",
  },
  {
    id: "sirloin",
    name: "Sirloin",
    color: "#b93a2d",
    path: "M625.47,206.98l3.36,27.81-19.16,6.63-3.98-1.11-3.65-27.35s7.04.2,11.54-1.23c5.59-1.78,11.89-4.75,11.89-4.75Z",
  },
  {
    id: "sirloin_cap",
    name: "Sirloin Cap",
    color: "#cc6e3d",
    path: "M617.69,210.27l3.84,27.16,7.72-2.84-3.78-27.62s-3.03,1.27-7.78,3.29Z",
  },
  {
    // TODO: sirloin_flap SVG path is a geometric approximation; needs refinement from Illustrator source.
    // Anatomically sits below the sirloin body, between the bottom sirloin and the flank (approx x: 600–628, y: 237–252).
    id: "sirloin_flap",
    name: "Sirloin Flap",
    color: "#b87333",
    path: "M600.4,238.5l27.6-4.2 2.5,10.2-27.2,4.1-2.9-10.1Z",
  },
  {
    id: "round",
    name: "Round",
    color: "#c5553a",
    path: "M625.47,206.98l3.36,27.81-19.16,6.63,21.22,5.92s8.75-1.82,15.26-.64,14.55,3.82,18.16,4.07,8.84.41,10.6,1.12l6.51,2.6,3.91-4.47-7.81-10.05s-8.89-.44-13.19-4.74c-5.6-5.6-8.78-11.68-13.7-17.08s-10.32-7.95-10.32-7.95c0,0-1.21-4.53-3.91-4.65s-7.23-.14-10.94,1.43Z",
  },
  {
    id: "flank",
    name: "Flank",
    color: "#cc6e3d",
    path: "M630.89,247.33l-51.46-14.36s1.71,6.42.95,19.85c0,0,6.78-1.55,13.23-3.55,3.62-1.12,10.12-1.43,16.81-1.13s14.02,1,20.47-.81Z",
  },
  {
    id: "plate",
    name: "Short Plate",
    color: "#d48740",
    path: "M545.81,237.57l33.63-4.6s1.77,7.32.95,19.85c0,0-7.51,2.05-16.58,2.9s-17.77,1.32-20.37,1.15c0,0,1.26-.88,1.81-10.09l.56-9.21Z",
  },
  {
    id: "brisket",
    name: "Brisket",
    color: "#d9a049",
    path: "M538.27,237.06l-18.7,14.06s6.21,2.95,15.21,4.76c2.74.55,6.03.85,8.65.99,0,0,0,0,0,0h0s2.19-3.81,2.37-19.3l-7.54-.51Z",
  },
  {
    id: "skirt",
    name: "Skirt Steak",
    color: "#b93a2d",
    path: "M545.34,245.43s-.09,7.45-1.91,11.44c0,0,3.03.03,6.44-.07s5.92-.31,10.83-.74c1.68-.15,3.53-.39,6.12-.68s4.93-.69,7.27-1.16c2.76-.54,4.87-1.07,6.28-1.41,0,0,.41-7.24.06-11.77l-35.1,4.39Z",
  },
];

export function cowDiagramViewBoxAttr(): string {
  const { minX, minY, width, height } = COW_DIAGRAM_VIEWBOX;
  return `${minX} ${minY} ${width} ${height}`;
}

export const COW_DIAGRAM_ASPECT_RATIO =
  COW_DIAGRAM_VIEWBOX.width / COW_DIAGRAM_VIEWBOX.height;

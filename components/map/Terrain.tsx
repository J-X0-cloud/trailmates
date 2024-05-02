import type { ReactNode } from "react";
import type { TerrainKey } from "@/types";

/** Background shapes for each map style, drawn in the 320×240 design space. */
export const TERRAIN: Record<TerrainKey, ReactNode> = {
  coast: (
    <>
      <path d="M0 0h118c-10 30 8 52-6 80s12 50-4 86 10 50 2 74H0z" fill="var(--m-water)" />
      <path d="M150 30c30-14 70-8 88 12s-6 40-34 36-66-30-54-48z" fill="var(--m-park)" />
      <path d="M240 150c24-10 60 0 66 22s-24 34-50 28-36-40-16-50z" fill="var(--m-park)" />
    </>
  ),
  desert: (
    <>
      <path d="M20 180c40-30 80-26 110-6s70 20 90-8 70-20 100 4v70H20z" fill="var(--m-dune)" />
      <path d="M0 60c30-16 60-10 80 4s50 12 70-2" fill="none" stroke="var(--m-road)" strokeWidth="3" />
      <circle cx="250" cy="48" r="22" fill="var(--m-park)" opacity=".55" />
    </>
  ),
  mountain: (
    <>
      <path d="M0 190l40-50 26 24 44-70 40 58 30-30 50 62 40-40 50 46v50H0z" fill="var(--m-park)" />
      <path d="M110 94l14 20-12-4-10 8z" fill="#fff" opacity=".8" />
      <ellipse cx="230" cy="60" rx="46" ry="22" fill="var(--m-water)" />
    </>
  ),
  city: (
    <>
      <g stroke="var(--m-road)" strokeWidth="4">
        <path d="M0 70h320M0 150h320M70 0v240M170 0v240M260 0v240" />
      </g>
      <rect x="84" y="84" width="72" height="52" rx="8" fill="var(--m-park)" />
      <path d="M196 170c30-6 60 2 70 30v40h-90z" fill="var(--m-water)" />
    </>
  ),
  lakes: (
    <>
      <ellipse cx="80" cy="70" rx="56" ry="32" fill="var(--m-water)" />
      <ellipse cx="236" cy="176" rx="64" ry="30" fill="var(--m-water)" />
      <path d="M170 30c24-12 56-4 60 18s-30 26-50 18-24-26-10-36z" fill="var(--m-park)" />
      <path d="M20 170c20-10 50-6 56 12s-20 30-40 24-30-26-16-36z" fill="var(--m-park)" />
    </>
  ),
};

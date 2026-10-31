import React, { useEffect, useRef } from "react";
import createGlobe, { COBEOptions, Globe as GlobeInstance } from "cobe";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.25,
  dark: 0,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.94, 0.96, 0.98], // Soft light slate base
  markerColor: [29 / 255, 78 / 255, 216 / 255], // Brand #1d4ed8
  glowColor: [0.88, 0.92, 1],
  markers: [
    { location: [37.7749, -122.4194], size: 0.08 }, // San Francisco
    { location: [40.7128, -74.006], size: 0.08 }, // New York
    { location: [51.5074, -0.1278], size: 0.09 }, // London
    { location: [52.52, 13.405], size: 0.07 }, // Berlin
    { location: [59.3293, 18.0686], size: 0.07 }, // Stockholm
    { location: [1.3521, 103.8198], size: 0.08 }, // Singapore
    { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
    { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
    { location: [23.8103, 90.4125], size: 0.08 }, // Dhaka
    { location: [25.2048, 55.2708], size: 0.07 }, // Dubai
  ],
  arcs: [
    { from: [37.7749, -122.4194], to: [51.5074, -0.1278] }, // SF to London
    { from: [40.7128, -74.006], to: [52.52, 13.405] }, // NYC to Berlin
    { from: [51.5074, -0.1278], to: [1.3521, 103.8198] }, // London to Singapore
    { from: [1.3521, 103.8198], to: [35.6762, 139.6503] }, // Singapore to Tokyo
    { from: [59.3293, 18.0686], to: [23.8103, 90.4125] }, // Stockholm to Dhaka
  ],
  arcColor: [37 / 255, 99 / 255, 235 / 255],
  arcWidth: 1.5,
  arcHeight: 0.3,
};

export interface GlobeProps {
  className?: string;
  config?: Partial<COBEOptions>;
}

export const Globe: React.FC<GlobeProps> = ({ className, config = {} }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const globeRef = useRef<GlobeInstance | null>(null);

  useEffect(() => {
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    let animationFrameId: number;

    if (canvasRef.current) {
      const mergedConfig: COBEOptions = {
        ...GLOBE_CONFIG,
        ...config,
        width: width * 2,
        height: width * 2,
      };

      globeRef.current = createGlobe(canvasRef.current, mergedConfig);

      const render = () => {
        if (!pointerInteracting.current) {
          phiRef.current += 0.003;
        }
        if (globeRef.current) {
          globeRef.current.update({
            phi: phiRef.current + pointerInteractionMovement.current,
            width: width * 2,
            height: width * 2,
          });
        }
        animationFrameId = requestAnimationFrame(render);
      };

      animationFrameId = requestAnimationFrame(render);

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      }, 50);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (globeRef.current) {
        globeRef.current.destroy();
      }
      window.removeEventListener("resize", onResize);
    };
  }, [config]);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[600px] flex items-center justify-center select-none",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-1000 [contain:layout_paint_size] cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.01;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.01;
          }
        }}
      />
    </div>
  );
};
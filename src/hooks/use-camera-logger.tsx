import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

// Logs camera position + orbit target, throttled, only when the view changes.
// Output is copy-paste-ready for <Canvas camera={{ position: [...] }}> and <OrbitControls target={[...]} />.
export function useCameraLogger(intervalMs = 500) {
  const camera = useThree((s) => s.camera);
  const controls = useThree((s) => s.controls) as {
    target?: { x: number; y: number; z: number };
  } | null;
  const last = useRef(0);

  useFrame((_) => {
    const now = performance.now();
    if (now - last.current < intervalMs) return;
    last.current = now;

    const r = (n: number) => Math.round(n * 100) / 100;
    const p = camera.position;
    const t = controls?.target;

    console.log(
      `position={[${r(p.x)}, ${r(p.y)}, ${r(p.z)}]}` +
        (t ? `  target={[${r(t.x)}, ${r(t.y)}, ${r(t.z)}]}` : ""),
    );
  });
}

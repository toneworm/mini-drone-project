import { useProgress } from "@react-three/drei";
import { Progress } from "@/components/ui/progress";

export function LoadingScreen() {
  const { progress, active } = useProgress();

  return (
    <div
      className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#0a0a0c] transition-opacity duration-500 ${
        active ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <p className="font-mono text-sm text-neutral-400">
        Loading {Math.round(progress)}%
      </p>
      <Progress value={progress} className="w-48" />
    </div>
  );
}

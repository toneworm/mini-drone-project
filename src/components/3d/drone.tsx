import { useFBX } from "@react-three/drei";
import droneUrl from "@/assets/models/Drone_01.fbx?url";

export function Drone() {
  const fbx = useFBX(droneUrl);
  return <primitive object={fbx} scale={0.05} />;
}

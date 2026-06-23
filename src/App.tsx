import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Drone } from "@/components/3d/drone";
import { Studio } from "@/components/3d/studio";
import { LoadingScreen } from "@/components/3d/loading-screen";
// import CameraDebug from "./components/utils/camera-debug";

function App() {
  return (
    <main className="relative w-screen h-screen">
      <Canvas
        className="w-full h-full"
        camera={{ position: [3.87, 1.59, 2.73], fov: 50 }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        {/* <CameraDebug /> */}
        <Suspense fallback={null}>
          <Drone />
          <Studio />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <LoadingScreen />
    </main>
  );
}

export default App;

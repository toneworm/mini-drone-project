import { Environment, Lightformer } from "@react-three/drei";

export function Studio() {
  return (
    // <Environment resolution={256} frames={1}>
    //   {/* dark base so reflections aren't pure black */}
    //   <color attach="background" args={["#0a0a0c"]} />

    //   {/* big soft key light from upper front */}
    //   <Lightformer
    //     form="rect"
    //     intensity={2}
    //     color="#8ea2c4"
    //     position={[2, 3, 4]}
    //     scale={[6, 6, 1]}
    //     target={[0, 0, 0]}
    //   />
    //   {/* cool rim from behind */}
    //   <Lightformer
    //     form="rect"
    //     intensity={1.5}
    //     color="#3a4a6b"
    //     position={[-3, 1, -4]}
    //     scale={[5, 5, 1]}
    //     target={[0, 0, 0]}
    //   />
    //   {/* subtle warm fill low and to the side */}
    //   <Lightformer
    //     form="circle"
    //     intensity={0.8}
    //     color="#5a4a55"
    //     position={[-4, -1, 2]}
    //     scale={[3, 3, 1]}
    //     target={[0, 0, 0]}
    //   />
    // </Environment>

    // <Environment background>
    //   <color attach="background" args={["#3b82f6"]} />
    // </Environment>

    <Environment
      preset="sunset"
      background
      backgroundBlurriness={0.5} // soften the visible backdrop
      backgroundIntensity={0.2} // dim/brighten only the backdrop
      environmentIntensity={0.2} // dim/brighten only the lighting
    />
  );
}

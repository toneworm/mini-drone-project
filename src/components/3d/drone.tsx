import { useFBX } from "@react-three/drei";
// import droneUrl from "@/assets/models/Drone_01.fbx?url";
import droneUrl from "@/assets/models/Drone_01_props.fbx?url";
// import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useFrame } from "@react-three/fiber";

// const DRONE_GLB_URL = "/models/Drone_01_props.glb";

const HOVER_SPEED = 2.5;
const HOVER_DISTANCE = 0.3;
const ROTATION_RANGE = Math.PI * 0.02;

const ROTATION_SPEED = 20;

export function Drone() {
  const fbx = useFBX(droneUrl);
  // const { scene } = useGLTF(DRONE_GLB_URL);
  const drone = useRef<THREE.Group>(null);

  const propellors = useRef<THREE.Object3D[]>([]);

  useEffect(() => {
    const objs: Array<{ name: string; type: string }> = [];

    fbx.traverse((child) => {
      objs.push({ name: child.name, type: child.type });

      if (child.name.startsWith("Prop")) {
        propellors.current.push(child);
      }
    });

    console.log(objs);
  }, [fbx]);

  useFrame((_, delta) => {
    propellors.current.forEach((p) => {
      p.rotation.z += ROTATION_SPEED * delta;
    });
  });

  useGSAP(
    () => {
      const { position: dronePos, rotation: droneRot } = drone.current!;

      const tl = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
        },
      });

      tl.to(dronePos, {
        z: HOVER_DISTANCE,
        duration: HOVER_SPEED / 2,
      }).to(
        droneRot,
        {
          x: -ROTATION_RANGE,
          duration: HOVER_SPEED / 2,
        },
        "<",
      );

      const loop = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: {
          ease: "power1.inOut",
        },
      });

      loop
        .to(dronePos, {
          z: -HOVER_DISTANCE,
          duration: HOVER_SPEED,
        })
        .to(
          droneRot,
          {
            x: ROTATION_RANGE,
            duration: HOVER_SPEED,
          },
          "<",
        );

      tl.add(loop);
    },
    { scope: drone },
  );

  return (
    <group ref={drone}>
      <primitive object={fbx} scale={0.05} />
    </group>
  );
}

// useGLTF.preload(DRONE_GLB_URL);


'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CityScene from "./CityScene";

export default function CyberpunkCity() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 10, 25]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 20, 10]} intensity={5} color={"#8b5cf6"} />
      <CityScene />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}


import { useRef } from "react";
import { Group } from "three";

export default function CityScene() {
  const ref = useRef<Group>(null);

  return (
    <group ref={ref}>
      {/* PLACEHOLDER — replace with high-poly cyberpunk buildings */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5, 10, 5]} />
        <meshStandardMaterial color={"#3b82f6"} emissive={"#8b5cf6"} emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

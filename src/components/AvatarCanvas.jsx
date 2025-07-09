// src/components/AvatarCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function AvatarCanvas() {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <Stars />
      <OrbitControls enableZoom={false} />
      {/* Placeholder for your future 3D avatar model */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#00f7ff" wireframe />
      </mesh>
    </Canvas>
  );
}

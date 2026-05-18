"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function ShirtModel() {
  const { scene } = useGLTF("/models/syxrs-shirt.glb");

  return (
    <primitive
      object={scene}
      scale={2.4}
      position={[0, -1.2, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function ShirtViewer() {
  return (
    <div className="h-[560px] w-full overflow-hidden rounded-[2rem] bg-black/40">
      <Canvas camera={{ position: [0, 0.8, 4], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[4, 5, 4]} intensity={2.2} />
          <Environment preset="city" />
          <ShirtModel />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            autoRotate={true}
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/syxrs-shirt.glb");

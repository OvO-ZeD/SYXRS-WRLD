// app/components/ShirtViewer.tsx

"use client";

import { Canvas } from "@react-three/fiber";
import {
  Center,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Suspense } from "react";

function ShirtModel() {
  const { scene } = useGLTF("/models/first-product.glb");

  return (
    <Center>
      <primitive
        object={scene}
        scale={1.15}
        position={[0, -0.25, 0]}
        rotation={[0, 0.15, 0]}
      />
    </Center>
  );
}

export default function ShirtViewer() {
  return (
    <div className="h-[420px] w-full overflow-hidden rounded-[2rem] bg-black/30 md:h-[560px]">
      <Canvas camera={{ position: [0, 0, 8.5], fov: 28 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.1} />

          <directionalLight
            position={[3, 4, 4]}
            intensity={2.2}
          />

          <Environment preset="city" />

          <ShirtModel />

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={6}
            maxDistance={11}
            autoRotate={true}
            autoRotateSpeed={0.7}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/first-product.glb");
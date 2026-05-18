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
    <Center position={[0, 0.55, 0]}>
      <primitive
        object={scene}
        scale={0.75}
        rotation={[0, 0, 0]}
      />
    </Center>
  );
}

export default function ShirtViewer() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-[2rem] bg-black/30 md:h-[620px]">
      <Canvas camera={{ position: [0, 0, 8.5], fov: 28 }}>
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1.4, 1.4, 1.4]} />
              <meshStandardMaterial color="#2a2a2a" />
            </mesh>
          }
        >
          <ambientLight intensity={1.1} />

          <directionalLight position={[3, 4, 4]} intensity={2.2} />

          <Environment preset="city" />

          <ShirtModel />

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={6}
            maxDistance={11}
            autoRotate={true}
            autoRotateSpeed={1.4}
          />
        </Suspense>
      </Canvas>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-xs font-semibold tracking-[0.2em] text-zinc-500">
        DRAG TO ROTATE • SCROLL TO ZOOM
      </div>
    </div>
  );
}

useGLTF.preload("/models/first-product.glb");
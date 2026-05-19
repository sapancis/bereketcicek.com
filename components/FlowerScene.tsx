"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";

/* Single petal */
function Petal({
  position,
  rotation,
  color,
  scale,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  scale: number;
}) {
  const mesh = useRef<THREE.Mesh>(null!);
  const speed = useMemo(() => 0.3 + Math.random() * 0.4, []);
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase;
    mesh.current.rotation.z += 0.008;
    mesh.current.position.y += Math.sin(t) * 0.003;
    mesh.current.position.x += Math.cos(t * 0.7) * 0.002;
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation} scale={scale}>
      <sphereGeometry args={[0.08, 8, 6]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} transparent opacity={0.85} />
    </mesh>
  );
}

/* Floating petals field */
function PetalField() {
  const petals = useMemo(() => {
    const colors = ["#e8a0bf", "#f4c2c2", "#ffb7c5", "#ffd1dc", "#c8e6c9", "#EDDD5E"];
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: 0.5 + Math.random() * 1.2,
    }));
  }, []);

  return (
    <>
      {petals.map((p) => (
        <Petal key={p.id} position={p.position} rotation={p.rotation} color={p.color} scale={p.scale} />
      ))}
    </>
  );
}

/* Central 3D flower orb */
function FlowerOrb() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.3;
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.15;
  });

  return (
    <Sphere ref={ref} args={[1.6, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#5B8C51"
        distort={0.45}
        speed={2}
        roughness={0.1}
        metalness={0.3}
        envMapIntensity={1}
      />
    </Sphere>
  );
}

/* Inner glow ring */
function GlowRing() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.5;
    ref.current.rotation.x = clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <torusGeometry args={[2.1, 0.05, 16, 100]} />
      <meshStandardMaterial color="#EDDD5E" emissive="#EDDD5E" emissiveIntensity={0.8} transparent opacity={0.6} />
    </mesh>
  );
}

export default function FlowerScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-4, -4, -4]} intensity={0.8} color="#EDDD5E" />
        <pointLight position={[4, 4, 0]} intensity={0.5} color="#5B8C51" />

        <Environment preset="forest" />

        <FlowerOrb />
        <GlowRing />
        <PetalField />
      </Canvas>
    </div>
  );
}

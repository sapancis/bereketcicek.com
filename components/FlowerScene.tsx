"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ── Petal shape geometry (bezier curve) ── */
function createPetalShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.4, 0.2, 0.5, 1.2, 0, 1.8);
  shape.bezierCurveTo(-0.5, 1.2, -0.4, 0.2, 0, 0);
  return shape;
}

/* ── One petal of the central flower ── */
function FlowerPetal({ angle, color }: { angle: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  const geo = useMemo(() => new THREE.ShapeGeometry(createPetalShape(), 32), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.z = Math.sin(t * 0.4 + angle) * 0.08;
  });

  return (
    <mesh
      ref={ref}
      geometry={geo}
      rotation={[0.3, 0, angle]}
      position={[
        Math.sin(angle) * 0.05,
        -0.9,
        Math.cos(angle) * 0.05,
      ]}
    >
      <meshStandardMaterial
        color={color}
        side={THREE.DoubleSide}
        roughness={0.4}
        metalness={0.05}
        transparent
        opacity={0.92}
      />
    </mesh>
  );
}

/* ── Central flower (6 petals + stamens) ── */
function CentralFlower() {
  const groupRef = useRef<THREE.Group>(null!);
  const petalCount = 6;
  const colors = ["#e8a0bf", "#f4b8c8", "#ffb7c5", "#e891b0", "#f9c6d4", "#ffd1dc"];

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.25;
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.12;
  });

  return (
    <group ref={groupRef} scale={1.3}>
      {Array.from({ length: petalCount }).map((_, i) => (
        <FlowerPetal
          key={i}
          angle={(i / petalCount) * Math.PI * 2}
          color={colors[i]}
        />
      ))}
      {/* Center stamens */}
      <mesh position={[0, -0.05, 0]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial color="#EDDD5E" roughness={0.2} metalness={0.4} />
      </mesh>
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.35, 0.03, 12, 80]} />
        <meshStandardMaterial color="#EDDD5E" emissive="#EDDD5E" emissiveIntensity={0.6} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

/* ── Floating petal particles ── */
function FloatingPetal({ position, rotation, color, scale }: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const geo = useMemo(() => new THREE.ShapeGeometry(createPetalShape(), 16), []);
  const speed = useMemo(() => 0.2 + Math.random() * 0.3, []);
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase;
    ref.current.rotation.z += 0.005;
    ref.current.position.y = position[1] + Math.sin(t) * 0.4;
    ref.current.position.x = position[0] + Math.cos(t * 0.6) * 0.25;
  });

  return (
    <mesh ref={ref} geometry={geo} position={position} rotation={rotation} scale={scale}>
      <meshStandardMaterial
        color={color}
        side={THREE.DoubleSide}
        transparent
        opacity={0.7}
        roughness={0.5}
      />
    </mesh>
  );
}

function PetalField() {
  const petals = useMemo(() => {
    const colors = ["#e8a0bf", "#f4c2c2", "#ffb7c5", "#ffd1dc", "#f9d5e3", "#EDDD5E", "#c8e6c9", "#fce4ec"];
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: 0.12 + Math.random() * 0.22,
    }));
  }, []);

  return (
    <>
      {petals.map((p) => (
        <FloatingPetal
          key={p.id}
          position={p.position}
          rotation={p.rotation}
          color={p.color}
          scale={p.scale}
        />
      ))}
    </>
  );
}

export default function FlowerScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0.5, 5.5], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 6, 4]} intensity={1.5} color="#fff8f0" />
        <pointLight position={[-3, 2, 3]} intensity={1.0} color="#fce4ec" />
        <pointLight position={[3, -2, 2]} intensity={0.6} color="#EDDD5E" />
        <pointLight position={[0, 0, 4]} intensity={0.5} color="#ffffff" />

        <CentralFlower />
        <PetalField />
      </Canvas>
    </div>
  );
}

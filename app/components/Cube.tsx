import { Environment, OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";
import * as THREE from "three";
import React, { useRef } from "react";

const Cube = () => {
  const cubeRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta;
      cubeRef.current.rotation.y += delta;
    }
  });

  const baseColor = new THREE.Color(0xA3AA8B); // Base color

  const colors = [
    baseColor, // Base color
    baseColor.clone().offsetHSL(0.1, 0.3, 0.1), // Lighter and greener
    baseColor.clone().offsetHSL(0.2, 0.5, 0.2), // Even lighter and greener
    baseColor.clone().offsetHSL(0.3, 0.7, 0.3), // Lightest and greenest
    baseColor.clone().offsetHSL(-0.1, 0.1, -0.1), // Darker but still green
    baseColor.clone().offsetHSL(-0.2, 0.3, -0.2), // Even darker and greener
    baseColor.clone().offsetHSL(-0.3, 0.5, -0.3), // Darkest and greenest
    new THREE.Color(0x7F8F6A), // Strong greenish tone
    new THREE.Color(0x6B8E23), // Olive green
    new THREE.Color(0x4A5D23) // Deep green
  ];

  const faces = new Float32Array([
    ...colors[0].toArray(), ...colors[0].toArray(), ...colors[0].toArray(), ...colors[0].toArray(), ...colors[0].toArray(), ...colors[0].toArray(), // front
    ...colors[1].toArray(), ...colors[1].toArray(), ...colors[1].toArray(), ...colors[1].toArray(), ...colors[1].toArray(), ...colors[1].toArray(), // back
    ...colors[2].toArray(), ...colors[2].toArray(), ...colors[2].toArray(), ...colors[2].toArray(), ...colors[2].toArray(), ...colors[2].toArray(), // top
    ...colors[3].toArray(), ...colors[3].toArray(), ...colors[3].toArray(), ...colors[3].toArray(), ...colors[3].toArray(), ...colors[3].toArray(), // bottom
    ...colors[4].toArray(), ...colors[4].toArray(), ...colors[4].toArray(), ...colors[4].toArray(), ...colors[4].toArray(), ...colors[4].toArray(), // left
    ...colors[5].toArray(), ...colors[5].toArray(), ...colors[5].toArray(), ...colors[5].toArray(), ...colors[5].toArray(), ...colors[5].toArray()  // right
  ]);

  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight />
      <Environment preset="forest"/>
      <mesh ref={cubeRef}>
        <boxGeometry args={[3, 3, 3]} >
          <bufferAttribute attach="attributes-color" count={faces.length / 3} array={faces} itemSize={3} />
        </boxGeometry>
        <meshStandardMaterial vertexColors roughness={0.5} metalness={0.4} envMapIntensity={1}/>
      </mesh>
    </>
  );
};

export default Cube;

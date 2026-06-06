import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

// Programmatic 3D Laptop Mesh with floating details
function FloatingLaptop() {
  const laptopRef = useRef()
  const keyboardRef = useRef()
  const screenRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    // Soft floating movement
    laptopRef.current.position.y = Math.sin(time * 0.8) * 0.2
    laptopRef.current.rotation.y = time * 0.15
    laptopRef.current.rotation.x = Math.sin(time * 0.4) * 0.05
  })

  return (
    <group ref={laptopRef} position={[0, -0.2, 0]}>
      {/* Laptop Base */}
      <mesh ref={keyboardRef}>
        <boxGeometry args={[3.2, 0.1, 2.2]} />
        <meshStandardMaterial 
          color="#0f2040" 
          roughness={0.2} 
          metalness={0.8}
          emissive="#00f5ff"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Screen Hinge and Screen Board */}
      <group position={[0, 0.05, -1.05]} rotation={[0.4, 0, 0]}>
        <mesh ref={screenRef}>
          <boxGeometry args={[3.2, 2.0, 0.08]} />
          <meshStandardMaterial 
            color="#0a1628" 
            roughness={0.1} 
            metalness={0.9} 
          />
        </mesh>
        
        {/* Glow Display Panel */}
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[3.0, 1.8]} />
          <meshBasicMaterial 
            color="#00f5ff" 
            toneMapped={false}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Outer Laser Frame */}
        <mesh position={[0, 0, 0.051]}>
          <ringGeometry args={[1.5, 1.55, 4]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* Glowing Keyboard Plate */}
      <mesh position={[0, 0.06, 0.2]}>
        <planeGeometry args={[2.8, 1.2]} />
        <meshBasicMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.4} 
        />
      </mesh>
    </group>
  )
}

// Tech Orbit Rings with glowing nodes
function TechOrbits() {
  const orbitsRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    orbitsRef.current.rotation.z = -time * 0.05
    orbitsRef.current.rotation.x = Math.sin(time * 0.2) * 0.1
    orbitsRef.current.rotation.y = time * 0.03
  })

  // We define three circular paths with different radii and colors
  return (
    <group ref={orbitsRef}>
      {/* Outer Ring 1 - ML (Pink) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.8, 3.82, 64]} />
        <meshBasicMaterial color="#ff007f" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Outer Ring 2 - React (Cyan) */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <ringGeometry args={[4.4, 4.43, 64]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Outer Ring 3 - IoT (Green) */}
      <mesh rotation={[-Math.PI / 4, -Math.PI / 3, 0]}>
        <ringGeometry args={[5.0, 5.03, 64]} />
        <meshBasicMaterial color="#39ff14" transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>

      {/* Nodes floating along orbit radii */}
      <mesh position={[3.8, 0, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#ff007f" />
      </mesh>
      <mesh position={[-2.2, 3.8, 0.5]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#00f5ff" />
      </mesh>
      <mesh position={[1.5, -4.5, -1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#39ff14" />
      </mesh>
    </group>
  )
}

// Code Node Particles representing matrix information flow
function CodeParticles({ count = 200 }) {
  const pointsRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = time * 0.02
    pointsRef.current.position.y = Math.sin(time * 0.3) * 0.15
  })

  const positions = React.useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      // Cylinder distribution around laptop
      const angle = Math.random() * Math.PI * 2
      const radius = 2.5 + Math.random() * 4.5
      const x = Math.cos(angle) * radius
      const y = (Math.random() - 0.5) * 6
      const z = Math.sin(angle) * radius
      arr.push(x, y, z)
    }
    return new Float32Array(arr)
  }, [count])

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial 
        color="#00f5ff"
        size={0.06}
        sizeAttenuation={true}
        transparent
        opacity={0.65}
      />
    </points>
  )
}

const ThreeDeveloperScene = () => {
  return (
    <div className="canvas-container select-none pointer-events-none opacity-80">
      <Canvas
        camera={{ position: [0, 2.5, 7], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        
        {/* Neon spotlights shining down on workspace */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#00f5ff" />
        <pointLight position={[-5, 3, -5]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[0, -2, 3]} intensity={0.8} color="#ff007f" />
        
        <FloatingLaptop />
        <TechOrbits />
        <CodeParticles count={250} />
        
        {/* Starfield background */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0.5} fade speed={1.5} />
        
        {/* Orbit controls with restricted panning/zoom to prevent scene breakage */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  )
}

export default ThreeDeveloperScene

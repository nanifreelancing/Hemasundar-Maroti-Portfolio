import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

// Define the winding road coordinates in space
const curvePoints = [
  new THREE.Vector3(0, 0, 15),       // About Section (Start)
  new THREE.Vector3(-10, -3, -15),   // Experience Milestone
  new THREE.Vector3(10, -6, -50),    // Projects Milestone
  new THREE.Vector3(-8, -9, -85),    // Skills Milestone
  new THREE.Vector3(8, -12, -120),   // Certifications Milestone
  new THREE.Vector3(0, -15, -155),   // Contact Milestone
]

// Create the CatmullRomCurve3
const roadCurve = new THREE.CatmullRomCurve3(curvePoints)

// Programmatic 3D Light Cycle (Bike Model)
function LightCycle({ scrollVal }) {
  const bikeRef = useRef()
  const frontWheelRef = useRef()
  const rearWheelRef = useRef()
  const exhaustTrailRef = useRef()

  useFrame((state) => {
    if (!bikeRef.current) return

    // Get document scroll percentage
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    const currentScroll = window.scrollY

    // Smooth interpolation (lerp)
    scrollVal.current += (currentScroll - scrollVal.current) * 0.08

    // Clamp progress between 0 and 0.995 to avoid out-of-bounds tangent errors
    const t = Math.max(0, Math.min(0.995, scrollVal.current / (scrollHeight || 1)))

    // Get position along curve
    const pos = roadCurve.getPointAt(t)
    bikeRef.current.position.copy(pos)

    // Get tangent direction and orient bike
    const tangent = roadCurve.getTangentAt(t)
    const lookTarget = pos.clone().add(tangent)
    bikeRef.current.lookAt(lookTarget)

    // Spin wheels relative to speed/scroll progress
    const wheelRotation = state.clock.getElapsedTime() * 8
    if (frontWheelRef.current) frontWheelRef.current.rotation.x = wheelRotation
    if (rearWheelRef.current) rearWheelRef.current.rotation.x = wheelRotation

    // Dynamic exhaust light/size pulse
    if (exhaustTrailRef.current) {
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 20) * 0.15
      exhaustTrailRef.current.scale.set(scale, scale, scale * 1.5)
    }

    // Follow Camera Setup (Third Person view)
    // Place camera behind the bike (opposite tangent direction) and slightly above
    const camOffset = tangent.clone().multiplyScalar(-5) // 5 units back
    camOffset.y += 2.2 // 2.2 units up

    const targetCamPos = pos.clone().add(camOffset)

    // Smoothly interpolate camera position
    state.camera.position.lerp(targetCamPos, 0.1)

    // Make camera look slightly ahead of the bike
    const lookAheadPoint = pos.clone().add(tangent.clone().multiplyScalar(2))
    state.camera.lookAt(lookAheadPoint)
  })

  return (
    <group ref={bikeRef}>
      {/* Bike Chassis/Main Frame */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[0.4, 0.4, 1.8]} />
        <meshStandardMaterial
          color="#0f2040"
          roughness={0.1}
          metalness={0.9}
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Cyber Windshield/Cabin */}
      <mesh position={[0, 0.65, 0.35]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[0.36, 0.3, 0.6]} />
        <meshBasicMaterial
          color="#00f5ff"
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Neon Emissive Strip Lines along body */}
      <mesh position={[0.21, 0.35, 0]}>
        <planeGeometry args={[0.02, 1.2]} />
        <meshBasicMaterial color="#00f5ff" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[-0.21, 0.35, 0]}>
        <planeGeometry args={[0.02, 1.2]} />
        <meshBasicMaterial color="#00f5ff" side={THREE.DoubleSide} />
      </mesh>

      {/* Front Wheel */}
      <group position={[0, 0.28, 0.8]}>
        <mesh ref={frontWheelRef} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.28, 0.28, 0.2, 16]} />
          <meshStandardMaterial color="#050a12" roughness={0.5} />
        </mesh>
        {/* Glowing Rim */}
        <mesh position={[0.11, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <ringGeometry args={[0.18, 0.25, 16]} />
          <meshBasicMaterial color="#00f5ff" side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[-0.11, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <ringGeometry args={[0.18, 0.25, 16]} />
          <meshBasicMaterial color="#00f5ff" side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Rear Wheel */}
      <group position={[0, 0.28, -0.8]}>
        <mesh ref={rearWheelRef} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.28, 0.28, 0.35, 16]} />
          <meshStandardMaterial color="#050a12" roughness={0.5} />
        </mesh>
        {/* Glowing Rim */}
        <mesh position={[0.185, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <ringGeometry args={[0.18, 0.25, 16]} />
          <meshBasicMaterial color="#ff007f" side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[-0.185, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <ringGeometry args={[0.18, 0.25, 16]} />
          <meshBasicMaterial color="#ff007f" side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Headlight Spotlight */}
      <spotLight
        position={[0, 0.5, 1.0]}
        angle={0.6}
        penumbra={0.5}
        intensity={2}
        color="#00f5ff"
        distance={25}
      />
      {/* Visual glowing bulb */}
      <mesh position={[0, 0.5, 0.9]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color="#00f5ff" />
      </mesh>

      {/* Exhaust Cyber Trail */}
      <mesh ref={exhaustTrailRef} position={[0, 0.2, -1.3]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.15, 0.8, 4]} />
        <meshBasicMaterial
          color="#ff007f"
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  )
}

// 3D Grid Winding Highway Tunnel
function CyberHighway() {
  const points = useMemo(() => roadCurve.getPoints(150), [])
  const geom = useMemo(() => new THREE.TubeGeometry(roadCurve, 150, 2.2, 8, false), [])

  return (
    <group>
      {/* Tube wireframe mesh representing virtual highway */}
      <mesh geometry={geom}>
        <meshStandardMaterial
          wireframe
          color="#0f2545"
          emissive="#00f5ff"
          emissiveIntensity={0.12}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Solid Bottom Road Path */}
      <mesh geometry={geom}>
        <meshStandardMaterial
          color="#020b18"
          roughness={0.9}
          metalness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Neon lane indicators (Left and Right Rails) */}
      <group>
        {points.slice(0, -1).map((pt, i) => {
          const nextPt = points[i + 1]
          const tangent = roadCurve.getTangentAt(i / points.length)
          const normal = new THREE.Vector3(0, 1, 0).cross(tangent).normalize()

          // Offset left and right road edge coords
          const leftOffset = normal.clone().multiplyScalar(-1.8)
          const rightOffset = normal.clone().multiplyScalar(1.8)

          const l1 = pt.clone().add(leftOffset)
          const l2 = nextPt.clone().add(leftOffset)
          const r1 = pt.clone().add(rightOffset)
          const r2 = nextPt.clone().add(rightOffset)

          return (
            <group key={i}>
              {/* Left edge neon tube segment */}
              <mesh position={l1.clone().add(l2).multiplyScalar(0.5)}>
                <boxGeometry args={[0.04, 0.04, l1.distanceTo(l2)]} />
                <meshBasicMaterial color="#00f5ff" transparent opacity={0.65} />
              </mesh>
              {/* Right edge neon tube segment */}
              <mesh position={r1.clone().add(r2).multiplyScalar(0.5)}>
                <boxGeometry args={[0.04, 0.04, r1.distanceTo(r2)]} />
                <meshBasicMaterial color="#ff007f" transparent opacity={0.65} />
              </mesh>
            </group>
          )
        })}
      </group>
    </group>
  )
}

// Glowing Checkpoint Arches representing Portfolio Milestones
function Milestones() {
  return (
    <group>
      {curvePoints.map((pt, index) => {
        const colors = ["#00f5ff", "#39ff14", "#8b5cf6", "#ff6b35", "#ff007f", "#00f5ff"]
        const label = ["ABOUT", "EXPERIENCE", "PROJECTS", "SKILLS", "CREDS", "CONTACT"][index]
        return (
          <group key={index} position={pt}>
            {/* Glowing Gate Hoop */}
            <mesh rotation={[0, 0, 0]}>
              <torusGeometry args={[2.5, 0.06, 8, 32]} />
              <meshBasicMaterial color={colors[index]} transparent opacity={0.3} />
            </mesh>

            {/* Core glowing marker node */}
            <mesh position={[0, -2.2, 0]}>
              <boxGeometry args={[0.4, 0.1, 0.4]} />
              <meshBasicMaterial color={colors[index]} />
            </mesh>
            <pointLight position={[0, 0, 0]} intensity={1.5} distance={10} color={colors[index]} />
          </group>
        )
      })}
    </group>
  )
}

const ThreeRoadmapScene = () => {
  const scrollVal = useRef(0)

  return (
    <div className="canvas-container fixed inset-0 z-0 pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 2, 20], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.25} />

        {/* Headlight/Scene spotlights */}
        <directionalLight position={[0, 10, 5]} intensity={0.5} />

        {/* Starfield Backdrop */}
        <Stars radius={150} depth={50} count={2000} factor={4} saturation={0.5} fade speed={1.2} />

        {/* Winding Highway */}
        <CyberHighway />

        {/* Milestones gates */}
        <Milestones />

        {/* Dynamic Light Cycle */}
        <LightCycle scrollVal={scrollVal} />
      </Canvas>
    </div>
  )
}

export default ThreeRoadmapScene
export { roadCurve, curvePoints }

import { Canvas } from "@react-three/fiber"
import { color } from "three/src/nodes/tsl/TSLCore.js"
import { Earth } from "./Models/Earth";
import { Environment, PerspectiveCamera } from "@react-three/drei";

export default function App() {
  return (
    <Canvas camera={{position: [-10,0,0]}} gl={{alpha: true}}>
      {/* <axesHelper args={[10]} /> */}
        <Earth position={[0,-4,0]}/>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} color="white" />
      <Environment preset="apartment"/>
    </Canvas>
  );
}



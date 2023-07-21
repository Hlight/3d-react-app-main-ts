import "./App.css";
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./component/Cylinder3d";
import React from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

function App() {
  const canvasStyle = { height: "33vh" };
  return (
    <>
      <section className="App-header">
        {/* Canvas 1 */}
        <Canvas style={canvasStyle}>
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>
        {/***/}

        {/* Canvas 2 */}
        <Canvas style={canvasStyle}>
          <OrbitControls />
          <pointLight position={[10, 10, 10]} />
          <ambientLight intensity={0.5} />
          <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
          <Cylinder3d position={[1.2, 0, 0]} wireframe />
        </Canvas>
        {/***/}

        {/* Canvas 3 */}
        <Canvas style={canvasStyle}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <pointLight position={[10, 10, 10]} />
          <ambientLight color={"red"} />
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>
        {/***/}
      </section>
    </>
  );
}

export default App;

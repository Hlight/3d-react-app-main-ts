import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

// https://sbcode.net/react-three-fiber/props/
function Cylinder3d(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef({ rotation: { x: 0 } });
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <cylinderGeometry args={[2, 1, 2]} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

export default Cylinder3d;

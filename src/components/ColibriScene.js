import React, { Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as androsFetalStyles from "../css/AndrosFetal.module.css"
import Colibri from "./Colibri/Colibri.js";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 0;
      controls.maxDistance = 5;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

function ColibriScene() {
  return (
    <div className={androsFetalStyles.container}>
      <Canvas frameloop='demand'>
        <directionalLight color="red" position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <Colibri/>
        </Suspense>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default ColibriScene
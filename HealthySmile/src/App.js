import React from "react";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <div>
      <h1>Bienvenido a Healthy Smile</h1>
      <div style={{ width: "100%", height: "80vh" }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default App;
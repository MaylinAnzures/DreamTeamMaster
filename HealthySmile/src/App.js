import React from 'react';
import {Canvas} from 'react-three-fiber'
import { rotate } from 'three/webgpu';

const App = () => {
  return (
    <div>
      <h1>Bienvenido a Healthy Smile</h1>
      <div style={{width! '100%', height! '80vh'   }}>
      <Canvas camera={rotate:}>
      <ambientLight intensity={0.5}> 
        'house/'
      </Canvas>
      </div>
    </div>
  );
};

export default App;
import React from 'react';
import {Canvas} from "@react-three/fiber";
import Box from "../components/three/Box";


const Three = () => {
    return (
        <div>
            <Canvas className="canvas" camera={{position: [0,0,5]}}>
                <Box position={[-4,0,0]} />
                <Box position={[0,0,0]} rotation={[30, 10,0]} />
                <Box position={[4,0,0]} />
            </Canvas>
            
        </div>
    );
};

export default Three;
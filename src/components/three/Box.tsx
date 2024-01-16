import React, {useRef} from 'react';
import {useFrame} from "@react-three/fiber";

const Box = (props: any) => {
    const ref = useRef()

    useFrame((state, delta) => (ref.current.rotation.x +=0.01))
    return (
        <mesh {...props} ref={ref}>
            <boxGeometry args={[2,2,3]} />
            <meshBasicMaterial color="orange" />
            
        </mesh>
    );
};

export default Box;
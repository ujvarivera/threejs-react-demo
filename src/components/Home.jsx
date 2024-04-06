import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Corgi from "./Corgi"

const Hero = () => {
    return (
        <div className='section'>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Corgi />
                </Stage>
                <OrbitControls enableZoom={true}/>
            </Canvas>
        </div>
    )
}

export default Hero
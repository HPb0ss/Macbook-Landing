import { Environment, Lightformer } from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer
                        form="rect"
                        intensity={0.25}
                        position={[-10, 5, -5]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                    <Lightformer
                        form="rect"
                        intensity={0.3}
                        position={[10, 0, 1]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                </group>
            </Environment>
            <spotLight
                position={[-2, 10, 20]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 2}
            />
            <spotLight
                position={[0, -25, 40]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 5}
            />
            <spotLight
                position={[0, 15, 20]}
                angle={0.15}
                decay={0.1}
                intensity={Math.PI * 2}
            />
            <spotLight
                position={[0, 0, -25]}
                angle={0.9}
                decay={0.0}
                intensity={Math.PI * 3}
            />
        </group>
    );
};

export default StudioLights;

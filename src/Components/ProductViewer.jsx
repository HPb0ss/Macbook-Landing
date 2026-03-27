import React from "react";
import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import MacbookModel14 from "./models/Macbook-14";
import { useMediaQuery } from "react-responsive";

import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";

const ProductViewer = () => {
    const {
        color,
        colorName,
        scale,
        sizeInInches,
        setColor,
        setColorName,
        setScale,
        setSizeInInches,
    } = useMacbookStore();

    const setModelColor = (color) => {
        setColor(color);

        if (color === "#adb5bd") {
            setColorName("Space Gray");
        } else {
            setColorName("Dark");
        }
    };

    const setModelScale = (scale) => {
        setScale(scale);
        if (scale === 0.06) {
            setSizeInInches('14"');
        } else {
            setSizeInInches('16"');
        }
    };

    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>

            <div className="controls">
                <p className="info flex-center">
                    MacbookPro {sizeInInches} in {colorName} color
                </p>

                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div
                            onClick={() => setModelColor("#adb5bd")}
                            className={clsx(
                                "bg-neutral-300",
                                color === "#adb5bd" && "active",
                            )}
                        />
                        <div
                            onClick={() => {
                                setModelColor("#2e2c2e");
                            }}
                            className={clsx(
                                "bg-neutral-900",
                                color === "#2e2c2e" && "active",
                            )}
                        />
                    </div>

                    <div className="size-control">
                        <div
                            onClick={() => setModelScale(0.06)}
                            className={clsx(
                                scale === 0.06
                                    ? "bg-white text-black"
                                    : "bg-transparent text-white",
                            )}
                        >
                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => setModelScale(0.08)}
                            className={clsx(
                                scale === 0.08
                                    ? "bg-white text-black"
                                    : "bg-transparent text-white",
                            )}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>
            <Canvas
                id="canvas"
                camera={{ position: [0, 1, 5], fov: 50, near: 0.1, far: 100 }}
            >
                <StudioLights />

                <ModelSwitcher scale={scale} isMobile={isMobile} />
            </Canvas>
        </section>
    );
};

export default ProductViewer;

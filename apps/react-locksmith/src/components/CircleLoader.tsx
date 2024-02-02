/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

const containerStyle: React.CSSProperties | undefined = {
  position: "relative",
  width: "1.5rem",
  height: "1.5rem",
  boxSizing: "border-box"
};

const circleStyle: React.CSSProperties | undefined = {
  display: "block",
  width: "1.5rem",
  height: "1.5rem",
  border: "0.2rem solid rgba(255, 255, 255, 0.2)",
  borderTop: "0.2rem solid #ffffff",
  borderRight: "0.2rem solid #ffffff",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 0,
  left: 0
};

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 0.5
};

export const CircleLoader = () => {
    return (
        <div style={containerStyle}>
            <motion.span
            style={circleStyle}
            animate={{ rotate: 360 }}
            transition={spinTransition}
            />
        </div>
    );
}
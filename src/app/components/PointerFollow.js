import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../hooks/useFollowPointer";
import "../globals.css";

export default function PointFollower() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="parent-div" style={{ position: "relative" }}>
      <motion.div
        ref={ref}
        className="box"
        style={{ position: "absolute", top: y, left: x }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
    </div>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import  { useRef } from "react";
import Pool from "@/assets/images/pool.webp?url";
// import Desert from "@/assets/images/desert.webp?url";
import FullImage from "@/assets/images/fullImage.webp?url";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-6xl md:text-8xl relative z-30 bottom-32"
      >
        BESPOKE <span style={{color: '#5F775D'}}>LANDSCAPING</span> 
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${FullImage})` ,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      {/* <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage:  `url(${Desert})` ,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      /> */}
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${Pool})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
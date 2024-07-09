"use client";

import Image from "next/image";
import image1 from "@/public/1.jpg";
import image2 from "@/public/2.jpg";
import image3 from "@/public/3.jpg";
import image4 from "@/public/4.jpg";
import image5 from "@/public/5.jpg";
import image6 from "@/public/6.jpg";
import gun from "@/public/point-gun.jpg";
import styles from "./styles/styles.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Parallax() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: gun,
      scale: scale4,
    },
    {
      src: image2,
      scale: scale5,
    },
    {
      src: image3,
      scale: scale6,
    },
    {
      src: image4,
      scale: scale5,
    },
    {
      src: image5,
      scale: scale6,
    },
    {
      src: image6,
      scale: scale8,
    },
    {
      src: image1,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div style={{ scale }} className={styles.el} key={index}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import image1 from "@/public/img1.jpg";
import image2 from "@/public/img2.jpg";
import image3 from "@/public/img3.jpg";
import image4 from "@/public/img4.jpg";
import image5 from "@/public/img5.jpg";
import image6 from "@/public/img6.jpg";
import image7 from "@/public/img7.jpg";
import image8 from "@/public/img8.jpg";
import image9 from "@/public/img9.jpg";
import image10 from "@/public/img10.jpg";
import image11 from "@/public/img11.jpg";
import image12 from "@/public/img12.jpg";
import gun from "@/public/img8.jpg";
import styles from "./styles/styles.module.scss";
import { useScroll, useTransform, motion, distance } from "framer-motion";
import { useRef } from "react";

export default function Parallax() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4.2]);
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
      src: image12,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={`${styles.container}`}>
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

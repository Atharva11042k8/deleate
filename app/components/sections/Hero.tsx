
'use client';
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const CyberpunkCity = dynamic(() => import("../3d/CyberpunkCity"), { ssr: false });

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <CyberpunkCity />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-heading text-neonPurple drop-shadow-[0_0_15px_#8b5cf6]"
        >
          Atharva Hadke
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-3xl text-neonBlue mt-4"
        >
          Danger Programmer 😈
        </motion.h2>
      </div>
    </div>
  );
}

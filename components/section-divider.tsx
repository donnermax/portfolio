"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 my-24 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 16 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}

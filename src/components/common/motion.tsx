"use client";
import { motion, HTMLMotionProps } from "motion/react";
import { containerVariants, itemVariants } from "@/providers/motion";

export function ParentDiv({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ChildDiv({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={itemVariants} {...props}>
      {children}
    </motion.div>
  );
}

export function H1({ children, ...props }: HTMLMotionProps<"h1">) {
  return (
    <motion.h1 variants={itemVariants} {...props}>
      {children}
    </motion.h1>
  );
}

export function H2({ children, ...props }: HTMLMotionProps<"h2">) {
  return (
    <motion.h2 variants={itemVariants} {...props}>
      {children}
    </motion.h2>
  );
}

export function H6({ children, ...props }: HTMLMotionProps<"h2">) {
  return (
    <motion.h6 variants={itemVariants} {...props}>
      {children}
    </motion.h6>
  );
}

export function P({ children, ...props }: HTMLMotionProps<"p">) {
  return (
    <motion.p variants={itemVariants} {...props}>
      {children}
    </motion.p>
  );
}

export function Li({ children, ...props }: HTMLMotionProps<"li">) {
  return (
    <motion.li variants={itemVariants} {...props}>
      {children}
    </motion.li>
  );
}

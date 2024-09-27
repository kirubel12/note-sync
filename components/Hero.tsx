"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Share2, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden py-12">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:items-center">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl"
          >
            Sync Your <span className="text-primary">Thoughts</span>
            ,<br />
            Amplify Your <span className="text-secondary">Ideas</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-lg text-muted-foreground"
          >
            NoteSync: The AI-powered collaborative note-taking app that
            transforms your thoughts into actionable insights.
          </motion.p>
          <Button
            size="lg"
            className="font-semibold relative overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full">
              Start Your Free 7-Day Trial
            </span>
            <motion.span
              className="absolute inset-0 flex items-center justify-center bg-primary text-primary-foreground"
              initial={{ y: "100%" }}
              animate={{ y: isHovered ? 0 : "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <span className="font-bold text-lg">$4.99</span>
              <span className="text-sm ml-1">/month</span>
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-primary/10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ originY: "100%" }}
            />
          </Button>
        </div>
        <div className="relative">
          <Card className="relative overflow-hidden p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex h-[300px] flex-col"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <Sparkles className="h-6 w-6 text-warning" />
              </div>
              <div className="flex-grow space-y-4">
                <motion.div
                  initial={{ width: "60%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="h-4 rounded bg-muted"
                />
                <motion.div
                  initial={{ width: "80%" }}
                  animate={{ width: "40%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                  className="h-4 rounded bg-muted"
                />
                <motion.div
                  initial={{ width: "40%" }}
                  animate={{ width: "70%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                  className="h-4 rounded bg-muted"
                />
              </div>
              <div className="flex justify-between">
                <Share2 className="h-6 w-6 text-primary" />
                <Brain className="h-6 w-6 text-secondary" />
              </div>
            </motion.div>
          </Card>
        </div>
      </div>
    </section>
  );
}

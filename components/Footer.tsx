"use client";

import { Linkedin, Heart } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "Github", icon: FaGithub, href: "https://github.com/kirubel12" },
  {
    name: "Twitter",
    icon: RiTwitterXFill,
    href: "https://x.com/kirubel_habte21",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/kirubel_habte21",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/kirubel-habte",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background py-6">
      <div className="container mx-auto flex flex-col items-center">
        <motion.div
          className="mb-4 flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.name} page`}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="text-sm text-muted-foreground flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Made in Ethiopia with
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart className="h-4 w-4 mx-1 text-red-500" />
          </motion.span>
        </motion.p>
      </div>
    </footer>
  );
}

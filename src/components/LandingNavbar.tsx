import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const LandingNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 border-b border-blue-100 bg-white/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <motion.img whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.05 }} transition={{ duration: 0.5 }} src="/GigShield-1.png" alt="GigShield Logo" className="h-9 object-contain" />
          <span className="font-display text-xl font-bold text-blue-600">GigShield</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <motion.a whileHover={{ y: -2 }} href="#features" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Features</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#how-it-works" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">How It Works</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#stories" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Stories</motion.a>
          <Link to="#">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 border-0">
                Get Started
              </Button>
            </motion.div>
          </Link>
        </div>

        <button className="md:hidden text-slate-600 hover:text-blue-600" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-blue-100 bg-blue-50 md:hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600" onClick={() => setOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600" onClick={() => setOpen(false)}>How It Works</a>
              <a href="#stories" className="text-sm font-medium text-slate-600 hover:text-blue-600" onClick={() => setOpen(false)}>Stories</a>
              <Link to="#" onClick={() => setOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default LandingNavbar;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield, ArrowRight, Download, CreditCard, Heart, TrendingUp, FileText,
  Smartphone, UserCheck, Zap, Star, ChevronRight, BadgeCheck, Wallet,
  Layers, Bike, Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LandingNavbar from "@/components/LandingNavbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const problems = [
  { icon: CreditCard, title: "No Financial Identity", desc: "Gig workers cannot show salary slips to banks or landlords for loans and rentals." },
  { icon: Wallet, title: "High Interest Loans", desc: "Workers depend on moneylenders charging 60-120% annual interest rates." },
  { icon: Heart, title: "No Health Security", desc: "A single illness can wipe out months of savings with no insurance safety net." },
  { icon: TrendingUp, title: "No Career Growth", desc: "Years of gig work create no professional record or upward mobility." },
];

const features = [
  { icon: FileText, title: "Income Passport", desc: "A verified income certificate accepted by banks and landlords." },
  { icon: Activity, title: "GigScore", desc: "Income reliability score (300-900) based on consistency and activity." },
  { icon: Layers, title: "Multi-Platform Tracking", desc: "Combine earnings from Ola, Uber, Swiggy, Zomato in one view." },
  { icon: Heart, title: "Health Insurance", desc: "Affordable insurance starting from ₹99/month for gig workers." },
  { icon: Zap, title: "Emergency Loans", desc: "Quick loans ₹5,000 – ₹75,000 based on your GigScore." },
  { icon: Bike, title: "Career Ladder", desc: "Progress from delivery partner to fleet owner with structured growth." },
];

const steps = [
  { num: "01", title: "Connect Your Gig Apps", desc: "Link Ola, Uber, Swiggy, Zomato accounts securely." },
  { num: "02", title: "Auto-Track Earnings", desc: "GigShield automatically tracks all your income." },
  { num: "03", title: "GigScore Calculated", desc: "Your income reliability score is built over time." },
  { num: "04", title: "Unlock Financial Services", desc: "Access loans, insurance, and savings products." },
];

const stories = [
  { name: "Raju", role: "Ola Driver", story: "Used his GigScore of 780 to secure a ₹50,000 emergency loan at just 12% interest for his daughter's school fees.", avatar: "R" },
  { name: "Priya", role: "Swiggy Delivery Partner", story: "Health insurance through GigShield covered ₹2.5 lakh in hospital bills when she had a bike accident.", avatar: "P" },
  { name: "Venkat", role: "Multi-Platform Worker", story: "Combined earnings from 3 platforms to qualify for a bike loan — now earns 40% more.", avatar: "V" },
];

const Index = () => (
  <div className="min-h-screen bg-blue-50 text-slate-900">
    <LandingNavbar />

    {/* Hero */}
    <section className="relative overflow-hidden px-4 pb-20 pt-16 md:pt-24">
      <motion.div animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-gradient-to-br from-blue-200/50 via-transparent to-indigo-200/50" />
      <div className="container relative mx-auto grid items-center gap-12 md:grid-cols-2">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.div variants={fadeUp} custom={0} whileHover={{ scale: 1.05 }} className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 cursor-default">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}><Shield className="h-4 w-4" /></motion.div> Trusted by 50,000+ Gig Workers
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            India's Professional Identity & Financial Security Platform for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Gig Workers
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-5 max-w-lg text-lg text-slate-600">
            Build your financial identity through verified income, GigScore, affordable insurance, emergency loans, and a career growth system.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4">
            <Link to="#">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0, y: [-10, 10, -10] }} transition={{ opacity: { duration: 0.8, delay: 0.3 }, x: { duration: 0.8, delay: 0.3 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          className="relative hidden md:block"
        >
          <div className="relative mx-auto w-72">
            <motion.div animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-2xl" />
            <div className="relative rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">GigShield</p>
                  <p className="text-xs text-slate-600">Worker Dashboard</p>
                </div>
              </div>
              <div className="mb-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
                <p className="text-xs opacity-80">GigScore</p>
                <p className="font-display text-3xl font-bold">720</p>
                <p className="text-xs">Trusted Worker ✓</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between rounded-lg bg-blue-50 p-2.5 text-sm">
                  <span className="text-slate-600">Today</span><span className="font-semibold text-slate-800">₹1,240</span>
                </div>
                <div className="flex justify-between rounded-lg bg-blue-50 p-2.5 text-sm">
                  <span className="text-slate-600">This Week</span><span className="font-semibold text-slate-800">₹8,450</span>
                </div>
                <div className="flex justify-between rounded-lg bg-blue-50 p-2.5 text-sm">
                  <span className="text-slate-600">This Month</span><span className="font-semibold text-slate-800">₹32,100</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Problems */}
    <section className="bg-white border-y border-blue-100 px-4 py-20">
      <div className="container mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">
            The Problems <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Gig Workers</span> Face
          </h2>
          <p className="mt-3 text-slate-600">75 million gig workers in India lack basic financial security</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-6 transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200/50"
            >
              <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.4 }} className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                <p.icon className="h-6 w-6 text-red-400" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-slate-800">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section id="features" className="px-4 py-20">
      <div className="container mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">
            Everything You Need to Build Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Financial Identity</span>
          </h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-blue-100 bg-white p-6 transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-200/50"
            >
              <motion.div whileHover={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 0.4 }} className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                <f.icon className="h-6 w-6 text-blue-400" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section id="how-it-works" className="bg-white border-y border-blue-100 px-4 py-20">
      <div className="container mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">How It Works</h2>
          <p className="mt-3 text-slate-600">Get started in 4 simple steps</p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
              className="relative rounded-2xl border border-blue-100 bg-blue-50/50 p-6 text-center transition-all hover:shadow-lg hover:shadow-blue-200/50"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 font-display text-xl font-bold text-white">
                {s.num}
              </div>
              <h3 className="font-display text-base font-semibold text-slate-800">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              {i < steps.length - 1 && (
                <motion.div 
                  animate={{ x: [0, 5, 0] }} 
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-5 top-1/2 hidden -translate-y-1/2 md:block z-10"
                >
                  <ChevronRight className="h-6 w-6 text-blue-400" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Stories */}
    <section id="stories" className="px-4 py-20">
      <div className="container mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">Real Stories from <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Real Workers</span></h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <motion.div key={s.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="rounded-2xl border border-blue-100 bg-white p-6 transition-all hover:shadow-xl hover:shadow-blue-200/50"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 font-display text-lg font-bold text-white">
                  {s.avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-slate-800">{s.name}</p>
                  <p className="text-xs text-slate-600">{s.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{s.story}</p>
              <div className="mt-4 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <motion.div key={j} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + j * 0.1 }}>
                    <Star className="h-4 w-4 fill-blue-500 text-blue-500" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-4 py-20">
      <div className="container mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-center text-white md:p-16 shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl">Start Building Your Professional Gig Identity Today</h2>
          <p className="mx-auto mt-4 max-w-md text-blue-100">Join thousands of gig workers who are taking control of their financial future.</p>
          <p className="mt-8 text-lg font-medium text-white">Please use the app after installation to get started.</p>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;

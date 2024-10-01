"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Brain,
  Check,
  ChevronDown,
  Cloud,
  Menu,
  Moon,
  Sun,
  Users,
  Waves,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");
  const [activeEnvironment, setActiveEnvironment] = useState<
    "night" | "day" | "rain" | "ocean"
  >("night");
  const [showDemo, setShowDemo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log(currentTime);
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-AU", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Australia/Adelaide",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);

  const environmentStyles = {
    night: "bg-gradient-to-b from-black-900 to-black-800",
    day: "bg-gradient-to-b from-green-500 to-green-400",
    rain: "bg-gradient-to-b from-blue-700 to-blue-600",
    ocean: "bg-gradient-to-b from-yellow-600 to-yellow-500",
  };

  const changeEnvironment = (env: "night" | "day" | "rain" | "ocean") => {
    setActiveEnvironment(env);
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden text-white ${environmentStyles[activeEnvironment]} transition-all duration-500`}
    >
      {/* Add custom fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Raleway:wght@300;400;700&display=swap");
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-30 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center overflow-hidden"
          >
            <span className="font-orbitron text-xl font-bold text-white">
              RL
            </span>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {[
              "About",
              "Problem",
              "Solution",
              "REST",
              "Insights",
              "Demo",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-raleway text-sm hover:text-opacity-80 transition-colors"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black bg-opacity-95 py-4"
          >
            {[
              "About",
              "Problem",
              "Solution",
              "REST",
              "Insights",
              "Demo",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-raleway text-sm hover:text-opacity-80 transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center z-10"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-orbitron font-bold mb-4 tracking-wider"
          >
            Rest Labs
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-raleway font-light mb-8"
          >
            Your customized Virtual Environment for healing
          </motion.p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255,255,255,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("about");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black px-6 md:px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 text-base md:text-lg font-raleway font-medium"
          >
            Explore Our Solutions
          </motion.button>
        </motion.div>

        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-4 md:space-x-6">
          {[
            { icon: Moon, env: "night" },
            { icon: Sun, env: "day" },
            { icon: Cloud, env: "rain" },
            { icon: Waves, env: "ocean" },
          ].map(({ icon: Icon, env }) => (
            <motion.button
              key={env}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                changeEnvironment(env as "night" | "day" | "rain" | "ocean")
              }
              className={`p-2 md:p-3 rounded-full ${
                activeEnvironment === env ? "bg-white bg-opacity-30" : ""
              }`}
            >
              <Icon size={24} />
            </motion.button>
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-8 md:mb-12 text-center"
          >
            Who We Are
          </motion.h2>
          <div className="text-center">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl font-raleway mb-6"
            >
              Rest Labs is at the forefront of revolutionizing stress management
              through cutting-edge Virtual Reality technology. We create
              immersive, healing environments that transport users to tranquil
              spaces, promoting relaxation and mental well-being.
            </motion.p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl font-raleway"
            >
              Our team of VR experts, meditation specialists, and AI researchers
              work together to deliver unparalleled experiences that help
              individuals and organizations combat the detrimental effects of
              stress in our fast-paced world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="py-16 md:py-20 bg-black bg-opacity-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-8 md:mb-12 text-center"
          >
            The Problem
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-4 md:mb-6">
                Stress is Overwhelming
              </h3>
              <p className="text-base md:text-xl font-raleway mb-4 md:mb-6">
                In today&apos;s fast-paced world, people struggle with managing
                stress in the workplace and at home. The lack of personalized
                solutions for stress relief leads to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-raleway">
                <li>Decreased productivity</li>
                <li>Health issues</li>
                <li>Poor work-life balance</li>
                <li>Increased turnover rates</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white bg-opacity-10 p-6 md:p-8 rounded-xl backdrop-blur-md"
            >
              <h4 className="text-xl md:text-2xl font-orbitron font-bold mb-4">
                Stress Symptoms
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Tension",
                  "Pressure",
                  "Anxiety",
                  "Fatigue",
                  "Overwhelm",
                  "Strain",
                  "Burden",
                  "Exhaustion",
                  "Agitation",
                  "Frustration",
                  "Worry",
                  "Burnout",
                  "Panic",
                  "Nervousness",
                  "Deadline",
                  "Restlessness",
                  "Irritability",
                  "Uncertainty",
                ].map((symptom, index) => (
                  <span
                    key={index}
                    className="bg-white bg-opacity-20 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-raleway"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-8 md:mb-16 text-center"
          >
            Our Solution
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Curated Meditation Content",
                description:
                  "Expert-led meditation sessions designed for various stress levels and preferences, all within stunning virtual environments.",
                icon: Brain,
              },
              {
                title: "Real 360° VR Environments",
                description:
                  "Immerse yourself in breathtaking, real-world locations captured in high-fidelity 360-degree video for ultimate relaxation.",
                icon: Sun,
              },
              {
                title: "Custom AI-Generated Environments",
                description:
                  "Experience unique, personalized environments tailored to your preferences, generated by our advanced AI algorithms.",
                icon: Cloud,
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white bg-opacity-10 p-6 md:p-8 rounded-xl backdrop-blur-md hover:bg-opacity-20 transition-all duration-300"
              >
                <solution.icon size={40} className="mb-4" />
                <h3 className="text-xl md:text-2xl font-orbitron font-bold mb-4">
                  {solution.title}
                </h3>
                <p className="text-base md:text-lg font-raleway">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REST Concept Section */}
      <section id="rest" className="py-16 md:py-20 bg-black bg-opacity-30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-8 md:mb-16 text-center"
          >
            The REST Concept
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-4 md:mb-6">
                Relax. Escape. Soothe. Transform.
              </h3>
              <p className="text-base md:text-xl font-raleway mb-4 md:mb-6">
                Our REST concept is at the core of every experience we create.
                It&apos;s designed to guide you through a journey of complete
                relaxation and transformation.
              </p>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg font-raleway">
                {["Relax", "Escape", "Soothe", "Transform"].map(
                  (item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 md:mr-3" size={20} />
                      <span>
                        <strong>{item}:</strong>{" "}
                        {item === "Relax"
                          ? "Unwind and let go of tension"
                          : item === "Escape"
                          ? "Immerse yourself in tranquil virtual worlds"
                          : item === "Soothe"
                          ? "Calm your mind and rejuvenate your spirit"
                          : "Emerge refreshed and ready to tackle challenges"}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white bg-opacity-10 p-6 md:p-8 rounded-xl backdrop-blur-md mt-8 md:mt-0"
            >
              <h4 className="text-xl md:text-2xl font-orbitron font-bold mb-4">
                REST Illustration
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Relax", "Escape", "Soothe", "Transform"].map(
                  (item, index) => (
                    <span
                      key={index}
                      className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm md:text-base font-raleway"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section id="insights" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-8 md:mb-16 text-center"
          >
            Market Insights
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-6 md:mb-8">
                The Impact of Stress
              </h3>
              <ul className="space-y-4 md:space-y-6 text-base md:text-lg font-raleway">
                {[
                  {
                    text: "60-80% of doctor visits are stress-related",
                    icon: BarChart,
                  },
                  {
                    text: "40% of job turnover can be traced back to stress",
                    icon: Users,
                  },
                  {
                    text: "Large companies lose ~$3.5 million annually due to stress-related absenteeism",
                    icon: BarChart,
                  },
                  {
                    text: "Stress-related industrial accidents cost twice that of others",
                    icon: BarChart,
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <item.icon
                      size={24}
                      className="mr-3 md:mr-4 flex-shrink-0"
                    />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-6 md:mb-8">
                Our Research Findings
              </h3>
              <ul className="space-y-4 md:space-y-6 text-base md:text-lg font-raleway">
                {[
                  "18/26 interviewees felt a lack of resources for stress management at work",
                  "16/26 interviewees see value in VR stress relief activities at work or university",
                  "12/26 would consider a subscription-based stress management solution",
                  "Personalisation and complete immersion are highly valued",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-3 md:mr-4 text-xl md:text-2xl">✨</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mt-10 md:mt-16 text-center font-raleway font-light"
          >
            Investing in stress management is not just good for
            employees—it&apos;s crucial for business success.
          </motion.p>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 md:py-20 bg-black bg-opacity-40">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-8 md:mb-16 text-center"
          >
            Experience Rest Labs
          </motion.h2>
          <div className="flex flex-col items-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDemo(!showDemo)}
              className="bg-white text-black px-6 md:px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 text-base md:text-lg font-raleway font-medium mb-6 md:mb-8"
            >
              {showDemo ? "Hide Demo" : "Show Demo"}
            </motion.button>
            {showDemo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl aspect-video bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center text-xl md:text-2xl font-raleway">
                  Interactive Demo Placeholder
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-8 md:mb-16 text-center"
          >
            Get in Touch
          </motion.h2>
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            {["Name", "Email", "Message"].map((field) => (
              <div key={field} className="mb-6 md:mb-8">
                <label
                  htmlFor={field.toLowerCase()}
                  className="block mb-2 text-base md:text-lg font-raleway"
                >
                  {field}
                </label>
                {field === "Message" ? (
                  <textarea
                    id={field.toLowerCase()}
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-md font-raleway resize-none focus:outline-none focus:ring-2 focus:ring-white"
                  />
                ) : (
                  <input
                    type={field === "Email" ? "email" : "text"}
                    id={field.toLowerCase()}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-md font-raleway focus:outline-none focus:ring-2 focus:ring-white"
                  />
                )}
              </div>
            ))}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-white text-black py-2 md:py-3 rounded-lg text-base md:text-lg font-raleway font-bold hover:bg-opacity-90 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 bg-black bg-opacity-30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base md:text-lg font-raleway font-light">
            &copy; {new Date().getFullYear()} Rest Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

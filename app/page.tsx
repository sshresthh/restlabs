"use client";

import { motion } from "framer-motion";
import { ChevronDown, Cloud, Moon, Sun, Waves } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");
  const [activeEnvironment, setActiveEnvironment] = useState("day");

  useEffect(() => {
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
  }, []);

  const environmentStyles = {
    day: "bg-gradient-to-b from-sky-400 to-sky-200",
    night: "bg-gradient-to-b from-indigo-900 to-purple-800",
    rain: "bg-gradient-to-b from-gray-700 to-gray-500",
    ocean: "bg-gradient-to-b from-blue-600 to-blue-400",
  };

  const changeEnvironment = (env) => {
    setActiveEnvironment(env);
  };

  return (
    <div className={`relative min-h-screen w-full overflow-x-hidden text-white ${environmentStyles[activeEnvironment]} transition-all duration-500`}>
      {/* Add custom fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Raleway:wght@300;400;700&display=swap');
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full z-10"
        >
          <header className="flex justify-between items-start p-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center overflow-hidden"
            >
              <span className="font-orbitron text-2xl font-bold text-white">RL</span>
            </motion.div>
            <div className="flex flex-col items-end">
              <span className="text-lg font-raleway font-light">{currentTime} ACST</span>
              <span className="mt-2 text-sm font-raleway font-light">DIGITAL / IN PERSON</span>
              <Link href="/signin" className="mt-2 hover:underline text-sm font-raleway">SIGN IN</Link>
            </div>
          </header>

          <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-8xl font-orbitron font-bold mb-4 tracking-wider"
            >
              Rest Labs
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-raleway font-light mb-8"
            >
              Your customized Virtual Environment for healing
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg font-raleway font-medium"
            >
              Explore Our Solutions
            </motion.button>
          </main>

          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-6">
            {[
              { icon: Sun, env: "day" },
              { icon: Moon, env: "night" },
              { icon: Cloud, env: "rain" },
              { icon: Waves, env: "ocean" },
            ].map(({ icon: Icon, env }) => (
              <motion.button
                key={env}
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => changeEnvironment(env)}
                className={`p-3 rounded-full ${activeEnvironment === env ? 'bg-white bg-opacity-30' : ''}`}
              >
                <Icon size={28} />
              </motion.button>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={40} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-orbitron font-bold mb-12 text-center"
          >
            Who We Are
          </motion.h2>
          <div className="text-center">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-xl font-raleway mb-6"
            >
              Rest Labs is at the forefront of revolutionizing stress management through cutting-edge Virtual Reality technology. We create immersive, healing environments that transport users to tranquil spaces, promoting relaxation and mental well-being.
            </motion.p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl font-raleway"
            >
              Our team of VR experts, meditation specialists, and AI researchers work together to deliver unparalleled experiences that help individuals and organizations combat the detrimental effects of stress in our fast-paced world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-orbitron font-bold mb-16 text-center"
          >
            Our Solutions
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Curated Meditation Content",
                description: "Expert-led meditation sessions designed for various stress levels and preferences, all within stunning virtual environments.",
              },
              {
                title: "Real 360 VR Environments",
                description: "Immerse yourself in breathtaking, real-world locations captured in high-fidelity 360-degree video for ultimate relaxation.",
              },
              {
                title: "Custom AI-Generated Environments",
                description: "Experience unique, personalized environments tailored to your preferences, generated by our advanced AI algorithms.",
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-md hover:bg-opacity-20 transition-all duration-300"
              >
                <h3 className="text-2xl font-orbitron font-bold mb-4">{solution.title}</h3>
                <p className="text-lg font-raleway">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-orbitron font-bold mb-16 text-center"
          >
            Why Stress Management Matters
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-orbitron font-bold mb-8">The Impact of Stress</h3>
              <ul className="list-none space-y-6 text-lg font-raleway">
                {[
                  "60-80% of doctor visits are stress-related",
                  "40% of job turnover is due to stress",
                  "Stress costs large companies ~$3.5 million annually in absenteeism",
                  "Stress-related accidents are twice as costly",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-4 text-2xl">🔹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-orbitron font-bold mb-8">Benefits of Effective Stress Management</h3>
              <ul className="list-none space-y-6 text-lg font-raleway">
                {[
                  "Increased productivity and job satisfaction",
                  "Reduced healthcare costs and absenteeism",
                  "Improved employee retention",
                  "Enhanced workplace safety and well-being",
                  "Boosted company morale and team cohesion",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-4 text-2xl">✨</span>
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
            className="text-2xl mt-16 text-center font-raleway font-light"
          >
            Investing in stress management is not just good for employees—it's crucial for business success.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-orbitron font-bold mb-16 text-center"
          >
            Get in Touch
          </motion.h2>
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            {["Name", "Email", "Message"].map((field, index) => (
              <div key={field} className="mb-8">
                <label htmlFor={field.toLowerCase()} className="block mb-2 text-lg font-raleway">
                  {field}
                </label>
                {field === "Message" ? (
                  <textarea
                    id={field.toLowerCase()}
                    rows={4}
                    className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-md font-raleway resize-none focus:outline-none focus:ring-2 focus:ring-white"
                  />
                ) : (
                  <input
                    type={field === "Email" ? "email" : "text"}
                    id={field.toLowerCase()}
                    className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-md font-raleway focus:outline-none focus:ring-2 focus:ring-white"
                  />
                )}
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg text-lg font-raleway font-bold hover:bg-opacity-90 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black bg-opacity-30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-raleway font-light">
            &copy; {new Date().getFullYear()} Rest Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
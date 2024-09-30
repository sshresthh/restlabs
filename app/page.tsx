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
    <div
      className={`relative min-h-screen w-full overflow-x-hidden text-white ${environmentStyles[activeEnvironment]}`}
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full z-10"
        >
          <header className="flex justify-between items-start p-6">
            <div className="w-8 h-8 rounded-full bg-white" />
            <div className="flex flex-col items-end">
              <span className="text-lg font-light">{currentTime} ACST</span>
              <span className="mt-2 text-sm font-light">
                DIGITAL / IN PERSON
              </span>
              <Link href="/signin" className="mt-2 hover:underline text-sm">
                SIGN IN
              </Link>
            </div>
          </header>

          <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-7xl font-light mb-4"
            >
              Rest Labs
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-light mb-8"
            >
              Your customized Virtual Environment for healing
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors text-lg"
            >
              Explore Our Solutions
            </motion.button>
          </main>

          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => changeEnvironment("day")}
            >
              <Sun size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => changeEnvironment("night")}
            >
              <Moon size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => changeEnvironment("rain")}
            >
              <Cloud size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => changeEnvironment("ocean")}
            >
              <Waves size={24} />
            </motion.button>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-light mb-12 text-center"
          >
            Who We Are
          </motion.h2>
          <div className="text-center">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-xl mb-6"
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
              className="text-xl"
            >
              Our team of VR experts, meditation specialists, and AI researchers
              work together to deliver unparalleled experiences that help
              individuals and organizations combat the detrimental effects of
              stress in our fast-paced world.
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
            className="text-5xl font-light mb-12 text-center"
          >
            Our Solutions
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Curated Meditation Content",
                description:
                  "Expert-led meditation sessions designed for various stress levels and preferences, all within stunning virtual environments.",
              },
              {
                title: "Real 360 VR Environments",
                description:
                  "Immerse yourself in breathtaking, real-world locations captured in high-fidelity 360-degree video for ultimate relaxation.",
              },
              {
                title: "Custom AI-Generated Environments",
                description:
                  "Experience unique, personalized environments tailored to your preferences, generated by our advanced AI algorithms.",
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-md"
              >
                <h3 className="text-2xl font-light mb-4">{solution.title}</h3>
                <p className="text-lg">{solution.description}</p>
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
            className="text-5xl font-light mb-12 text-center"
          >
            Why Stress Management Matters
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-light mb-6">The Impact of Stress</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>60-80% of doctor visits are stress-related</li>
                <li>40% of job turnover is due to stress</li>
                <li>
                  Stress costs large companies ~$3.5 million annually in
                  absenteeism
                </li>
                <li>Stress-related accidents are twice as costly</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-light mb-6">
                Benefits of Effective Stress Management
              </h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Increased productivity and job satisfaction</li>
                <li>Reduced healthcare costs and absenteeism</li>
                <li>Improved employee retention</li>
                <li>Enhanced workplace safety and well-being</li>
                <li>Boosted company morale and team cohesion</li>
              </ul>
            </motion.div>
          </div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl mt-12 text-center font-light"
          >
            Investing in stress management is not just good for employees—it's
            crucial for business success.
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
            className="text-5xl font-light mb-12 text-center"
          >
            Get in Touch
          </motion.h2>
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-md"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-md"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-lg">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-md"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-light">
            &copy; {new Date().getFullYear()} Rest Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

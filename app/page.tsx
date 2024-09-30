"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");

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

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10">
          <header className="flex justify-between items-start p-6">
            <div className="w-8 h-8 rounded-full bg-white" />
            <div className="flex flex-col items-end">
              <span>{currentTime} ACST</span>
              <span className="mt-2">DIGITAL / IN PERSON</span>
              <Link href="/signin" className="mt-2 hover:underline">
                SIGN IN
              </Link>
            </div>
          </header>

          <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-6xl font-light mb-4">Rest Labs</h1>
            <p className="text-xl font-light mb-8">
              Your customized Virtual Environment for healing
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-80 transition-colors"
            >
              Explore Our Solutions
            </button>
          </main>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen items-center justify-center py-20"
      >
        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-light mb-8 text-center">Who We Are</h2>
            <div className="text-center">
              <p className="text-lg mb-4">
                Rest Labs is at the forefront of revolutionizing stress
                management through cutting-edge Virtual Reality technology. We
                create immersive, healing environments that transport users to
                tranquil spaces, promoting relaxation and mental well-being.
              </p>
              <p className="text-lg">
                Our team of VR experts, meditation specialists, and AI
                researchers work together to deliver unparalleled experiences
                that help individuals and organizations combat the detrimental
                effects of stress in our fast-paced world.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Solutions Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-8 text-center">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-2xl font-light mb-4">
                Curated Meditation Content
              </h3>
              <p>
                Expert-led meditation sessions designed for various stress
                levels and preferences, all within stunning virtual
                environments.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-2xl font-light mb-4">
                Real 360 VR Environments
              </h3>
              <p>
                Immerse yourself in breathtaking, real-world locations captured
                in high-fidelity 360-degree video for ultimate relaxation.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-2xl font-light mb-4">
                Custom AI-Generated Environments
              </h3>
              <p>
                Experience unique, personalized environments tailored to your
                preferences, generated by our advanced AI algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-8 text-center">
            Why Stress Management Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-4">The Impact of Stress</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>60-80% of doctor visits are stress-related</li>
                <li>40% of job turnover is due to stress</li>
                <li>
                  Stress costs large companies ~$3.5 million annually in
                  absenteeism
                </li>
                <li>Stress-related accidents are twice as costly</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-4">
                Benefits of Effective Stress Management
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Increased productivity and job satisfaction</li>
                <li>Reduced healthcare costs and absenteeism</li>
                <li>Improved employee retention</li>
                <li>Enhanced workplace safety and well-being</li>
                <li>Boosted company morale and team cohesion</li>
              </ul>
            </div>
          </div>
          <p className="text-xl mt-8 text-center">
            Investing in stress management is not just good for employees—its
            crucial for business success.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-8 text-center">Get in Touch</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 bg-white bg-opacity-10 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-white bg-opacity-10 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 bg-white bg-opacity-10 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-2 rounded hover:bg-opacity-80 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Rest Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

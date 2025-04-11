import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";
import {
  BoltIcon,
  UserGroupIcon,
  SparklesIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  HeartIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  const handleInternalClick = (cb?: () => void) => (e: React.MouseEvent) => {
    if (
      (e.target as HTMLAnchorElement).href.startsWith(
        window.location.origin + "/"
      )
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (cb) cb();
  };

  useEffect(() => {
    document.title = "BoostLyx - About Us";
    handleInternalClick();
  }, []);

  const BackgroundShapes = () => (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none overflow-hidden z-0">
      <motion.svg
        className="absolute top-[8vh] left-[5vw]"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 0.2,
          y: [0, -50, 0],
        }}
        transition={{
          delay: 0.3,
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <path
          d="M30 170L170 30"
          stroke="#4F46E5"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M160 40L170 30L155 25"
          stroke="#F59E0B"
          strokeWidth="1.5"
          fill="none"
        />
        <motion.circle
          cx="30"
          cy="170"
          r="5"
          fill="#4F46E5"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      <motion.svg
        className="absolute top-[10vh] right-[5vw]"
        width="180"
        height="180"
        viewBox="0 0 180 180"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.4 }}
      >
        <motion.circle
          cx="30"
          cy="30"
          r="4"
          fill="#7C3AED"
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            delay: 0.5,
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="90"
          cy="60"
          r="4"
          fill="#F59E0B"
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            delay: 0.7,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[10vh] left-[5vw]"
        width="200"
        height="100"
        viewBox="0 0 220 120"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 0.2,
          x: 0,
        }}
        transition={{ delay: 0.5 }}
      >
        <motion.path
          d="M20 100C60 40 160 40 200 100"
          stroke="url(#growthGradient)"
          strokeWidth="1.5"
          fill="none"
          animate={{
            pathLength: [0.95, 1, 0.95],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );

  return (
    <>
      <Header Page="About" />
      <BackgroundShapes />

      <section className="relative bg-transparent overflow-hidden py-24 md:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              About <span className="text-[#ffac33]">BoostLyx</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering businesses and creators to achieve exponential growth
              through innovative tools and strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-indigo-600">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2025, BoostLyx began as a simple idea to help small
                businesses grow their online presence. What started as a side
                project quickly evolved into a comprehensive growth platform
                serving thousands of customers worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to democratize access to premium growth tools,
                making powerful marketing and engagement technologies available
                to everyone - not just large corporations with big budgets.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: GlobeAltIcon, text: "Global Reach" },
                  { icon: HeartIcon, text: "Customer Focused" },
                  { icon: ShieldCheckIcon, text: "Secure Platform" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white bg-opacity-80 rounded-xl p-3 shadow-sm"
                  >
                    <item.icon className="w-6 h-6 text-indigo-600 mr-3" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-transparent overflow-hidden py-24 md:py-32 bg-gradient-to-b from-white to-indigo-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#ffac33]">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at BoostLyx
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries to deliver cutting-edge solutions that drive real results.",
                icon: SparklesIcon,
                color: "bg-purple-100 text-purple-600",
              },
              {
                title: "Transparency",
                description:
                  "Honest pricing, clear communication, and no hidden fees or surprises.",
                icon: LightBulbIcon,
                color: "bg-amber-100 text-amber-600",
              },
              {
                title: "Empowerment",
                description:
                  "We give our users the tools and knowledge to take control of their growth.",
                icon: BoltIcon,
                color: "bg-indigo-100 text-indigo-600",
              },
              {
                title: "Community",
                description:
                  "We believe growth happens best when we support and learn from each other.",
                icon: UserGroupIcon,
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "Integrity",
                description:
                  "We do what's right, not just what's easy or profitable.",
                icon: ShieldCheckIcon,
                color: "bg-green-100 text-green-600",
              },
              {
                title: "Passion",
                description:
                  "We love what we do, and it shows in every feature and interaction.",
                icon: HeartIcon,
                color: "bg-red-100 text-red-600",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#4F46E54D] hover:border-indigo-100 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative bg-transparent overflow-hidden py-24 md:py-32"
        id="why-boostlyx"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="bg-gradient-to-br from-indigo-50 to-[#fff4e0] rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg border-2 border-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#ffac33] rounded-full filter blur-3xl opacity-20"></div>

            <div className="relative flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="inline-flex flex-col items-center">
                  <div className="w-40 h-40 bg-white rounded-2xl border-2 border-indigo-100 shadow-md flex items-center justify-center mb-6">
                    <BuildingOfficeIcon className="w-24 h-24 text-indigo-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-600">
                    Why Choose Us
                  </h3>
                </div>
              </div>

              <div className="flex-grow">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                >
                  The <span className="text-[#ffac33]">BoostLyx</span>{" "}
                  Difference
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-xl text-gray-700 mb-8 max-w-2xl"
                >
                  We're not just another growth platform. Here's what sets us
                  apart:
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      icon: BoltIcon,
                      title: "Proven Results",
                      description:
                        "Our users see 2-3x faster growth compared to industry averages.",
                    },
                    {
                      icon: SparklesIcon,
                      title: "AI-Powered",
                      description:
                        "Smart algorithms optimize your content and posting strategy.",
                    },
                    {
                      icon: ArrowTrendingUpIcon,
                      title: "All-in-One",
                      description:
                        "Everything you need in one platform - no juggling multiple tools.",
                    },
                    {
                      icon: UserGroupIcon,
                      title: "Dedicated Support",
                      description:
                        "Real humans ready to help you succeed, 24/7.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-white bg-opacity-80 rounded-xl p-6 shadow-sm"
                    >
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                          <item.icon className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to="/services"
                    onClick={handleInternalClick()}
                    className="inline-block px-8 py-4 text-lg font-bold bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Explore Our Services
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-transparent overflow-hidden py-24 md:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="bg-gradient-to-br from-indigo-50 to-[#fff4e0] rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg border-2 border-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#ffac33] rounded-full filter blur-3xl opacity-20"></div>

            <div className="relative flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="inline-flex flex-col items-center">
                  <div className="w-40 h-40 bg-white rounded-2xl border-2 border-indigo-100 shadow-md flex items-center justify-center mb-6">
                    <svg
                      className="w-24 h-24 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-600">
                    BoostLyx Community
                  </h3>
                </div>
              </div>

              <div className="flex-grow">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                >
                  Join Our <span className="text-[#ffac33]">Vibrant</span> Forum
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-xl text-gray-700 mb-8 max-w-2xl"
                >
                  Connect with fellow growth enthusiasts, share strategies, and
                  get expert advice in our buzzing community.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: UserGroupIcon, text: "10,000+ members" },
                    { icon: BoltIcon, text: "Daily discussions" },
                    { icon: SparklesIcon, text: "Exclusive content" },
                    { icon: ArrowTrendingUpIcon, text: "Growth challenges" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center bg-white bg-opacity-80 rounded-xl p-3 shadow-sm"
                    >
                      <item.icon className="w-6 h-6 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="https://www.forum.boostlyx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full text-center shadow-lg hover:shadow-xl transition-all"
                  >
                    Join Now - It's Free!
                  </a>
                  <a
                    href="https://www.forum.boostlyx.com/preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-gray-800 font-bold rounded-full text-center border-2 border-gray-200 hover:border-indigo-300 transition-all"
                  >
                    Take a Tour
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

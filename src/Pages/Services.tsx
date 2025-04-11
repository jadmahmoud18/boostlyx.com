import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";
import {
  BoltIcon,
  SparklesIcon,
  UserGroupIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  PaintBrushIcon,
  CameraIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
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

  const services = [
    {
      title: "Content Generator",
      description:
        "Automatically generate powerful content that our intelligence sees viral.",
      href: "/services/content-generator",
      icon: CameraIcon,
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "Website builder",
      description:
        "Build an amaing website for you using our amazing AI website builder.",
      href: "/services/website-builder",
      icon: CodeBracketIcon,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Link-in-Bio",
      description:
        "Create a custom, branded page with all your links in minutes.",
      href: "/services/link-in-bio",
      icon: PaperAirplaneIcon,
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "Content Planner",
      description: "Plan, schedule, and automatically publish posts with ease.",
      href: "/services/content-planner",
      icon: LightBulbIcon,
      color: "bg-purple-100 text-purple-600",
    },

    {
      title: "Smart Analytics",
      description: "Track growth, engagement, and audience insights.",
      href: "/services/smart-analytics",
      icon: ArrowTrendingUpIcon,
      color: "bg-blue-100 text-blue-600",
    },

    {
      title: "Team Access",
      description: "Add team members with different roles and limits.",
      href: "/services/team-access",
      icon: UserGroupIcon,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Bookings & Invoices",
      description: "Accept payments and manage client calls and emails.",
      href: "/services/bookings-and-invoices",
      icon: BuildingOfficeIcon,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Brand Kit",
      description: "Store logos, colors, and use ready-to-go templates.",
      href: "/services/brand-kit",
      icon: PaintBrushIcon,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  useEffect(() => {
    document.title = "BoostLyx - Services";
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
        <motion.circle
          cx="150"
          cy="30"
          r="4"
          fill="#4F46E5"
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            delay: 0.6,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <path
          d="M34 34L86 56"
          stroke="#7C3AED"
          strokeWidth="1.5"
          strokeDasharray="3,2"
        />
        <path
          d="M94 56L146 34"
          stroke="#4F46E5"
          strokeWidth="1.5"
          strokeDasharray="3,2"
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

      <motion.svg
        className="absolute bottom-[8vh] right-[5vw]"
        width="180"
        height="180"
        viewBox="0 0 180 180"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.6 }}
      >
        <motion.circle
          cx="90"
          cy="90"
          r="30"
          stroke="#4F46E5"
          strokeWidth="1.5"
          fill="none"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="90"
          cy="90"
          r="15"
          stroke="#7C3AED"
          strokeWidth="1.5"
          fill="none"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.circle
          cx="90"
          cy="90"
          r="6"
          fill="#F59E0B"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.svg>
    </div>
  );

  return (
    <>
      <Header Page="Services" />
      <BackgroundShapes />
      <section className="relative bg-transparent overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <span className="block">Explore Our</span>
              <span className="block text-[#ffac33]">
                Boost <span className="text-indigo-600">Services</span>
              </span>
            </h1>

            <motion.p
              className="mt-6 text-xl sm:text-2xl font-medium text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              BoostLyx offers a dozen of premium services at the most
              competitive prices
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-transparent overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-left mb-12 md:mb-16">
              <span className="block text-gray-900">
                All <span className="text-[#ffac33]">Services</span>
              </span>
            </h1>
          </motion.div>

          {/* New Services Grid Layout */}
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-6 bg-gradient-to-r from-indigo-50 to-amber-50 border-b border-gray-200">
              <div className="col-span-12 md:col-span-6 lg:col-span-7">
                <h3 className="text-lg font-semibold text-gray-700">Service</h3>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-3 hidden md:block">
                <h3 className="text-lg font-semibold text-gray-700">
                  Description
                </h3>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-2 text-left"></div>
            </div>

            {/* Services List */}
            <div className="divide-y divide-gray-100">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.1,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}
                    className="grid grid-cols-12 gap-4 p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="col-span-12 md:col-span-6 lg:col-span-7 flex items-center">
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-lg ${service.color} mr-4`}
                      >
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 md:hidden mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-6 md:col-span-3 lg:col-span-3 hidden md:block">
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <div className="col-span-6 md:col-span-3 lg:col-span-2 flex items-center justify-end">
                      <Link
                        to={service.href}
                        onClick={handleInternalClick()}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium whitespace-nowrap"
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Alternative Card View (Hidden by default, can be toggled) */}
          <div className="hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-md"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 ${service.color}`}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    onClick={handleInternalClick()}
                    className="inline-flex items-center text-indigo-600 font-medium text-sm group hover:underline"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/pricing"
              onClick={handleInternalClick()}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              Compare Pricing Plans
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19l7-7-7-7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Keep the Community section exactly the same */}
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

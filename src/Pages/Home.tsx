import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";
import {
  CameraIcon,
  BoltIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  PaperAirplaneIcon,
  CheckIcon,
  BeakerIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Premium growth services for businesses and influencers.";

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
    },
    {
      title: "Content Planner",
      description: "Plan, schedule, and automatically publish posts with ease.",
      href: "/services/content-planner",
      icon: LightBulbIcon,
    },

    {
      title: "Smart Analytics",
      description: "Track growth, engagement, and audience insights.",
      href: "/services/smart-analytics",
      icon: ArrowTrendingUpIcon,
    },

    {
      title: "Team Access",
      description: "Add team members with different roles and limits.",
      href: "/services/team-access",
      icon: UserGroupIcon,
    },
  ];

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 41);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    document.title = "BoostLyx - Home";
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
      <Header Page="Home" />
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
              <span className="block">Elevate Your Digital</span>
              <span className="block text-indigo-600">Growth Potential</span>
            </h1>

            <motion.p
              className="mt-6 text-xl sm:text-2xl font-medium text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {text}
              <span className="inline-block w-1 h-6 bg-gray-600 ml-1 animate-pulse"></span>
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.a
                href="https://www.dash.boostlyx.com/accounts/start"
                onClick={handleInternalClick()}
                className="px-6 py-3 sm:px-8 sm:py-3 text-lg font-bold bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>

              <motion.a
                href="/services"
                onClick={handleInternalClick()}
                className="px-6 py-3 sm:px-8 sm:py-3 text-lg font-bold bg-white text-[#ffac33] border-2 border-[#ffac33] rounded-full hover:bg-[#fff9ef] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-transparent overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-left mb-12 md:mb-16">
              <span className="block text-[#ffac33]">Premium</span>
              <span className="block text-gray-900">
                Growth <span className="text-indigo-600">Services</span>
              </span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-white bg-opacity-90 hover:cursor-pointer backdrop-blur-sm rounded-2xl p-8 border-2 border-[#4F46E54D] hover:border-indigo-100 transition-all duration-300"
                  whileHover={{
                    borderColor: "#4F46E5",
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
                  <div className="w-14 h-14 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl mb-6">
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    onClick={handleInternalClick()}
                    className="inline-flex items-center justify-center text-indigo-600 font-semibold group hover:underline"
                  >
                    Learn more
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/services"
              onClick={handleInternalClick()}
              className="inline-block px-8 py-4 text-lg font-bold bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-transparent overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-20"
          >
            <div className="flex items-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mr-4">
                Why
              </h2>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <Link
                  to="/about#why-boostlyx"
                  onClick={handleInternalClick()}
                  aria-label="BoostLyx Logo"
                >
                  <img
                    src="/logos/banner-color-purple-white.svg"
                    alt="BoostLyx Logo"
                    className="h-12 mt-1 mr-0 pr-0 sm:h-14 md:h-16 w-auto"
                  />
                </Link>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 ml-4">
                ?
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Easy To Use",
                icon: BoltIcon,
                color: "bg-indigo-600",
                value: "95%*",
                stat: "User Satisfaction",
              },
              {
                title: "Faster Growth",
                icon: ArrowTrendingUpIcon,
                color: "bg-emerald-500",
                value: "2x*",
                stat: "Average Results",
              },
              {
                title: "Time Saved",
                icon: SparklesIcon,
                color: "bg-amber-500",
                value: "10+*",
                stat: "Hours Weekly",
              },
              {
                title: "Reliable",
                icon: ChartBarIcon,
                color: "bg-purple-600",
                value: "99%*",
                stat: "Uptime",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-24 h-24 ${item.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    {item.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mt-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.stat}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-12">
            *Results may vary based on individual usage and subscription plan
          </p>
        </div>
      </section>

      <section className="relative bg-transparent overflow-hidden py-24 md:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Pick Your <span className="text-[#ffac33]">Power-Up</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect boost for your growth journey
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-6 xl:gap-8">
            {[
              {
                name: "Free",
                href: "https://www.dash.boostlyx.com/accounts/start?plan=free&ref=pricing",
                price: "$0",
                period: "forever",
                icon: BeakerIcon,
                color: "bg-indigo-100",
                features: [
                  "1 social account",
                  "100 scheduled posts",
                  "Basic Link-in-Bio",
                  "Limited analytics",
                  "Community support",
                ],
                cta: "Get Started",
                animation: { y: [0, -10, 0] },
              },
              {
                name: "Starter",
                href: "https://www.dash.boostlyx.com/accounts/start?plan=starter&ref=pricing",
                price: "$29",
                period: "month",
                icon: SparklesIcon,
                color: "bg-indigo-100",
                features: [
                  "3 social accounts",
                  "500 scheduled posts",
                  "Enhanced Link-in-Bio",
                  "Smart analytics",
                  "Email support",
                  "Basic branding",
                ],
                cta: "Start Growing",
                animation: { y: [0, -15, 0] },
              },
              {
                name: "Pro",
                href: "https://www.dash.boostlyx.com/accounts/start?plan=pro&ref=pricing",
                price: "$99",
                period: "month",
                icon: BoltIcon,
                color: "bg-[#ffebc2]",
                features: [
                  "10 social accounts",
                  "Unlimited posts",
                  "Advanced Link-in-Bio",
                  "Premium analytics",
                  "Priority support",
                  "Team access (3 members)",
                  "Full brand kit",
                  "Bookings & invoices",
                ],
                cta: "Go Pro",
                animation: {
                  y: [0, -20, 0],
                  scale: [1, 1.05, 1],
                },
                popular: true,
              },
              {
                name: "Enterprise",
                href: "/enterprise",
                price: "Custom",
                period: "tailored",
                icon: UserGroupIcon,
                color: "bg-purple-100",
                features: [
                  "Unlimited accounts",
                  "Unlimited team members",
                  "White-label options",
                  "Dedicated manager",
                  "API access",
                  "Custom solutions",
                  "24/7 premium support",
                ],
                cta: "Contact Us",
                animation: { y: [0, -10, 0] },
              },
            ].map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, type: "spring" }}
                className={`flex-1 max-w-md ${
                  tier.popular ? "lg:-mt-4" : "lg:mt-4"
                }`}
              >
                <motion.div
                  animate={tier.animation}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`${tier.color} rounded-2xl p-8 border-2 ${
                    tier.popular ? "border-[#ffac33]" : "border-white"
                  } shadow-lg hover:shadow-xl transition-all h-full flex flex-col`}
                >
                  {tier.popular && (
                    <div className="bg-gradient-to-r from-[#ffac33] to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full inline-block mb-4">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mr-4">
                      <tier.icon className="w-7 h-7 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {tier.name}
                      </h3>
                      <div className="flex items-baseline">
                        <p className="text-3xl font-bold text-indigo-600">
                          {tier.price}
                        </p>
                        {tier.price !== "Custom" && (
                          <span className="ml-1 text-gray-500">
                            /{tier.period}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.href.startsWith("/") ? (
                    <Link
                      to={tier.href}
                      onClick={handleInternalClick()}
                      className={`mt-auto w-full py-3 rounded-full font-bold text-center block ${
                        tier.popular
                          ? "bg-gradient-to-r from-[#ffac33] to-indigo-600 text-white"
                          : "bg-white text-indigo-600 border border-indigo-200 hover:border-indigo-300"
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  ) : (
                    <a
                      href={tier.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto w-full py-3 rounded-full font-bold text-center block ${
                        tier.popular
                          ? "bg-gradient-to-r from-[#ffac33] to-indigo-600 text-white"
                          : "bg-white text-indigo-600 border border-indigo-200 hover:border-indigo-300"
                      }`}
                    >
                      {tier.cta}
                    </a>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
              <LightBulbIcon className="w-5 h-5 text-indigo-600 mr-2" />
              <p className="text-gray-700">
                Need custom solutions?{" "}
                <Link
                  to="/pricing/custom"
                  onClick={handleInternalClick()}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Let's build it
                </Link>
              </p>
            </div>
          </motion.div>
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

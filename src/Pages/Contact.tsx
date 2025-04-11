import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";
import {
  EnvelopeIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import emailValidator from "email-validator";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trimStart(),
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };

    if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Please enter your name";
      isValid = false;
    }

    if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Please enter your last name";
      isValid = false;
    }

    if (!emailValidator.validate(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    const wordCount = formData.message
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    if (wordCount < 5) {
      newErrors.message = "Message should be at least 5 words";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedFormData = {
      ...formData,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    setFormData(trimmedFormData);

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        "https://api.boostlyx.com/v1/contact/",
        trimmedFormData
      );

      if (response.data.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header Page="Contact" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-gray-600">
            Have questions? We're here to help!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                <div className="flex items-center">
                  {submitStatus === "success" ? (
                    <>
                      <CheckCircleIcon className="w-5 h-5 mr-2" />
                      <p>Thanks! We'll get back to you soon.</p>
                    </>
                  ) : (
                    <>
                      <ExclamationCircleIcon className="w-5 h-5 mr-2" />
                      <p>Something went wrong. Please try again.</p>
                    </>
                  )}
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`pl-9 w-full rounded-lg border ${
                        errors.firstName ? "border-red-300" : "border-gray-300"
                      } focus:border-indigo-500 focus:ring-indigo-500 py-2`}
                      placeholder="Your name"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`pl-9 w-full rounded-lg border ${
                        errors.lastName ? "border-red-300" : "border-gray-300"
                      } focus:border-indigo-500 focus:ring-indigo-500 py-2`}
                      placeholder="Your last name"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-9 w-full rounded-lg border ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    } focus:border-indigo-500 focus:ring-indigo-500 py-2`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <ChatBubbleLeftRightIcon className="h-4 w-4 text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`pl-9 w-full rounded-lg border ${
                      errors.message ? "border-red-300" : "border-gray-300"
                    } focus:border-indigo-500 focus:ring-indigo-500 py-2`}
                    placeholder="How can we help you?"
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact info
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    EMAIL
                  </h3>
                  <a
                    href="mailto:info@boostlyx.com"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    info@boostlyx.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    SOCIAL
                  </h3>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: FaXTwitter,
                        href: "https://x.com/BoostLyx",
                        name: "Twitter",
                      },
                      {
                        icon: FaInstagram,
                        href: "https://instagram.com/boostlyx",
                        name: "Instagram",
                      },
                      {
                        icon: FaLinkedinIn,
                        href: "https://linkedin.com/boostlyx",
                        name: "LinkedIn",
                      },
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                        whileHover={{ y: -2 }}
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    OFFICE
                  </h3>
                  <p className="text-gray-700">
                    123 Growth Street
                    <br />
                    San Francisco, CA 94107
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-8 rounded-xl">
              <h3 className="text-lg font-medium text-indigo-800 mb-4">
                Join our community
              </h3>
              <p className="text-gray-700 mb-4">
                Connect with other growth enthusiasts in our forum.
              </p>
              <Link
                to="https://forum.boostlyx.com"
                className="inline-block bg-white text-indigo-600 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg border border-indigo-100 transition-colors"
              >
                Visit Forum
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

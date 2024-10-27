"use client"; // This line makes the component a Client Component

import React, { useState } from "react";
import Image from "next/image"; // Import Image from next/image
import Navbar from "@/components/Navbar"; // Optional: Reuse Navbar
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Optional: ScrollToTop Button
import locationIcon from "./location.png"; // Adjust the path if needed
import phoneIcon from "./phone.png"; // Adjust the path if needed
import emailIcon from "./gmail.png"; // Adjust the path if needed

const EnhancedFormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !phone || !message) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", { name, email, phone, category, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
    setCategory("General Inquiry");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar /> {/* Optional: Navbar */}
      <div className="flex items-center justify-center min-h-screen -mt-6">
        {/* Contact Us Container */}
        <div className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 rounded shadow-lg p-8 w-11/12 max-w-4xl flex flex-col items-center">
          
          {/* Gradient Heading */}
          <h1 className="text-3xl font-bold -ml-20 mb-8 text-center bg-red-500 from-red-500 to-white text-transparent bg-clip-text">
            Contact Us
          </h1>

          {/* Information & Form Container */}
          <div className="flex w-full">
            {/* Left Side: Contact Information */}
            <div className="flex flex-col space-y-6 w-1/3 mr-8 mt-4">
              <div className="flex flex-col items-center">
                <Image src={locationIcon} alt="Location" width={40} height={40} className="mb-1" />
                <span className="font-bold">Location:</span>
                <span className="text-center">123 Main St, Anytown, USA</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src={phoneIcon} alt="Phone" width={40} height={40} className="mb-1" />
                <span className="font-bold">Phone:</span>
                <span className="text-center">(123) 456-7890</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src={emailIcon} alt="Email" width={40} height={40} className="mb-1" />
                <span className="font-bold">Email:</span>
                <span className="text-center">contact@example.com</span>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1">
              {submitted && (
                <p className="text-green-500 mb-4">Thank you for your submission!</p>
              )}
              {error && <p className="text-red-500 mb-4">{error}</p>}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 border-b border-gray-300 rounded-none bg-transparent focus:outline-none focus:ring-0 focus:border-red-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border-b border-gray-300 rounded-none bg-transparent focus:outline-none focus:ring-0 focus:border-red-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full p-2 border-b border-gray-300 rounded-none bg-transparent focus:outline-none focus:ring-0 focus:border-red-500"
                  />
                </div>
                <div>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border-b border-gray-300 rounded-none bg-transparent focus:outline-none focus:ring-0 focus:border-red-500"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Support">Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-2 border-b border-gray-300 rounded-none bg-transparent focus:outline-none focus:ring-0 focus:border-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500 transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton /> {/* Optional */}
    </div>
  );
};

export default EnhancedFormPage;

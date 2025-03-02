"use client";

import { useState } from "react";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxJaTUMyt5YvyNxEsOACI7m8bnsGZFqh_nyH3mOE62PTZlsEIg_RCx3qsUAW13Zhv7K/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        alert("Thank you for signing up!");
        setEmail("");
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      alert("Failed to submit. Please try again.");
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <footer className="bg-black text-white py-10 px-5 flex flex-col items-center">
      {/* Top Section */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="footer-header">
            <Image src="/assets/images/main-camelai.png" alt="camelAI logo" width={300} height={80} />
          </div>

          {/* Newsletter Signup */}
          <form onSubmit={handleSubmit} className="footer-subheader">
            <label htmlFor="email" className="block text-sm">
              Subscribe to our newsletter for product updates
            </label>
            <div className="flex gap-2 mt-2">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field px-3 py-2 bg-gray-800 text-white rounded-md w-60"
              />
              <button type="submit" className="primary-button bg-white text-black px-4 py-2 rounded-md flex items-center">
                {isSubmitted ? "Sent" : "Subscribe"}
                <Image src="/assets/images/chevron-right-black.png" alt="chevron right" width={20} height={20} className="ml-2" />
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="footer-social-links-section flex gap-4">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                <Image src={link.icon} alt={link.alt} width={40} height={40} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Footer Links */}
        <div className="footer-header-section-right flex flex-wrap gap-10 mt-10 lg:mt-0">
          {footerLinks.map((section) => (
            <div key={section.title} className="footer-docs-list">
              <p className="footer-docs-header font-bold text-gray-400">{section.title}</p>
              {section.links.map((link) => (
                <a key={link.href} href={link.href} className="text-sm hover:text-gray-300">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom w-full mt-8 pt-4 border-t border-gray-600 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} camelAI. All rights reserved.
      </div>
    </footer>
  );
};

// Social Links Data
const socialLinks = [
  { href: "https://x.com/usecamelai", icon: "/assets/images/x.com.png", alt: "X logo" },
  { href: "https://discord.gg/juNYATfJTZ", icon: "/assets/images/discord.png", alt: "Discord logo" },
  { href: "https://www.linkedin.com/company/usecamelai", icon: "/assets/images/linkedin.png", alt: "LinkedIn logo" },
  { href: "https://www.youtube.com/channel/UCDwycyxNe0_FFgL6TeFrLaw", icon: "/assets/images/youtube.png", alt: "YouTube logo" },
  { href: "https://github.com/qaml-ai", icon: "/assets/images/github.png", alt: "GitHub logo" },
];

// Footer Links Data
const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Schedule a call", href: "https://cal.com/ipr-camelai/book-a-demo" },
      { label: "Email Us", href: "mailto:support@camelai.com" },
    ],
  },
  {
    title: "Links",
    links: [
      { label: "Data Sources", href: "/data-sources" },
      { label: "Demo Videos", href: "https://www.youtube.com/channel/UCDwycyxNe0_FFgL6TeFrLaw" },
      { label: "Blog", href: "/blog" },
      { label: "Product Hunt", href: "https://www.producthunt.com/products/camelai" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Security", href: "/security" },
      { label: "Acceptable Use", href: "/acceptable-use" },
    ],
  },
];

export default Footer;

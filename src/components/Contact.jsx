import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Let's
          <span className="text-purple">Connect</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          I'd love to connect, explore new opportunities, and collaborate on
          exciting projects
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          {/* Contact CTA */}
<div className="bg-dark-300 rounded-2xl p-8 text-center">
  <h3 className="text-2xl font-semibold mb-4">
    Get<span className="text-purple">Connected</span>
  </h3>

  <p className="text-gray-400 max-w-md mx-auto mb-16 text-justify">
I'm open to new opportunities, collaborations, and exciting projects. Feel free to connect with me to discuss ideas, opportunities, or potential collaborations. I'm always eager to learn, improve my skills, and take on new challenges. Let's connect and create something meaningful together.
  </p>

  <div className="flex justify-center gap-4">
    <a
      href="https://www.linkedin.com/in/muhammad-hassan-arif/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/MuhammadHassanArif"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 border border-purple text-purple rounded-lg font-medium hover:bg-purple hover:text-white transition duration-300"
    >
      GitHub
    </a>
  </div>
</div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Location</h3>
                <p className="text-gray-400">Lahore, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Email</h3>
                <p className="text-gray-400">mhassanarif217@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Phone</h3>
                <p className="text-gray-400">+92 304 8054813</p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-hassan-arif/"
                 target="_blank"
                 rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                   href="https://github.com/MuhammadHassanArif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                     href="https://wa.me/923048054813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-green-500 hover:bg-green-600 hover:text-white transition duration-300"
                >
                  <FaWhatsapp />
                </a>
                
                <a
                   href="https://www.instagram.com/meharhassan217/"
                   target="_blank"
                   rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-gray-900 h-auto">
      <div className="max-width-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Made with &#10084;
          </h2>

          <p className="max-w-sm mx-auto mt-4 text-gray-400">
            <strong>Gym buddies</strong>
          </p>
          <p className="max-w-sm mx-auto mt-0 text-gray-400">
            Feel free to contact- <strong>+91 7677224373</strong>
           
          </p>
        </div>

        
      </div>
    </footer>
  );
}

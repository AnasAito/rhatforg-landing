import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex  items-center justify-center ">
          <div className="w-full text-center lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Let's keep{" "}
              <a
                href="https://www.linkedin.com/in/rhatforg"
                class="font-semibold text underline  cursor-pointer text-indigo-400 "
              >
                in touch!
              </a>
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Anasio.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

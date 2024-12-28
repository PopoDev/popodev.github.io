"use client";

import Image from "next/image";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <section className="py-16">
          <div className="bg-white rounded-lg shadow-lg p-8 flex items-center">
            <Image
              src="/profile.jpg"
              width={128}
              height={128}
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover mr-8"
            />
            <div className="relative w-full">
              <h1 className="text-4xl font-bold text-gray-900">PopoDev</h1>
              <p className="text-xl mt-2 text-gray-500">🇨🇭 Developer</p>
              <div className="absolute top-0 right-0 space-x-4 p-2 flex flex-row">
                <a href="https://x.com/PopoXDev" target="_blank">
                  <Image src="/logo-X.svg" width={24} height={24} alt="X" />
                </a>
                <a href="https://github.com/PopoDev" target="_blank">
                  <Image
                    src="/logo-github.svg"
                    width={24}
                    height={24}
                    alt="GitHub"
                  />
                </a>
              </div>

              <div className="text-lg mt-4 text-gray-700">
                <p className="text-lg mt-4 text-gray-700">
                  I&apos;m a Computer Science student at ETH Zurich.
                </p>
                <p>
                  Currently working on{" "}
                  <a
                    href="https://screendemos.com"
                    target="_blank"
                    className="text-blue-600"
                  >
                    Screendemos
                  </a>
                  . 🎥
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaCopy } from "react-icons/fa";
import { toast } from 'react-toastify';

export default function Home() {
  const [form, setForm] = useState({
    url: "",
    shortUrl: ""
  })
  const [generatedUrl, setGeneratedUrl] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await fetch("/api/url", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(form),
      });
      const data = await response.json()
      if (data.success == true) {
        setGeneratedUrl(`${process.env.NEXT_PUBLIC_HOST}/${form.shortUrl}`)
        setForm({ url: "", shortUrl: "" })
        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log("Error on getting response: ", error)
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value)
    toast.success("Link Copied!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 xl:px-30 py-16 bg-[#fdfdfd]">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Shorten, Track & <span className="text-[#e93363]">Simplify</span> Your Links
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-600">
            Quick Linker helps you shorten long URLs into clean, trackable links.
            Make your links look professional and boost your click-through rates.
          </p>

          {/* Input Fields */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <input
              onChange={handleChange}
              type="text"
              name="url"
              value={form.url}
              placeholder="Paste your long URL here..."
              className="flex-1 min-w-0 px-4 py-3 border focus:border-0 rounded-full shadow-sm focus:outline-none placeholder:text-gray-500 focus:ring-2 text-gray-700 focus:ring-[#e93363]"
            />
            <input
              onChange={handleChange}
              type="text"
              name="shortUrl"
              value={form.shortUrl}
              placeholder="Paste your Short URL here..."
              className="flex-1 min-w-0 px-4 py-3 focus:border-0 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e93363] text-gray-700 placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="bg-[#e93363] text-white font-medium px-6 py-3 rounded-full transition-all duration-200 ease-in hover:bg-[#d42d56] cursor-pointer"
            >
              {loading ? "Loading..." : "Shorten"}
            </button>
          </div>

          {generatedUrl && (
            <div className="text-gray-700 font-bold mt-5 flex items-center gap-x-2">
              <div>Your ShortUrl:{" "}</div>
              <Link
                href={generatedUrl}
                target="_blank"
                className="text-blue-500 font-medium hover:underline cursor-pointer break-all"
              >
                {generatedUrl}
              </Link>
              <FaCopy onClick={() => { handleCopy(generatedUrl) }} className="hover:scale-105" />
            </div>
          )}
        </form>

        {/* Hero Image */}
        <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-auto">
          <Image
            width={350}
            height={350}
            alt="hero"
            src="/hero.png"
            className="w-64 sm:w-80 lg:w-[350px] h-auto"
          />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-6 sm:px-12 lg:px-36 py-20 bg-[#e9f7ff]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Quick Linker?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 text-center">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg sm:text-xl mb-3 text-[#e93363]">
              Custom Links
            </h3>
            <p className="text-gray-600">
              Personalize your links with custom slugs and make them more memorable.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg sm:text-xl mb-3 text-[#e93363]">
              Analytics
            </h3>
            <p className="text-gray-600">
              Track clicks, devices, and locations to measure your link performance.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg sm:text-xl mb-3 text-[#e93363]">
              Secure & Reliable
            </h3>
            <p className="text-gray-600">
              Your links are safe with top-notch security and 99.9% uptime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 sm:px-12 lg:px-36 py-20 text-center bg-[#fdfdfd]">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Ready to simplify your links?
        </h2>
        <p className="text-gray-600 mt-4">
          Start shortening links in seconds. No credit card required.
        </p>
        <button className="mt-6 bg-[#e93363] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#d42d56] cursor-pointer transition-all duration-200 ease-in">
          Get Started for Free
        </button>
      </section>

    </>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpRight, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { InfiniteCarousel } from "@/components/global/Infinite-carousel";
import { BentoGridSecondDemo } from "@/components/global/bento-grid";
import Footer from "@/components/global/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">Slide</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="#research"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Research
            </Link>
            <Link
              href="#product"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Product
            </Link>
            <Link
              href="#company"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Company
            </Link>
            <Button>Login</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 overflow-hidden">

        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto text-center"
          >
            <Badge
              variant="outline"
              className="mb-4 border-white/20 text-white/80"
            >
              Introducing Slide AI
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl tracking-tight font-medium p-5 bg-gradient-to-b from-white to-zinc-500 inline-block text-transparent bg-clip-text">
              Revolutionizing Instagram Engagement with Cutting-Edge AI{" "}
            </h1>
            <p className="text-sm md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Slide uses advanced AI to help creators and businesses automate
              their Instagram engagement, leading to authentic growth and
              meaningful connections.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="rounded-full px-8 py-5">
                Get Started <ArrowUpRight className="ml-2" size={18} />
              </Button>
              <Button variant="link" className="">
                View Research
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section>
        <InfiniteCarousel />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-base md:text-2xl lg:text-[23.97px] md:tracking-[-0.13485px] md:leading-[28px] lg:tracking-[-0.13485px] lg:leading-[28px] tracking-[-0.3px] leading-[20px] mt-10 mb-10 text-gray-400">
            Slide uses advanced AI to help creators and businesses automate
            Instagram engagement, enabling authentic growth, fostering
            meaningful connections, and creating a more engaged and loyal
            audience over time.
          </p>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24">
        <div className="container px-4">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl sm:text-center"
          >
            <h2 className="mt-2 font-soehne text-4xl sm:text-5xl bg-gradient-to-b from-white to-zinc-500 inline-block text-transparent bg-clip-text">
              Built with safety in mind
            </h2>
            <p className=" mt-4 text-lg text-gray-400 mb-8">
              Our AI ensures safe, ethical, and responsible Instagram
              engagement, prioritizing privacy and content safety.
            </p>
          </motion.div>
          <BentoGridSecondDemo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#171717] rounded-lg mx-auto w-full max-w-4xl sm:max-w-2xl lg:max-w-5xl min-h-[400px] sm:min-h-[450px] md:min-h-[500px] px-4 lg:px-0 py-12 sm:py-16 md:py-20 flex items-center justify-center my-24"
        >
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0">
            <div className="col-span-12 flex flex-col gap-2 md:col-span-8 md:col-start-3">
              <h2 className="font-medium text-xl sm:text-2xl md:text-[36px] leading-[32px] sm:leading-[36px] md:leading-[43.2px] tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.36px] mb-4 w-full sm:w-3/4 flex justify-center mx-auto text-center text-h4 text-balance">
                Boost Instagram Engagement with AI-Powered Tools!{" "}
              </h2>
              <div className="flex items-center justify-center flex-row gap-1 sm:gap-2 md:gap-3 flex-wrap">
                <Button
                  className="bg-white text-black px-4 py-3 rounded-full text-base sm:text-sm font-medium transition hover:bg-gray-200"
                  asChild
                >
                  <Link href="/dashboard" className="flex">
                    Try Slide <ArrowUpRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

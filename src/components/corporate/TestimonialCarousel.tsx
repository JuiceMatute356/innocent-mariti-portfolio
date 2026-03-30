"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animationVariants";

const testimonials = [
  {
    quote:
      "Nexus cut our deployment time from 45 minutes to under 2 minutes. The ROI was immediate and obvious.",
    name: "Sarah Chen",
    role: "CTO at DataFlow",
    avatar: "👩‍💻",
    stars: 5,
  },
  {
    quote:
      "We evaluated every platform on the market. Nexus won on every dimension: UX, performance, and support.",
    name: "Marcus Webb",
    role: "VP Engineering at Veritas",
    avatar: "👨‍💼",
    stars: 5,
  },
  {
    quote:
      "The AI workflow feature alone saved our team 8 hours a week. That's 400+ hours a year back to building.",
    name: "Priya Nair",
    role: "Lead Developer at Mosaic",
    avatar: "👩‍🔬",
    stars: 5,
  },
  {
    quote:
      "Finally, a platform that doesn't require a DevOps PhD to operate. Our frontend team loves it.",
    name: "Tom Okafor",
    role: "Engineering Manager at Slate",
    avatar: "👨‍🎨",
    stars: 5,
  },
  {
    quote:
      "Migrated 50 microservices in one weekend. The documentation and support made it surprisingly painless.",
    name: "Elena Russo",
    role: "Principal Engineer at Arch",
    avatar: "👩‍🚀",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCarousel() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">
            Loved by engineering teams
          </h2>
          <p className="text-slate-500 text-lg">
            Don&apos;t take our word for it. Hear from the teams who ship with
            Nexus every day.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm h-full">
                <StarRating count={t.stars} />
                <blockquote className="text-slate-700 text-base leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HERO_BANNERS = [
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
  "/banner4.jpg",
  "/banner5.jpg",
];

// These should match your Products filter keys (group keys)
const CATEGORY_CARDS = [
  {
    link: "fashion",
    title: "Fashion",
    desc: "New fits • Trending drops",
    icon: "👗",
    image:
      "/fashion.jpg",
  },
  {
    link: "electronics",
    title: "Electronics",
    desc: "Phones • Laptops • More",
    icon: "📱",
    image:
      "/banner3.jpg",
  },
  {
    link: "beauty",
    title: "Beauty",
    desc: "Skincare • Fragrance",
    icon: "💄",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=60",
  },
  {
    link: "home",
    title: "Home",
    desc: "Decor • Essentials",
    icon: "🏠",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=60",
  },
  {
    link: "auto",
    title: "Auto",
    desc: "Auto • Bike accessories",
    icon: "🏍️",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=60",
  },
  {
    link: "sports",
    title: "Sports",
    desc: "Gear • Accessories",
    icon: "🏀",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=60",
  },
];

const FEATURE_PILLS = [
  { title: "Fast Delivery", desc: "Quick dispatch + updates", icon: "🚚" },
  { title: "Secure Payments", desc: "Encrypted checkout", icon: "🔒" },
  { title: "Easy Returns", desc: "Simple return policy", icon: "↩️" },
  { title: "Curated Picks", desc: "Quality checked items", icon: "✅" },
];

const PLATFORM_FEATURES = [
  {
    title: "Smart discovery",
    desc: "Find products faster with category-first browsing and search.",
    icon: "🧭",
  },
  {
    title: "Best price confidence",
    desc: "MRP + discounts visible clearly so buyers trust the value.",
    icon: "🏷️",
  },
  {
    title: "Smooth checkout",
    desc: "Fewer steps, cleaner UI, and mobile-first performance.",
    icon: "⚡",
  },
  {
    title: "Support-ready",
    desc: "Clear policies and help sections to reduce purchase friction.",
    icon: "💬",
  },
];

const TESTIMONIALS = [
  {
    name: "Riya",
    role: "Regular shopper",
    quote:
      "The UI feels premium. Categories are super easy and the product pages look clean.",
    rating: 5,
  },
  {
    name: "Arjun",
    role: "Electronics buyer",
    quote:
      "MRP + discount visibility is great. I can quickly decide without confusion.",
    rating: 5,
  },
  {
    name: "Neha",
    role: "Fashion lover",
    quote:
      "Everything loads fast, and the collections make browsing feel effortless.",
    rating: 4,
  },
];

const FAQS = [
  {
    q: "How long does delivery take?",
    a: "Usually 2–5 business days depending on your location. We typically dispatch quickly.",
  },
  {
    q: "What is the return policy?",
    a: "Returns are accepted within 7 days if the product is unused and in original packaging.",
  },
  {
    q: "Are the products quality checked?",
    a: "We keep listings clean and prioritize quality. Products include clear details and images.",
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* ====== UNIQUE THEME BACKDROP (Aurora Glass) ====== */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -top-40 -right-24 h-130 w-130 rounded-full bg-indigo-200/45 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-24 h-130 w-130 rounded-full bg-fuchsia-200/35 blur-3xl" />

        {/* ====== HERO SLIDER ====== */}
        <section className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="h-70 w-full sm:h-95 md:h-135"
          >
            {HERO_BANNERS.map((src, idx) => (
              <SwiperSlide key={src}>
                <div className="relative h-full w-full">
                  <img
                    src={src}
                    alt={`Hero banner ${idx + 1}`}
                    className="h-full w-full object-cover"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-end sm:items-center">
                    {/* gradient for readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/25 to-transparent sm:bg-linear-to-r sm:from-black/55 sm:via-black/15 sm:to-transparent" />

                    <div className="relative z-10 w-full p-5 sm:p-10">
                      <div className="max-w-2xl">
                        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white/95 backdrop-blur">
                          ✨ CURATED • FAST • TRUSTED
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                          A premium storefront experience.
                        </h2>

                        <p className="mt-3 max-w-xl text-sm text-white/90 sm:text-base">
                          Explore categories, spot the best deals instantly, and
                          checkout in minutes.
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                          <button
                            type="button"
                            onClick={() => navigate("/products")}
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-white/30"
                          >
                            Shop all <span className="text-base">→</span>
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              navigate("/products?category=fashion")
                            }
                            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/20"
                          >
                            Explore Fashion
                          </button>
                        </div>

                        {/* Quick category chips */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {["fashion", "electronics", "beauty", "home"].map(
                            (k) => (
                              <Link
                                key={k}
                                to={`/products?category=${k}`}
                                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur transition hover:bg-white/15"
                              >
                                {k.toUpperCase()}
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle bottom fade so pagination stays visible */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/30 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* ====== TRUST + MICRO STATS ====== */}
        <section className="border-b border-slate-200/70 bg-white/70 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="grid gap-4 md:grid-cols-4">
              {FEATURE_PILLS.map((x) => (
                <TrustPill
                  key={x.title}
                  title={x.title}
                  desc={x.desc}
                  icon={x.icon}
                />
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <StatCard label="Products" value="500+" hint="Fresh catalog" />
              <StatCard label="Categories" value="6+" hint="Shop by need" />
              <StatCard label="Checkout" value="Fast" hint="Mobile-first UX" />
            </div>
          </div>
        </section>

        {/* ====== SHOP BY CATEGORY (cards) ====== */}
        <section className="bg-linear-to-b from-slate-50/60 to-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <SectionHeader
              kicker="Shop smarter"
              title="Browse by category"
              subtitle="Jump into a category and discover products faster."
              right={
                <Link
                  to="/products"
                  className="text-sm font-semibold text-slate-900 hover:underline"
                >
                  View all products →
                </Link>
              }
            />

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORY_CARDS.map((c, idx) => (
                <CategoryCard key={idx} {...c} />
              ))}
            </div>

            {/* Secondary CTA row */}
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <GlassCTA
                title="Looking for the best deals?"
                desc="Shop top picks across categories with clear discount visibility."
                primary={{ label: "Shop now", to: "/products" }}
                secondary={{
                  label: "Electronics",
                  to: "/products?category=electronics",
                }}
              />
              <GlassCTA
                title="Start with your vibe"
                desc="Fashion, beauty, home — discover curated essentials you’ll love."
                primary={{ label: "Fashion", to: "/products?category=fashion" }}
                secondary={{ label: "Beauty", to: "/products?category=beauty" }}
              />
            </div>
          </div>
        </section>

        {/* ====== PLATFORM HIGHLIGHTS (E-commerce info) ====== */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <SectionHeader
              kicker="E-commerce platform"
              title="Built for conversion and clarity"
              subtitle="Everything on the storefront is designed to reduce friction and increase trust."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {PLATFORM_FEATURES.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 p-8 text-white shadow-sm">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-white/80">
                    STORE EXPERIENCE
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold">
                    Premium UI, simple navigation.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Category-first browsing + clean product pages + fast flows —
                    a combination that makes shoppers stay longer and buy
                    faster.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/80">
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      🧾 Clear pricing
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      📦 Quick dispatch
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      🔒 Safe checkout
                    </span>
                  </div>

                  <div className="mt-7 flex gap-3">
                    <Link
                      to="/products"
                      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-white/20"
                    >
                      Browse products →
                    </Link>
                    <Link
                      to="/products?category=home"
                      className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/15"
                    >
                      Explore Home
                    </Link>
                  </div>
                </div>

                {/* visual panel */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <MiniMetric label="MRP + OFF" value="Visible" />
                    <MiniMetric label="Search" value="Fast" />
                    <MiniMetric label="Categories" value="6+" />
                    <MiniMetric label="Products" value="500+" />
                  </div>

                  <div className="mt-6 rounded-2xl bg-white/5 p-4">
                    <p className="text-xs font-semibold text-white/90">
                      Pro tip
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/75">
                      Use the category bar in the navbar to instantly filter
                      products from anywhere on the site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== SOCIAL PROOF ====== */}
        <section className="bg-linear-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <SectionHeader
              kicker="Social proof"
              title="People love the experience"
              subtitle="A clean store creates trust — and trust converts."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* ====== FAQ + CTA ====== */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <SectionHeader
                  kicker="Need help?"
                  title="FAQs"
                  subtitle="Quick answers before you checkout."
                />
                <div className="mt-6 space-y-3">
                  {FAQS.map((f) => (
                    <FAQItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
                <p className="text-xs font-semibold tracking-widest text-white/80">
                  READY TO SHOP
                </p>
                <h3 className="mt-2 text-2xl font-extrabold">
                  Browse products and checkout in minutes.
                </h3>
                <p className="mt-3 text-sm text-white/75">
                  Explore categories, compare prices, and add to cart with a
                  clean UI built for speed.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/products"
                    className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-white/20"
                  >
                    Shop now
                  </Link>
                  <Link
                    to="/cart"
                    className="rounded-xl border border-white/20 bg-transparent px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10"
                  >
                    View cart
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap gap-2 text-xs text-white/75">
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    ✅ Trusted
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    💳 UPI / Cards
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    📦 Packed fast
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* bottom spacing */}
        <div className="h-6" />
      </div>
    </div>
  );
}

/* ===================== Small UI Components ===================== */

function SectionHeader({ kicker, title, subtitle, right }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {kicker ? (
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            {kicker}
          </p>
        ) : null}
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
        ) : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}

function TrustPill({ title, desc, icon }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
        <span className="text-lg">{icon}</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function StatCard({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
        {label}
      </p>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
        {value}
      </p>
      <p className="mt-1 text-sm text-slate-600">{hint}</p>
    </div>
  );
}

function CategoryCard({ link, title, desc, icon, image }) {
  return (
    <Link
      to={`/products?category=${link}`}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-44 bg-slate-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/5 to-black/35" />

        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          <span>{icon}</span>
          {title}
        </span>
      </div>

      <div className="p-5">
        <p className="text-base font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
          Shop {title} <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
}

function GlassCTA({ title, desc, primary, secondary }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur">
      <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-indigo-200/35 blur-3xl" />

      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          to={primary.to}
          className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          {primary.label}
        </Link>
        <Link
          to={secondary.to}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          {secondary.label}
        </Link>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-indigo-200/25 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-lg">
            {icon}
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900">{title}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniMetric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs font-semibold text-white/75">{label}</p>
      <p className="mt-1 text-xl font-extrabold text-white">{value}</p>
    </div>
  );
}

function Stars({ rating }) {
  const r = Math.max(0, Math.min(5, Number(rating) || 0));
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < r ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function TestimonialCard({ name, role, quote, rating }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <Stars rating={rating} />
      <p className="mt-3 text-sm leading-6 text-slate-700">“{quote}”</p>
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
        <div className="h-10 w-10 rounded-2xl bg-slate-100" />
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="text-sm font-semibold text-slate-900">{q}</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 transition group-open:rotate-180">
          ⌄
        </span>
      </summary>
      <div className="mt-3 text-sm leading-6 text-slate-600">{a}</div>
    </details>
  );
}

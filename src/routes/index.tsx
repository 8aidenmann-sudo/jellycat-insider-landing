import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/JellyCat_Logo_PNG.png";
import tSarah from "@/assets/testimonial-sarah.jpg";
import tJess from "@/assets/testimonial-jess.webp";
import tMaya from "@/assets/testimonial-maya.jpg";
import tChloe from "@/assets/testimonial-chloe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Jellycat Insider — Rewards Program" },
      { name: "description", content: "Join 12,000+ Jellycat Insiders and unlock your exclusive Jellycat discount." },
      { property: "og:title", content: "The Jellycat Insider" },
      {
        property: "og:description",
        content: "Join 12,000+ Jellycat Insiders and unlock your exclusive Jellycat discount.",
      },
    ],
  }),
  component: Index,
});

const STEPS = [
  "Verify your eligibility below",
  'Click "Unlock My Reward" to get started',
  "Complete your quick survey",
  "Complete 6-10 short tasks to maximize your reward",
  "Your personalized Jellycat discount code will be sent to your email",
];

const TESTIMONIALS = [
  {
    q: "I had no idea this existed until my friend told me — I wish I found it sooner",
    n: "Sarah M., Jellycat Insider Member",
    img: tSarah,
  },
  {
    q: "Finally got my discount code and used it straight away — so worth it",
    n: "Jess T., Jellycat Insider Member",
    img: tJess,
  },
  {
    q: "Honestly thought it was too good to be true but it actually worked",
    n: "Maya R., Jellycat Insider Member",
    img: tMaya,
  },
  {
    q: "Been obsessed with Jellycat for years and never knew this program existed",
    n: "Chloe W., Jellycat Insider Member",
    img: tChloe,
  },
];

function Sparkle({ className, color }: { className?: string; color: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" fill={color} opacity="0.55" />
    </svg>
  );
}

function Index() {
  const [choice, setChoice] = useState<null | "adult" | "minor">(null);
  const [tIdx, setTIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTIdx((i) => (i + 1) % TESTIMONIALS.length);
        setFade(true);
      }, 250);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen w-full px-5 pb-8 pt-3" style={{ backgroundColor: "#FDF6EC" }}>
      <div className="mx-auto w-full max-w-md">
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 80,
            overflow: "hidden",
            marginBottom: 8,
          }}
        >
          <img
            src={logo}
            alt="Jellycat"
            style={{
              display: "block",
              width: "65vw",
              maxWidth: 280,
              height: "auto",
              objectFit: "contain",
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Hero */}
        <section className="relative text-center">
          <Sparkle className="absolute left-2 top-3" color="#2BBCD4" />
          <Sparkle className="absolute right-3 top-6" color="#F5A623" />
          <Sparkle className="absolute left-8 bottom-2" color="#F5A623" />
          <Sparkle className="absolute right-6 bottom-4" color="#2BBCD4" />

          <p className="jc-font jc-teal text-[13px]">Join 12,000+ Jellycat Insiders</p>
          <h1 className="jc-font mt-1 text-[26px] leading-[1.15]">
            <span className="jc-teal">Welcome to The</span>
            <br />
            <span className="jc-orange">Jellycat Insider</span>
          </h1>
        </section>

        {/* How it works */}
        <section className="mt-4">
          <p className="jc-font jc-teal text-center text-[11px] tracking-[0.18em]">HOW IT WORKS</p>
          <ul className="mt-2 space-y-1.5">
            {STEPS.map((s, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 rounded-full px-2 py-1.5"
                style={{ background: "#FFFBF3", border: "1px solid #f1e7d6" }}
              >
                <span
                  className="jc-font flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px] text-white"
                  style={{ background: "#2BBCD4" }}
                >
                  {i + 1}
                </span>
                <span className="jc-font text-[12.5px] leading-tight" style={{ color: "#4a3f35" }}>
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Eligibility */}
        <section className="mt-5 text-center">
          {choice === null && (
            <>
              <p className="jc-font jc-teal text-[13px]">Check your eligibility to claim your discount</p>
              <div className="mt-3 flex flex-col gap-3">
                <button
                  onClick={() => setChoice("adult")}
                  className="jc-font jc-btn jc-btn-teal w-full"
                >
                  I'm 18 or older
                </button>
                <button
                  onClick={() => setChoice("minor")}
                  className="jc-font jc-btn jc-btn-orange w-full"
                >
                  I'm under 18
                </button>
              </div>
            </>
          )}

          {choice !== null && (
            <div className="jc-fade-in">
              <p className="jc-font jc-teal text-[14px] leading-snug px-2">
                {choice === "adult"
                  ? "You qualify for our highest discount — up to $500 in Jellycat rewards 🤍"
                  : "You still qualify for an exclusive Jellycat discount 🤍"}
              </p>
              <button
                className="jc-font jc-btn jc-btn-orange jc-fade-in mt-3 w-full"
              >
                Unlock My Reward
              </button>
            </div>
          )}
        </section>

        {/* Testimonials */}
        <section className="mt-5">
          <div
            className="rounded-2xl px-4 py-3 text-center"
            style={{ background: "#FFFBF3", border: "1px solid #f1e7d6" }}
          >
            <div
              style={{
                opacity: fade ? 1 : 0,
                transition: "opacity 0.25s",
                display: "flex",
                alignItems: "center",
                gap: 12,
                textAlign: "left",
              }}
            >
              <img
                src={TESTIMONIALS[tIdx].img}
                alt={TESTIMONIALS[tIdx].n}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #f1e7d6",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <p className="jc-font text-[12.5px] italic leading-snug" style={{ color: "#8a7c70" }}>
                  "{TESTIMONIALS[tIdx].q}"
                </p>
                <p className="jc-font jc-orange mt-1.5 text-[11.5px]">{TESTIMONIALS[tIdx].n}</p>
              </div>
            </div>
            <div className="mt-2 flex justify-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: i === tIdx ? "#2BBCD4" : "#e6d9c4" }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-4 text-center">
          <p className="jc-font jc-teal text-[12px] italic">Join thousands of Jellycat lovers already saving</p>
          <p className="jc-font mt-1 text-[10.5px]" style={{ color: "#a89c8e" }}>
            Limited spots available — rewards subject to eligibility
          </p>
        </section>
      </div>
    </main>
  );
}

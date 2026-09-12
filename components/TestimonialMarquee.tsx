"use client";
import Image from "next/image";

const testimonials = Array.from({ length: 13 }, (_, i) => `/testi-${i + 1}.jpg`);

function splitRows(arr: string[], n: number) {
  const rows: string[][] = Array.from({ length: n }, () => []);
  arr.forEach((item, i) => rows[i % n].push(item));
  return rows;
}
const rows = splitRows(testimonials, 3);

function Row({ images, dir, speed }: { images: string[]; dir: "left" | "right"; speed: number }) {
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 w-max ${dir === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="w-40 h-56 shrink-0 rounded-md overflow-hidden border border-border">
            <Image src={src} alt="Testimonial" width={160} height={224} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  return (
    <section className="py-24 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <span className="text-xs text-gold tracking-wide">TESTIMONIALS</span>
        <h2 className="mt-3 font-display font-bold text-3xl text-ink">What members are saying</h2>
      </div>
      <div className="flex flex-col gap-4">
        <Row images={rows[0]} dir="left" speed={26} />
        <Row images={rows[1]} dir="right" speed={22} />
        <Row images={rows[2]} dir="left" speed={28} />
      </div>
    </section>
  );
}
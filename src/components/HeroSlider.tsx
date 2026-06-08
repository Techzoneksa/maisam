"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale, Section } from "@/i18n/config";
import { getPublicPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type HeroSliderProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function HeroSlider({ dictionary, locale }: HeroSliderProps) {
  const slides = dictionary.heroSlider.slides;
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="heroSlider">
      <div
        className="heroSliderTrack"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`heroSlide ${i === current ? "active" : ""}`}
            aria-hidden={i !== current}
          >
            <Image
              alt=""
              src={slide.image}
              fill
              className="heroSlideImage"
              priority={i === 0}
              sizes="100vw"
            />
            <div className="heroSlideOverlay" />
            <div className="heroSlideContent">
              <h2 className="heroSlideTitle">{slide.title}</h2>
              <p className="heroSlideSubtitle">{slide.subtitle}</p>
              <Link
                className="button buttonPrimary"
                href={getPublicPath(locale, slide.route as Section)}
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="heroSliderDots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`heroDot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <button className="heroArrow heroArrowLeft" onClick={prev} aria-label="Previous">
        &#8249;
      </button>
      <button className="heroArrow heroArrowRight" onClick={next} aria-label="Next">
        &#8250;
      </button>
    </section>
  );
}

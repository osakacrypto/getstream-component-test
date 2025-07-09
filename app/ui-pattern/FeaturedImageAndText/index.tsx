/*
PATH: app/ui-pattern/FeaturedImageAndText/index.tsx
@osakacrypto
Last modified: 2025-07-07
*/

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import "./index.css";
import STRVNWrapper from "@/app/ui-component/Wrapper";
import STRVNButton from "@/app/ui-component/Button";
import STRVNHeading from "@/app/ui-component/Heading";
import STRVNTitle from "@/app/ui-component/Title";
import STRVNSubtitle from "@/app/ui-component/Subtitle";

const FALLBACK_IMAGE = "/images/batman-4.png";
const FALLBACK_ALT = "Batman in the Batcave";

export type Slide = {
  src: string;
  title: string;
  alt: string;
};

type FeaturedImageAndTextProps = {
  slides?: Slide[];
  reverseorder?: boolean;
  headingPre?: string;
  headingHighlight?: string;
  headingPost?: string;
  bodyText?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
};

export default function STRVNFeaturedImageAndText({
  slides = [],
  reverseorder = false,
  headingPre = "They think I'm hiding in the",
  headingHighlight = "shadows",
  headingPost = ".",
  bodyText = "We have a signal now, for when I'm needed. When that light hits the sky, it's not just a call — it's a warning.",
  primaryCtaLabel = "Call Batmobile ⇢",
  secondaryCtaLabel = "Activate Batsignal",
}: FeaturedImageAndTextProps) {
  const sliderSlides: Slide[] =
    slides.length > 0
      ? slides.slice(0, 3)
      : [{ src: FALLBACK_IMAGE, title: "BATSIGNAL", alt: FALLBACK_ALT }];

  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (playing && sliderSlides.length > 1 && !isAnimating) {
      timerRef.current = window.setInterval(() => {
        setIsAnimating(true);
        setCurrent((idx) => (idx + 1) % sliderSlides.length);
        setTimeout(() => setIsAnimating(false), 800);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, sliderSlides.length, isAnimating]);

  const togglePlay = () => setPlaying((p) => !p);
  const { title } = sliderSlides[current];

  return (
    <STRVNWrapper>
      <div
        className={`featured${reverseorder ? " featured-reverseorder" : ""}`}
      >
        <div className="featured-content-box">
          <div className="featured-content-box-text">
            <STRVNHeading level={2}>
              {headingPre}{" "}
              <span className="shadows" data-text={headingHighlight}>
                {headingHighlight}
              </span>
              {headingPost}
            </STRVNHeading>
            <STRVNSubtitle>{bodyText}</STRVNSubtitle>
          </div>

          <div className="featured-content-box-cta">
            <STRVNButton
              variant="filled"
              type="button"
              aria-label={primaryCtaLabel}
            >
              {primaryCtaLabel}
            </STRVNButton>
            <STRVNButton
              variant="outlined"
              type="button"
              aria-label={secondaryCtaLabel}
            >
              {secondaryCtaLabel}
            </STRVNButton>
          </div>
        </div>

        <div className="featured-image-box">
          <div className="featured-image">
            {sliderSlides.map((slide, idx) => (
              <Image
                key={idx}
                src={slide.src}
                alt={slide.alt ?? slide.title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                priority={idx === 0}
                className={`featured-slide${
                  idx === current ? " featured-slide-active" : ""
                }`}
              />
            ))}
            <div className="featured-overlay">
              <STRVNTitle level={2} contrast="contrast">
                {title}
              </STRVNTitle>

              <div className="batman-bar">
                <Image
                  src={"/images/batman-dash.svg"}
                  alt={
                    "A decorative dashed line with the Batman emblem in the middle."
                  }
                  width={300}
                  height={50}
                />
              </div>
            </div>
            <button
              type="button"
              className="slide-controls"
              onClick={togglePlay}
              aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            >
              {playing ? "❚❚" : "▶"}
            </button>
          </div>
        </div>
      </div>
    </STRVNWrapper>
  );
}

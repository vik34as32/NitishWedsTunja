"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { AnimatePresence, MotionConfig, motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { BootScreen } from "./BootScreen";
import { CoupleSection } from "./CoupleSection";
import { Countdown } from "./Countdown";
import { EventTimeline } from "./EventTimeline";
import { FamilySection } from "./FamilySection";
import { BaraatJourney } from "./baraat/BaraatJourney";
import { HaldiSection } from "./HaldiSection";
import { DateSection, HeritageIntro } from "./Heritage";
import { InvitationHero } from "./InvitationHero";
import { MehndiSection } from "./MehndiSection";
import { MobileOnly } from "./MobileOnly";
import { MusicPlayer, type MusicHandle } from "./MusicPlayer";
import { ThankYouSection } from "./ThankYouSection";
import { TilakSection } from "./TilakSection";
import { VenueSection } from "./VenueSection";
import { WeddingSection } from "./WeddingSection";
import { WelcomeScreen } from "./WelcomeScreen";

export function InvitationExperience() {
  return (
    <MotionConfig reducedMotion="user">
      <MobileOnly>
        <InvitationBody />
      </MobileOnly>
    </MotionConfig>
  );
}

function InvitationBody() {
  const reduce = usePrefersReducedMotion();
  const musicRef = useRef<MusicHandle>(null);
  const [booting, setBooting] = useState(true);
  const [opened, setOpened] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setBooting(false), reduce ? 280 : 1500);
    return () => window.clearTimeout(timeout);
  }, [reduce]);

  useEffect(() => {
    const root = document.documentElement;
    if (opened) {
      root.classList.remove("scroll-lock");
      root.classList.add("invite-scroll");
      window.scrollTo(0, 0);
    } else {
      root.classList.add("scroll-lock");
      root.classList.remove("invite-scroll");
    }
    return () => {
      root.classList.add("scroll-lock");
      root.classList.remove("invite-scroll");
    };
  }, [opened]);

  const onEngage = useCallback(() => {
    musicRef.current?.start();
  }, []);
  const onOpened = useCallback(() => setOpened(true), []);

  return (
    <>
      <MusicPlayer ref={musicRef} />
      {opened ? (
        <motion.div
          aria-hidden
          style={{ scaleX }}
          className="fixed top-0 left-0 z-[60] h-0.5 w-full origin-left bg-gold"
        />
      ) : null}
      <AnimatePresence>
        {booting ? (
          <motion.div
            key="boot"
            className="boot-overlay fixed inset-0 z-[70]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <BootScreen />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {!opened ? (
          <motion.div
            key="welcome"
            className="welcome-overlay fixed inset-0 z-40 overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            inert={booting}
          >
            <WelcomeScreen onEngage={onEngage} onOpened={onOpened} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <main className="heritage-root" inert={!opened}>
        <InvitationHero />
        <DateSection />
        <CoupleSection />
        <Countdown />
        <EventTimeline />
        <section className="heritage-section pb-0">
          <HeritageIntro kicker="The festivities" title="Days filled with joy" />
        </section>
        <TilakSection />
        <MehndiSection />
        <HaldiSection />
        <BaraatJourney />
        <WeddingSection />
        <FamilySection />
        <VenueSection />
        <ThankYouSection />
      </main>
    </>
  );
}

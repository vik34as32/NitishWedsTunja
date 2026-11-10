"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    startInvitation?: () => void;
    stopInvitation?: () => void;
    __invitationScriptLoaded?: boolean;
  }
}

const ENGINE_SELECTOR = "script[data-invitation-engine='true']";

export function InvitationStage({ html }: { html: string }) {
  useEffect(() => {
    let cancelled = false;

    const boot = () => {
      if (cancelled || !window.startInvitation) return;
      document.body.classList.add("scroll-locked");
      window.scrollTo(0, 0);
      window.startInvitation();
    };

    let script = document.querySelector<HTMLScriptElement>(ENGINE_SELECTOR);
    if (!script) {
      script = document.createElement("script");
      script.src = "/script.js";
      script.async = false;
      script.dataset.invitationEngine = "true";
      document.body.appendChild(script);
    }

    const onLoad = () => boot();
    script.addEventListener("load", onLoad);
    if (window.startInvitation) boot();

    return () => {
      cancelled = true;
      script.removeEventListener("load", onLoad);
      window.stopInvitation?.();
      document.body.classList.remove("scroll-locked");
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

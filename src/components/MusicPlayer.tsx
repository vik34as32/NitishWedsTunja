"use client";

import { assets } from "@/data/wedding";
import { Volume2, VolumeX } from "lucide-react";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

export type MusicHandle = {
  start: () => void;
};

type Drone = { stop: () => void };

function getAudioContext() {
  const Ctx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  return Ctx ? new Ctx() : null;
}

export const MusicPlayer = forwardRef<MusicHandle>(function MusicPlayer(_, ref) {
  const want = useRef(true);
  const engaged = useRef(false);
  const mode = useRef<"none" | "file" | "drone">("none");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const droneRef = useRef<Drone | null>(null);
  const startRef = useRef<() => void>(() => {});
  const [enabled, setEnabled] = useState(true);
  const [playing, setPlaying] = useState(false);

  function prime() {
    if (!ctxRef.current) ctxRef.current = getAudioContext();
    if (ctxRef.current && ctxRef.current.state !== "running") {
      void ctxRef.current.resume();
    }
  }

  function stopDrone() {
    droneRef.current?.stop();
    droneRef.current = null;
    if (mode.current === "drone") mode.current = "none";
  }

  function beginDrone() {
    if (!want.current || mode.current === "drone") return;
    const ctx = ctxRef.current ?? getAudioContext();
    if (!ctx) return;
    ctxRef.current = ctx;
    void ctx.resume();
    audioRef.current?.pause();
    mode.current = "drone";

    const master = ctx.createGain();
    master.gain.value = 0.0001;
    master.connect(ctx.destination);
    const now = ctx.currentTime;
    master.gain.exponentialRampToValueAtTime(0.055, now + 1.3);

    const voices: { freq: number; type: OscillatorType; gain: number }[] = [
      { freq: 130.81, type: "triangle", gain: 0.2 },
      { freq: 196, type: "triangle", gain: 0.09 },
      { freq: 261.63, type: "sine", gain: 0.06 },
      { freq: 392, type: "sine", gain: 0.035 },
    ];
    const nodes: OscillatorNode[] = [];

    voices.forEach((voice, index) => {
      const osc = ctx.createOscillator();
      osc.type = voice.type;
      osc.frequency.value = voice.freq;
      osc.detune.value = index % 2 === 0 ? -6 : 7;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 520;
      const gain = ctx.createGain();
      gain.gain.value = voice.gain;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.11 + index * 0.025;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = voice.gain * 0.28;
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(master);
      osc.start();
      lfo.start();
      nodes.push(osc, lfo);
    });

    droneRef.current = {
      stop() {
        const time = ctx.currentTime;
        master.gain.cancelScheduledValues(time);
        master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), time);
        master.gain.exponentialRampToValueAtTime(0.0001, time + 0.35);
        nodes.forEach((node) => {
          try {
            node.stop(time + 0.4);
          } catch {
            /* oscillator already stopped */
          }
        });
        window.setTimeout(() => master.disconnect(), 480);
      },
    };
    setPlaying(true);
  }

  function playFile() {
    if (!want.current) return;
    const audio = audioRef.current ?? new Audio(assets.music);
    audioRef.current = audio;
    audio.loop = true;
    audio.volume = 0.62;
    audio.preload = "auto";
    audio.onerror = () => beginDrone();
    void audio
      .play()
      .then(() => {
        if (!want.current) {
          audio.pause();
          setPlaying(false);
          return;
        }
        mode.current = "file";
        setPlaying(true);
      })
      .catch(() => beginDrone());
  }

  function start() {
    engaged.current = true;
    if (!want.current) return;
    prime();
    if (mode.current === "drone" && droneRef.current) {
      setPlaying(true);
      return;
    }
    if (mode.current === "file" && audioRef.current) {
      void audioRef.current.play().then(() => setPlaying(true)).catch(() => beginDrone());
      return;
    }
    playFile();
  }

  startRef.current = start;

  useImperativeHandle(ref, () => ({ start: () => startRef.current() }), []);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      droneRef.current?.stop();
      void ctxRef.current?.close();
    };
  }, []);

  function toggle() {
    want.current = !want.current;
    setEnabled(want.current);
    if (!want.current) {
      audioRef.current?.pause();
      stopDrone();
      setPlaying(false);
      return;
    }
    if (!engaged.current) return;
    prime();
    if (mode.current === "file" && audioRef.current) {
      void audioRef.current.play().then(() => setPlaying(true)).catch(() => beginDrone());
      return;
    }
    if (mode.current === "drone") {
      beginDrone();
      return;
    }
    playFile();
  }

  const label = !enabled
    ? "Play wedding music"
    : playing
      ? "Pause wedding music"
      : "Wedding music on";

  return (
    <button
      type="button"
      className={`music-toggle ${playing ? "is-playing" : ""}`}
      aria-pressed={enabled}
      aria-label={label}
      onClick={toggle}
    >
      {enabled ? <Volume2 size={18} strokeWidth={1.6} /> : <VolumeX size={18} strokeWidth={1.6} />}
    </button>
  );
});

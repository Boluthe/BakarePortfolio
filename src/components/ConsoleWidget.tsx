"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Tab = "profile" | "logs" | "metrics";

const mockInitialLogs = [
  "🚀 Initializing system boot diagnostics...",
  "☕ Spring Boot 3.2.0 starting with Java 17...",
  "📡 REST routing tables established on port 8080",
  "🛡️ Spring Security: JWT Authentication active",
  "🐹 Go microservice subsystem spinning up (Go 1.21)...",
  "🐘 Connecting to PostgreSQL database cluster...",
  "🟢 PostgreSQL pool active [10/10 connection capacity]",
  "📦 Redis Cache initialized. PING -> PONG (0.8ms)",
  "📊 Prometheus registry mounted at /actuator/prometheus",
  "⚡ Server system online. Ready for API traffic.",
];

const backendPhrases = [
  "GET  /api/v1/case-studies -> 200 OK (8ms)",
  "GET  /api/v1/metrics/prometheus -> 200 OK (4ms)",
  "POST /api/v1/invoice/escalate -> 202 Accepted (74ms)",
  "INFO - Cache refresh triggered: 14 keys invalidated",
  "INFO - Goroutine thread pool scaling down: 8 active",
  "INFO - JWT token validated for user: recruitment_session_01",
  "GET  /api/v1/health -> 200 OK [status: UP]",
  "INFO - Automated escalation scheduled task triggered",
];

export default function ConsoleWidget() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [logs, setLogs] = useState<string[]>(mockInitialLogs);
  const [cpuUsage, setCpuUsage] = useState(12);
  const [goroutines, setGoroutines] = useState(14);
  const [latency, setLatency] = useState(6);
  
  const logEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs
  useEffect(() => {
    if (activeTab === "logs" && logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, activeTab]);

  // Simulate real-time logs
  useEffect(() => {
    const logInterval = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString();
      const randomPhrase = backendPhrases[Math.floor(Math.random() * backendPhrases.length)];
      setLogs((prev) => [...prev.slice(-25), `[${timestamp}] ${randomPhrase}`]);
    }, 4500);

    return () => clearInterval(logInterval);
  }, []);

  // Simulate real-time metrics variations
  useEffect(() => {
    const metricsInterval = setInterval(() => {
      setCpuUsage((prev) => {
        const change = Math.floor(Math.random() * 7) - 3;
        return Math.max(4, Math.min(85, prev + change));
      });
      setGoroutines((prev) => {
        const change = Math.floor(Math.random() * 3) - 1;
        return Math.max(10, Math.min(32, prev + change));
      });
      setLatency((prev) => {
        const change = Math.floor(Math.random() * 3) - 1;
        return Math.max(2, Math.min(18, prev + change));
      });
    }, 3000);

    return () => clearInterval(metricsInterval);
  }, []);

  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl border border-white/[0.08] bg-[#070e17]/80 backdrop-blur-lg shadow-2xl shadow-black/80 overflow-hidden font-sans">
      {/* Console Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#040910]/90">
        {/* Terminal Window dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        
        {/* Connection status tag */}
        <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>JVM_CLUSTER_ON</span>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex border-b border-white/[0.08] bg-[#040910]/40 text-xs font-mono">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex-1 py-2 px-3 border-r border-white/[0.08] transition-colors duration-200 text-center ${
            activeTab === "profile" 
              ? "bg-[#0c1421] text-emerald-400 font-bold border-b border-b-emerald-400" 
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          📸 profile.jpg
        </button>
        <button
          onClick={() => setActiveTab("logs")}
          className={`flex-1 py-2 px-3 border-r border-white/[0.08] transition-colors duration-200 text-center ${
            activeTab === "logs" 
              ? "bg-[#0c1421] text-emerald-400 font-bold border-b border-b-emerald-400" 
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          📄 stdout.log
        </button>
        <button
          onClick={() => setActiveTab("metrics")}
          className={`flex-1 py-2 px-3 transition-colors duration-200 text-center ${
            activeTab === "metrics" 
              ? "bg-[#0c1421] text-emerald-400 font-bold border-b border-b-emerald-400" 
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          📊 system.sh
        </button>
      </div>

      {/* Content Area */}
      <div className="h-64 sm:h-76 md:h-80 overflow-y-auto bg-[#070e17]/95 p-4 flex flex-col">
        {/* PROFILE IMAGE TAB */}
        {activeTab === "profile" && (
          <div className="flex flex-col items-center justify-center h-full gap-3 py-2">
            <div className="relative">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-emerald-500/30 via-transparent to-sky-500/20" />
              <div className="relative w-36 h-44 sm:w-40 sm:h-48 overflow-hidden rounded-xl bg-slate-800 shadow-lg">
                <Image
                  src="/profile.jpg"
                  alt="Tioluwani Bakare"
                  width={200}
                  height={240}
                  className="h-full w-full object-cover object-top filter grayscale contrast-125 brightness-95"
                  priority
                />
              </div>
            </div>
            <div className="text-center font-mono text-[11px] text-slate-500">
              $ cat metadata.json
              <div className="text-emerald-400/90 text-xs font-bold mt-1">
                Tioluwani Bakare — fullstack.bin
              </div>
            </div>
          </div>
        )}

        {/* LOGS TAB */}
        {activeTab === "logs" && (
          <div className="flex-1 font-mono text-[10px] sm:text-[11px] text-slate-300 space-y-1.5 leading-relaxed selection:bg-emerald-500 selection:text-black">
            {logs.map((log, i) => {
              const isOk = log.includes("200 OK") || log.includes("UP");
              const isAccepted = log.includes("202 Accepted");
              return (
                <div key={i} className="break-all border-l-2 border-slate-800/40 pl-2">
                  <span className="text-slate-600">$&nbsp;</span>
                  {isOk ? (
                    <span className="text-emerald-400">{log}</span>
                  ) : isAccepted ? (
                    <span className="text-sky-400">{log}</span>
                  ) : (
                    <span>{log}</span>
                  )}
                </div>
              );
            })}
            <div ref={logEndRef} />
          </div>
        )}

        {/* SYSTEM METRICS TAB */}
        {activeTab === "metrics" && (
          <div className="flex-1 font-mono text-xs text-slate-300 space-y-4 py-2">
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-slate-500">CPU LOAD (SYSTEM)</span>
                <span className={cpuUsage > 50 ? "text-amber-400" : "text-emerald-400"}>{cpuUsage}%</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-white/[0.04]">
                <div 
                  className={`h-full transition-all duration-500 rounded-full ${
                    cpuUsage > 50 ? "bg-amber-500" : "bg-emerald-500"
                  }`} 
                  style={{ width: `${cpuUsage}%` }} 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950/40 p-3 rounded-xl border border-white/[0.04]">
                <span className="text-[10px] text-slate-500 block uppercase">Go Routines</span>
                <span className="text-[15px] font-bold text-sky-400 mt-1 block">{goroutines} active</span>
              </div>
              
              <div className="bg-slate-950/40 p-3 rounded-xl border border-white/[0.04]">
                <span className="text-[10px] text-slate-500 block uppercase">DB Latency</span>
                <span className="text-[15px] font-bold text-emerald-400 mt-1 block">{latency}ms</span>
              </div>
            </div>

            <div className="space-y-2 text-[11px] border-t border-white/[0.06] pt-3">
              <div className="flex justify-between">
                <span className="text-slate-500">DATABASE STATUS</span>
                <span className="text-emerald-400 font-bold">CONNECTED (PostgreSQL)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">JVM HEAP MEMORY</span>
                <span>284MB / 512MB (Spring Boot)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">CACHE SYSTEM</span>
                <span className="text-sky-400 font-bold">ACTIVE (Redis Cluster)</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer Info */}
      <div className="px-4 py-2 bg-[#040910]/95 border-t border-white/[0.08] text-[10px] font-mono text-slate-500 flex justify-between">
        <span>LOC: Lagos, Nigeria</span>
        <span>UTC +1</span>
      </div>
    </div>
  );
}

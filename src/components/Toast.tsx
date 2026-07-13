"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface ToastContextType {
  showToast: (message: string, type?: "success" | "info") => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const showToast = useCallback((msg: string, _type?: "success" | "info") => {
    setMessage(msg);
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Floating Cyber-Toast */}
      <div
        className={`fixed bottom-14 right-6 z-[100] transition-all duration-300 transform pointer-events-none ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {message && (
          <div className="pointer-events-auto flex items-center gap-3 rounded-xl border border-emerald-500/50 bg-[#1e222b]/95 dark:bg-[#1e222b]/95 light:bg-slate-900/95 p-4 text-xs sm:text-sm font-mono font-semibold text-emerald-400 shadow-2xl shadow-black/80 backdrop-blur-xl ring-1 ring-emerald-400/20 max-w-sm">
            <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
            <span className="text-slate-200">{message}</span>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

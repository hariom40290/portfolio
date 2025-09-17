"use client";

import { useEffect } from "react";

// Root Dialog
export function Dialog({ open, onOpenChange, children }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onOpenChange(false);
    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] relative">
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

// Header Section
export function DialogHeader({ children }) {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      {children}
    </div>
  );
}

// Title (inside Header)
export function DialogTitle({ children }) {
  return (
    <h2 className="text-xl font-bold text-gray-900">
      {children}
    </h2>
  );
}

// Body (Scrollable)
export function DialogContent({ children }) {
  return (
    <div className="px-6 py-4 overflow-y-auto flex-1">
      {children}
    </div>
  );
}

// Footer (Buttons etc.)
export function DialogFooter({ children }) {
  return (
    <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
      {children}
    </div>
  );
}

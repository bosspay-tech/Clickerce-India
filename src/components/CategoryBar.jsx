import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Keep these keys SAME as what your Products page understands
const NAV_CATEGORIES = [
  { key: "all", label: "All", icon: "✨" },
  { key: "fashion", label: "Fashion", icon: "👗" },
  { key: "electronics", label: "Electronics", icon: "📱" },
  { key: "beauty", label: "Beauty", icon: "💄" },
  { key: "home", label: "Home", icon: "🏠" },
  { key: "auto", label: "Auto", icon: "🏍️" },
  { key: "sports", label: "Sports", icon: "🏀" },
];

export default function CategoryNavBar({
  className = "",
  basePath = "/products",
}) {
  const nav = useNavigate();
  const { pathname, search } = useLocation();
  const params = useMemo(() => new URLSearchParams(search), [search]);

  const activeKey = useMemo(() => {
    if (!pathname.startsWith(basePath)) return null;
    return params.get("category") || params.get("type") || "all";
  }, [pathname, params, basePath]);

  const go = (key) => {
    const sp = new URLSearchParams();
    if (key && key !== "all") sp.set("category", key);

    nav({
      pathname: basePath,
      search: sp.toString() ? `?${sp.toString()}` : "",
    });
  };

  return (
    <div
      className={[
        "sticky top-0 z-40 w-full border-b border-slate-200 bg-white/85 backdrop-blur",
        className,
      ].join(" ")}
    >
      <div className="w-full px-4 sm:px-6">
        <div className="flex w-full items-center gap-2 overflow-x-auto py-3 [-webkit-overflow-scrolling:touch]">
          {NAV_CATEGORIES.map((c) => {
            const isActive = activeKey === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => go(c.key)}
                className={[
                  "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition",
                  "border shadow-sm",
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
                ].join(" ")}
              >
                <span className="mr-2">{c.icon}</span>
                {c.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function LimitSelector({ currentLimit, baseUrl }) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4 mb-4">
      <select
        value={currentLimit}
        onChange={(e) => {
          const newLimit = e.target.value;
          router.push(`${baseUrl}?limit=${newLimit}&skip=0`);
        }}
        className="border rounded px-2 py-1"
      >
        {[30, 60, 90, 120, 150, 180, 210].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    </div>
  );
}

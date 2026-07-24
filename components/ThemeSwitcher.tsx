'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const themes = [
  { id: 'terminal-amber', label: 'Terminal Amber' },
  { id: 'acid-violet', label: 'Acid Violet' },
  { id: 'zine-brutalism', label: 'Zine Brutalism' },
  { id: 'analog-void', label: 'Analog Void' },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting until mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-1 font-mono text-xs">
      <span className="text-app-muted mr-1">THEME::</span>
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`px-2 py-1 border transition-colors ${
            theme === t.id
              ? 'border-app-accent text-app-accent bg-app-card'
              : 'border-app-border text-app-muted hover:text-app-text hover:border-app-muted'
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
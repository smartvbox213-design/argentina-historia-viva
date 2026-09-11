import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Screen({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <main
      className={cn(
        "relative mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center gap-8 px-5 py-12 sm:px-8",
        className,
      )}
    >
      {children}
    </main>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sol">{children}</p>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-card/70 p-5 backdrop-blur-sm sm:p-7",
        className,
      )}
    >
      {children}
    </div>
  );
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "sol";
};

export function Button({ variant = "primary", className, ...props }: BtnProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-glow hover:brightness-110",
        variant === "sol" && "bg-sol text-pizarra hover:brightness-110",
        variant === "ghost" &&
          "border border-border bg-transparent text-foreground hover:border-sol hover:text-sol",
        className,
      )}
    />
  );
}

export function LockedCard({ title, note }: { title: string; note?: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-border/70 bg-card/30 p-5 text-left opacity-60">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-serif text-lg text-foreground">{title}</h3>
        <span aria-hidden className="text-base">
          🔒
        </span>
      </div>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {note ?? "Próximamente"}
      </p>
    </div>
  );
}

export function TimerBar({ progress, urgent }: { progress: number; urgent?: boolean }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/60">
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-1000 ease-linear",
          urgent ? "bg-destructive" : "bg-sol",
        )}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function StreakBadge({ streak }: { streak: number }) {
  if (streak < 3) return null;
  return (
    <span className="rounded-full border border-sol/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sol">
      🔥 Racha x{streak}
    </span>
  );
}

export function Stat({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/50 px-4 py-3">
      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-1 font-serif text-2xl text-foreground">{value}</p>
    </div>
  );
}

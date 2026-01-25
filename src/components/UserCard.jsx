import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import BadgeIcon from "./BadgeIcon";
import "./UserCard.css";

/**
 * Single-line user card showing username, context badges (e.g. Host), and earned badge icon.
 * Use wherever a username is displayed (header, waiting room, leaderboard, etc.).
 *
 * @param {string} username - Display name
 * @param {Array} [badges] - Context badges (e.g. [{ id, label }] for "Host").
 * @param {Array<{ id: string; name: string; description: string }>} [earnedBadges] - Earned badge defs. Shows latest as icon; click reveals all.
 * @param {boolean} [isYou] - Append " (You)" when true
 * @param {string} [href] - If set, card main part is clickable (use with onClick).
 * @param {function} [onClick] - Optional click handler for main part (e.g. navigate to profile).
 * @param {string} [className] - Additional CSS class
 * @param {string} [size] - 'sm' | 'md' (default: 'md')
 */
export default function UserCard({
  username,
  badges = [],
  earnedBadges = [],
  isYou = false,
  href,
  onClick,
  className = "",
  size = "md",
}) {
  const displayName = username || "Player";
  const suffix = isYou ? " (You)" : "";
  const isMainClickable = !!(href || onClick);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const iconRef = useRef(/** @type {HTMLButtonElement | null} */ (null));
  const popoverRef = useRef(/** @type {HTMLDivElement | null} */ (null));

  const latestEarned = earnedBadges.length > 0 ? earnedBadges[0] : null;
  const hasEarnedBadges = earnedBadges.length > 0;

  useEffect(() => {
    if (!popoverOpen) return;
    const handleClick = (e) => {
      const el = e.target;
      if (
        el instanceof Node &&
        iconRef.current?.contains(el) === false &&
        popoverRef.current?.contains(el) === false
      ) {
        setPopoverOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [popoverOpen]);

  useEffect(() => {
    if (!popoverOpen) return;
    const close = () => setPopoverOpen(false);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [popoverOpen]);

  const mainContent = (
    <>
      <span className="userCard-name">
        {displayName}
        {suffix}
      </span>
      <div className="userCard-badges" aria-hidden="true">
        {badges.length > 0
          ? badges.map((b) => (
              <span
                key={b.id || b.label}
                className="userCard-badge"
                title={typeof b === "object" && b.label ? b.label : undefined}
              >
                {typeof b === "object" && b.icon != null ? b.icon : null}
                {typeof b === "object" && b.label ? b.label : String(b)}
              </span>
            ))
          : null}
      </div>
    </>
  );

  const baseClass = `userCard userCard--${size} ${className}`.trim();
  const iconSize = size === "sm" ? "sm" : "md";

  return (
    <div className={baseClass} role="presentation">
      {isMainClickable ? (
        <button
          type="button"
          className="userCard-main userCard--clickable"
          onClick={onClick}
          aria-label={isYou ? `${displayName} (You) – go to profile` : `${displayName} – go to profile`}
        >
          {mainContent}
        </button>
      ) : (
        <div className="userCard-main">{mainContent}</div>
      )}

      {hasEarnedBadges && latestEarned && (
        <div className="userCard-earnedWrap">
          <button
            ref={iconRef}
            type="button"
            className="userCard-earnedIcon"
            onClick={(e) => {
              e.stopPropagation();
              setPopoverOpen((v) => !v);
            }}
            aria-label={`Badge: ${latestEarned.name}. Click to see all badges.`}
            aria-expanded={popoverOpen}
          >
            <BadgeIcon size={iconSize} title={latestEarned.name} />
          </button>
          {popoverOpen &&
            (() => {
              const rect = iconRef.current?.getBoundingClientRect();
              if (!rect) return null;
              const top = rect.bottom + 6;
              const right = typeof window !== "undefined" ? window.innerWidth - rect.right : 0;
              const anchorClass = `userCard-badgePopoverAnchor userCard-badgePopoverAnchor--${size}`;
              const popover = (
                <div
                  ref={popoverRef}
                  className={anchorClass}
                  style={{ position: "fixed", top, right, left: "auto", bottom: "auto" }}
                  role="dialog"
                  aria-label={isYou ? "Your badges" : "Badges"}
                >
                  <div className="userCard-badgePopover">
                    {earnedBadges.map((b) => (
                      <div key={b.id} className="userCard-badgePopoverItem">
                        <BadgeIcon size="sm" title={b.name} />
                        <span className="userCard-badgePopoverName">{b.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
              return typeof document !== "undefined"
                ? createPortal(popover, document.body)
                : null;
            })()}
        </div>
      )}
    </div>
  );
}

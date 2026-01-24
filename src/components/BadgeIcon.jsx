import React from "react";
import "./BadgeIcon.css";

/**
 * Ribbon/medal icon for badges. Use in UserCard, Profile, and badge popovers.
 *
 * @param {object} props
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.size] - 'sm' | 'md' | 'lg' (default: 'md')
 * @param {string} [props.title] - Accessible title/tooltip
 */
export default function BadgeIcon({ className = "", size = "md", title = "Badge" }) {
  return (
    <span
      className={`badgeIcon badgeIcon--${size} ${className}`.trim()}
      role="img"
      aria-label={title}
      title={title}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="9" y="1" width="6" height="5" rx="1.5" fill="currentColor" />
        <circle cx="12" cy="13" r="8" fill="currentColor" />
      </svg>
    </span>
  );
}

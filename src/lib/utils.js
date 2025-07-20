// lib/utils.js

export function cn(...inputs) {
  return inputs
    .filter(Boolean)  // false/undefined/"" remove pannum
    .join(" ")        // join class names with space
    .trim()
}

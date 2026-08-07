type ClassValue = string | number | false | null | undefined;

/** Joins conditional class names into a single className string. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}

export const X3108MergeClasses = (...classes: (string | undefined | false)[]) =>
  classes
    .filter(Boolean)
    .map((cls) => (typeof cls === "string" ? cls.replace(/\s+/g, " ") : cls))
    .join(" ")
    .trim();

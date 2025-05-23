/**
 * A constant array of available loader animation variants.
 *
 * - `"circle-dots"`: A loader with circular dot animation.
 * - `"dots"`: A loader with simple dot animation.
 */
export const VARIANTS = ["circle-dots", "dots"] as const;

/**
 * Type representing the allowed values for the loader variant.
 *
 * This is derived from the `VARIANTS` array and ensures strict type safety
 * when selecting a variant.
 */
export type Variant = (typeof VARIANTS)[number];

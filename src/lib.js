/**
 * Brand constants & helpers
 */
import { LAMONA } from './data/products.js';

export const B = LAMONA.brand;
export const PRODUCTS = LAMONA.products;
export const CATS = LAMONA.categories;
export const POSTS = LAMONA.posts;
export const HERO_FEATURED = LAMONA.heroFeatured;

/** Build a WhatsApp link with a pre-filled message */
export const waLink = (msg) =>
  `https://wa.me/${B.whatsapp}?text=${encodeURIComponent(msg || B.whatsappMsg)}`;

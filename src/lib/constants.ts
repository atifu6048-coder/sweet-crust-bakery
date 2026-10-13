export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'cakes' | 'treats';
  image: string;
  alt: string;
  isBestSeller?: boolean;
}

export interface ValueCard {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

// Single configurable contact phone number
// The supplied number is a practice number: 0300 1234567
export const BAKERY_PHONE_DISPLAY = '0300 1234567';
export const BAKERY_PHONE_RAW = '923001234567'; // International format for WhatsApp without plus or spaces
export const BAKERY_EMAIL = 'hello@sweetcrustbakery.pk';
export const BAKERY_ADDRESS = 'Main Bazaar Road, Near City Chowk, Mardan, Pakistan';
export const BAKERY_HOURS = 'Monday to Saturday: 9:00 AM - 9:00 PM. Sunday: Closed.';
export const BAKERY_NAME = 'Sweet Crust Bakery';
export const BAKERY_CITY = 'Mardan, Pakistan';

/**
 * Generates a clean, URL-encoded WhatsApp order link with prefilled text.
 */
export function getWhatsAppOrderUrl(productName?: string): string {
  const message = productName
    ? `Hello Sweet Crust Bakery! I would like to order: ${productName}. Please let me know how to proceed.`
    : `Hello Sweet Crust Bakery! I would like to place an order. Please share details.`;
  return `https://wa.me/${BAKERY_PHONE_RAW}?text=${encodeURIComponent(message)}`;
}

export const MENU_ITEMS: MenuItem[] = [
  // Cakes
  {
    id: 'chocolate-fudge-cake',
    name: 'Chocolate Fudge Cake',
    description: 'Rich, dark and super soft.',
    price: 'Rs 2,800',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    alt: 'Decadent chocolate fudge cake with rich chocolate frosting',
    isBestSeller: true,
  },
  {
    id: 'strawberry-cream-cake',
    name: 'Strawberry Cream Cake',
    description: 'Fresh strawberries with soft cream.',
    price: 'Rs 3,200',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    alt: 'Fresh strawberry cream sponge cake decorated with fresh berries',
    isBestSeller: true,
  },
  {
    id: 'vanilla-classic-cake',
    name: 'Vanilla Classic Cake',
    description: 'Simple, soft and loved by everyone.',
    price: 'Rs 2,200',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    alt: 'Classic fluffy vanilla celebration cake with vanilla buttercream',
    isBestSeller: false,
  },
  {
    id: 'custom-birthday-cake',
    name: 'Custom Birthday Cake',
    description: 'Your design, your colours, your words.',
    price: 'From Rs 3,500',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
    alt: 'Handcrafted custom birthday cake decorated with artistic toppings',
    isBestSeller: false,
  },
  // Cupcakes, brownies and cookies
  {
    id: 'party-cupcakes',
    name: 'Party Cupcakes (Box of 6)',
    description: 'Colourful and fun for parties.',
    price: 'Rs 1,500',
    category: 'treats',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80',
    alt: 'Box of colourful frosted party cupcakes with sprinkles',
    isBestSeller: true,
  },
  {
    id: 'chocolate-cupcakes',
    name: 'Chocolate Cupcakes (Box of 6)',
    description: 'Double chocolate happiness.',
    price: 'Rs 1,600',
    category: 'treats',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80',
    alt: 'Moist chocolate cupcakes with rich chocolate swirl frosting',
    isBestSeller: false,
  },
  {
    id: 'fudge-brownies',
    name: 'Fudge Brownies (Box of 4)',
    description: 'Warm, gooey and full of chocolate.',
    price: 'Rs 900',
    category: 'treats',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    alt: 'Freshly baked fudge chocolate brownies with crinkly tops',
    isBestSeller: false,
  },
  {
    id: 'butter-cookies',
    name: 'Butter Cookies (Box of 12)',
    description: 'Crunchy, buttery and perfect with tea.',
    price: 'Rs 800',
    category: 'treats',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
    alt: 'Golden crunchy homemade butter cookies arranged in a box',
    isBestSeller: false,
  },
];

export const WHY_CHOOSE_US: ValueCard[] = [
  {
    title: 'Baked Fresh Daily',
    description: 'Every morning we start fresh from scratch so you always enjoy warm, oven-fresh goodness.',
    iconName: 'Flame',
  },
  {
    title: 'Best Quality Ingredients',
    description: 'We use pure butter, farm-fresh dairy, and rich cocoa with no artificial shortcuts.',
    iconName: 'Sparkles',
  },
  {
    title: 'Made to Order',
    description: 'Each bake is prepared especially for your special day with care and personalized detail.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Home Delivery in Mardan',
    description: 'Carefully packaged and delivered right to your home anywhere across Mardan city.',
    iconName: 'Truck',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The chocolate cake was so soft and fresh. My whole family loved it!',
    author: 'Fatima',
    location: 'Mardan',
    rating: 5,
  },
  {
    quote: 'Best cupcakes in the city. I order every month for my office.',
    author: 'Ahmed',
    location: 'Mardan',
    rating: 5,
  },
];

export const ABOUT_VALUES: ValueCard[] = [
  {
    title: 'Fresh Always',
    description: 'I never sell old stock.',
    iconName: 'Clock',
  },
  {
    title: 'Honest Prices',
    description: 'Good taste should not be costly.',
    iconName: 'Tag',
  },
  {
    title: 'Made with Love',
    description: 'Every order is personal for me.',
    iconName: 'Heart',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Chocolate Fudge Celebration Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    alt: 'Chocolate fudge celebration cake with smooth chocolate ganache',
  },
  {
    id: 'gal-2',
    title: 'Strawberry Cream Gateau',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    alt: 'Strawberry cream cake topped with sliced fresh strawberries',
  },
  {
    id: 'gal-3',
    title: 'Colourful Party Cupcakes',
    category: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80',
    alt: 'Freshly frosted colourful party cupcakes',
  },
  {
    id: 'gal-4',
    title: 'Gooey Fudge Brownies',
    category: 'Brownies',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    alt: 'Rich chocolate fudge brownies cut into generous squares',
  },
  {
    id: 'gal-5',
    title: 'Artisan Custom Birthday Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
    alt: 'Custom themed floral birthday cake',
  },
  {
    id: 'gal-6',
    title: 'Golden Butter Tea Cookies',
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
    alt: 'Crisp handmade golden butter cookies',
  },
  {
    id: 'gal-7',
    title: 'Double Chocolate Swirl Cupcakes',
    category: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80',
    alt: 'Double chocolate cupcakes topped with dark cocoa frosting',
  },
  {
    id: 'gal-8',
    title: 'Classic Vanilla Celebration Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    alt: 'Vanilla layered celebration cake decorated with white rosettes',
  },
];

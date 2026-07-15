export type Villa = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceValue: number;
  location: string;
  country: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  description: string;
  features: string[];
  cover: string;
  images: string[];
};

const makeImages = (villa: number) => {
  return Array.from({ length: 11 }, (_, i) =>
    `/villa-optimized/villa${villa}/interior${i + 1}.jpg`
  );
};

export const villas: Villa[] = [
  {
    id: "villa1",
    name: "The Ridge House",
    tagline: "Luxury coastal retreat in Diani",
    price: "KES 120,000/night",
    priceValue: 120000,
    location: "Diani Beach",
    country: "Kenya",
    bedrooms: 5,
    bathrooms: 6,
    size: "6,500 sq ft",
    description:
      "A refined tropical sanctuary blending modern architecture with coastal elegance.",
    features: [
      "Infinity Pool",
      "Ocean View",
      "Private Chef",
      "Wi-Fi",
      "Beach Access",
    ],
    cover: "/villa-optimized/villa1/main.jpg",
    images: makeImages(1),
  },

  {
    id: "villa2",
    name: "Beachfront Villa",
    tagline: "A serene modern escape",
    price: "KES 150,000/night",
    priceValue: 150000,
    location: "Diani Beach",
    country: "Kenya",
    bedrooms: 6,
    bathrooms: 7,
    size: "7,200 sq ft",
    description:
      "Designed for comfort, privacy and unforgettable luxury experiences.",
    features: [
      "Private Pool",
      "Rooftop Lounge",
      "Cinema Room",
      "Garden",
      "Gym",
    ],
    cover: "/villa-optimized/villa2/main.jpg",
    images: makeImages(2),
  },

  {
    id: "villa3",
    name: "Heimel Villa",
    tagline: "Elegant beachfront living",
    price: "KES 180,000/night",
    priceValue: 180000,
    location: "Diani Beach",
    country: "Kenya",
    bedrooms: 7,
    bathrooms: 8,
    size: "8,000 sq ft",
    description:
      "Panoramic ocean views paired with contemporary tropical interiors.",
    features: [
      "Beachfront",
      "Spa",
      "Infinity Pool",
      "Chef Service",
      "Cinema",
    ],
    cover: "/villa-optimized/villa3/main.jpg",
    images: makeImages(3),
  },

  {
    id: "villa4",
    name: "Destination Kilifi",
    tagline: "Minimal luxury in paradise",
    price: "KES 130,000/night",
    priceValue: 130000,
    location: "Diani Beach",
    country: "Kenya",
    bedrooms: 4,
    bathrooms: 5,
    size: "5,400 sq ft",
    description:
      "A sophisticated hideaway designed for tranquility and elegance.",
    features: [
      "Pool",
      "Outdoor Lounge",
      "Smart Home",
      "Sea View",
      "Bar",
    ],
    cover: "/villa-optimized/villa4/main.jpg",
    images: makeImages(4),
  },

  {
    id: "villa5",
    name: "Sultana Villa",
    tagline: "Contemporary tropical architecture",
    price: "KES 170,000/night",
    priceValue: 170000,
    location: "Diani Beach",
    country: "Kenya",
    bedrooms: 6,
    bathrooms: 7,
    size: "7,600 sq ft",
    description:
      "An immersive luxury experience curated for discerning travellers.",
    features: [
      "Private Chef",
      "Gym",
      "Infinity Pool",
      "Fire Pit",
      "Cinema",
    ],
    cover: "/villa-optimized/villa5/main.jpg",
    images: makeImages(5),
  },

  {
    id: "villa6",
    name: "House of Sea and Sun",
    tagline: "Timeless elegance meets the ocean",
    price: "KES 200,000/night",
    priceValue: 200000,
    location: "Diani Beach",
    country: "Kenya",
    bedrooms: 8,
    bathrooms: 9,
    size: "9,500 sq ft",
    description:
      "A grand residence crafted for unforgettable coastal escapes.",
    features: [
      "Beachfront",
      "Pool",
      "Private Bar",
      "Jacuzzi",
      "Chef",
    ],
    cover: "/villa-optimized/villa6/main.jpg",
    images: makeImages(6),
  },

  {
    id: "villa7",
    name: "La Dolce Vita",
    tagline: "Luxury redefined on the Kenyan coast",
    price: "KES 160,000/night",
    priceValue: 160000,
    location: "Diani Beach",
    country: "Kenya",
    bedrooms: 5,
    bathrooms: 6,
    size: "6,900 sq ft",
    description:
      "A refined balance of privacy, design and tropical sophistication.",
    features: [
      "Infinity Pool",
      "Cinema",
      "Garden",
      "Ocean View",
      "Wi-Fi",
    ],
    cover: "/villa-optimized/villa7/main.jpg",
    images: makeImages(7),
  },

  {
    id: "villa8",
    name: "Serenity Sands",
    tagline: "A signature Syracove residence",
    price: "KES 250,000/night",
    priceValue: 250000,
    location: "Diani Beach",
    country: "Kenya",
    bedrooms: 9,
    bathrooms: 10,
    size: "11,000 sq ft",
    description:
      "The pinnacle of luxury living with expansive interiors and uninterrupted sea views.",
    features: [
      "Private Beach",
      "Spa",
      "Infinity Pool",
      "Chef",
      "Cinema",
    ],
    cover: "/villa-optimized/villa8/main.jpg",
    images: makeImages(8),
  },
];

export const getVilla = (id: string) =>
  villas.find((v) => v.id === id);
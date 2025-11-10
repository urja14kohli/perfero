export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice: number;
  size: string;
  images: string[];
  description: string;
  category: 'single' | 'gift-pack';
  inStock: boolean;
  featured: boolean;
  offer?: {
    isActive: boolean;
    offerType: '1+1'; // Buy 1 Get 1
    offerPrice: number; // Price for 2 items
  };
}

export const products: Product[] = [
  // Single Bottles (50ml) - ₹1,500 → ₹699
  {
    id: 'orka',
    name: 'Orka',
    price: 1500,
    salePrice: 699,
    size: '50ml',
    images: ['/images/bottles/1.jpeg'],
    description: 'A bold and warm fragrance that captures great style. Orka combines rich, warm notes to create a memorable scent experience.',
    category: 'single',
    inStock: true,
    featured: true,
    offer: {
      isActive: true,
      offerType: '1+1',
      offerPrice: 599
    }
  },
  {
    id: 'gildara',
    name: 'Gildara',
    price: 1500,
    salePrice: 699,
    size: '50ml',
    images: ['/images/bottles/2.jpeg'],
    description: 'An electrifying blend that sparkles with energy. Gildara brings together fresh and vibrant notes for a modern, dynamic fragrance.',
    category: 'single',
    inStock: true,
    featured: true,
    offer: {
      isActive: true,
      offerType: '1+1',
      offerPrice: 599
    }
  },
  {
    id: 'indiglo',
    name: 'Indiglo',
    price: 1500,
    salePrice: 699,
    size: '50ml',
    images: ['/images/bottles/3.jpeg'],
    description: 'Clean and classic, Indiglo embodies timeless style. This fragrance is perfect for those who appreciate classic elegance.',
    category: 'single',
    inStock: true,
    featured: true,
    offer: {
      isActive: true,
      offerType: '1+1',
      offerPrice: 599
    }
  },
  {
    id: 'vermelia',
    name: 'Vermelia',
    price: 1500,
    salePrice: 699,
    size: '50ml',
    images: ['/images/bottles/4.jpeg'],
    description: 'A fresh and aquatic fragrance that captures the essence of ocean breezes. Vermelia is perfect for everyday elegance.',
    category: 'single',
    inStock: true,
    featured: true,
    offer: {
      isActive: true,
      offerType: '1+1',
      offerPrice: 599
    }
  },
  {
    id: 'olivaire',
    name: 'Olivaire',
    price: 1500,
    salePrice: 699,
    size: '50ml',
    images: ['/images/bottles/5.jpeg'],
    description: 'Deep and mysterious, Olivaire is a rich fragrance that commands attention. Perfect for evening wear and special occasions.',
    category: 'single',
    inStock: true,
    featured: true,
    offer: {
      isActive: true,
      offerType: '1+1',
      offerPrice: 599
    }
  },
  {
    id: 'blau',
    name: 'Blau',
    price: 1500,
    salePrice: 699,
    size: '50ml',
    images: ['/images/bottles/6.jpeg'],
    description: 'Fresh and green, Blau captures the essence of nature. This vibrant fragrance is perfect for those who love fresh, natural scents.',
    category: 'single',
    inStock: true,
    featured: true,
    offer: {
      isActive: true,
      offerType: '1+1',
      offerPrice: 599
    }
  },
  {
    id: 'rouviere',
    name: 'Rouvière',
    price: 1500,
    salePrice: 699,
    size: '50ml',
    images: ['/images/bottles/7.jpeg'],
    description: 'Dark and mysterious, Rouvière is a bold fragrance for modern people. Rich, complex, and memorable.',
    category: 'single',
    inStock: true,
    featured: true,
    offer: {
      isActive: true,
      offerType: '1+1',
      offerPrice: 599
    }
  },
  
  // Gift Pack (7x10ml) - ₹799 (discounted from ₹1,077)
  {
    id: 'perfero-gift-pack',
    name: 'Perféro Signature Gift Pack',
    price: 1077,
    salePrice: 799,
    size: '7x10ml',
    images: [
      '/images/gift-pack/pack classic angle.jpeg'
    ],
    description: 'Experience the complete Perféro collection in one beautiful package. Seven different fragrances, each made with care. Perfect for gifting or finding your favorite scent.',
    category: 'gift-pack',
    inStock: true,
    featured: true,
    offer: {
      isActive: true,
      offerType: '1+1',
      offerPrice: 899
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'single' | 'gift-pack' | 'all'): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getSingleBottles = (): Product[] => {
  return products.filter(product => product.category === 'single');
};

export const getGiftPack = (): Product | undefined => {
  return products.find(product => product.category === 'gift-pack');
};

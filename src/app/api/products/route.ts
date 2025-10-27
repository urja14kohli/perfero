import { NextResponse } from 'next/server';
import { products, getProductById, getProductsByCategory } from '@/lib/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const category = searchParams.get('category');

  try {
    if (id) {
      // Get single product by ID
      const product = getProductById(id);
      if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
      return NextResponse.json(product);
    }

    if (category) {
      // Get products by category
      const filteredProducts = getProductsByCategory(category as 'single' | 'gift-pack' | 'all');
      return NextResponse.json(filteredProducts);
    }

    // Get all products
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

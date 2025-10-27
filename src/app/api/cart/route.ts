import { NextResponse } from 'next/server';
import { getProductById } from '@/lib/products';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, quantity = 1 } = body;

    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    // Validate product exists
    const product = getProductById(productId);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Validate quantity
    if (quantity < 1 || quantity > 10) {
      return NextResponse.json({ error: 'Invalid quantity' }, { status: 400 });
    }

    // Check if product is in stock
    if (!product.inStock) {
      return NextResponse.json({ error: 'Product is out of stock' }, { status: 400 });
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Product added to cart',
      product: {
        id: product.id,
        name: product.name,
        price: product.salePrice,
        quantity,
      },
    });
  } catch (error) {
    console.error('Error adding to cart:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

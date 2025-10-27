'use client';

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Star, Heart, Share2 } from 'lucide-react';
import { getProductById, getSingleBottles } from '@/lib/products';
import { useCartStore } from '@/lib/cart';
import { formatCurrency } from '@/lib/razorpay';
import ProductCard from '@/components/ProductCard';
import ImageStage from '@/components/ImageStage';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = getProductById(id);
  const { addItem, getItemQuantity } = useCartStore();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const relatedProducts = getSingleBottles().slice(0, 3);
  const isOnSale = product.salePrice < product.price;
  const currentQuantity = getItemQuantity(product.id);

  return (
    <div className="bg-ivory">
      {/* Breadcrumb */}
      <div className="bg-alabaster py-4">
        <div className="container-luxury">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-muted/60">/</span>
            <Link href="/shop" className="text-muted hover:text-gold transition-colors">
              Shop
            </Link>
            <span className="text-muted/60">/</span>
            <span className="text-charcoal font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container-luxury py-20">
        {/* Back Button */}
        <Link
          href="/shop"
          className="inline-flex items-center text-muted hover:text-gold mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative">
              <ImageStage
                src={product.images[selectedImageIndex]}
                alt={product.name}
                maskEdges={true}
                className="shadow-card"
              />
              
              {/* Sale Badge */}
              {isOnSale && (
                <div className="absolute top-4 left-4 z-10 bg-gold/90 text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                  Sale
                </div>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
              >
                <Heart 
                  size={20} 
                  className={isWishlisted ? 'text-red-500 fill-current' : 'text-muted'} 
                />
              </button>

              {/* Share Button */}
              <button className="absolute bottom-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                <Share2 size={20} className="text-muted" />
              </button>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative transition-colors duration-200 ${
                      selectedImageIndex === index
                        ? 'ring-2 ring-gold ring-offset-2'
                        : 'hover:ring-2 hover:ring-gold/50 hover:ring-offset-2'
                    }`}
                  >
                    <ImageStage
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      maskEdges={true}
                      className="aspect-square"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-display text-4xl lg:text-5xl text-charcoal mb-3">
                {product.name}
              </h1>
              <p className="text-lg text-muted mb-6">
                {product.size}
              </p>
              
              {/* Rating */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-gold fill-current"
                    />
                  ))}
                </div>
                <span className="text-muted">(4.8) • 127 reviews</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              {isOnSale && (
                <span className="text-lg text-muted line-through">
                  {formatCurrency(product.price)}
                </span>
              )}
              <span className="text-4xl font-semibold text-gold">
                {formatCurrency(product.salePrice)}
              </span>
              {isOnSale && (
                <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium">
                  Save {formatCurrency(product.price - product.salePrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-display text-xl text-charcoal mb-3">Description</h3>
              <p className="text-muted leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Fragrance Notes */}
            {product.fragranceNotes && (
              <div>
                <h3 className="font-display text-xl text-charcoal mb-4">Fragrance Notes</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-charcoal">Top Notes: </span>
                    <span className="text-sm text-muted">
                      {product.fragranceNotes.top.join(', ')}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-charcoal">Middle Notes: </span>
                    <span className="text-sm text-muted">
                      {product.fragranceNotes.middle.join(', ')}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-charcoal">Base Notes: </span>
                    <span className="text-sm text-muted">
                      {product.fragranceNotes.base.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <label className="font-medium text-charcoal">Quantity:</label>
                <div className="flex items-center border border-line rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-alabaster transition-colors duration-200 text-charcoal"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 min-w-[4rem] text-center text-charcoal font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-alabaster transition-colors duration-200 text-charcoal"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary flex items-center justify-center"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 btn-secondary">
                  Buy Now
                </button>
              </div>

              {currentQuantity > 0 && (
                <p className="text-sm text-gold font-medium">
                  {currentQuantity} item{currentQuantity !== 1 ? 's' : ''} in cart
                </p>
              )}
            </div>

            {/* Product Features */}
            <div className="border-t border-line pt-8">
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-muted">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-muted">Made in India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-muted">Luxury Packaging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-muted">Free Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-20 border-t border-line">
            <h2 className="font-display text-3xl text-charcoal mb-12 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

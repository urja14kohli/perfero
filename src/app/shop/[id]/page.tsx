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
      <div className="bg-alabaster py-3 sm:py-4">
        <div className="container-luxury">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
            <Link href="/" className="text-muted hover:text-gold transition-colors whitespace-nowrap">
              Home
            </Link>
            <span className="text-muted/60">/</span>
            <Link href="/shop" className="text-muted hover:text-gold transition-colors whitespace-nowrap">
              Shop
            </Link>
            <span className="text-muted/60">/</span>
            <span className="text-charcoal font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container-luxury py-8 sm:py-12 lg:py-20">
        {/* Back Button */}
        <Link
          href="/shop"
          className="inline-flex items-center text-muted hover:text-gold mb-6 sm:mb-8 transition-colors duration-200 text-sm sm:text-base"
        >
          <ArrowLeft size={14} className="mr-2 sm:w-4 sm:h-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-3 sm:space-y-4">
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
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-gold/90 text-charcoal px-2.5 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold">
                  Sale
                </div>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
              >
                <Heart 
                  size={18} 
                  className={`sm:w-5 sm:h-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-muted'}`} 
                />
              </button>

              {/* Share Button */}
              <button className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                <Share2 size={18} className="text-muted sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative transition-colors duration-200 rounded-lg overflow-hidden ${
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
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-charcoal mb-2 sm:mb-3">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-muted mb-4 sm:mb-6">
                {product.size}
              </p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-gold fill-current sm:w-[18px] sm:h-[18px]"
                    />
                  ))}
                </div>
                <span className="text-muted text-sm sm:text-base">(4.8) • 127 reviews</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              {isOnSale && (
                <span className="text-base sm:text-lg text-muted line-through">
                  {formatCurrency(product.price)}
                </span>
              )}
              <span className="text-3xl sm:text-4xl font-semibold text-gold">
                {formatCurrency(product.salePrice)}
              </span>
              {isOnSale && (
                <span className="bg-gold/10 text-gold px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Save {formatCurrency(product.price - product.salePrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-display text-lg sm:text-xl text-charcoal mb-2 sm:mb-3">Description</h3>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <label className="font-medium text-charcoal text-sm sm:text-base">Quantity:</label>
                <div className="flex items-center border border-line rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 sm:p-3 hover:bg-alabaster transition-colors duration-200 text-charcoal text-sm sm:text-base"
                  >
                    -
                  </button>
                  <span className="px-4 sm:px-6 py-2 sm:py-3 min-w-[3rem] sm:min-w-[4rem] text-center text-charcoal font-medium text-sm sm:text-base">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 sm:p-3 hover:bg-alabaster transition-colors duration-200 text-charcoal text-sm sm:text-base"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary flex items-center justify-center"
                >
                  <ShoppingCart size={18} className="mr-2 sm:w-5 sm:h-5" />
                  Add to Cart
                </button>
                <button className="flex-1 btn-secondary">
                  Buy Now
                </button>
              </div>

              {currentQuantity > 0 && (
                <p className="text-xs sm:text-sm text-gold font-medium">
                  {currentQuantity} item{currentQuantity !== 1 ? 's' : ''} in cart
                </p>
              )}
            </div>

            {/* Product Features */}
            <div className="border-t border-line pt-6 sm:pt-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span className="text-muted">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span className="text-muted">Made in India</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span className="text-muted">Luxury Packaging</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span className="text-muted">Free Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 lg:pt-20 border-t border-line">
            <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-8 sm:mb-12 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/lib/products';
import { useCartStore } from '@/lib/cart';
import { formatCurrency } from '@/lib/razorpay';
import ImageStage from '@/components/ImageStage';

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

const ProductCard = ({ product, showAddToCart = true }: ProductCardProps) => {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const isOnSale = product.salePrice < product.price;

  return (
    <motion.div 
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Link href={`/shop/${product.id}`} className="block">
        {/* Product Image with Rounded Corners */}
        <div className="relative mb-4 rounded-2xl overflow-hidden">
          {!product.inStock && (
            <div className="absolute inset-0 z-20 bg-black/40 flex items-center justify-center">
              <span className="bg-gold text-charcoal px-4 py-2 rounded-lg font-semibold">
                Sold Out
              </span>
            </div>
          )}
          {isOnSale && product.inStock && (
            <span className="absolute left-4 top-4 z-10 text-[11px] uppercase tracking-wide bg-gold/90 text-charcoal px-2.5 py-1 rounded-full">
              Sale
            </span>
          )}
          <ImageStage 
            src={product.images[0]} 
            alt={product.name} 
            maskEdges={true}
          />
        </div>

        {/* Product Info */}
        <div>
          <h3 className="font-display text-xl text-charcoal mb-1">
            {product.name}
          </h3>
          
          <p className="small text-muted line-clamp-2 mb-4">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-gold">
                {formatCurrency(product.salePrice)}
              </span>
              {isOnSale && (
                <span className="small text-muted line-through">
                  {formatCurrency(product.price)}
                </span>
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1">
              <Star size={14} className="text-gold fill-current" />
              <span className="small text-muted">4.8</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          {showAddToCart && (
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full mt-4 ${
                product.inStock 
                  ? 'btn-outline' 
                  : 'px-4 py-2 border border-gray-300 rounded-xl text-gray-400 cursor-not-allowed opacity-50'
              }`}
            >
              {product.inStock ? 'Add to Cart' : 'Sold Out'}
            </button>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;

import Image from 'next/image';
import { Star, Award, Users, Heart, Shield, Truck, RotateCcw } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-ivory">
      {/* Hero Section */}
      <section className="bg-[radial-gradient(1000px_500px_at_50%_0,#F6F1E6,transparent)] border-b border-line py-24">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl text-charcoal mb-6">
              Our Story
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto">
              At PERFÉRO, we believe great fragrances shouldn't be expensive. We bring you seven 
              different scents in one beautiful box - so you can explore every mood 
              without the high-price tag.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl text-charcoal text-center after:block after:w-16 after:h-[2px] after:bg-gold after:mx-auto after:mt-3">
                Why PERFÉRO?
              </h2>
              <div className="space-y-4 text-muted">
                <p>
                  Founded with a vision to make great fragrances affordable, PERFÉRO was born 
                  from the belief that everyone deserves to experience amazing scents 
                  without compromising on quality or breaking the bank.
                </p>
                <p>
                  Our signature 7-fragrance gift pack represents more than just a collection 
                  of scents - it's a journey through different moods, occasions, and personalities. 
                  Each fragrance is made to tell its own story while working together 
                  in perfect balance.
                </p>
                <p>
                  Designed for modern people: bold, clean, and smart. PERFÉRO delivers 
                  great scent experiences you'll love wearing, wrapped in our signature 
                  black and gold packaging that shows our commitment to quality.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="/images/gift-pack/pack front.jpeg"
                  alt="PERFÉRO Signature Gift Pack"
                  fill
                  className="object-cover rounded-2xl shadow-card"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-charcoal px-6 py-3 rounded-full text-lg font-semibold shadow-card">
                Made in India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-28 pb-24 bg-alabaster">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal text-center after:block after:w-16 after:h-[2px] after:bg-gold after:mx-auto after:mt-3">
              Our Process
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto mt-6">
              Every detail matters in creating the perfect fragrance experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={32} className="text-charcoal" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-3">
                Premium Materials
              </h3>
              <p className="text-muted">
                We source only the finest ingredients from around the world to create 
                exceptional fragrances that last.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-charcoal" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-3">
                Made in India
              </h3>
              <p className="text-muted">
                Proudly crafted in India, supporting local artisans and maintaining 
                the highest quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} className="text-charcoal" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-3">
                Luxury Packaging
              </h3>
              <p className="text-muted">
                Our signature black and gold packaging reflects our commitment to 
                luxury and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-charcoal" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-3">
                Seven Unique Scents
              </h3>
              <p className="text-muted">
                Each fragrance is made to offer a unique scent 
                experience for every mood and occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-20 md:py-28 pt-24 bg-[radial-gradient(800px_400px_at_50%_0,#F6F1E6,transparent)]">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal text-center after:block after:w-16 after:h-[2px] after:bg-gold after:mx-auto after:mt-3">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-12">
              <div>
                <h3 className="font-display text-xl text-charcoal mb-3">
                  Quality First
                </h3>
                <p className="text-muted">
                  We never compromise on quality. Every ingredient, every process, 
                  every detail is carefully selected and crafted to perfection.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-xl text-charcoal mb-3">
                  Accessibility
                </h3>
                <p className="text-muted">
                  Luxury should be accessible to everyone. We believe in democratizing 
                  premium fragrances without diluting their essence.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-xl text-charcoal mb-3">
                  Innovation
                </h3>
                <p className="text-muted">
                  We constantly innovate in our formulations, packaging, and customer 
                  experience to stay ahead of the curve.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="font-display text-4xl md:text-5xl text-charcoal text-center after:block after:w-16 after:h-[2px] after:bg-gold after:mx-auto after:mt-3 mb-6">
                Our Mission
              </h3>
              <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto">
                To create exceptional fragrance experiences that celebrate individuality, 
                inspire confidence, and bring luxury within reach of everyone. We're 
                committed to crafting scents that not only smell incredible but also 
                tell stories and create memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal text-center after:block after:w-16 after:h-[2px] after:bg-gold after:mx-auto after:mt-3">
              Quality Assurance
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto mt-6">
              Your trust is our foundation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-charcoal" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-2">
                Safe Ingredients
              </h3>
              <p className="text-muted">
                All our fragrances are made with safe, high-quality ingredients 
                that are gentle on your skin.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={24} className="text-charcoal" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-2">
                Free Shipping
              </h3>
              <p className="text-muted">
                Free shipping on all orders above ₹1,000 across India with 
                secure packaging and fast delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw size={24} className="text-charcoal" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-2">
                Easy Returns
              </h3>
              <p className="text-muted">
                30-day return policy for your peace of mind. If you're not 
                completely satisfied, we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

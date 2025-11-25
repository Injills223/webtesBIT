import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BreadDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Classic Sourdough Loaf",
    price: 12.0,
    image: "https://placehold.co/600x400",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400"
    ],
    description: "Experience the timeless taste of our artisan sourdough. Crafted over 48 hours with a natural starter, this loaf boasts a crisp, chewy crust and a soft, airy crumb with a delightful tangy flavor. Perfect for sandwiches, toast, or enjoying with a smear of fresh butter.",
    ingredients: "Organic Unbleached Wheat Flour, Water, and Sea Salt. Contains: Wheat. May contain traces of nuts and seeds as it is prepared in a kitchen that handles these items.",
    bakingSchedule: "Our sourdough loaves are baked fresh daily. For the best experience, we recommend ordering 24 hours in advance. Fresh loaves are available for pickup after 10 AM, Tuesday through Sunday.",
    tags: ["Organic", "Vegan", "Naturally Leavened"]
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity}x ${product.name} to cart!`);
  };

  const handleEdit = () => {
    alert('Edit functionality would go here.');
  };

  return (
    <div className="bg-gradient-to-br from-creamy-white to-cream-pastel/50 min-h-screen flex flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:py-12 lg:px-8">
        <div className="flex flex-wrap gap-2 pb-8">
          <a className="text-secondary hover:text-accent-dark text-sm font-medium" href="#">Home</a>
          <span className="text-secondary text-sm font-medium">/</span>
          <a className="text-secondary hover:text-accent-dark text-sm font-medium" href="#">Breads</a>
          <span className="text-secondary text-sm font-medium">/</span>
          <span className="text-accent-dark text-sm font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <div
              className="w-full overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat shadow-lg shadow-warm-beige/20"
              style={{ backgroundImage: `url("${product.image}")` }}
              alt={product.name}
            ></div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-4">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full cursor-pointer rounded-lg border-2 border-warm-beige bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url("${img}")` }}
                  alt={`Additional view ${idx + 1}`}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold tracking-tight text-accent-dark lg:text-6xl">{product.name}</h1>
              <p className="text-4xl font-bold text-warm-beige">${product.price}</p>
              <p className="text-base leading-relaxed text-secondary">{product.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {product.tags.map((tag, idx) => (
                  <span key={idx} className="rounded-full bg-cream-pastel/60 px-3 py-1 text-xs font-semibold text-accent-dark">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 w-32 items-center justify-between rounded-lg border border-cream-pastel bg-creamy-white px-4 shadow-sm">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-secondary transition-colors hover:text-accent-dark">-</button>
                <span className="font-bold text-accent-dark">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="text-secondary transition-colors hover:text-accent-dark">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="h-12 flex-1 rounded-lg bg-accent-dark px-6 text-base font-bold text-creamy-white shadow-lg shadow-accent-dark/20 transition-all hover:bg-accent-dark/90 hover:shadow-md hover:shadow-accent-dark/30"
              >
                Add to Cart
              </button>
              <button
                onClick={handleEdit}
                className="h-12 rounded-lg border-2 border-warm-beige px-6 text-base font-bold text-warm-beige transition-colors hover:bg-warm-beige/10"
              >
                Edit Product
              </button>
            </div>

            <div className="space-y-2 border-t border-cream-pastel pt-6">
              <details className="group -my-3" open>
                <summary className="flex cursor-pointer items-center justify-between py-3 text-accent-dark">
                  <h3 className="text-2xl">Ingredients & Allergens</h3>
                  <span className="ml-auto flex-shrink-0 transform transition-transform duration-200 group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="prose prose-sm py-2 text-secondary">
                  <p>{product.ingredients}</p>
                </div>
              </details>
              <details className="group -my-3">
                <summary className="flex cursor-pointer items-center justify-between py-3 text-accent-dark">
                  <h3 className="text-2xl">Baking Schedule</h3>
                  <span className="ml-auto flex-shrink-0 transform transition-transform duration-200 group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="prose prose-sm py-2 text-secondary">
                  <p>{product.bakingSchedule}</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BreadDetail;
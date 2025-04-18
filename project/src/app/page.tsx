import { Pizza, Flame, Clock, Leaf, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Pizza className="w-20 h-20 text-orange-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Wood and Stone
          </h1>
          <p className="text-xl md:text-2xl text-orange-500 mb-8">
            Artisanal Pizza Delivery
          </p>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Authentic wood-fired pizzas crafted with passion and delivered to your doorstep
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300 flex items-center mx-auto">
            Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Commitment to Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <Flame className="h-12 w-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Wood-Fired Perfection</h3>
              <p className="text-gray-600">
                Each pizza is cooked in our authentic wood-fired ovens, reaching temperatures that create the perfect crispy crust.
              </p>
            </div>
            <div className="text-center p-6">
              <Leaf className="h-12 w-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We source only the finest ingredients, from San Marzano tomatoes to fresh mozzarella and locally grown herbs.
              </p>
            </div>
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Swift Delivery</h3>
              <p className="text-gray-600">
                Our dedicated delivery team ensures your pizza arrives hot and fresh, just as if you were dining at our restaurant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Signature Pizzas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Margherita D.O.P.",
                description: "San Marzano tomatoes, buffalo mozzarella, fresh basil, extra virgin olive oil",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "$18.99"
              },
              {
                title: "Funghi Tartufo",
                description: "Wild mushrooms, truffle oil, fresh mozzarella, thyme, garlic",
                image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "$22.99"
              },
              {
                title: "Diavola",
                description: "Spicy salami, fresh mozzarella, chili oil, basil",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "$20.99"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-orange-500">{item.price}</span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Experience Authentic Pizza?</h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Order now and taste the difference of true Neapolitan-style pizza, delivered fresh from our wood-fired ovens to your door.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center text-white">
              <Phone className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">Call us: 020 8668 0680</span>
            </div>
            <div className="flex items-center text-white">
              <MapPin className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">Find us: 123 Artisan Way, Craft District</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Wood and Stone</h3>
              <p className="text-gray-400">
                Artisanal pizza delivery at its finest
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Classic Pizzas</li>
                <li>Signature Pizzas</li>
                <li>Seasonal Specials</li>
                <li>Build Your Own</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tue-Thu: 4pm - 10pm</li>
                <li>Fri-Sat: 12pm - 11pm</li>
                <li>Sun: 12pm - 9pm</li>
                <li>Mon: Closed</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>020 8668 0680</li>
                <li>info@woodandstone.com</li>
                <li>123 Artisan Way</li>
                <li>Craft District, CD 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Wood and Stone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
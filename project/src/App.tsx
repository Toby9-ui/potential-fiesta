import React from 'react';
import { Pizza, Clock, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
            <Pizza className="w-16 h-16 text-yellow-400 mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Bella Napoli</h1>
            <p className="text-xl text-yellow-400 mb-8">Authentic Italian Pizza Since 1985</p>
            <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Pizza className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wood-Fired Pizza</h3>
              <p className="text-gray-600">Authentic Neapolitan pizza baked in our traditional wood-fired oven</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Hot and fresh pizza delivered to your doorstep in 30 minutes</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-600">Located in the heart of the city for your convenience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Pizzas Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Popular Pizzas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Margherita",
                price: "$14.99",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Fresh tomatoes, mozzarella, basil"
              },
              {
                name: "Pepperoni",
                price: "$16.99",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Pepperoni, mozzarella, tomato sauce"
              },
              {
                name: "Quattro Formaggi",
                price: "$18.99",
                image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Four cheese blend, herbs"
              }
            ].map((pizza, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
                  <p className="text-gray-600 mb-4">{pizza.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-yellow-400">{pizza.price}</span>
                    <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="flex items-center mb-4">
                <Phone className="w-5 h-5 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>123 Pizza Street, Food City, FC 12345</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Hours</h3>
              <p>Monday - Thursday: 11am - 10pm</p>
              <p>Friday - Saturday: 11am - 11pm</p>
              <p>Sunday: 12pm - 9pm</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-400 transition duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-yellow-400 transition duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-yellow-400 transition duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Bella Napoli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
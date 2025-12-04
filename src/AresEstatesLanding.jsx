import React, { useState, useEffect } from 'react';
import { Home, MapPin, Phone, Mail, ChevronRight, Search, Star, Award, Users, Building2 } from 'lucide-react';

export default function AresEstatesLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProperty, setActiveProperty] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Lekki",
      location: "Lekki Phase 1, Lagos",
      price: "₦85,000,000",
      beds: 5,
      baths: 6,
      sqft: "450 sqm",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Victoria Island, Lagos",
      price: "₦45,000,000",
      beds: 3,
      baths: 4,
      sqft: "280 sqm",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Penthouse Suite",
      location: "Ikoyi, Lagos",
      price: "₦120,000,000",
      beds: 4,
      baths: 5,
      sqft: "520 sqm",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
    }
  ];

  const stats = [
    { icon: Building2, value: "500+", label: "Properties Sold" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Customer Rating" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-purple-700 py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-700 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Ares Estates
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-purple-700' : 'text-white hover:text-purple-200'}`}>Properties</a>
            <a href="#about" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-purple-700' : 'text-white hover:text-purple-200'}`}>About Us</a>
            <a href="#services" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-purple-700' : 'text-white hover:text-purple-200'}`}>Services</a>
            <a href="#contact" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-purple-700' : 'text-white hover:text-purple-200'}`}>Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className={`hidden md:block transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              Sign In
            </button>
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-purple-700">
        {/* Removed all gradient & blob overlays */}
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
              Nigeria's Most Trusted Real Estate Partner
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Find Your
              <span className="block text-yellow-300">
                Dream Home
              </span>
              in Nigeria
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Discover premium properties across Lagos, Abuja, and Port Harcourt. Your journey to luxury living starts here.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-2 flex items-center space-x-2 max-w-2xl">
              <div className="flex-1 flex items-center space-x-4 px-4">
                <Search className="w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by location, property type..."
                  className="flex-1 py-4 outline-none text-gray-800"
                />
              </div>
              <button className="bg-purple-700 text-white px-8 py-4 rounded-xl hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Search</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Floating Property Card */}
          <div className="hidden lg:block absolute right-20 top-1/2 transform -translate-y-1/2">
            <div className="bg-white rounded-3xl shadow-2xl p-6 w-80 transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop" 
                  alt="Featured Property"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Waterfront Villa</h3>
              <p className="text-gray-600 flex items-center mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                Banana Island, Lagos
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-700">₦250M</span>
                <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-700 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-purple-700">Properties</span>
            </h2>
            <p className="text-xl text-gray-600">Handpicked luxury homes for discerning buyers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div 
                key={property.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-purple-700">
                    For Sale
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 flex items-center mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </p>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4 text-sm">
                    <span>{property.beds} Beds</span>
                    <span>•</span>
                    <span>{property.baths} Baths</span>
                    <span>•</span>
                    <span>{property.sqft}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-purple-700">{property.price}</span>
                    <button className="bg-purple-700 text-white px-6 py-3 rounded-xl hover:bg-purple-800 transition-all duration-300 flex items-center space-x-2">
                      <span>View</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-purple-700 text-white px-8 py-4 rounded-full hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied homeowners who found their perfect property with Ares Estates
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-purple-700 px-700 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Schedule Viewing</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-purple-700 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Ares Estates</span>
              </div>
              <p className="text-gray-400">Nigeria's premier real estate destination for luxury living.</p>
            </div>
            {/* ... rest of footer unchanged ... */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Properties</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Services</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Locations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lagos</li>
                <li>Abuja</li>
                <li>Port Harcourt</li>
                <li>Ibadan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+234 800 123 4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@aresestates.ng</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Victoria Island, Lagos</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Ares Estates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
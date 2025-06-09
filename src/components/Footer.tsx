import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/therionlogo.png" alt="Therion Tequa" className="h-10 w-auto" />
              <span className="text-xl font-bold">Therion Tequa</span>
            </Link>
            <p className="text-orange-100 mb-6 max-w-md">
              The Future of Animal Ownership. Connecting loving families with trusted breeders 
              through our verified marketplace and community reviews.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-200 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace" className="text-orange-200 hover:text-white transition-colors">
                  Browse Pets
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-orange-200 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <a href="#" className="text-orange-200 hover:text-white transition-colors">
                  Become a Breeder
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-200 hover:text-white transition-colors">
                  Pet Care Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-orange-200">
                <Mail className="w-4 h-4" />
                <span>support@theriontequa.com</span>
              </li>
              <li className="flex items-center space-x-2 text-orange-200">
                <Phone className="w-4 h-4" />
                <span>1-800-THERION</span>
              </li>
              <li className="flex items-center space-x-2 text-orange-200">
                <MapPin className="w-4 h-4" />
                <span>Dallas, TX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-orange-200 text-sm">
            © 2025 Therion Tequa. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-orange-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-orange-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-orange-200 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
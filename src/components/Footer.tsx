import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Information */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-coldea-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CA</span>
              </div>
              <h3 className="text-xl font-bold">Colegio De Alicia</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering students in Alicia, Bohol with quality education and innovative programs in Information Systems and Technical Vocational Teacher Education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-coldea-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-coldea-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                  Academic Programs
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-white transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-coldea-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Municipality of Alicia<br />
                    Bohol, Philippines
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-coldea-green-light flex-shrink-0" />
                <p className="text-gray-300">+63 XXX XXX XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-coldea-gold flex-shrink-0" />
                <p className="text-gray-300">info@colegiodealicia.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Colegio De Alicia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
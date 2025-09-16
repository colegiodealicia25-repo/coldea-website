import { MapPin, Calendar, Users, Mountain, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the beautiful municipality of Alicia in the heart of Bohol, Philippines
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Municipality of Alicia, Bohol
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nestled in the scenic province of Bohol, the municipality of Alicia offers a perfect 
              blend of natural beauty and rich cultural heritage. Formerly known as Batuanon, 
              this vibrant community has been renamed to honor its historical significance and 
              bright future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <Users size={24} className="text-coldea-green" />
                  <h4 className="font-semibold text-gray-900">Population</h4>
                </div>
                <p className="text-2xl font-bold text-coldea-green">24,374</p>
                <p className="text-sm text-gray-600">Residents</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar size={24} className="text-coldea-gold" />
                  <h4 className="font-semibold text-gray-900">Town Fiestas</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xl font-extrabold text-coldea-gold leading-none">June 29</p>
                    <p className="text-sm text-gray-600">Batuanon</p>
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-xl font-extrabold text-coldea-gold leading-none">July 25–26</p>
                    <p className="text-sm text-gray-600">Batuanan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Mountain size={24} className="text-coldea-green-dark" />
                <h4 className="font-semibold text-gray-900">About Alicia</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Alicia is known for its warm and welcoming community, beautiful landscapes, 
                and strategic location within Bohol. The municipality serves as an important 
                hub for education, commerce, and cultural activities in the region. Its rich 
                history and forward-looking vision make it an ideal location for our educational 
                institution.
              </p>
            </div>

            <div className="bg-coldea-green-light/10 p-6 rounded-lg border border-coldea-green-light">
              <h4 className="font-semibold text-gray-900 mb-3">Why Choose Alicia?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-coldea-green rounded-full mt-2 flex-shrink-0"></span>
                  <span>Strategic location in Bohol with excellent accessibility</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-coldea-green rounded-full mt-2 flex-shrink-0"></span>
                  <span>Rich cultural heritage and strong community values</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-coldea-green rounded-full mt-2 flex-shrink-0"></span>
                  <span>Growing economy with opportunities for graduates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-coldea-green rounded-full mt-2 flex-shrink-0"></span>
                  <span>Safe and peaceful environment for learning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coldea-green-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-coldea-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Campus Address</h4>
                    <p className="text-gray-700">
                      Municipality of Alicia<br />
                      Bohol, Philippines<br />
                      <span className="text-sm text-gray-500">(Exact address to be announced)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coldea-gold-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-coldea-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                    <p className="text-gray-700">
                      Main Office: +63 XXX XXX XXXX<br />
                      Admissions: +63 XXX XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coldea-green-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-coldea-green-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Addresses</h4>
                    <p className="text-gray-700">
                      General: info@coldeadealicia.edu.ph<br />
                      Admissions: admissions@coldeadealicia.edu.ph
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coldea-gold-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-coldea-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Get Directions</h4>
                <p className="text-gray-700 mb-4">
                  Alicia is accessible by various transportation options within Bohol. 
                  Detailed directions and transportation guides will be provided upon enrollment.
                </p>
                <button className="w-full bg-coldea-green text-white py-3 rounded-lg font-semibold hover:bg-coldea-green-dark transition-colors">
                  Request Detailed Directions
                </button>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="mt-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Inquiry</h3>
              <p className="mb-6 opacity-90">
                Have questions? Send us a message and we'll get back to you soon.
              </p>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 resize-none"
                ></textarea>
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
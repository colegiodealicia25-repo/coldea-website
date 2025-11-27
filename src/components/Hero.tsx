import { GraduationCap, MapPin, Calendar, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-coldea-green-dark via-coldea-green to-coldea-green-light text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-coldea-green-dark/30 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <GraduationCap size={32} className="text-coldea-gold" />
              <span className="text-coldea-gold font-semibold text-lg">Excellence in Education</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to<br />
              <span className="text-coldea-gold">Colegio De Alicia</span>
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <MapPin size={20} className="text-coldea-gold-light" />
              <p className="text-xl text-coldea-gold-light">
                Municipality of Alicia, Bohol, Philippines
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0">
              Empowering the next generation with innovative education programs. 
              Starting 2026, we're proud to offer cutting-edge degree programs in 
              Information Systems and Technical Vocational Teacher Education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#programs" 
                className="bg-coldea-gold text-coldea-green-dark px-8 py-3 rounded-lg font-semibold hover:bg-coldea-gold-light transition-colors inline-flex items-center justify-center"
              >
                Explore Programs
              </a>
              <a 
                href="#contact" 
                className="border-2 border-coldea-gold text-coldea-gold px-8 py-3 rounded-lg font-semibold hover:bg-coldea-gold hover:text-coldea-green-dark transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </a>
              <a
                href="https://mis.colegiodealicia.com/pre-listing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coldea-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-coldea-green-dark transition-colors inline-flex items-center justify-center"
              >
                Pre-Register
              </a>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-coldea-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap size={48} className="text-coldea-green-dark" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">New Programs Starting 2026</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-coldea-gold mb-2">Bachelor of Science in Information Systems</h4>
                    <p className="text-sm text-white">4-year degree program focusing on business analytics, IT infrastructure, and systems analysis</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-coldea-gold mb-2">BTVTEd - Computer Programming</h4>
                    <p className="text-sm text-white">Bachelor in Technical Vocational Teacher Education major in Computer Programming</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 mt-6 text-coldea-gold">
                  <Calendar size={20} />
                  <span className="font-semibold">Enrollment Opens Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-coldea-gold-light text-sm mb-2">Scroll to explore</p>
        <ChevronDown size={24} className="text-coldea-gold-light animate-bounce mx-auto" />
      </div>
    </section>
  );
}

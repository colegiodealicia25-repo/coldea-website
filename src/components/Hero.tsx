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
              <span className="text-coldea-gold font-semibold text-lg">Now Accepting Enrollees</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Official Launch of<br />
              <span className="text-coldea-gold">Colegio De Alicia</span>
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <MapPin size={20} className="text-coldea-gold-light" />
              <p className="text-xl text-coldea-gold-light">
                Municipality of Alicia, Bohol, Philippines
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0">
              Built for the community, Colegio De Alicia is committed to providing accessible, quality
              education for its first year of operations in Academic Year 2026-2027 with future-focused
              programs in Information Systems and Technical-Vocational Teacher Education.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
              <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-coldea-gold-light mb-1">Enrollment Starts</p>
                <p className="text-xl font-bold text-white">April 15, 2026</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-coldea-gold-light mb-1">Classes Begin</p>
                <p className="text-xl font-bold text-white">July 13, 2026</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://mis.colegiodealicia.com/pre-listing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coldea-gold text-coldea-green-dark px-8 py-3 rounded-lg font-semibold hover:bg-coldea-gold-light transition-colors inline-flex items-center justify-center"
              >
                Enroll Now
              </a>
              <a 
                href="#programs" 
                className="border-2 border-coldea-gold text-coldea-gold px-8 py-3 rounded-lg font-semibold hover:bg-coldea-gold hover:text-coldea-green-dark transition-colors inline-flex items-center justify-center"
              >
                Explore Programs
              </a>
              <a 
                href="#admissions" 
                className="bg-coldea-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-coldea-green-dark transition-colors inline-flex items-center justify-center"
              >
                Enrollment Process
              </a>
            </div>
            <p className="mt-3 text-sm text-white/80 max-w-2xl mx-auto lg:mx-0">
              Enroll Now links to our secure pre-listing form while official admissions processing is being finalized.
            </p>
          </div>
          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-coldea-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap size={48} className="text-coldea-green-dark" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">First Year of Operations</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-coldea-gold mb-2">Bachelor of Science in Information Systems</h4>
                    <p className="text-sm text-white">Tech-driven program for systems analysis, business analytics, and IT-enabled decision-making</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-coldea-gold mb-2">BTVTEd - Computer Programming</h4>
                    <p className="text-sm text-white">Technical-vocational teacher education major focused on computer programming</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 mt-6 text-coldea-gold">
                  <Calendar size={20} />
                  <span className="font-semibold">Enrollment starts April 15, 2026</span>
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

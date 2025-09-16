import { Target, Users, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Colegio De Alicia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to excellence in education and community development in the heart of Bohol
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Serving the Municipality of Alicia
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Located in the vibrant municipality of Alicia, Bohol, our institution stands as a beacon 
              of educational excellence in this historic community. Alicia, formerly known as Batuanon, 
              is home to 24,374 residents who celebrate their rich heritage during the annual town 
              fiesta — Batuanan on July 25–26.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We are proud to be part of this thriving community, contributing to its growth through 
              quality education and preparing students for the challenges of tomorrow. Our commitment 
              extends beyond academics to fostering community engagement and cultural preservation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As we prepare to launch our new degree programs in 2025, we remain dedicated to 
              providing accessible, innovative, and industry-relevant education that meets the 
              evolving needs of our students and the broader Bohol region.
            </p>
          </div>

          {/* Statistics/Features */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-coldea-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-600 text-sm">
                Excellence in education with community impact
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-coldea-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-gray-600 text-sm">
                Serving 24,374 residents of Alicia
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-coldea-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality</h4>
              <p className="text-gray-600 text-sm">
                Industry-relevant curriculum and standards
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-coldea-green-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">
                Modern programs launching 2025
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coldea-green-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coldea-green-dark">E</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600">
                Striving for the highest standards in education, research, and community service.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-coldea-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coldea-gold">I</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h4>
              <p className="text-gray-600">
                Upholding honesty, transparency, and ethical conduct in all our endeavors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-coldea-green-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coldea-green-dark">C</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-gray-600">
                Building strong partnerships and contributing to the development of Alicia and Bohol.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
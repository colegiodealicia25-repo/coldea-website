import { Computer, Users, Clock, BookOpen, Award, CheckCircle } from 'lucide-react';

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative degree programs designed for the future, launching in 2026
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* BSIS Program */}
          <div className="bg-gradient-to-br from-coldea-green-light/20 to-coldea-gold-light/20 rounded-2xl p-8 border-2 border-coldea-green">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-coldea-green rounded-full flex items-center justify-center">
                <Computer size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Bachelor of Science in Information Systems</h3>
                <p className="text-coldea-green font-semibold">BSIS - 4 Year Program</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              A comprehensive program focusing on business analytics, IT infrastructure, data mining, 
              and systems analysis. Designed to prepare students for dynamic careers in the rapidly 
              evolving information technology sector.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-coldea-gold" />
                <span className="text-sm text-gray-600">4 Years</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen size={16} className="text-coldea-gold" />
                <span className="text-sm text-gray-600">120+ Units</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-coldea-gold" />
                <span className="text-sm text-gray-600">Internship Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-coldea-gold" />
                <span className="text-sm text-gray-600">Industry Certified</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Core Specializations:</h4>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-green" />
                  <span className="text-sm text-gray-700">Business Analytics & Data Mining</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-green" />
                  <span className="text-sm text-gray-700">IT Infrastructure Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-green" />
                  <span className="text-sm text-gray-700">Systems Analysis & Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-green" />
                  <span className="text-sm text-gray-700">Database Management Systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-green" />
                  <span className="text-sm text-gray-700">Enterprise Resource Planning</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Career Opportunities:</h4>
              <p className="text-sm text-gray-700">
                Systems Analyst, Database Administrator, IT Project Manager, Business Analyst, 
                Data Scientist, Information Security Specialist, and more.
              </p>
            </div>

            <button className="w-full bg-coldea-green text-white py-3 rounded-lg font-semibold hover:bg-coldea-green-dark transition-colors">
              Learn More About BSIS
            </button>
          </div>

          {/* BTVTEd Program */}
          <div className="bg-gradient-to-br from-coldea-gold-light/20 to-coldea-green-light/20 rounded-2xl p-8 border-2 border-coldea-gold">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-coldea-gold rounded-full flex items-center justify-center">
                <Users size={24} className="text-coldea-green-dark" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Bachelor in Technical Vocational Teacher Education</h3>
                <p className="text-coldea-gold font-semibold">BTVTEd - Computer Programming Major</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              A specialized program preparing competent teachers for technical-vocational education 
              with expertise in computer programming. Combines pedagogical skills with advanced 
              programming competencies for TESDA-aligned instruction.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-coldea-green" />
                <span className="text-sm text-gray-600">4 Years</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen size={16} className="text-coldea-green" />
                <span className="text-sm text-gray-600">TESDA Aligned</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-coldea-green" />
                <span className="text-sm text-gray-600">Teaching Practice</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-coldea-green" />
                <span className="text-sm text-gray-600">LET Eligible</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Program Competencies:</h4>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-gold" />
                  <span className="text-sm text-gray-700">Advanced Programming Languages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-gold" />
                  <span className="text-sm text-gray-700">Pedagogical Methods in Tech Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-gold" />
                  <span className="text-sm text-gray-700">Curriculum Development & Assessment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-gold" />
                  <span className="text-sm text-gray-700">ICT Integration in Teaching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-gold" />
                  <span className="text-sm text-gray-700">Industry Partnership & Practicum</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Career Opportunities:</h4>
              <p className="text-sm text-gray-700">
                Technical-Vocational Teacher, Training Specialist, Curriculum Developer, 
                Corporate Trainer, Educational Technology Coordinator, and more.
              </p>
            </div>

            <button className="w-full bg-coldea-gold text-coldea-green-dark py-3 rounded-lg font-semibold hover:bg-coldea-gold-light transition-colors">
              Learn More About BTVTEd
            </button>
          </div>
        </div>

        {/* Enrollment Information */}
        <div className="mt-16 bg-gradient-to-r from-coldea-green-dark to-coldea-green rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Enrollment for our inaugural programs opens soon. Be among the first students 
            to experience innovative education at Colegio De Alicia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-coldea-gold text-coldea-green-dark px-8 py-3 rounded-lg font-semibold hover:bg-coldea-gold-light transition-colors">
              Request Information
            </button>
            <button className="border-2 border-coldea-gold text-coldea-gold px-8 py-3 rounded-lg font-semibold hover:bg-coldea-gold hover:text-coldea-green-dark transition-colors">
              Schedule Campus Visit
            </button>
            <a
              href="https://mis.colegiodealicia.com/pre-listing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-coldea-green-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Pre-Listing Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

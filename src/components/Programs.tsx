import { Computer, Users, Clock, BookOpen, Award, CheckCircle, BadgeCheck, ArrowRight } from 'lucide-react';

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
            Now accepting enrollees for the first year of operations, Academic Year 2026-2027
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
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-coldea-green-dark text-white">
                    <BadgeCheck size={14} className="mr-1.5" />
                    Permit Granted
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white text-coldea-green-dark border border-coldea-green-dark/20">
                    Open for Enrollment
                  </span>
                </div>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="#admissions"
                className="w-full bg-white text-coldea-green-dark py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Admissions Info
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="https://mis.colegiodealicia.com/pre-listing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-coldea-green text-white py-3 rounded-lg font-semibold hover:bg-coldea-green-dark transition-colors inline-flex items-center justify-center"
              >
                Enroll Now
              </a>
            </div>
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
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-coldea-green-dark text-white">
                    <BadgeCheck size={14} className="mr-1.5" />
                    Permit Granted
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white text-coldea-green-dark border border-coldea-green-dark/20">
                    Open for Enrollment
                  </span>
                </div>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="#admissions"
                className="w-full bg-white text-coldea-green-dark py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Admissions Info
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="https://mis.colegiodealicia.com/pre-listing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-coldea-gold text-coldea-green-dark py-3 rounded-lg font-semibold hover:bg-coldea-gold-light transition-colors inline-flex items-center justify-center"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-coldea-green-light/10 to-coldea-gold-light/10 rounded-2xl p-8 md:p-10 border border-coldea-green-light/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Choose COLDEA?</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tech-driven and future-focused learning built for students, families, and the wider Alicia community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Modern Learning Approach</h4>
              <p className="text-sm text-gray-600">Programs are designed to build relevant digital, technical, and workplace-ready skills.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Student-Centered Education</h4>
              <p className="text-sm text-gray-600">Learners receive structured support from application to advising and enrollment.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Community-Driven Excellence</h4>
              <p className="text-sm text-gray-600">The college is built to provide accessible and quality education for Alicia and nearby communities.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Global Competitiveness</h4>
              <p className="text-sm text-gray-600">Curriculum and training prepare students for a rapidly evolving and connected future.</p>
            </div>
          </div>
        </div>

        <div id="admissions" className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Admissions & Enrollment</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Official enrollment activities begin on April 15, 2026, for the first year of operations. Review the published process and prepare your requirements early.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="rounded-xl bg-coldea-green-dark text-white p-6">
              <p className="text-sm uppercase tracking-wide text-coldea-gold-light mb-2">Enrollment Starts</p>
              <p className="text-3xl font-bold">April 15, 2026</p>
            </div>
            <div className="rounded-xl bg-coldea-gold text-coldea-green-dark p-6">
              <p className="text-sm uppercase tracking-wide mb-2">Opening & Launching</p>
              <p className="text-3xl font-bold">July 13, 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Admission and enrollment process</h4>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="w-7 h-7 rounded-full bg-coldea-green text-white font-bold flex items-center justify-center flex-shrink-0">1</span>
                  <span><strong>Application:</strong> Submit accomplished application forms.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-7 h-7 rounded-full bg-coldea-green text-white font-bold flex items-center justify-center flex-shrink-0">2</span>
                  <span><strong>Assessment:</strong> Pay the required fee and take the entrance examination.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-7 h-7 rounded-full bg-coldea-green text-white font-bold flex items-center justify-center flex-shrink-0">3</span>
                  <span><strong>Advising:</strong> Receive academic guidance and program recommendation.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-7 h-7 rounded-full bg-coldea-green text-white font-bold flex items-center justify-center flex-shrink-0">4</span>
                  <span><strong>Enrollment:</strong> Submit the enrollment form and study load for approval.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-7 h-7 rounded-full bg-coldea-green text-white font-bold flex items-center justify-center flex-shrink-0">5</span>
                  <span><strong>Finalization:</strong> Pay enrollment fees and receive your validated study load.</span>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Primary requirements upon enrollment</h4>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-green" />
                  <span className="text-sm text-gray-700">Original Form 9 / Report Card</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-green" />
                  <span className="text-sm text-gray-700">Original good moral certificate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-green" />
                  <span className="text-sm text-gray-700">Certificate of graduation / diploma (photocopy)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-green" />
                  <span className="text-sm text-gray-700">Original PSA certificate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-coldea-green" />
                  <span className="text-sm text-gray-700">Three (3) copies of recent 2x2 / passport picture</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="#contact"
                  className="w-full border-2 border-coldea-green text-coldea-green px-6 py-3 rounded-lg font-semibold hover:bg-coldea-green hover:text-white transition-colors text-center"
                >
                  Contact Admissions
                </a>
                <a
                  href="https://mis.colegiodealicia.com/pre-listing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-coldea-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-coldea-green-dark transition-colors text-center"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment Information */}
        <div className="mt-16 bg-gradient-to-r from-coldea-green-dark to-coldea-green rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Enrollment is now open for Academic Year 2026-2027. Start with our pre-listing form so we can guide you through the next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-coldea-gold text-coldea-green-dark px-8 py-3 rounded-lg font-semibold hover:bg-coldea-gold-light transition-colors text-center"
            >
              Request Information
            </a>
            <a
              href="#contact"
              className="border-2 border-coldea-gold text-coldea-gold px-8 py-3 rounded-lg font-semibold hover:bg-coldea-gold hover:text-coldea-green-dark transition-colors text-center"
            >
              Schedule Campus Visit
            </a>
            <a
              href="https://mis.colegiodealicia.com/pre-listing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-coldea-green-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Enroll Now
            </a>
          </div>
          <p className="mt-4 text-sm text-white/80">
            Prepare your requirements early and secure your slot. Online pre-listing remains available while admissions processing is being rolled out.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Target, Users, Award, BookOpen, Clock, User, Building } from 'lucide-react';

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
              of educational excellence in this historic community. Alicia, formerly known as Batuanan, 
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
                Modern programs launching 2026
              </p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            History of Colegio De Alicia: A Corroboration of Aspirations for Public Good
          </h3>
          
          <div className="space-y-8">
            {/* Founding Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-coldea-green rounded-full flex items-center justify-center mr-4">
                    <User size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">The Foundation</h4>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Colegio De Alicia (ColDeA) was founded as a beacon of hope, rooted in a commitment to educational excellence. The dream was initiated by <strong>Honorable Yolanda C. Corciega</strong>, a retired public school head and chairwoman of the committee on education of Sangguniang Bayan of the Municipality of Alicia, Bohol.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Known for her advocacy of academic inclusivity and student rights, she worked with <strong>Mayor Victoriano T. Torress III</strong> alongside then incumbent SB members to establish the college through a municipal ordinance in 2020.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-coldea-gold rounded-full flex items-center justify-center mr-4">
                    <Building size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Government Support</h4>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With strong local government support, assistance was sought from <strong>Senator Francis N. Tolentino</strong>, who facilitated the construction of a school building through the efforts of <strong>Congresswoman Kristine Alexie B. Tutor</strong>.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-coldea-green-dark rounded-full flex items-center justify-center mr-4">
                  <Clock size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Key Milestones</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">2020 - Municipal Ordinance</h5>
                  <p className="text-gray-700 text-sm">
                    College establishment through municipal ordinance with strong local government support.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">COVID-19 Challenge</h5>
                  <p className="text-gray-700 text-sm">
                    Construction halted due to pandemic restrictions, but work resumed as soon as restrictions were lifted.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">April 2024 - Building Inauguration</h5>
                  <p className="text-gray-700 text-sm">
                    Two-story building inaugurated, marking a significant milestone in the college's development.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">2026-2027 - Academic Launch</h5>
                  <p className="text-gray-700 text-sm">
                    Planned launch with two initial programs pending official permit from CHED.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div className="border-t border-gray-200 pt-8">
              <div className="bg-gradient-to-r from-coldea-green-light/10 to-coldea-gold-light/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Leadership & Vision</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The hiring of the College President became the first step to materialize the launch of ColDeA. With the initiatives of the Office of the Municipal Mayor, and facilitated by the Human Resource Office, the search for the College President has commenced, coordinating closely with CHEDRO 7.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Recognizing the transformative power of education, the first College President, <strong>Dr. Ma. Olga DC. Alvarez</strong> galvanized her team, divided into technical working groups, to work relentlessly in building enhancement, securing the recruitment of college key personnel, and meeting the requirements for its government permit application.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The college is set to launch in Academic Year 2026-2027, with two initial programs offering – <strong>Bachelor in Technical-Vocational Teacher Education major in Computer Programming</strong> and <strong>Bachelor of Science in Information System</strong>, once the official permit is received from the Commission on Higher Education.
                </p>
              </div>
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
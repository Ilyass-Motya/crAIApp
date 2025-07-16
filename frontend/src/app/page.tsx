import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="font-bold text-xl text-gray-900">Cyrvus</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Services</Link>
              <Link href="#solutions" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Solutions</Link>
              <Link href="#about" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">About</Link>
              <Link href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Contact</Link>
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-purple-100 shadow-sm">
                  <span className="text-purple-600 font-medium text-sm">🚀 Transforming businesses with next-generation AI solutions</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Transforming
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    cybersecurity
                  </span>
                  <br />
                  with intelligent
                  <br />
                  <span className="text-gray-700">solutions</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Embrace the power of artificial intelligence today. Our cutting-edge security solutions protect your business with intelligent threat detection.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-xl">
                    Explore Our Solutions
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors backdrop-blur-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main gradient card */}
                <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-white text-3xl font-bold">99.9%</div>
                        <div className="text-purple-100 text-sm">Threat Detection</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-white text-3xl font-bold">24/7</div>
                        <div className="text-purple-100 text-sm">AI Monitoring</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <span className="text-white font-medium">Advanced Threat Protection</span>
                        <span className="text-green-300">●</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <span className="text-white font-medium">Real-time Analysis</span>
                        <span className="text-green-300">●</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <span className="text-white font-medium">Compliance Ready</span>
                        <span className="text-green-300">●</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-purple-100">
                  <div className="text-2xl font-bold text-purple-600">20k+</div>
                  <div className="text-gray-600 text-sm">Protected Assets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore limitless possibilities with our
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                intelligent solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive security platform leverages artificial intelligence to provide unparalleled protection for your digital assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-purple-100/50">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Threat Detection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced machine learning algorithms continuously monitor and analyze patterns to detect threats before they impact your business.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-indigo-100/50">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Response</h3>
                <p className="text-gray-600 leading-relaxed">
                  Instant automated responses to security incidents with intelligent prioritization and escalation protocols.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100/50">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leverage historical data and AI insights to predict and prevent future security vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Neural Network Theme */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Tinker with a <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Neural Network</span>
              <br />
              right here in your browser.
            </h2>
            <p className="text-2xl text-gray-300 mb-4">Don&apos;t worry, you can&apos;t break it.</p>
            <p className="text-lg text-purple-200 mb-12">We Promise.</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">500M+</div>
                    <div className="text-purple-200">Threats Blocked</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">99.99%</div>
                    <div className="text-purple-200">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">1000+</div>
                    <div className="text-purple-200">Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-purple-200">Expert Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Embrace the power of
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  artificial intelligence
                </span>
                <br />
                today
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Machine Learning</h3>
                    <p className="text-gray-600">Continuously evolving algorithms that learn from global threat intelligence.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero-Day Protection</h3>
                    <p className="text-gray-600">Proactive defense against unknown threats using behavioral analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Response</h3>
                    <p className="text-gray-600">Instant threat neutralization with minimal human intervention required.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Threat Analysis Engine</span>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-white text-sm">Malware Detected</span>
                      </div>
                      <div className="bg-white/30 rounded-full h-2 mb-2">
                        <div className="bg-red-400 h-2 rounded-full w-3/4"></div>
                      </div>
                      <span className="text-purple-100 text-xs">Risk Level: High - Auto-quarantined</span>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-white text-sm">Anomaly Detected</span>
                      </div>
                      <div className="bg-white/30 rounded-full h-2 mb-2">
                        <div className="bg-yellow-400 h-2 rounded-full w-1/2"></div>
                      </div>
                      <span className="text-purple-100 text-xs">Risk Level: Medium - Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Elevate your business with our
            <br />
            innovative solutions
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Join thousands of organizations that trust Cyrvus to protect their digital future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="font-bold text-2xl">Cyrvus</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Transforming cybersecurity with AI-powered solutions that protect, predict, and prevent cyber threats.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Threat Detection</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">AI Analytics</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Compliance</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Integration</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Partners</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cyrvus SAS. All rights reserved. Empowering the future of cybersecurity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

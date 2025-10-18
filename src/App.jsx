import React, { useState } from 'react';
import { Download } from 'lucide-react';
import PaymentFlow from './components/PaymentFlow';

function App() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Your existing header */}
      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Pro Aviator Predictor</h1>
            <button 
              onClick={() => setShowPayment(true)}
              className="bg-white text-red-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Get APK - KES 500</span>
            </button>
          </div>
        </div>
      </header>

      {/* Your existing hero section */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get the <span className="text-red-600">Pro Aviator Predictor</span> APK
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The most accurate Aviator game predictor with advanced algorithms to help you win big!
          </p>
          <button 
            onClick={() => setShowPayment(true)}
            className="bg-red-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto"
          >
            <Download className="mr-2" size={20} />
            Download Now - KES 500
          </button>
        </div>
      </section>

      {/* Rest of your existing content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Predictor?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "High Accuracy",
                description: "Our advanced algorithms provide highly accurate predictions to maximize your winnings."
              },
              {
                title: "Easy to Use",
                description: "Simple and intuitive interface that works for both beginners and experienced players."
              },
              {
                title: "24/7 Support",
                description: "Our dedicated support team is always ready to assist you with any questions or issues."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-red-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Flow Modal */}
      {showPayment && (
        <PaymentFlow onClose={() => setShowPayment(false)} />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Pro Aviator Predictor. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

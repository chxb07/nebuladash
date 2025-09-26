import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, MessageCircle, FileText, Video } from 'react-feather';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to Settings > Security and click "Change Password". Follow the instructions to set a new password.'
    },
    {
      question: 'How can I export my data?',
      answer: 'You can export your data from the Dashboard. Click on the "Export" button in the top right corner and select your preferred format.'
    },
    {
      question: 'What are the system requirements?',
      answer: 'NebulaDash works on modern browsers including Chrome, Firefox, Safari, and Edge. No special hardware requirements are needed.'
    },
    {
      question: 'How do I contact support?',
      answer: 'You can contact our support team through the Messages section or email us at support@nebuladash.com.'
    },
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Help & Support</h1>
        </div>

        <div className="space-y-6">
          {/* Search */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cosmic-500"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover text-center">
              <MessageCircle className="text-cosmic-600 dark:text-cosmic-400 mx-auto mb-3" size={24} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Support</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Get help from our support team</p>
              <button className="w-full bg-cosmic-500 hover:bg-cosmic-600 text-white px-4 py-2 rounded-lg transition">
                Start Chat
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover text-center">
              <FileText className="text-cosmic-600 dark:text-cosmic-400 mx-auto mb-3" size={24} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Read our detailed guides</p>
              <button className="w-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition">
                View Docs
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover text-center">
              <Video className="text-cosmic-600 dark:text-cosmic-400 mx-auto mb-3" size={24} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Video Tutorials</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Watch step-by-step guides</p>
              <button className="w-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition">
                Watch Videos
              </button>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                    <ChevronDown
                      size={16}
                      className={`text-gray-500 dark:text-gray-400 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Still need help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Email Support</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">support@nebuladash.com</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">We typically respond within 24 hours</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Phone Support</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
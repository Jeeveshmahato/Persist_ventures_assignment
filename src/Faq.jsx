import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'How do I log my workouts?',
      answer: 'To log your workouts, go to the "Workouts" section, click on "Add Workout", and fill in the details of your exercise routine.'
    },
    {
      question: 'Can I track my calories burned?',
      answer: 'Yes, you can track your calories burned by entering your workout details in the "Calories Tracker" section.'
    },
    {
      question: 'Is this application suitable for beginners?',
      answer: 'Absolutely! Our app is designed to be user-friendly and includes tutorials and guides for beginners.'
    },
    {
      question: 'What features does the application offer?',
      answer: 'Our app offers workout logging, calorie tracking, progress monitoring, personalized workout plans, and community support.'
    },
    {
      question: 'How can I reset my password?',
      answer: 'To reset your password, go to the "Settings" section, click on "Account", and select "Reset Password". Follow the instructions to reset your password.'
    }
  ];

  return (
    <div className="w-full bg-white px-[20px] mx-auto mt-10">
      <h2 className="text-2xl font-bold text-black mb-6">FAQs</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;

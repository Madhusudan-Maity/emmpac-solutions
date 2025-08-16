'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:emmpacsolutions@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

  const getMapSrc = (address: string) => {
    return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="bg-gray-100 dark:bg-gray-800 py-3 md:py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#4169E1] dark:text-[#2cf0c1]">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Get in touch with us for any inquiries or to discuss your project
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Form Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-8 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 gap-12 md:flex md:items-start md:space-x-12">
                {/* Contact Information */}
                <div className="space-y-8 md:w-2/5">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-[#4169E1] dark:text-[#2cf0c1]">
                      Contact Information
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      Reach us via phone, email or visit any of our offices below.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#4169E1] dark:text-[#2cf0c1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                        <p className="text-gray-700 dark:text-gray-300">8877000030, 8116915768, 9073374695, 9771417252</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#4169E1] dark:text-[#2cf0c1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email & Website</h3>
                        <p className="text-gray-700 dark:text-gray-300">emmpacsolutions@gmail.com</p>
                        <p className="text-gray-700 dark:text-gray-300"><a href="https://www.emmpacsolutions.com" className="text-[#4169E1] hover:underline">www.emmpacsolutions.com</a></p>
                      </div>
                    </div>

                    <div className="pt-2 md:hidden">
                      <h3 className="text-lg font-medium mb-3 text-[#4169E1] dark:text-[#2cf0c1]">Office Locations</h3>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <h4 className="font-semibold">Purulia Town Office</h4>
                          <p className="text-gray-700 dark:text-gray-300 md:hidden">Sansar Plaza, near Bhagat Singh More, J K College Road, Purulia - 723101</p>
                          <div className="mt-3 overflow-hidden rounded-md md:hidden">
                            <iframe
                              title="Purulia Town Office Map"
                              src={getMapSrc('Sansar Plaza, near Bhagat Singh More, J K College Road, Purulia - 723101')}
                              className="w-full h-48 border-0"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <h4 className="font-semibold">Corporate Office</h4>
                          <p className="text-gray-700 dark:text-gray-300 md:hidden">Sumami Enterprise, Thakdari Road, CG Block, Action Area-1, New Town, Kolkata - 700156</p>
                          <div className="mt-3 overflow-hidden rounded-md md:hidden">
                            <iframe
                              title="Corporate Office Map"
                              src={getMapSrc('Sumami Enterprise, Thakdari Road, CG Block, Action Area-1, New Town, Kolkata - 700156')}
                              className="w-full h-48 border-0"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <h4 className="font-semibold">Branch Office</h4>
                          <p className="text-gray-700 dark:text-gray-300 md:hidden">#3C, Lakshmi Savitri Apartment, Tiwari Tank Road, Hindpiri, Ranchi, Jharkhand</p>
                          <div className="mt-3 overflow-hidden rounded-md md:hidden">
                            <iframe
                              title="Branch Office Map"
                              src={getMapSrc('#3C, Lakshmi Savitri Apartment, Tiwari Tank Road, Hindpiri, Ranchi, Jharkhand')}
                              className="w-full h-48 border-0"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="md:w-3/5">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="w-full">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-[#4169E1] focus:ring-[#4169E1] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          required
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-[#4169E1] focus:ring-[#4169E1] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          required
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-[#4169E1] focus:ring-[#4169E1] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-[#4169E1] focus:ring-[#4169E1] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="project">Project Discussion</option>
                          <option value="support">Technical Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-[#4169E1] focus:ring-[#4169E1] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          required
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="w-full bg-[#4169E1] hover:bg-[#2cf0c1] text-white font-semibold py-3 px-6 rounded-md transition-colors shadow-lg"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Horizontal maps strip for desktop */}
      <AnimatedSection delay={0.2}>
        <section className="py-6 bg-white dark:bg-gray-900 hidden md:block">
          <div className="container mx-auto px-4 max-w-6xl">
            <h3 className="text-2xl font-semibold mb-6 text-[#4169E1] dark:text-[#2cf0c1]">Office Locations</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden">
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="font-semibold mb-2">Purulia Town Office</h4>
                  <p className="text-gray-700 dark:text-gray-300 hidden md:block">Sansar Plaza, near Bhagat Singh More, J K College Road, Purulia - 723101</p>
                </div>
                <iframe
                  title="Purulia Town Office Map Desktop"
                  src={getMapSrc('Sansar Plaza, near Bhagat Singh More, J K College Road, Purulia - 723101')}
                  className="w-full h-64 border-0"
                  loading="lazy"
                />
              </div>

              <div className="rounded-lg overflow-hidden">
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="font-semibold mb-2">Corporate Office</h4>
                  <p className="text-gray-700 dark:text-gray-300 hidden md:block">Sumami Enterprise, Thakdari Road, CG Block, Action Area-1, New Town, Kolkata - 700156</p>
                </div>
                <iframe
                  title="Corporate Office Map Desktop"
                  src={getMapSrc('Sumami Enterprise, Thakdari Road, CG Block, Action Area-1, New Town, Kolkata - 700156')}
                  className="w-full h-64 border-0"
                  loading="lazy"
                />
              </div>

              <div className="rounded-lg overflow-hidden">
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="font-semibold mb-2">Branch Office</h4>
                  <p className="text-gray-700 dark:text-gray-300 hidden md:block">#3C, Lakshmi Savitri Apartment, Tiwari Tank Road, Hindpiri, Ranchi, Jharkhand</p>
                </div>
                <iframe
                  title="Branch Office Map Desktop"
                  src={getMapSrc('#3C, Lakshmi Savitri Apartment, Tiwari Tank Road, Hindpiri, Ranchi, Jharkhand')}
                  className="w-full h-64 border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
} 
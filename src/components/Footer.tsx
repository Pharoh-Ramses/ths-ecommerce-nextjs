'use client';

import Link from 'next/link';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/careers', label: 'Careers' },
        { href: '/news', label: 'News' },
        { href: '/contact', label: 'Contact' },
      ],
    },
    products: {
      title: 'Products',
      links: [
        { href: '/categories/diagnostic', label: 'Diagnostic Equipment' },
        { href: '/categories/emergency', label: 'Emergency Supplies' },
        { href: '/categories/mobility', label: 'Mobility Aids' },
        { href: '/categories/diabetes', label: 'Diabetes Care' },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { href: '/help', label: 'Help Center' },
        { href: '/shipping', label: 'Shipping Info' },
        { href: '/returns', label: 'Returns' },
        { href: '/warranty', label: 'Warranty' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
        { href: '/cookies', label: 'Cookie Policy' },
        { href: '/compliance', label: 'Compliance' },
      ],
    },
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.99-5.366 11.99-11.99C24.007 5.367 18.641.001 12.017.001zm0 21.753c-5.392 0-9.766-4.375-9.766-9.766 0-5.392 4.374-9.767 9.766-9.767 5.392 0 9.767 4.375 9.767 9.767 0 5.391-4.375 9.766-9.767 9.766z" />
          <path d="M16.948 6.232c-.72 0-1.304.585-1.304 1.304s.584 1.304 1.304 1.304c.72 0 1.304-.585 1.304-1.304s-.584-1.304-1.304-1.304z" />
          <path d="M12.017 7.072c-2.717 0-4.915 2.198-4.915 4.915s2.198 4.915 4.915 4.915 4.915-2.198 4.915-4.915-2.198-4.915-4.915-4.915zm0 8.104c-1.758 0-3.189-1.431-3.189-3.189s1.431-3.189 3.189-3.189 3.189 1.431 3.189 3.189-1.431 3.189-3.189 3.189z" />
          <path d="M18.717 24h-13.43C2.38 24 0 21.62 0 18.703V5.297C0 2.38 2.38 0 5.287 0h13.43C21.62 0 24 2.38 24 5.297v13.406C24 21.62 21.62 24 18.717 24zM5.287 1.44c-2.136 0-3.847 1.711-3.847 3.847v13.426c0 2.136 1.711 3.847 3.847 3.847h13.43c2.136 0 3.847-1.711 3.847-3.847V5.287c0-2.136-1.711-3.847-3.847-3.847H5.287z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className={`bg-dark-900 text-light-100 ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue text-white rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">THS</span>
              </div>
              <span className="text-xl font-semibold">Total Health Supply</span>
            </div>
            <p className="text-light-200 mb-6 max-w-md">
              Your trusted partner in healthcare products. We provide essential medical supplies 
              and equipment to healthcare facilities and medical practices worldwide.
            </p>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-medium mb-3">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-dark-700 border border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-light-100 placeholder-dark-500"
                />
                <button className="px-6 py-2 bg-blue text-white rounded-lg hover:bg-blue-dark transition-colors duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-light-200 hover:text-blue transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-dark-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h4 className="font-medium mb-1">Address</h4>
                <p className="text-light-200 text-sm">
                  123 Medical District<br />
                  Healthcare Plaza, Suite 400<br />
                  Medical City, MC 12345
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <p className="text-light-200 text-sm">
                  <Link href="tel:+1-800-123-4567" className="hover:text-blue transition-colors">
                    +1 (800) 123-4567
                  </Link>
                </p>
                <p className="text-light-200 text-sm">
                  Mon-Fri: 8am-6pm EST
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-light-200 text-sm">
                  <Link href="mailto:info@totalhealthsupply.com" className="hover:text-blue transition-colors">
                    info@totalhealthsupply.com
                  </Link>
                </p>
                <p className="text-light-200 text-sm">
                  <Link href="mailto:support@totalhealthsupply.com" className="hover:text-blue transition-colors">
                    support@totalhealthsupply.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-light-200 text-sm">
              <p>&copy; {currentYear} Total Health Supply. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-light-200 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-light-200 hover:text-blue transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Certifications/Badges */}
            <div className="flex items-center space-x-4">
              <div className="text-xs text-light-200">
                <span className="bg-dark-700 px-2 py-1 rounded">FDA Registered</span>
              </div>
              <div className="text-xs text-light-200">
                <span className="bg-dark-700 px-2 py-1 rounded">ISO 13485</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
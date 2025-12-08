// components/Footer/Footer.tsx
import Container from '@/components/ui/Container';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      {/* القسم العلوي */}
      <Container py="py-12" px="px-4 md:px-6" flex={true} gap="12" className="flex-wrap">
        
        {/* معلومات الاتصال */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-gray-800 text-lg font-semibold mb-6">Contact us</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="font-medium text-gray-800">Classyshop - Mega Super Store</p>
              <p className="text-gray-600">507-Union Trade Centre France</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>sales@yourcompany.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>(+91) 9876-543-210</span>
              </div>
            </div>
            
            <div className="space-y-2 pt-4">
              <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Online Chat
              </button>
              <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition">
                Get Expert Help →
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="min-w-[150px]">
          <h3 className="text-gray-800 text-lg font-semibold mb-6">Products</h3>
          <ul className="space-y-3">
            {['Prices drop', 'New products', 'Best sales', 'Contact us', 'Sitemap', 'Stores'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our company */}
        <div className="min-w-[150px]">
          <h3 className="text-gray-800 text-lg font-semibold mb-6">Our company</h3>
          <ul className="space-y-3">
            {['Delivery', 'Legal Notice', 'Terms and conditions of use', 'About us', 'Secure payment', 'Login'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-gray-800 text-lg font-semibold mb-6">Subscribe to newsletter</h3>
          <p className="mb-6 text-gray-600">Subscribe to our latest newsletter to get news about special discounts.</p>
          
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition"
            >
              SUBSCRIBE
            </button>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the terms and conditions and the privacy policy
              </label>
            </div>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-4 text-gray-600">
              <span>Windows</span>
              <span>Install Plan Manual</span>
            </div>
          </div>
        </div>
      </Container>

      {/* القسم السفلي */}
      <div className="border-t border-gray-200 bg-gray-100">
        <Container py="py-6" px="px-4 md:px-6" flex={true} gap="4" className="items-center justify-between flex-wrap">
          {/* حقوق النشر */}
          <div>
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} متجرنا. جميع الحقوق محفوظة.</p>
          </div>

          {/* طريقة الدفع */}
          <div className="flex items-center gap-4">
            <span className="text-gray-500 font-semibold">VISA</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center border border-gray-300">
                <span className="text-xs font-bold text-gray-700">VISA</span>
              </div>
              <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center border border-gray-300">
                <span className="text-xs font-bold text-gray-700">MC</span>
              </div>
              <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center border border-gray-300">
                <span className="text-xs font-bold text-gray-700">PP</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
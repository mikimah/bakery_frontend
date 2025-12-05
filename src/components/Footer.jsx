import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
   <footer className="bg-gradient-to-br from-amber-500 to-amber-700 text-amber-50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-amber-300 to-orange-400 p-2 rounded-full">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C9.243 2 7 4.243 7 7v1H6c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v1H9V7c0-1.654 1.346-3 3-3zm6 6v10H6V10h12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Sweet Delight</h3>
            </div>
            <p className="text-amber-100 mb-4 leading-relaxed">
              Tiệm bánh cao cấp chuyên cung cấp các loại bánh ngọt thơm ngon, được làm từ nguyên liệu tươi mới và công thức đặc biệt.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-amber-100 hover:text-white transition flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-300 rounded-full"></span>
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="/products" className="text-amber-100 hover:text-white transition flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-300 rounded-full"></span>
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="/delivery" className="text-amber-100 hover:text-white transition flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-300 rounded-full"></span>
                  Chính sách giao hàng
                </a>
              </li>
              <li>
                <a href="/payment" className="text-amber-100 hover:text-white transition flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-300 rounded-full"></span>
                  Phương thức thanh toán
                </a>
              </li>
              <li>
                <a href="/terms" className="text-amber-100 hover:text-white transition flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-300 rounded-full"></span>
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-amber-100">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3 text-amber-100">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+84123456789" className="hover:text-white transition">
                  +84 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3 text-amber-100">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@bakery.com" className="hover:text-white transition">
                  info@bakery.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-amber-100">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Thứ 2 - Thứ 6: 7:00 - 21:00</p>
                  <p>Thứ 7 - CN: 8:00 - 22:00</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-amber-200">
            <p>&copy; 2025 Sweet Delight Bakery. Tất cả quyền được bảo lưu.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition">Chính sách bảo mật</a>
              <a href="/terms" className="hover:text-white transition">Điều khoản</a>
              <a href="/sitemap" className="hover:text-white transition">Sơ đồ trang</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

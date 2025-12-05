import  { useState } from 'react';
import { showSuccess } from '../utils/notify';
import { Facebook, Twitter, Youtube, Instagram, MapPin, Mail, Phone } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    showSuccess("Tin nhắn đã được gửi thành công"); 
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg ">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-950 text-2xl mb-2">
                Họ và tên
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full text-xl px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-950 text-2xl mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full text-xl px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-950 text-2xl mb-2">
                Nội dung
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full text-xl px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-amber-500  text-white text-2xl  p-3 rounded-4xl transition duration-300 ease-in-out transform hover:cursor-pointer hover:scale-105"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white p-8 rounded-lg ">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-2">
                HOTLINE ĐẶT HÀNG - CSKH: 0123 456 789
              </h2>
            </div>

            <div className="flex justify-around  items-start">
              <div className=' w-[60%]'>
                <h3 className="text-xl font-bold text-gray-950 mb-4">
                  CÔNG TY CỔ PHẦN BÌNH MINH TOÀN CẦU
                </h3>
              </div>
              <div>
                <p className="text-gray-950 text-xl font-bold mb-3">Theo dõi chúng tôi</p>
                <div className="flex gap-3 justify-center">
                  <a href="#" className="text-gray-950 hover:text-amber-500 transition">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-gray-950 hover:text-amber-500 transition">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-gray-950 hover:text-amber-500 transition">
                    <Youtube size={24} />
                  </a>
                  <a href="#" className="text-gray-950 hover:text-amber-500 transition">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-950 text-xl">
                  123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh
                </p>
              </div>

              <div className="flex items-center gap-3 text-xl">
                <Mail className="text-orange-500 flex-shrink-0" size={20} />
                <a href="mailto:info@info@bakery.com" className="text-gray-950 hover:text-orange-500 transition">
                  info@bakery.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-xl">
                <Phone className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <div className="text-gray-950">
                  <p>0283 7751727 (08h00 - 17h00)</p>
                  <p>0283 5358936 (07h00 - 22h00)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
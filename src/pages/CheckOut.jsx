import Header from "../components/Header";
import Footer from "../components/Footer";
import {CircleCheck} from 'lucide-react';

function CheckOut() {
  return (
    <>
      <Header />
      <div className='h-auto w-[80%] m-auto flex flex-col text-gray-950 items-center justify-center text-center py-20 max-md:w-full'>
        <div className='flex flex-col items-center gap-6'>
          <div className='text-6xl'>
            <CircleCheck className="text-amber-400" size={80} />
          </div>
          <h1 className='text-4xl font-bold text-amber-500'>Thanh toán thành công!</h1>
          <p className='text-2xl text-gray-700'>Cảm ơn quý khách đã mua sắm tại cửa hàng của chúng tôi</p>
          <a href='/' className='mt-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 px-6 rounded-[5px] text-lg duration-200'>
            Quay lại trang chủ
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckOut;
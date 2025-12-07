import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Loading from '../components/Loading.jsx';
import {useAuth} from '../context/AuthContext';
import { useCart } from "../context/CartContext.jsx";
import { useSearch } from "../context/SearchContext.jsx";

function Product4(){
    const { searchResults, searchTerm } = useSearch();
    console.log(searchResults);
    const {loading} = useAuth();
    const { addToCart } = useCart();

    function formatCurrency(value) {
        return new Intl.NumberFormat('vi-VN').format(value) + 'đ';
    }

    function renderSanPhamCard(items){
        if (!Array.isArray(items)) return null;

        return items.map((item, i) => (
            <div
                className="h-[90%] w-full font-inter flex flex-col "
                key={i}>
                <a className=' h-[70%] mb-3' href={`/product/${item.MaSP}`}><img
                className="h-full m-auto hover:scale-[1.1] duration-500 hover:cursor-pointer"
                src={item.image_url}
                alt="img san pham"
                /></a>
                <a href={`/product/${item.MaSP}`}><p className=" text-2xl hover:text-amber-400 duration-75 hover:cursor-pointer">
                {item.TenSP}
                </p></a>
                <p className="text-xl text-amber-400">
                {formatCurrency(item.GiaSP)}
                </p>
                <button onClick={() => addToCart(item.MaSP,item)}
                 className="font-medium text-sm border-2 p-1 py-3 rounded-[5px] hover:cursor-pointer hover:text-white hover:border-amber-400 hover:bg-amber-400 duration-100">Thêm vào giỏ hàng</button>
            </div>
            ));
    }

    if(loading) return <Loading/>;
    
    return(
        <>
        <Header />
        <div className='h-auto w-[80%] m-auto flex flex-col text-gray-950 items-center justify-center font-bold'>
            <Banner title={["Product", "Kết quả tìm kiếm: " + searchTerm]}/>
            
            {/* Hiển thị số kết quả tìm kiếm */}
            <div className="w-full flex items-center justify-between my-8 px-4">
                <h2 className="text-2xl font-bold text-gray-800">
                    {searchResults && searchResults.length > 0 
                        ? `Đã tìm thấy ${searchResults.length} kết quả` 
                        : "Không tìm thấy kết quả nào"}
                </h2>
            </div>

            {/* Hiển thị sản phẩm hoặc thông báo */}
            {searchResults && searchResults.length > 0 ? (
                <div className="w-full h-auto my-10 grid grid-cols-4 gap-5 ">  
                    {renderSanPhamCard(searchResults)}
                </div>
            ) : (
                <div className="w-full h-auto my-10 flex items-center justify-center">
                    <p className="text-2xl text-gray-500">Vui lòng thử tìm kiếm với từ khóa khác</p>
                </div>
            )}
        </div>
        <Footer/>
        </>
    );
}

export default Product4;
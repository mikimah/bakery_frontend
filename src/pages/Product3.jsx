import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Loading from '../components/Loading.jsx';
import { useParams } from 'react-router';
import {useState,useEffect} from 'react'
import {useAuth} from '../context/AuthContext';
import { useCart } from "../context/CartContext.jsx";
import api from '../api/api';
import { showError,showSuccess } from '../utils/notify';
function Product3(){
    const { addToCart } = useCart();
    const {loading} = useAuth();
    const { id } = useParams();
    const [name,setName]= useState('Category');
    const [item,setItem] = useState(null);
    const [items,setItems] = useState([]);

    function formatCurrency(value) {
    // Intl.NumberFormat sẽ tự động thêm dấu chấm ngăn cách hàng nghìn theo locale 'vi-VN'
    return new Intl.NumberFormat('vi-VN').format(value) + 'đ';
    }

    async function getItem() {
        try{
            const response = await api.get(`/category/byid/${id}`);
            if(response.data.status==200){
                setItem(response.data.item);
                setName(response.data.item.TenDM)
                console.log(response.data.item);
                getAllItems(response.data.item.MaDM);
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra khi lấy dữ liệu");
        }
    }

    async function getAllItems(id){
        try{
            const response = await api.get(`/product/bycate/${id}`);
            if(response.data.status==200){
                setItems(response.data.items);
                console.log(response.data.items);
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra khi lấy dữ liệu");
        }
    }

    function renderSanPhamCard(items){
    if (!Array.isArray(items)) return null; // hoặc []

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

    useEffect(()=>{getItem();},[]);
    
    
    if(loading) return <Loading/>;
    return(<>
        <Header />
        <div className='h-auto w-[80%] m-auto flex flex-col text-gray-950 items-center justify-center font-bold'>
        <Banner type={2} title={[name, "Sản phẩm"]} />
        <div className="w-full h-auto my-10 grid grid-cols-4 gap-5 ">
            {renderSanPhamCard(items)}
        </div>
        </div>
        <Footer />
    </>);
    
}

export default Product3
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner.jsx";
import Loading from '../components/Loading.jsx';
import {Plus,Minus} from 'lucide-react'
import {useAuth} from '../context/AuthContext';
import { useCart } from "../context/CartContext.jsx";
import {useState,useEffect} from 'react'
import api from '../api/api';
import { showError,showSuccess } from '../utils/notify';
import { useParams } from 'react-router';
function Product2(){
    const { addToCart } = useCart();
    const {loading} = useAuth();
    const { id } = useParams();
    const [name,setName]= useState('Product');
    const [item,setItem] = useState(null);
    const [items,setItems] = useState([]);
    const [num,setNum] = useState(1);

    function formatCurrency(value) {
    // Intl.NumberFormat sẽ tự động thêm dấu chấm ngăn cách hàng nghìn theo locale 'vi-VN'
    return new Intl.NumberFormat('vi-VN').format(value) + 'đ';
    }

    async function getItem() {
        try{
            const response = await api.get(`/product/${id}`);
            if(response.data.status==200){
                setItem(response.data.item);
                setName(response.data.item.TenSP)
                console.log(response.data.item);
                getAllItems(response.data.item.danh_muc.MaDM);
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra khi lấy dữ liệu");
        }
    }
    async function getAllItems(id){
        try{
            const response = await api.get(`/product/cate/${id}`);
            if(response.data.status==200){
                setItems(response.data.items);
                console.log(response.data.items);
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra khi lấy dữ liệu");
        }
    }

    function handleChangeNum(type){
        if(type==1){
            if(num<5){
                setNum(prev=>prev+1);
            }
        }else{
            if(num>1){
                setNum(prev=>prev-1);
            }
            
        }
    }



    function renderSanPhamCard(items, id){
    if (!Array.isArray(items)) return null; // hoặc []

    return items
        .filter(item => item.MaSP != id)   // bỏ qua sản phẩm có MaSP trùng id
        .slice(0, 4)                        // chỉ lấy 4 sản phẩm đầu tiên
        .map((item, i) => (
        <div
            className="h-[90%] w-full font-inter flex flex-col"
            key={i}
        >
            <a className=' h-[70%] mb-3' href={`/product/${item.MaSP}`}><img
            className="h-full m-auto hover:scale-[1.1] duration-500 hover:cursor-pointer"
            src={item.image_url}
            alt="img san pham"
            /></a>
            <a href={`/product/${item.MaSP}`}><p className="text-2xl hover:text-amber-400 duration-75 hover:cursor-pointer">
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



    function renderSanPham(item){
        if(item!=null){
            return(
                <>
                <div className="w-full h-auto my-10  flex ">
                    <div className="w-[40%] h-auto  flex items-center justify-center">
                        <img src={item.image_url} alt="hinh san pham" 
                        className="border border-gray-200 w-[20rem] h-[20rem] "
                        />
                    </div>
                    <div className="w-[60%] h-auto">
                        <h1 className="text-4xl font-medium">{item.TenSP}</h1>
                        <h3 className="text-2xl my-4 font-medium text-red-700">{formatCurrency(item.GiaSP)}</h3>
                        <div className=" h-auto flex items-center justify-start gap-5">
                            <div className="w-[20%] h-auto flex items-center justify-between border">
                                <button>
                                    <Minus onClick={()=>handleChangeNum(2)}
                                    className=" p-2 hover:bg-amber-500 hover:cursor-pointer duration-100" size={40}/>
                                </button>
                                <div className="h-10 flex items-center justify-center flex-1 text-xl text-center font-medium border-x">{num}</div>
                                <button>
                                    <Plus onClick={()=>handleChangeNum(1)}
                                     className=" p-2 hover:bg-amber-500 hover:cursor-pointer duration-100" size={40}/>
                                </button>    
                            </div>
                            <button onClick={() => addToCart(item.MaSP,item,num)}
                             className="h-10 px-3 font-medium text-white  text-xl bg-yellow-600 hover:bg-white/0 hover:text-gray-950 hover:border hover:cursor-pointer duration-200">Thêm vào giỏ hàng</button>
                        </div>
                        <h5 className="text-xl my-2 font-medium">Danh mục: <a href={`/category/${item.MaDM}`} className="text-amber-400">{item.TenDM}</a></h5>
                    </div>
                </div>
                </>
            );
        }else{
            return(
                <>
                <div className="w-full h-100 flex items-center justify-center">
                    <h1>Không tìm thấy sản phẩm</h1>
                </div>
                </>
            );
        }
    }

    useEffect(()=>{getItem();},[]);
    
    
    if(loading) return <Loading/>;
    return (<>
        <Header />
        <div className=' h-auto w-[80%] m-auto flex flex-col text-gray-950  items-center text-3xl font-bold max-md:w-full'>
            <Banner title={[`${name}`,"Sản phẩm"]} type={2} />
            {renderSanPham(item)}
            {items.length>=2?
                <div className="text-amber-400 text-4xl mt-5">CÁC SẢN PHẨM KHÁC</div> : null
            }
            <div className="grid grid-cols-4 gap-4 w-full m-auto my-5 h-auto">
                {renderSanPhamCard(items,id)}
                
            </div>
        </div>
        <Footer />
    </>);
}

export default Product2;
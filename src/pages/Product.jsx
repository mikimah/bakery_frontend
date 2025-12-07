import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner.jsx';
import DanhMucMenu from '../components/DanhMucMenu.jsx';
import DanhMucPart from '../components/DanhMucPart.jsx';
import Loading from '../components/Loading.jsx';
import {useAuth} from '../context/AuthContext';
import {useState,useEffect} from 'react'
import api from '../api/api';
import { showError,showSuccess } from '../utils/notify';
function Product() {
    const {loading} = useAuth();
    const [dsDM,setDsDM]=useState([]);

    async function getAllItems() {
        try{
            const response = await api.get("/category");
            if(response.data.status==200){
                setDsDM(response.data.items);
                console.log(response.data.items);
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra khi lấy dữ liệu");
        }
    }

    function renderDMPart(items){
         if (!Array.isArray(items)) return null; // hoặc []
        return items.map((item, i) => (
            <DanhMucPart key={i} item={item}/>
        ));
    }


    useEffect(()=>{getAllItems();},[]);
    if(loading) return <Loading/>;

    return(
        <>
            <Header  />
               <div className=' h-auto w-[80%] m-auto flex flex-col text-gray-950  items-center text-3xl font-bold max-md:w-full'>
                <Banner title={["Product","Sản phẩm"]} type={2} />
                <DanhMucMenu items={dsDM}/>
                {renderDMPart(dsDM)}
               </div>
            <Footer />
        </>
    );
}

export default Product;
import {Plus,Trash,Pencil} from 'lucide-react'
import { useState,useEffect } from 'react';
import api from '../api/api';
import { showError,showSuccess } from '../utils/notify';
function SmD11(){
    const [id,setId]=useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [cate, setCate] = useState("");
    const [image, setImage] = useState(null);
    const [listCate,setListCate]=useState([]);
    const [items,setItems]=useState([]);
    const [search,setSearch]=useState('');
    const [add,setAdd]=useState(false);
    const [update,setUpdate]=useState(false);
    const [del,setDel]=useState(null);

    
    async function getCategory(){
        try{
            const response = await api.get("/category");
            if(response.data.status==200){
                setListCate(response.data.items);
                console.log(response.data.items);
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra");
        }
    }

    async function handleSearch(e){
        e.preventDefault();
        if(search.trim()===""){
            return;
        }
        try{
            const response = await api.get(`/product/Byname/${search.trim()}`);
            if(response.data.status === 200){
                setItems(response.data.items);
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra khi tìm kiếm");
        }
    }
    async function handleAdd(e){
        e.preventDefault();
        try{
            const formData = new FormData();
            formData.append("name", name);
            formData.append("cate",cate);
            formData.append("price",price);
            formData.append("image",image);

            const response = await api.post('/product/add',formData,{
                headers: { "Content-Type": "multipart/form-data" }
            });

            if(response.data.status==200){
                showSuccess(response.data.message);
                console.log(response.data.items);
                getAllItems();
                setAdd(false);
                resetVal();
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra");
        }
    }

    async function getAllItems(){
        try{
            const response = await api.get("/product");
            if(response.data.status==200){
                setItems(response.data.items);
                console.log(response.data.items);
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra1");
        }
    }

    async function handleDelete(idx) {
        try{
            const response = await api.post(`/product/delete/${idx}`);
            if(response.data.status==200){
                showSuccess(response.data.message);
                getAllItems();
            }else{
                showError(response.data.message);
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra");
        }
    }
    
    function handleSetUpdate(item){
        setId(item.MaSP);
        setName(item.TenSP);
        setCate(item.MaDM);
        setPrice(item.GiaSP);
        setUpdate(true);
    }

    async function handleUpdate(e) {
        e.preventDefault();
            try{
            const formData = new FormData();
            formData.append("name", name);
            formData.append("cate",cate);
            formData.append("price",price);
             if (image) {
            formData.append("image", image);
            }

            const response = await api.post(`/product/update/${id}`,formData,{
                headers: { "Content-Type": "multipart/form-data" }
            });

            if(response.data.status==200){
                showSuccess(response.data.message);
                console.log(response.data.items);
                getAllItems();
                setUpdate(false);
                resetVal();
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra");
        }
    }

    function resetVal(){
        setId(0);
        setName("");
        setCate("");
        setPrice(0);
        setImage(null);
    }

    function formatCurrency(value) {
    // Intl.NumberFormat sẽ tự động thêm dấu chấm ngăn cách hàng nghìn theo locale 'vi-VN'
    return new Intl.NumberFormat('vi-VN').format(value) + 'đ';
    }

    useEffect(()=>{getCategory();},[]);

    useEffect(()=>{getAllItems();},[]);

    return(<div className="w-full h-full relative">
        <div className='flex items-center justify-between p-9'>
            <span className='text-3xl font-bold'>Quản lý sản phẩm</span>
            <button 
            onClick={()=>{setAdd(true)}}
            className='flex items-center rounded-[5px] text-white text-xl bg-amber-400 p-2 duration-75 hover:cursor-pointer hover:bg-amber-600'>
                <Plus size={30}/>
                Thêm sản phẩm
            </button>
        </div>
        
        <form className='w-[95%] m-auto'
        onSubmit={handleSearch}>
            <div className='flex items-center gap-2 '>
                <div className='flex-1 relative'>
                    <input 
                    type="search"
                    value={search}
                    onChange={(e) => {
                        const value = e.target.value;
                        setSearch(value);

                        if (value === "") {
                            getAllItems();
                        }
                    }}
                    placeholder='Tìm kiếm sản phẩm...'
                    className='border-gray-300 border w-full p-2  rounded-[5px]'
                    />

                </div>
                <button 
                type="submit"
                className='hover:cursor-pointer bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-[5px] duration-200'
                >
                    Tìm kiếm 
                </button>
            </div>
        </form>

        <div className=' w-[95%] h-[72%] m-auto mt-5 '>
            <table className='table-auto w-full bg-red-400 '>
                <thead>
                    <tr className='bg-gray-200 text-md text-gray-500 grid grid-cols-5'>
                        <th className='col-span-1 p-2'>SẢN PHẨM</th>
                        <th className='col-span-1 p-2'>DANH MỤC</th>
                        <th className='col-span-1 p-2'>GIÁ</th>
                        <th className='col-span-1 p-2'>HÌNH ẢNH</th>
                        <th className='col-span-1 p-2'  >THAO TÁC</th>
                     </tr>
                </thead>
            </table>
            <div className="w-full h-[400px] overflow-y-scroll">
                <table className="table-auto w-full">
                    <tbody className='divide-y-2 divide-gray-300'>
                        {items.map((item, index)=>(
                            <tr
                            key={index}
                            className='bg-gray-100 font-bold grid grid-cols-5 h-auto divide-x-2 divide-gray-300'>
                                <td className='col-span-1 p-2 flex items-center justify-center' >{item.TenSP}</td>
                                <td className='col-span-1 p-2 flex items-center justify-center' >{item.TenDM}</td>
                                <td className='col-span-1 p-2 flex items-center justify-center' >{formatCurrency(item.GiaSP)}</td>
                                <td className='col-span-1 p-2 flex items-center justify-center' >
                                    <img 
                                    className='h-20 w-20'
                                    src={item.image_url} alt="pic" />
                                </td>
                                <td className='col-span-1 p-2 text-white flex items-center justify-center gap-10'>
                                    <button
                                    className='bg-blue-500 rounded-[5px] p-2 flex gap-2 duration-75 hover:scale-[1.1] hover:cursor-pointer'
                                    onClick={()=>handleSetUpdate(item)}
                                    >Sửa
                                    <Pencil size={20}/>
                                    </button>

                                    <button
                                    className='bg-red-500 rounded-[5px] p-2 flex gap-2 duration-75 hover:scale-[1.1] hover:cursor-pointer'
                                    onClick={()=>setDel(item)}
                                    >Xoá
                                    <Trash size={20}/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {add&&
        <div className='flex items-center justify-center w-full h-full bg-black/30 fixed top-0 left-0 right-0 bottom-0 z-50'>
            <form 
            className='bg-white w-[90%] max-w-[500px] rounded-lg shadow-2xl py-8 px-6 flex flex-col gap-6'
            onSubmit={handleAdd}>
                
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='text-3xl font-bold text-gray-800'>Thêm sản phẩm</h2>
                    <button
                    type='button'
                    className='text-gray-400 hover:text-gray-600 text-4xl font-bold hover:cursor-pointer'
                    onClick={()=>{setAdd(false);resetVal();}}
                    >×</button>
                </div>

                {/* Tên sản phẩm */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="item_name" className='text-lg font-semibold text-gray-700'>Tên sản phẩm:</label>
                    <input 
                    className='border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type="text" 
                    id="item_name"
                    placeholder='Nhập tên sản phẩm'
                    required/>
                </div>

                {/* Danh mục */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="item_cate" className='text-lg font-semibold text-gray-700'>Danh mục:</label>
                    <select 
                    id="item_cate"
                    className='border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200'
                    value={cate}
                    onChange={(e)=>setCate(e.target.value)}
                    required>
                        <option value="">-- Chọn danh mục --</option>
                        {
                            listCate.map((e)=>{
                               return( <option key={e.MaDM} value={e.MaDM}>
                                {e.TenDM}
                                </option>);
                            })
                        }
                    </select>
                </div>

                {/* Giá sản phẩm */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="item_price" className='text-lg font-semibold text-gray-700'>Giá sản phẩm:</label>
                    <input 
                    className='border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200'
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    type="number" 
                    id="item_price"
                    placeholder='Nhập giá sản phẩm'
                    required/>
                </div>

                {/* Hình ảnh */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="item_image" className='text-lg font-semibold text-gray-700'>Hình ảnh:</label>
                    <input 
                    className=' border border-gray-300 rounded-lg p-3 text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-white hover:file:bg-amber-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200'
                    onChange={(e)=>setImage(e.target.files[0])}
                    type="file" 
                    id="item_image"
                    accept="image/*"
                    required/>
                </div>

                {/* Nút submit */}
                <button 
                className='hover:cursor-pointer bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-lg text-lg duration-200 mt-4'
                type="submit">Thêm sản phẩm</button>
            </form>
        </div>    
        }

        {update&&
        <div className='flex items-center justify-center w-full h-full bg-black/30 fixed top-0 left-0 right-0 bottom-0 z-50'>
            <form 
            className='bg-white w-[90%] max-w-[500px] rounded-lg shadow-2xl py-8 px-6 flex flex-col gap-6'
            onSubmit={handleUpdate}>
                
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='text-3xl font-bold text-gray-800'>Cập nhật sản phẩm</h2>
                    <button
                    type='button'
                    className='hover:cursor-pointer text-gray-400 hover:text-gray-600 text-4xl font-bold'
                    onClick={()=>{setUpdate(false);resetVal();}}
                    >×</button>
                </div>

                {/* Tên sản phẩm */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="item_name" className='text-lg font-semibold text-gray-700'>Tên sản phẩm:</label>
                    <input 
                    className='border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type="text" 
                    id="item_name"
                    placeholder='Nhập tên sản phẩm'
                    required/>
                </div>

                {/* Danh mục */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="item_cate" className='text-lg font-semibold text-gray-700'>Danh mục:</label>
                    <select 
                    id="item_cate"
                    className='border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200'
                    value={cate}
                    onChange={(e)=>setCate(e.target.value)}
                    required>
                        <option value="">-- Chọn danh mục --</option>
                        {
                            listCate.map((e)=>{
                               return( <option key={e.MaDM} value={e.MaDM}>
                                {e.TenDM}
                                </option>);
                            })
                        }
                    </select>
                </div>

                {/* Giá sản phẩm */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="item_price" className='text-lg font-semibold text-gray-700'>Giá sản phẩm:</label>
                    <input 
                    className='border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200'
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    type="number" 
                    id="item_price"
                    placeholder='Nhập giá sản phẩm'
                    required/>
                </div>

                {/* Hình ảnh */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="item_image" className='text-lg font-semibold text-gray-700'>Hình ảnh:</label>
                    <input 
                    className='border border-gray-300 rounded-lg p-3 text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-white hover:file:bg-amber-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200'
                    onChange={(e)=>setImage(e.target.files[0])}
                    type="file" 
                    id="item_image"
                    accept="image/*"/>
                </div>

                {/* Nút submit */}
                <button 
                className='hover:cursor-pointer bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-lg text-lg duration-200 mt-4'
                type="submit">Cập nhật sản phẩm</button>
            </form>
        </div>    
        }

        {del&&
        <div className='flex items-center justify-center w-full h-full bg-black/30 fixed top-0 left-0 right-0 bottom-0 z-50'>
            <div className='bg-white w-[90%] max-w-[400px] rounded-lg shadow-2xl py-8 px-6 flex flex-col gap-6'>
                
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='text-2xl font-bold text-gray-800'>Xác nhận xóa</h2>
                </div>

                <p className='text-lg text-gray-700'>Bạn có chắc chắn muốn xóa sản phẩm "{del.TenSP}" này không?</p>

                {/* Buttons */}
                <div className='flex gap-4 justify-end mt-4'>
                    <button 
                    type='button'
                    className='bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg text-base duration-200'
                    onClick={()=>{setDel(null)}}
                    >
                        Không
                    </button>
                    <button 
                    type='button'
                    className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg text-base duration-200'
                    onClick={()=>{handleDelete(del.MaSP);setDel(null);}}
                    >
                        Có, xóa
                    </button>
                </div>
            </div>
        </div>
        }


    </div>);
}

export default SmD11;
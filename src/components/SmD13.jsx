import {Plus} from 'lucide-react'
import { useState } from 'react';
function SmD13(){
    const [search,setSearch]=useState('');
    function handleSubmit(e){
        e.preventDefault();
        console.log(search);
    }
    return(<div className="w-full h-full">
        <div className='flex items-center justify-between p-9'>
            <span className='text-3xl font-bold'>Quản lý khuyến mãi</span>
            <button className='flex items-center rounded-[5px] text-white text-xl bg-amber-400 p-2'>
                <Plus size={30}/>
                Thêm khuyến mãi
            </button>
        </div>
        
        <form className='w-[95%] m-auto '
        onSubmit={handleSubmit}>
            <input type="search"
            onChange={(e)=>{setSearch(e.target.value)}}
            placeholder='Tìm kiếm sản phẩm...'
            className='border-gray-300 border w-full p-2 rounded-[5px] '
            />
        </form>

        <div className=' w-[95%] h-[72%] m-auto mt-5 '>
            <table className='table-auto w-full bg-red-400 '>
                <thead>
                    <tr className='bg-gray-200 text-md text-gray-500 grid grid-cols-6'>
                    <th className='col-span-1 p-2'>KHUYẾN MÃI</th>
                    <th className='col-span-1 p-2'>LOẠI</th>
                    <th className='col-span-1 p-2'>GIÁ TRỊ</th>
                    <th className='col-span-1 p-2'>THỜI HẠN</th>
                    <th className='col-span-1 p-2'>ĐIỀU KIỆN</th>
                    <th className='col-span-1 p-2'>THAO TÁC</th>
                    </tr>
                </thead>
                
            </table>
        </div>
    </div>);
}

export default SmD13;
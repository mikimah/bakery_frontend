import { useState } from 'react';

function Dash3(){
    const [dateValue,setDateValue]=useState('');
    function handleSubmit(e){
        e.preventDefault();
        console.log(dateValue);
    }
    return(<div className="w-full h-full flex items-center bg-gray-100 font-inter">
        
        <div className="m-auto w-[95%] h-[95%] rounded-[5px] shadow-2xl bg-white">
        <div className='flex items-center justify-between p-9'>
            <span className='text-3xl font-bold'>Thống kế dữ liệu</span>
            
            <form onSubmit={handleSubmit} className='flex items-center gap-2'>
                <input onChange={(e)=>{setDateValue(e.target.value)}} type="date" className='border p-2 rounded-[5px]'/>
                <button type='submit' className='bg-amber-400 text-white rounded-[5px] p-2'>Lọc</button>
            </form>
        </div>

        <div className='flex m-auto   w-[95%] h-[20%] justify-around'>
            <div className='w-[15%] h-full rounded-[5px] text-xl text-center p-2 bg-gray-200'>
                Tổng đơn hàng
                <div className='text-7xl mt-2'>0</div>
            </div>
            <div className='w-[15%] h-full rounded-[5px] text-xl text-center p-2 bg-gray-200'>Đơn hàng hôm nay
                <div className='text-7xl mt-2'>0</div>
            </div>
            <div className='w-[15%] h-full rounded-[5px] text-xl text-center p-2 bg-gray-200'>Đơn hàng tháng này
                <div className='text-7xl mt-2'>0</div>
            </div>
            <div className='w-[15%] h-full rounded-[5px] text-xl text-center p-2 bg-gray-200'>Đơn hàng năm này
                <div className='text-7xl mt-2'>0</div>
            </div>
        </div>
        

        <div className=' w-[95%] h-[60%] m-auto mt-5 '>
            <table className='table-auto w-full bg-red-400 '>
                <thead>
                    <tr className='bg-gray-200 text-md text-gray-500 grid grid-cols-4'>
                    <th className='col-span-1 p-2'>ĐƠN HÀNG</th>
                    <th className='col-span-1 p-2'>NGÀY ĐẶT</th>
                    <th className='col-span-1 p-2'>TRẠNG THÁI</th>
                    <th className='col-span-1 p-2'>THAO TÁC</th>
                    </tr>
                </thead>
                
            </table>
        </div>
        </div>
    </div>);
}

export default Dash3;
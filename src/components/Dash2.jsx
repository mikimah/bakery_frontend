import { useState } from 'react';

function Dash2(){
    const [search,setSearch]=useState('');
    
    const labs = ['lab01', 'lab02', 'lab03', 'lab04', 'lab05', 'lab06', 'lab07', 'lab08'];
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(search);
    }
    
    return(
        <div className="w-full h-full flex items-center bg-gray-100 font-inter">
            <div className="m-auto w-[95%] h-[95%] rounded-[5px] shadow-2xl bg-white">
                <div className='flex items-center justify-between p-9'>
                    <span className='text-3xl font-bold'>Quản lý bài lab</span>
                </div>
                
                <div className="px-9 pb-9 w-full h-auto flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6 w-[60%]">
                        {labs.map((lab, index) => (
                            <a 
                                key={index}
                                href={`https://trinhnhatminh.infinityfreeapp.com/lab/${lab}/index.html`}
                                className="p-4 bg-blue-500 text-white text-center font-medium rounded-[5px] hover:bg-blue-600 hover:scale-105 duration-200 hover:cursor-pointer hover:shadow-lg transition"
                            >
                                {lab}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dash2;
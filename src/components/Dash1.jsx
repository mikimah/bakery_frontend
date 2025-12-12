import {ShoppingBasket,Tag,Gift} from 'lucide-react'
import { useState } from 'react';
import SmD11 from './SmD11';
import SmD12 from './SmD12';
import SmD13 from './SmD13';
function Dash1(){
    const [func,setFunc]=useState(1);
    function handleSetFunc(x){
        setFunc(x);
    }
    function renderFunc(x){
        if(x==1) return <SmD11/>;
        else if(x==2) return <SmD12/>;
        else return <SmD13/>;
    }

    return(<div className="w-full h-full bg-gray-100 font-inter">
        <div className=" text-xl flex  gap-2 font-bold m-auto pt-2 w-[95%] h-auto  text-gray-500 ">
            <button onClick={()=>handleSetFunc(1)} className={`${func == 1 ? 'text-amber-500 border-b-amber-500 ' : 'border-b-gray-500/0 hover:border-b-gray-300'}  border-b-3  hover:cursor-pointer flex items-center justify-center gap-2 p-2  w-[14%]`} >
                <ShoppingBasket size={30}/>
                Sản phẩm
            </button>
            <button onClick={()=>handleSetFunc(2)} className={`${func == 2 ? 'text-amber-500 border-b-amber-500 ' : 'border-b-gray-500/0 hover:border-b-gray-300'}  border-b-3  hover:cursor-pointer flex items-center justify-center gap-2 p-2  w-[14%]`} >
                <Tag size={30}/>
                Danh mục
            </button>
            
        </div>
        <hr className='w-[95%] m-auto border-gray-300 mb-3'/>


        <div 
        className='bg-white w-[95%] h-[88.1%] m-auto rounded-[5px] shadow-2xl'>
            {renderFunc(func)}
        </div>
    </div>);
}

export default Dash1;
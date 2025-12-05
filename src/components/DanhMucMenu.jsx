
function DanhMucMenu({items}){

    function renderDMTag(items){
        const itemCards=[];
        for(let i=0;i<items.length;i++){
            itemCards.push(
                <a href={`#section${items[i].MaDM}`} 
                key={i}
                className="border border-amber-500 p-2 w-full text-3xl font-light text-center text-gray-500 duration-200 hover:cursor-pointer hover:text-white hover:bg-amber-500">
                    {items[i].TenDM}
                </a>
            )
        }
        return itemCards;
    }
    return(
    <div className="w-full h-auto flex flex-col">
        <div className="w-full h-[8rem]  flex flex-col justify-center gap-2">
            <h1 className="pt-10 font-medium text-4xl">DANH MỤC SẢN PHẨM</h1>
            <hr className="w-[30%] border-3 border-amber-300"/>
        </div>
        <div className="grid grid-cols-5 gap-4 w-full m-auto my-10 h-auto">
            {renderDMTag(items)}
        </div>
    </div>);
}
export default DanhMucMenu;
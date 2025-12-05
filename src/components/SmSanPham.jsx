import SanPhamCard from "./SanPhamCard";

function SmSanPham({items}){
    
    function renderSanPhamCards() {
        const itemCards = [];
        for (let i = 0; i < 4; i++) {
            itemCards.push(<SanPhamCard key={i} item={items[i]}/>);
        }
        return itemCards;
    }
    return(<div className="w-[100%] h-[40rem] relative font-inter">
        <div className="w-[100%] h-[100%] absolute  flex flex-col justify-center items-center">
            <h1 className="text-amber-400 text-4xl font-bold absolute top-10">SẢN PHẨM NỔI BẬT</h1>
            <div className="w-full h-[60%] flex items-center justify-around">
                {renderSanPhamCards()}
            </div>
            <a href="/product" className="absolute bottom-10 text-xl text-black border-2  p-2 rounded-[5px] font-medium hover:bg-amber-400 hover:text-white hover:border-amber-400 duration-100 hover:cursor-pointer">Xem thêm</a>
        </div>
    </div>);
}



export default SmSanPham;

function SmAboutUs({type,title,msg,img}){
    function renderSmAboutUs(){
        if(type == 1){
            return(
                <div className="w-[100%] h-[40rem] flex  relative  font-inter ">
                <div className="h-[100%] w-[35%]  flex items-center justify-end">
                    <img className="h-[75%] w-auto rounded-[5px]" src={`/src/assets/${img}`} alt="pic1" />
                </div>
                <div className="h-[100%] w-[65%] gap-10 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-inter italic font-bold">{title}</h1>
                    <p className="text-2xl w-[75%] font-medium ">&nbsp;&nbsp;&nbsp;{msg}</p>
                </div>
            </div>
            );
        }else{
            return(
                <div className="w-[100%] h-[40rem] flex  relative  font-inter ">
                    <div className="h-[100%] w-[65%] gap-10 flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-inter italic font-bold">{title}</h1>
                        <p className="text-2xl w-[75%] font-medium ">&nbsp;&nbsp;&nbsp;{msg}</p>
                    </div>
                    <div className="h-[100%] w-[35%]  flex items-center justify-start">
                        <img className="h-[75%] w-auto rounded-[5px]" src={`/src/assets/${img}`} alt="pic2" />
                    </div>
                </div>
            );
        }
    }
    return(
        <>
            {renderSmAboutUs(type)}
        </>
    );
}

export default SmAboutUs;

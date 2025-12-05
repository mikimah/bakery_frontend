import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import SmAboutUs from "../components/SmAboutUs";
import {useAuth} from '../context/AuthContext';
import Loading from "../components/Loading";
function AboutUs({ toggleSearch }) {
    const contents = [
        {title:"Hương Vị Từ Trái Tim",
        msg:"Tiệm bánh của chúng tôi được thành lập với mong muốn mang đến những chiếc bánh thơm ngon, chất lượng và đầy ắp tình yêu thương. Từ những nguyên liệu tươi mới, chọn lọc kỹ càng, mỗi chiếc bánh đều được làm ra bằng sự tận tâm và niềm đam mê của người thợ. Chúng tôi tin rằng hương vị ngọt ngào không chỉ làm no bụng mà còn mang lại niềm vui và sự ấm áp cho mỗi khách hàng.",
        img:"about1.jpg"
        },
        {
            title:"Nơi Gắn Kết Yêu Thương",
            msg:"Tiệm bánh không chỉ là nơi bán bánh, mà còn là một không gian gần gũi, ấm áp để bạn có thể thư giãn và tận hưởng. Với thiết kế nhẹ nhàng, thoải mái, cùng hương thơm bánh mới ra lò lan tỏa khắp nơi, chúng tôi mong muốn mỗi vị khách khi bước vào đều cảm thấy như đang ở nhà. Ngoài những loại bánh truyền thống, tiệm còn thường xuyên sáng tạo ra hương vị mới để đáp ứng khẩu vị đa dạng.",
            img:"about2.jpg"
        },
        {
            title:"Tạo Nên Niềm Tin",
            msg:"Chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu. Đội ngũ thợ làm bánh giàu kinh nghiệm và tận tâm cam kết mang đến những sản phẩm không chỉ ngon miệng mà còn đẹp mắt. Mỗi chiếc bánh là một tác phẩm nhỏ, được chăm chút tỉ mỉ từ khâu chọn nguyên liệu đến khâu trình bày. Tiệm bánh hy vọng sẽ trở thành điểm đến quen thuộc, nơi bạn tìm thấy niềm vui trong từng miếng bánh ngọt ngào.",
            img:"about3.jpg"
        }
    ];
    const {loading} = useAuth();
    if(loading) return <Loading/>;
    return(
        <>
        <Header toggleSearch={toggleSearch}/>
        <div className=' h-auto w-[80%] m-auto flex flex-col text-gray-950  items-center text-3xl font-bold max-md:w-full'>
            <Banner title={["About us","Về Chúng Tôi"]} type={2}/>
            <SmAboutUs type={1} title={contents[0].title} msg={contents[0].msg} img={contents[0].img} />
            <SmAboutUs type={2} title={contents[1].title} msg={contents[1].msg} img={contents[1].img} />
            <SmAboutUs type={1} title={contents[2].title} msg={contents[2].msg} img={contents[2].img} />
        </div>
        <Footer />
        </>
    );
}

export default AboutUs;
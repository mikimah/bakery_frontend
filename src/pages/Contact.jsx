import Header from "../components/Header";
import Footer from "../components/Footer";
import SendMsgForm from "../components/SendMsgForm";
import Banner from "../components/Banner";
import {useAuth} from '../context/AuthContext';
import Loading from "../components/Loading";
function Contact() {
    const {loading} = useAuth();
    if(loading) return <Loading/>;
    return(<>
    <Header />
        <div className=' h-auto w-[80%] m-auto flex flex-col  items-center text-3xl font-inter max-md:w-full'>
            <Banner type={2} title={["Contact","Liên hệ"]}/>
            <SendMsgForm/>
        </div>
    <Footer/>
    </>);
}
export default Contact;
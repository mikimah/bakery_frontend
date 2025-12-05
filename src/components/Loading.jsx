import { ClipLoader } from 'react-spinners';

function Loading(){
    return(<div className='w-screen h-screen border flex items-center justify-center'>
        < ClipLoader loading={true} size={100} color="#B7B7B7" />
    </div>);
}
export default Loading;
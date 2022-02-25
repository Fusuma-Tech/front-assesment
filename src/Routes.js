import { BrowserRouter, Route, Routes} from 'react-router-dom';
import  Home  from '../src/pages/Home';


export default () => (
    <BrowserRouter>
        <Routes>   
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);  
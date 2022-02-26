import { BrowserRouter, Route, Routes} from 'react-router-dom';
import  Home  from '../src/pages/Home';
import  {PostView}  from '../src/pages/PostView';

export default () => (
    <BrowserRouter>
        <Routes>   
            <Route path="/" element={<Home/>}/>
            <Route path="/post/:id" element={<PostView/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);  
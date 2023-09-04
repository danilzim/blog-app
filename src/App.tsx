import './App.css';
import {Routes, Route} from 'react-router-dom';
import Posts from './pages/Posts/Posts';
import PostIdPages from './pages/PostIdPages/PostIdPages';


function App() {
    return (
        <div className='App'>
            <div className='container-app'>
                <Routes>
                    <Route path="/" element={<Posts/>}/>
                    <Route path="/posts/:id" element={<PostIdPages/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;

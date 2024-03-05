import {Routes,Route, BrowserRouter} from 'react-router-dom';
import { lazy } from 'react';
import LazyLayout from './components/ui/LazyLayout';
const LazyJobReg=lazy(()=>import('./pages/auth/JobRegister'));
const LazyJoblogin=lazy(()=>import('./pages/auth/Joblogin'));
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LazyLayout component={LazyJoblogin}/>}></Route>
      <Route path='/reg' element={<LazyLayout component={LazyJobReg}/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

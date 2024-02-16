import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Alerts from './components/Alerts/Alerts';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layout />}>
            <Route index element={<Alerts/>}/>
            <Route path='training'/>
            <Route path='automation'/>
            <Route path='portfolio'/>
            <Route path='trading'/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

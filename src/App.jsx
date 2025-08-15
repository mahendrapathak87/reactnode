
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Container from './Container';
import './App.css'
import Dashboard from './Dashboard';






function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Container />}>
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

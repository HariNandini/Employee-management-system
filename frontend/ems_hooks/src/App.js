import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EmployeeHome from './components/EmployeeHome';
import Header from './components/Header';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' exact element={<EmployeeHome/>}></Route>
          <Route path='/employees' element={<EmployeeHome/>}></Route>  
          <Route path='/addEmployee' element={<AddEmployee/>}></Route>  
          <Route path='/updateEmployee/:id' element={<UpdateEmployee/>}></Route>  
          <Route path='/viewEmployee/:id' element={<ViewEmployee/>}></Route>  
        </Routes>
      </div>
      <Footer/>
      </Router>
    </div>
  );

}

export default App;

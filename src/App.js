import './App.css';
import EmployeeType from './components/EmployeeType/employee_type';
import Login from './components/login/login';
import Users from './components/Users/users';
import Factory from './components/Factory/factory';
import Department from './components/Department/department';
import WorkshopUnit from './components/WorkshopUnit/workshop_unit';


function App() {
  return (
    <div className="App">
      
      {/* <Login/> */}
      {/* <Users/> */}
      {/* <EmployeeType/> */}
      {/* <Factory/> */}

      {/* <Department/> */}
      <WorkshopUnit/>
      
    </div>
  );
}

export default App;

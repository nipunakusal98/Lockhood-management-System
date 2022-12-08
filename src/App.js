import './App.css';
import EmployeeType from './components/EmployeeType/employee_type';
import Login from './components/login/login';
import Users from './components/Users/users';
import Factory from './components/Factory/factory';
import Department from './components/Department/department';
import WorkshopUnit from './components/WorkshopUnit/workshop_unit';
import IssueHistory from './components/Issue History/issue_history';
import KanbanCard from './components/Kanban card/kanban_card';
import Material from './components/Material/material';
import MaterialIssueHistory from './components/Material Issue History/material_issue_history';
import MaterialList from './components/Material List/material_list';
import Warehouse from './components/Warehouse/warehouse';
import WarehouseHistory from './components/Warehouse History/warehouse_history';
import Drawer from './components/SideBar/drawer';
import Home from './home';


// import ResponsiveAppBar from './components/NavBar/nav';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import { makeStyles } from '@mui/material';






export default function App() {
   return (
   
      <div className='App'>

        <Drawer/>

        <Router>
          <Routes>
          
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/employee" element={<Users />}/>
            <Route path="/factory" element={<Factory />}/>
            <Route path="/employee_type" element={<EmployeeType />}/>
            <Route path="/dep" element={<Department />}/>
            <Route path="/w_unit" element={<WorkshopUnit />}/>
            <Route path="/issue_history" element={<IssueHistory />}/>
            <Route path="/kanban" element={<KanbanCard />}/>
            <Route path="/material" element={<Material />}/>
            <Route path="/material_issue" element={<MaterialIssueHistory />}/>
            <Route path="/Material_list" element={<MaterialList />}/>
            <Route path="/warehouse" element={<Warehouse />}/>
            <Route path="/warehouse_history" element={<WarehouseHistory />}/>
            
          </Routes>
        </Router>


      </div>
      
   
    

  );
}
 

   
      {/* <Drawer/> */}

      
        {/* <Route exact from="/employees" render ={props =><Users {...props}/>}/>
        <Route exact from="/department" render ={props =><Department {...props}/>}/>
        <Route exact from="/login" render ={props =><Login {...props}/>}/>
        <Route exact from="/employee_type" render ={props =><EmployeeType {...props}/>}/>
        <Route exact from="/factory" render ={props =><Factory {...props}/>}/>
        <Route exact from="/kanban" render ={props =><KanbanCard {...props}/>}/>
        <Route exact from="/material" render ={props =><Material {...props}/>}/>
        <Route exact from="/material_issue_history" render ={props =><MaterialIssueHistory {...props}/>}/>
        <Route exact from="/material_list" render ={props =><MaterialList {...props}/>}/>
        <Route exact from="/warehouse" render ={props =><Warehouse {...props}/>}/>
        <Route exact from="/warehouse_history" render ={props =><WarehouseHistory {...props}/>}/>
        <Route exact from="/users" render ={props =><WorkshopUnit {...props}/>}/>
        <Route exact from="/users" render ={props =><IssueHistory {...props}/>}/> */}


        
      
   

      
  


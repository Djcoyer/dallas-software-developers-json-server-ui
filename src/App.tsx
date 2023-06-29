import './App.css';
import {UserList} from "./component/UserList";
import {Routes, Route} from "react-router-dom";
import {UserDetail} from "./component/UserDetail";


function App() {
  return (
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/users/:id" element={<UserDetail/>}/>
      </Routes>
  );
}

export default App;

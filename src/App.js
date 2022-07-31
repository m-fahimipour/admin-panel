import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import {columns as columnsUsers , rows as rowsUsers} from "./pages/List/usersData";
import {columns as columnsProducts , rows as rowsProducts} from "./pages/List/productData";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>} />
        <Route path="users">
          <Route index element={<List columns={columnsUsers} rows={rowsUsers}/>}/>
          <Route path=":userid" element={<Single/>}/>
          <Route path="newuser" element={<New/>}/>
        </Route>
        <Route path="products">
          <Route index element={<List columns={columnsProducts} rows={rowsProducts}/>}/>
          <Route path=":productid" element={<Single/>}/>
          <Route path="newproduct" element={<New/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

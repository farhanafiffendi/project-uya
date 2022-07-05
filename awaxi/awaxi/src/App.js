import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Pasien from "./Pasien";
import Login from "./Login";
import React from "react";
import Admin from "./Admin";
import Patient from "./Admin/Patient/Patient";
import RoomPatient from "./Admin/Room_Patient/Room_Patient";
import IoTPatient from "./Admin/IoT_Patient/IoTPatient";
import AwaxiRegister from "./Admin/Awaxi_Register/AwaxiRegister";
import AwaxiUser from "./Admin/Awaxi_User/AwaxiUser";
import Room from "./Admin/Room/Room";
import AddPatient from "../src/Admin/Patient/AddPatient";
import AddRoomPatient from "../src/Admin/Room_Patient/AddRoomPatient";
import AddAwaxiUser from "../src/Admin/Awaxi_User/addAwaxiUser";
import AddRoom from "../src/Admin/Room/AddRoom";
import AddRegister from "./Admin/Awaxi_Register/AddRegister";
import AddIoT from "./Admin/IoT_Patient/AddIot";
import EditPatient from "../src/Admin/Patient/EditPatient";
import Registered from "../src/Registered";
import EditRoomPatient from "./Admin/Room_Patient/EditRoomPatient";
import EditRoom from "./Admin/Room/EditRoom";
import EditIoT from "./Admin/IoT_Patient/EditIoT";
import EditRegister from "./Admin/Awaxi_Register/EditRegister";
import EditAwaxiUser from "./Admin/Awaxi_User/editAwaxiUser";


export default function App() {

  const privateRoute = (props) =>{

  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/pasien" element={<Pasien />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/patient" element={<Patient />} />
        <Route exact path="/roomPatient" element={<RoomPatient />} />
        <Route exact path="/IoTPatient" element={<IoTPatient />} />
        <Route exact path="/awaxiRegister" element={<AwaxiRegister />} />
        <Route exact path="/awaxiUser" element={<AwaxiUser />} />
        <Route exact path="/room" element={<Room />} />
        <Route exact path="/addPatient" element={<AddPatient />} />
        <Route exact path="/addRoomPatient" element={<AddRoomPatient />} />
        <Route exact path="/addAwaxiUser" element={<AddAwaxiUser />} />
        <Route exact path="/addRoom" element={<AddRoom />} />
        <Route exact path="/addRegister" element={<AddRegister />} />
        <Route exact path="/editRoomPatient/:key" element={<EditRoomPatient />} />
        <Route exact path="/addIoT" element={<AddIoT />} />
        <Route exact path="/editPatient/:key" element={<EditPatient />} />
        <Route exact path="/editRoom/:key" element={<EditRoom />} />
        <Route exact path="/editIoTPatient/:key" element={<EditIoT />} />
        <Route exact path="/editRegister/:key" element={<EditRegister />} />
        <Route exact path="/editAwaxiUser/:key" element={<EditAwaxiUser />} />
        {/* <Route exact path="/registered" element={<Registered />} /> */}
        {/* <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

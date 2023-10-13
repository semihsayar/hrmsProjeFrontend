import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import HrmsHome from "../pages/HrmsHome";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import Error404 from "../pages/Error404";
import Contact from "../pages/Contact";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";

export default function Hrms() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={16}>
            <Routes>
              <Route index element={<HrmsHome/>} />
              <Route exact path="/jobList" element={<JobAdvertisementList/>}/>
              <Route path="jobList/:id" element={<JobAdvertisementDetail/>}/>
              <Route path="jobAdvertisementAdd" element={<JobAdvertisementAdd/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="*" element={<Error404/>}/>
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

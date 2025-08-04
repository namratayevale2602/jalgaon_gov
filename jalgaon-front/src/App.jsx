import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Historyofdistrict from "./pages/About_District/History";
import OrganizationalChart from "./pages/About_District/OrganizationalChart";
import Objectives from "./pages/About_District/Objectives";
import KeyResponsibilities from "./pages/Functions/KeyResponsibilities";
import RolewiseDuties from "./pages/Functions/RolewiseDuties";
import DistrictAnnualPlan from "./pages/Schemes/DistrictAnnualPlan";
import MLAMPFunds from "./pages/Schemes/MLAMPFunds";
import SpecialSchemes from "./pages/Schemes/SpecialSchemes";
import OngoingProjects from "./pages/Projects/OngoingProjects";
import ApprovalProcess from "./pages/Projects/ApprovalProcess";
import PlanningCommittee from "./pages/Committees/PlanningCommittee";
import ExecutiveCommittee from "./pages/Committees/ExecutiveCommittee";
import BudgetExpenditure from "./pages/Transparency/BudgetExpenditure";
import RTIPortal from "./pages/Transparency/RTIPortal";
import Directory from "./pages/Contact/Directory";
// import Aboutdistrict from "./pages/About_District/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/history" element={<Historyofdistrict />} />
          <Route
            path="/organizationalChart"
            element={<OrganizationalChart />}
          />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/responsibilities" element={<KeyResponsibilities />} />
          <Route path="/rolewiseduties" element={<RolewiseDuties />} />
          <Route path="/annual-plan" element={<DistrictAnnualPlan />} />
          <Route path="/MLAMPFunds" element={<MLAMPFunds />} />
          <Route path="/spacialfunds" element={<SpecialSchemes />} />
          <Route path="/ongoingprojects" element={<OngoingProjects />} />
          <Route path="/approvalprocess" element={<ApprovalProcess />} />
          <Route path="/planningcommittee" element={<PlanningCommittee />} />
          <Route path="/executivecommittee" element={<ExecutiveCommittee />} />
          <Route path="/budgetexpenditure" element={<BudgetExpenditure />} />
          <Route path="/rti-portal" element={<RTIPortal />} />
          <Route path="/directory" element={<Directory />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

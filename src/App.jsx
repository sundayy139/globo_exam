import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import Home from "./pages/Home";
import Active from "./pages/Active";
import TaskCatalog from "./pages/TaskCatalog";
import Complete from "./pages/Complete";
import Closed from "./pages/Closed";
import Subcribe from "./pages/Subcribe";
import MemberPerks from "./pages/MemberPerks";
import InviteFriend from "./pages/InviteFriend";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import Setting from "./pages/Setting";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />}>
        <Route path="*" element={<HomePage />} />
        <Route path={path.HOME__PAGE} element={<HomePage />} />
        <Route path={path.TASK_CATOLOG} element={<TaskCatalog />} />
        <Route path={path.ACTIVE} element={<Active />} />
        <Route path={path.COMPLETE} element={<Complete />} />
        <Route path={path.CLOSED} element={<Closed />} />
        <Route path={path.SUBCRIBE} element={<Subcribe />} />
        <Route path={path.MEMBER_PERKS} element={<MemberPerks />} />
        <Route path={path.INVITE_FRIEND} element={<InviteFriend />} />
        <Route path={path.FAQ} element={<FAQs />} />
        <Route path={path.CONTACT_US} element={<ContactUs />} />
        <Route path={path.SETTING} element={<Setting />} />
      </Route>
    </Routes>
  );
};

export default App;

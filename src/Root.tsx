import { Outlet } from "react-router-dom";
import Nav from "./layout/nav";
import Footer from "./layout/footer";
function Root() {
  return (
    <div className="font-jost">
      <Nav>
        <Outlet />
      </Nav>
      <Footer />
    </div>
  );
}
export default Root;

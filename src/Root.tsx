import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Nav from "./layout/nav";
import Footer from "./layout/footer";
import Store from "./utils/store";
function Root() {
  return (
    <div className="font-jost">
      <Provider store={Store}>
        <Nav>
          <Outlet />
        </Nav>
        <Footer />
      </Provider>
    </div>
  );
}
export default Root;

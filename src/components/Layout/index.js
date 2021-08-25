import Calculator from ".././Calculator";
import Nav from "../Nav";
import "./layout.scss";

const Layout = () => (
  <>
    <Nav />
    <div className="container">
      <Calculator />
    </div>
  </>
);

export default Layout;
import Navcomp from "../components/navcomp";
function Nav(props: React.PropsWithChildren) {
  return (
    <div>
      <Navcomp />
      <div>{props.children}</div>
    </div>
  );
}
export default Nav;

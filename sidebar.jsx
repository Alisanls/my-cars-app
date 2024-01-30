import NavItem from "./NavItem";

function Sidebar() {
  return (
    <aside className="cars-sidebar">
      <nav>
        <ul>
          <NavItem text="Cars" />
          <NavItem text="About" />
          <NavItem text="Contact" />
          <NavItem text="Price" />
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;

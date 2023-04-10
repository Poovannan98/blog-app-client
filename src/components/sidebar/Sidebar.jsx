import "./sidebar.css";
import About from "./About";
import Categories from "./Categories";

export default function Sidebar() {
  
  return (
    <div className="sidebar">
      <About />
      <Categories />
    </div>
  );
}

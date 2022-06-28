import "./navBar.css";
const changeColor = (event) => {
  removeAllClassNames();
  document
    .querySelector(`.${event.target.className}`)
    .classList.add("selected");
};

const removeAllClassNames = () =>
  document
    .querySelectorAll(".navbar-content ul li")
    .forEach((item) => item.classList.remove("selected"));

const NavBar = () => {
  return (
    <div className="NavBarApp">
      <nav>
        <h3>NavBar</h3>
        <div className="navbar-content">
          <ul>
            <li className="item-1 selected" onClick={(event) => changeColor(event)}>
              Item 1
            </li>
            <li className="item-2" onClick={(event) => changeColor(event)}>
              Item 2
            </li>
            <li className="item-3" onClick={(event) => changeColor(event)}>
              Item 3
            </li>
            <li className="item-4" onClick={(event) => changeColor(event)}>
              Item 4
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img 
        src="img/coffeeImage.jpeg"
        alt="" 
        />
        <p>
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
         <li className="sidebarListItem">LIFE</li>
         <li className="sidebarListItem">MUSIC</li>
         <li className="sidebarListItem">STYLE</li>
         <li className="sidebarListItem">SPORTS</li>
         <li className="sidebarListItem">TECH</li>
         <li className="sidebarListItem">CINEMA</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-instagram"></i>  
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-github-square"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
      </div>
     </div>
    </div>
  );
}

import "./topbar.css"
import { Link } from "react-router-dom"

export default function TopBar() {

  const user = true;
  return (
    <div className="top">
        <div className="topLeft">
        {/* sns로고 삽입 */}
        <i className="topIcon fa-brands fa-instagram"></i>  
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-github-square"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
            {/*기존 <li className="topListItem">HOME</li> ->
                   <Link className = "link" to = "/">HOME</Link> </li> 
                   HOME 클릭 -> HOME 으로 연결*/}
              <Link className = "link" to = "/">HOME</Link> </li>
            <li className="topListItem"><Link className = "link" to = "/">ABOUT</Link> </li>
            <li className="topListItem"><Link className = "link" to = "/">CONTACT</Link> </li>
            <li className="topListItem"><Link className = "link" to = "/write">WRITE</Link> </li>
            <li className="topListItem">
              {user && <Link className = "link" to = "/setting">SETTING</Link>} 
            </li>

            <li className="topListItem">
              {/* user 존재할 때만 LOGOUT 을 topbar 에 노출 */}
              {user && "LOGOUT"}
            </li>

          </ul>
        </div>
        <div className="topRight">

          {/* user 존재 = user image 노출 
          user 존재 하지 않음 = login, register 버튼 노출 */}
          {
            user ? (
              <img 
              className="topImg"
                src="img/coffeeImage.jpeg" 
                alt="" 
              />
            ) : (
              <ul className = "topList">
                <li className="topListItem">
                <Link className = "link" to = "/login">
                LOGIN
                </Link>
                </li>
              <li className="topListItem">
                <Link className = "link" to = "/register">
                REGISTER
                </Link>
               </li>
              </ul>
            )
          }
         
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}

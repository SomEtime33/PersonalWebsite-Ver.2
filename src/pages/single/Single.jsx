import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"

export default function Single() {
  return (
    <div className="single">
        {/* post */}

    {/* 다른 폴더 사용하려면 import sidebar 필요 */}
        <SinglePost/>   
        <Sidebar/> 
    </div>
  )
}

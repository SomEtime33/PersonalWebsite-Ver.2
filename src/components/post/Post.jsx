import "./post.css"
import { Link } from "react-router-dom"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="img/skyImage.jpeg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                {/* <span className="postTitle">
                    postTitle test text
                </span> */}
                <span className="postTitle">
                 <Link className = "link"to = "/singlepost">
                    <span className="postTitle">
                     postTitle test text
                    </span>
                  </Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                postDescription Section text
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam perferendis dolores nesciunt, beatae placeat nobis iste impedit similique dicta possimus minus minima sunt laborum rem velit sed deserunt? Temporibus, mollitia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam similique molestiae voluptates, quidem neque saepe veniam fugiat maxime quos, cumque pariatur? Commodi, nostrum quia. Obcaecati voluptatum quibusdam consequatur sunt quisquam.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit deserunt nesciunt asperiores, praesentium aperiam vero, harum incidunt quas id quia sint magni eaque, minus est quam libero neque at unde?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, magni quidem vero iusto suscipit qui veniam voluptas asperiores excepturi labore cum error quo temporibus nisi praesentium est provident facilis id?
            </p>
        </div>
    );
}

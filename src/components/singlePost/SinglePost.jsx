import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
            className="singlePostImg"
            src="img/skyImage.jpeg" 
            alt="" 
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor 
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Selene</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius numquam eos impedit minus animi soluta! Velit odit iusto, delectus ad voluptatibus voluptates numquam ullam, temporibus rerum vitae sit provident ut.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt cum eveniet commodi vero! Perspiciatis, ad, quam vel voluptate culpa modi omnis a officia magni similique iste nesciunt itaque, corrupti voluptatem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dolorem nostrum cum laboriosam, quos sed unde dignissimos corporis doloremque odio. Vitae illo iure id fuga consequuntur aliquid totam repellendus alias.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae doloribus officiis, minus culpa nisi necessitatibus ullam, ipsa voluptates earum ducimus adipisci error deserunt ut praesentium facilis laboriosam molestiae, assumenda incidunt?
            </p>
        </div>

    </div>
  )
}


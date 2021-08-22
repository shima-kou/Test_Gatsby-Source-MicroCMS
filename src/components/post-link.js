import React from "react"
import { Link } from "gatsby"
import "../styles/post-link.css"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360"

const PostLink = ({ postTitle, postBody, postDate, postId }) => {
  const toHyphen = str => {
    return str.split(/_/).join("-")
  }
  return (
    <div className="post-link">
      <Link to={`/information/${toHyphen(postId)}`}>
        <div>
          <img
            src={RANDOM_IMG}
            className="post-link-image"
            alt="post-cover"
          ></img>
        </div>
      </Link>
      <div className="post-link-text">
        <h2>{postTitle}</h2>
        <div
          className="post-link-body"
          dangerouslySetInnerHTML={{ __html: postBody }}
        ></div>
        <p className="post-link-date">{postDate}</p>
      </div>
    </div>
  )
}

export default PostLink

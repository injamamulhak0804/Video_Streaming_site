import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  console.log(comments);
  return comments.map((cmt, index) => (
    <div>
      <Comment key={index} data = {cmt} />
      <div className='ml-5 border border-l-black'>
        <Comment key={index} data = {cmt} />
      </div>
    </div>
  ) )
}

export default CommentsList
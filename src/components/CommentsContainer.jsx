import React from 'react'
import Comment from './Comment'
import CommentsList from './CommentsList'

const commentsData = [
  {
    name:"zamam",
    text: "lorem ipsum for the comment tag only and yep that's it",
    replies:[{}]
  },
  {
    name:"zamam",
    text: "lorem ipsum for the comment tag only and yep that's it",
    replies:[
      {
        name:"zamam",
        text: "lorem ipsum for the comment tag only and yep that's it",
        replies:[{}]
      }
    ]
  },
  {
    name:"zamam",
    text: "lorem ipsum for the comment tag only and yep that's it",
    replies:[{}]
  }
]

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='font-bold text-2xl'>Comments</h1>
      <CommentsList comments = {commentsData} />
    </div>
  )
}

export default CommentsContainer
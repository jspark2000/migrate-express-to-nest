import { getBoardData, saveBoardData, sortPostsById } from './utils.js'

export const findOnePost = (postId) => {
  const board = getBoardData()

  return board.filter((post) => post.id === postId)[0]
}

export const findManyPosts = () => {
  const board = getBoardData()

  return board
}

export const createPost = (body) => {
  const board = getBoardData()

  sortPostsById(board, false)

  const newPostId = board[0].id + 1
  const newPost = {
    ...body,
    id: newPostId
  }

  board.push(newPost)

  saveBoardData(board)

  return newPost
}

export const updatePost = (postId, body) => {
  const board = getBoardData()
  let updatedPost

  const newBoard = board.map((post) => {
    if (post.id !== postId) return post

    updatedPost = {
      ...post,
      ...body
    }
    return updatedPost
  })

  saveBoardData(newBoard)

  return updatedPost
}

export const deletePost = (postId) => {
  const board = getBoardData()
  let deletedPost

  board.forEach((post, index) => {
    if (post.id === postId) {
      board.splice(index, 1)
      deletedPost = post
    }
  })

  saveBoardData(board)

  return deletedPost
}

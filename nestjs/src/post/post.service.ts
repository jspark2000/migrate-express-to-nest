import { Injectable } from '@nestjs/common'
import { UtilService } from 'src/util/util.service'

@Injectable()
export class PostService {
  constructor(private readonly util: UtilService) {}

  async findOnePost(postId) {
    const board = await this.util.getBoardData()

    return board.filter((post) => post.id === postId)[0]
  }

  async findManyPost() {
    return await this.util.getBoardData()
  }

  async createPost(body) {
    const board = await this.util.getBoardData()
    this.util.sortPostsById(board, false)

    const newPostId = board[0].id + 1
    const newPost = {
      ...body,
      id: newPostId
    }

    board.push(newPost)

    await this.util.saveBoardData(board)

    return newPost
  }

  async updatePost(postId, body) {
    const board = await this.util.getBoardData()
    let updatedPost

    const newBoard = board.map((post) => {
      if (post.id !== postId) return post

      updatedPost = {
        ...post,
        ...body
      }
      return updatedPost
    })

    await this.util.saveBoardData(newBoard)

    return updatedPost
  }

  async deletePost(postId) {
    const board = await this.util.getBoardData()
    let deletedPost

    board.forEach((post, index) => {
      if (post.id === postId) {
        board.splice(index, 1)
        deletedPost = post
      }
    })

    await this.util.saveBoardData(board)

    return deletedPost
  }
}

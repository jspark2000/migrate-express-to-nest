import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'
import { PostService } from './post.service'

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('')
  async getPosts() {
    return await this.postService.findManyPost()
  }

  @Get(':postId')
  async getPost(@Param('postId', ParseIntPipe) postId: number) {
    return await this.postService.findOnePost(postId)
  }

  @Post('')
  async createPost(@Body() body) {
    return await this.postService.createPost(body)
  }

  @Put(':postId')
  async updatePost(
    @Param('postId', ParseIntPipe) postId: number,
    @Body() body
  ) {
    return await this.postService.updatePost(postId, body)
  }

  @Delete(':postId')
  async deletePost(@Param('postId', ParseIntPipe) postId: number) {
    return await this.postService.deletePost(postId)
  }
}

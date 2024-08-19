import { Body, Controller, Post, UseGuards, Get, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { AddCommentDto } from './dto/add-comment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createComment(@Body() dto: AddCommentDto) {
    return await this.commentsService.addComment(dto);
  }

  @Get('/:postId')
  @UseGuards(JwtAuthGuard)
  async getCommentsByPostId(@Param('postId') postId: number) {
    return this.commentsService.getCommentsByPostId(postId);
  }
}

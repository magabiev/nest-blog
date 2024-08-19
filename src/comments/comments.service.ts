import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comments.model';
import { AddCommentDto } from './dto/add-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment) private commentRepository: typeof Comment,
  ) {}

  async addComment(dto: AddCommentDto) {
    return await this.commentRepository.create(dto);
  }

  async getCommentsByPostId(postId: number) {
    return await this.commentRepository.findAll({
      where: { postId: postId },
    });
  }
}

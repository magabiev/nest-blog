import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Post } from '../posts/posts.model';
import { AuthModule } from '../auth/auth.module';
import { Comment } from './comments.model';
import { CommentsService } from './comments.service';

@Module({
  controllers: [CommentsController],
  imports: [SequelizeModule.forFeature([User, Post, Comment]), AuthModule],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}

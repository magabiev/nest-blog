import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postService.create(dto, image);
  }

  // @Get('/:userId')
  // @UseGuards(JwtAuthGuard)
  // getPosts(@Param('userId') userId: number) {
  //   return this.postService.getPostsByUserId(userId);
  // }

  @Get()
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.postService.getAll();
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  getPostById(@Param('id') id: number) {
    return this.postService.getPostById(id);
  }
}

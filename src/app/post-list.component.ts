import { Component, Output, EventEmitter } from '@angular/core';
import { Comment } from './comment';
import { Post } from './post';

import { PostService } from './post.service';

@Component({
   selector: 'post-list',
   templateUrl: './post-list.component.html'
})

export class PostListComponent  {
   posts: Post[];

   @Output() commentsFound = new EventEmitter();

   constructor(private postService: PostService) {}

   ngOnInit(): void {
   		this.postService.getAllPosts().subscribe(data => this.posts = data);
   }

   getComments(index: number): void {}

   printComments(comments: Comment[]): void {
   		this.postService.getCommentsForPost(index: number).subscribe(data => this.comments = data);
   }
}

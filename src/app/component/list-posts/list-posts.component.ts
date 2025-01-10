import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.scss'
})
export class ListPostsComponent {
  postsService = inject(PostsService);
  router = inject(Router); 
  postList: Post[] = [];
  selectedPostId: number | null = null; // Pour gérer l'affichage des détails d'un post

  filteredPosts: Post[] = [];
  searchQuery: string = '';

  constructor() {
    this.postsService.getPosts().then((posts: Post[]) => {
      this.postList = posts.map(post => ({
        ...post,
        isFavorite: post.isFavorite || false // Initialisation à false si la propriété n'existe pas
      }));
      this.filterPosts(); // Met à jour filteredPosts initialement
    });
  }

  // Méthode pour afficher ou masquer les détails d'un post
  toggleDetails(postId: number): void {
    this.selectedPostId = this.selectedPostId === postId ? null : postId;
  }

  filterPosts(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredPosts = this.postList
      .filter(post => post.title?.toLowerCase().startsWith(query)) // Vérifie si title existe
      .sort((a, b) => {
        const titleA = a.title ? a.title.toLowerCase() : ''; // Sécurise le tri
        const titleB = b.title ? b.title.toLowerCase() : '';
        return titleA.localeCompare(titleB);
      });
  }
  

  toggleFavorite(post: Post): void {
    this.router.navigate(['/favorites']);
  }
}

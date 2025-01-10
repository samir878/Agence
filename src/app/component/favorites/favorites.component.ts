import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  postsService = inject(PostsService);
  router = inject(Router);
  favoritePosts: Post[] = [];

  constructor() {
    this.loadFavoritePosts();
  }

  // Charge les posts favoris
  private async loadFavoritePosts(): Promise<void> {
    try {
      const posts = await this.postsService.getPosts();
      this.favoritePosts = posts.filter((post) => post.isFavorite);
      console.log('Posts favoris filtrés :', this.favoritePosts);
    } catch (error) {
      console.error('Erreur lors du chargement des posts favoris:', error);
    }
  }

  // Retourner à la page des posts
  goBackToPosts(): void {
    this.router.navigate(['/posts']);
  }
}

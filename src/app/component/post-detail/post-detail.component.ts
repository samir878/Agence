import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  private route = inject(ActivatedRoute); // Pour récupérer les paramètres de la route
  private router = inject(Router); // Pour la navigation
  private postsService = inject(PostsService);

  post: Post | null = null;

  constructor() {
    const postId = Number(this.route.snapshot.paramMap.get('id')); // Récupérer l'ID depuis la route
    this.postsService.getPosts().then(posts => {
      this.post = posts.find(p => p.id === postId) || null; // Trouver le post correspondant
    });
  }

  goBack(): void {
    this.router.navigate(['/posts']); // Retourner à la liste des posts
  }
}

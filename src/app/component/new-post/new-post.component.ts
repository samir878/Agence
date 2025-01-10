import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  title: string = '';
  body: string = '';

  constructor(private postsService: PostsService, private router: Router) {}

  // Méthode pour gérer la soumission du formulaire
  onSubmit(): void {
    // Création du nouvel objet post
    const newPost = {
      title: this.title,
      body: this.body,
      isFavorite: false, // Ajout de la propriété isFavorite
    };

    // Appel au service pour ajouter le post (ici on simule la création via API)
    this.postsService.addPost(newPost).then(() => {
      // Rediriger vers la page des posts après soumission
      this.router.navigate(['/posts']);
    }).catch(err => {
      console.error('Erreur lors de l\'ajout du post', err);
    });
  }
}

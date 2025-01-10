import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = []; // Tableau local pour stocker les posts avec favoris

  constructor() {}

  // Récupération des posts avec ajout de "isFavorite"
  async getPosts(): Promise<Post[]> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des posts');
      }

      // Données brutes de l'API
      const posts: Post[] = await response.json();

      // Ajout de isFavorite à chaque post
      this.posts = posts.map((post) => ({
        ...post,
        isFavorite: Math.random() > 0.5, // Simule des favoris aléatoires
      }));

      return this.posts;
    } catch (error) {
      console.error('Erreur API:', error);
      return [];
    }
  }

  // Ajoute un post à la liste locale avec isFavorite
  async addPost(newPost: Post): Promise<void> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout du post');
      }

      const addedPost = await response.json();
      this.posts.push({ ...addedPost, isFavorite: false });
    } catch (error) {
      console.error('Erreur lors de l\'ajout du post:', error);
      throw error;
    }
  }
}

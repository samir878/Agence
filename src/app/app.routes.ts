import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListPostsComponent } from './component/list-posts/list-posts.component';
import { ListTodosComponent } from './component/list-todos/list-todos.component';
import { NewPostComponent } from './component/new-post/new-post.component'; 
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { FavoritesComponent } from './component/favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',  // Titre de la page d'accueil
  },
  {
    path: 'posts',
    component: ListPostsComponent,
    title: 'List posts page',  // Titre de la liste des posts
  },
  {
    path: 'posts/new',
    component: NewPostComponent,
    title: 'New post page',  // Titre de la page de création de post
  },
  {
    path: 'todos',
    component: ListTodosComponent,
    title: 'List todos page',  // Titre de la liste des todos
  },
  { path: 'posts/:id', 
    component: PostDetailComponent,
     title: 'Post detail page' 
  },
  { path: 'favorites',
    component: FavoritesComponent ,
     title: 'Post favorites page' }, 
];

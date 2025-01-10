import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {ListPostsComponent} from'./component/list-posts/list-posts.component';
import { ListTodosComponent } from './component/list-todos/list-todos.component';
import { HomeComponent } from './component/home/home.component';
import { NewPostComponent } from './component/new-post/new-post.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ListPostsComponent,ListTodosComponent,HomeComponent,NewPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Agence';
}

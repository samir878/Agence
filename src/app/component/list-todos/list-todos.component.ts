

import { Component, inject } from '@angular/core';
import { Todo } from '../../interfaces/toto';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent {
  // Injection correcte sans 'this'
  todoService = inject(PostsService);
  todoList: Todo[] = [];

  // constructor() {
  //   this.todoService.getTodos().then((todos: Todo[]) => {
  //     this.todoList = todos;
  //   });
  // }
}

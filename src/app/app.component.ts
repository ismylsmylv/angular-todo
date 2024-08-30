import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../shared/modules/todoItem';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: TodoItem[] = [
    new TodoItem('To learn Angular'),
    new TodoItem('Have a coffee', true),
    new TodoItem('Browse Linkedin'),
  ];
  title = 'angular-todo';
}

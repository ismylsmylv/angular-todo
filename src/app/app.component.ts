import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../shared/modules/todoItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: TodoItem[] = [
    // new TodoItem('To learn Angular'),
    // new TodoItem('Have a coffee', true),
    // new TodoItem('Browse Linkedin'),
  ];
  title = 'angular-todo';
  toggleItem(item: TodoItem) {
    item.isComplete = !item.isComplete;
  }
  addTask() {
    this.items.push(new TodoItem(this.newTaskText));
    this.newTaskText = '';
  }
  newTaskText: string = '';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../shared/modules/todoItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';

const filters = [
  (item: TodoItem) => item,
  (item: TodoItem) => !item.isComplete,
  (item: TodoItem) => item.isComplete,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    TaskListComponent,
    AddTaskFormComponent,
  ],
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

  get visibleItems(): TodoItem[] {
    return this.items.filter(filters[this.listFilter]);
  }
  listFilter: string | any = '0';
}

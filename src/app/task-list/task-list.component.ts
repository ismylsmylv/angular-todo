import { Component, Input } from '@angular/core';
import { TodoItem } from '../../shared/modules/todoItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() tasks: TodoItem[] = [];
  toggleItem(item: TodoItem) {
    item.isComplete = !item.isComplete;
  }
}

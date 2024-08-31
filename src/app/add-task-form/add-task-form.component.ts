import { Component, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../shared/modules/todoItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'add-task-form',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss',
})
export class AddTaskFormComponent {
  [x: string]: any;
  @Output() addTask = new EventEmitter<TodoItem>();
  addNewTask() {
    this.addTask.emit(new TodoItem(this.newTaskText));
    this.newTaskText = '';
  }
  newTaskText: string = '';
}

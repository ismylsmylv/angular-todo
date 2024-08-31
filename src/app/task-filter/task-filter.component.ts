import { Component, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../shared/modules/todoItem';
import { FormsModule } from '@angular/forms';
const filters = [
  (item: TodoItem) => item,
  (item: TodoItem) => !item.isComplete,
  (item: TodoItem) => item.isComplete,
];
@Component({
  selector: 'task-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.scss',
})
export class TaskFilterComponent {
  @Output() filter = new EventEmitter<any>();
  changeFilter(value: any) {
    this.filter.emit(filters[value]);
  }
  listFilter: string | any = '0';
}

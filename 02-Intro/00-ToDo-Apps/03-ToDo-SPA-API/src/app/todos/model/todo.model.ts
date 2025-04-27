export class ToDo {
  id = '';
  title: String;
  completed: boolean;

  constructor(title: String = '') {
    this.completed = false;
    this.title = title.trim();
  }
}

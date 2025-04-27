export class ToDo {
  private _title = "";
  completed: boolean;

  constructor(title: String = '') {
    this.completed = false;
    this.title = title.trim();
  }

  get title() {
    return this._title;
  }
  set title(value: String) {
    this._title = value.trim();
  }
}

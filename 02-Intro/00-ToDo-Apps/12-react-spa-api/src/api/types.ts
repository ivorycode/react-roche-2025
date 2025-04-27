export interface ToDo {
  id: number | null;
  title: string;
  completed: boolean;
}

export interface ToDosGetResponse {
  data: ToDo[];
}

export interface ToDoPostResponse {
  data: ToDo;
}

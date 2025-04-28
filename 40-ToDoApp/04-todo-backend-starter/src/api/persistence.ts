import ky from 'ky';
import { ToDo, ToDoPostResponse, ToDosGetResponse } from './types';
import {ENVIRONMENT} from '../environment.ts';

const API_URL = ENVIRONMENT.BACKEND_URL;

export async function loadToDos(completed = 0) {
  const serverResponse = await ky.get(API_URL, { searchParams: { completed } });
  const data = await serverResponse.json<ToDosGetResponse>();
  return data.result;
}

export async function saveToDo(toDo: ToDo) {
  console.log('Not implemented yet ...');
}

export async function updateToDo(toDo: ToDo) {
  console.log('Not implemented yet ...');
}

export async function deleteToDo(toDo: ToDo) {
  console.log('Not implemented yet ...');
}

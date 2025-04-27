import axios from 'axios';
import { createId } from '@paralleldrive/cuid2';
import { ToDo, ToDoPostResponse, ToDosGetResponse } from '../api/types';

// const API_URL = 'http://localhost:3456/todos';
const API_URL = location.origin + '/api/todos';

let clientId = localStorage.getItem('JBA-CLIENT-ID') as string;

if (!clientId) {
  clientId = createId();
  localStorage.setItem('JBA-CLIENT-ID', clientId);
}

export async function loadToDos(completed = 0) {
  const serverResponse = await axios.get<ToDosGetResponse>(API_URL, {
    params: { completed },
    headers: {
      'xx-jba-client-id': clientId,
    },
  });
  return serverResponse.data.data;
}

export async function saveToDo(toDo: ToDo) {
  try {
    const serverResponse = await axios.post<ToDoPostResponse>(API_URL, toDo, {
      headers: {
        'xx-jba-client-id': clientId,
      },
    });
    return serverResponse.data.data;
  } catch {
    alert('Something went terribly wrong!');
    window.location.reload();
  }
}

export async function updateToDo(toDo: ToDo) {
  try {
    await axios.put(`${API_URL}/${toDo.id}`, toDo, {
      headers: {
        'xx-jba-client-id': clientId,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteToDo(toDo: ToDo) {
  try {
    await axios.delete(`${API_URL}/${toDo.id}`, {
      headers: {
        'xx-jba-client-id': clientId,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

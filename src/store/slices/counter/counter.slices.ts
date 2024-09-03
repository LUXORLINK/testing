
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from "../../action"

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: Task[] = [
  { id: 1, text: 'Task 1', completed: false },
  { id: 2, text: 'Task 2', completed: false },
];

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { id: state.length + 1, text: action.payload, completed: false }];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
}

export default taskReducer;

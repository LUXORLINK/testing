// actions.ts
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (task: string) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const removeTask = (id: number) => {
  return {
    type: REMOVE_TASK,
    payload: id,
  };
};

export const toggleTask = (id: number) => {
  return {
    type: TOGGLE_TASK,
    payload: id,
  };
};

import { useDispatch } from 'react-redux';

import { removeTask, toggleTask } from '../../store/action';

import { FC } from 'react';

interface Task {
  id: number;
  completed: boolean;
  text: string;
}

export const TaskItem: FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <span>{task.text}</span>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TaskItem;

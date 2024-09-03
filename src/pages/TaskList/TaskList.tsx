
import { FC } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface Task {
  id: number;
}
export const TaskList: FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <ul>
      {tasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList


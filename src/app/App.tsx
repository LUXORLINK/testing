import { FC } from 'react'
import Section from '../components/Section/Section'
import Approuter, { Page_List, RoutePageType } from './routes/AppRouter';
import TaskList from '../pages/TaskList/TaskList';
import Header from '../components/Header/Header';
import AddTask from '../pages/AddTask/AddTask';

export interface I {} 

export const App: FC<I> = () => {
    

const routes: RoutePageType[] = [
    {
      path: Page_List.Section,
      Element: <Section />
    },
    {
      path: Page_List.TaskLIst,
      Element: <TaskList/>
    },
    {
      path: Page_List.TaskItem,
      Element: <AddTask/>
    }
  ]

 
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
          <Approuter pages={routes} />          // задачки вне src в файле index.js
      </div>
    </div>
  )
}


export default App;

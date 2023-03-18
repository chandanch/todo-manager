import {
  createContext,
  useDeferredValue,
  useState,
  useTransition,
} from 'react';
import ToDoListWithToolbar from './components/todo/ToDoListWithToolbar';
import { TodosDataProvider } from './contexts/ToDosDataContext';
import ToDoManager from './components/todo/ToDoManager';
import { ThemeProvider } from './contexts/ThemeContext';
import LayoutContainer from './components/layout/Layout';

const App = () => {
  const [displayStatus, setDisplayStatus] = useState('all'); // all, pending, completed
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState('');
  const defferedSearchText = useDeferredValue(searchText);
  const [isPending, startTransition] = useTransition();

  return (
    <TodosDataProvider>
      <LayoutContainer>
        <ToDoListWithToolbar
          displayStatus={displayStatus}
          setDisplayStatus={setDisplayStatus}
          import={important}
          setImportant={setImportant}
          searchText={searchText}
          setSearchText={setSearchText}
          isPending={isPending}
          startTransition={startTransition}
        >
          <ToDoManager
            displayStatus={displayStatus}
            important={important}
            searchText={searchText}
          />
        </ToDoListWithToolbar>
      </LayoutContainer>
    </TodosDataProvider>
  );
};
export default App;

import React from 'react';
import ToDoFilterToolbar from './ToDoFilterToolbar';

const ToDoListWithToolbar = ({
  displayStatus,
  setDisplayStatus,
  important,
  setImportant,
  searchText,
  setSearchText,
  children,
  isPending,
  startTransition,
}) => (
  <div>
    <ToDoFilterToolbar
      displayStatus={displayStatus}
      setDisplayStatus={setDisplayStatus}
      import={important}
      setImportant={setImportant}
      searchText={searchText}
      setSearchText={setSearchText}
      isPending={isPending}
      startTransition={startTransition}
    />
    {children}
  </div>
);
export default ToDoListWithToolbar;

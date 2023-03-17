const TodoItemText = ({ important, todoText }) => {
  return (
    <>
      {important ? (
        <span className="badge warning-bg">
          <i className="fa fa-exclamation-circle"></i>
        </span>
      ) : null}
      {todoText.toUpperCase()}
    </>
  );
};

export default TodoItemText;

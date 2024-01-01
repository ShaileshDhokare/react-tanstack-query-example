import { useDeleteTodo, useUpdateTodo } from '../services/mutations';
import { Todo } from '../types/todo';

const TodoDetails = ({
  todo,
  isLoading,
}: {
  todo: Todo;
  isLoading: boolean;
}) => {
  const updateTodoMutation = useUpdateTodo();

  const handleUpdateTodo = () => {
    const updatedTodo: Todo = {
      ...todo,
      completed: !todo.completed,
    };
    updateTodoMutation.mutate(updatedTodo);
  };

  const deleteTodoMutation = useDeleteTodo();

  const handleDeleteTodo = () => {
    deleteTodoMutation.mutate(todo.id!);
  };

  if (isLoading) {
    return (
      <div className='col-md-5 text-center p-4'>
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className='card col-md-5 m-4 p-3 text-center'>
      <div className='card-body'>
        <h5 className='card-title'>
          {todo.id}. {todo.title}
        </h5>
        <p className='card-text'>{todo.description}</p>
        <span className='badge bg-secondary mx-2'>
          Is Completed:{' ' + todo.completed}
        </span>
        <span className='badge bg-secondary mx-2'>
          Due Date: {todo.dueDate}
        </span>
      </div>
      <div className='d-flex justify-content-between'>
        <button
          className={
            todo.completed
              ? 'btn btn-sm btn-outline-dark'
              : 'btn btn-sm btn-dark'
          }
          type='button'
          onClick={handleUpdateTodo}
        >
          {updateTodoMutation.isPending && (
            <span
              className='spinner-border spinner-border-sm'
              aria-hidden='true'
            />
          )}
          <span role='status'>
            {todo.completed ? ' Mark Incomplete' : ' Mark Complete'}
          </span>
        </button>
        <button
          className='btn btn-sm btn-danger'
          type='button'
          onClick={handleDeleteTodo}
        >
          {deleteTodoMutation.isPending && (
            <span
              className='spinner-border spinner-border-sm'
              aria-hidden='true'
            />
          )}
          <span role='status'> Delete</span>
        </button>
      </div>
    </div>
  );
};

export default TodoDetails;

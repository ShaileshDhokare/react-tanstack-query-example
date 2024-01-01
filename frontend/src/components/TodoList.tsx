import { useTodos, useTodosIds } from '../services/queries';
import AddTodo from './AddTodo';
import TodoDetails from './TodoDetails';

const TodoList = () => {
  const { isLoading, isError, data: todosIds, error } = useTodosIds();
  const todosQueries = useTodos(todosIds);

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center'>
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='alert alert-dark' role='alert'>
        Error: {error.message}
      </div>
    );
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-8'>
          <h2>Todos</h2>
          <div className='row'>
            {todosQueries.map(({ data, isLoading }) => (
              <TodoDetails todo={data!} isLoading={isLoading} />
            ))}
          </div>
        </div>
        <div className='col-md-4'>
          <AddTodo />
        </div>
      </div>
    </div>
  );
};

export default TodoList;

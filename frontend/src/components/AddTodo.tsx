import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateTodo } from '../services/mutations';
import { Todo } from '../types/todo';

const AddTodo = () => {
  const createTodoMutation = useCreateTodo();

  const { register, handleSubmit } = useForm<Todo>();

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodoMutation.mutate(data);
  };

  return (
    <div className='card m-4'>
      <div className='card-header text-center'>
        <h3>Add New Todo</h3>
      </div>
      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <div className='card-body'>
          <input
            type='text'
            className='form-control my-2'
            placeholder='Todo Title'
            {...register('title')}
          />
          <textarea
            className='form-control my-2'
            placeholder='Todo Description'
            {...register('description')}
          />
          <div className='form-check my-2'>
            <input
              type='checkbox'
              className='form-check-input'
              id='todo-completed'
              {...register('completed')}
            />
            <label className='form-check-label' htmlFor='todo-completed'>
              Is Todo Completed
            </label>
          </div>
          <input
            type='text'
            className='form-control my-2'
            placeholder='Todo Due Date - YYYY-MM-DD'
            {...register('dueDate')}
          />
        </div>
        <div className='card-footer text-center'>
          <button
            type='submit'
            className='btn btn-primary'
            disabled={createTodoMutation.isPending}
          >
            {createTodoMutation.isPending ? 'Adding Todo...' : 'Add Todo'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;

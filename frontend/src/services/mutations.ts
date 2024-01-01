import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from '../types/todo';
import { createTodo, deleteTodo, updateTodo } from './api';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Todo) => createTodo(data),
    onMutate: () => {
      console.log('==onMutate==');
    },
    onError: () => {
      console.log('==onError==');
    },
    onSuccess: () => {
      console.log('==onSuccess==');
    },
    onSettled: async (data, error, variables) => {
      console.log('==onSettled==');
      console.log('== request input data ==', variables);
      console.log('== error ==', error);
      console.log('== response data ==', data);

      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['todosIds'] });
      }
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Todo) => updateTodo(data),
    onSettled: async (data, error, variables) => {
      console.log('==onSettled==');
      console.log('== request input data ==', variables);
      console.log('== error ==', error);
      console.log('== response data ==', data);

      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['todosIds'] });
        await queryClient.invalidateQueries({
          queryKey: ['todo', { id: variables.id }],
        });
      }
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSettled: async (data, error, variables) => {
      console.log('==onSettled==');
      console.log('== request input data ==', variables);
      console.log('== error ==', error);
      console.log('== response data ==', data);

      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ['todosIds'] });
      }
    },
  });
};

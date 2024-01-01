import { keepPreviousData, useQueries, useQuery } from '@tanstack/react-query';
import { getProjects, getTodo, getTodosIds } from './api';

export const useTodosIds = () => {
  return useQuery({
    queryKey: ['todosIds'],
    queryFn: getTodosIds,
  });
};

export const useTodos = (ids: (number | undefined)[] | undefined) => {
  return useQueries({
    queries: (ids ?? [])?.map((id) => {
      return {
        queryKey: ['todo', { id }],
        queryFn: () => getTodo(id!),
      };
    }),
  });
};

export const useProjects = (page: number) => {
  return useQuery({
    queryKey: ['projects', { page }],
    queryFn: () => getProjects(page),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
};

import { useState } from 'react';
import { useProjects } from '../services/queries';
import ProjectDetails from './ProjectDetails';

const ProjectList = () => {
  const [page, setPage] = useState<number>(1);

  const {
    isLoading,
    data: projects,
    isError,
    error,
    isPlaceholderData,
    isFetching,
  } = useProjects(page);

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
    <>
      <div className='row'>
        <h2>Projects</h2>
        {projects?.map((project) => (
          <ProjectDetails project={project} />
        ))}
      </div>
      <div className='d-flex justify-content-between'>
        <button
          className='btn btn-sm btn-primary'
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
        >
          Previous Page
        </button>
        <span>
          Current Page:{' '}
          {isFetching ? (
            <span
              className='spinner-border spinner-border-sm'
              aria-hidden='true'
            />
          ) : (
            page
          )}
        </span>
        <button
          className='btn btn-sm btn-primary'
          onClick={() => {
            if (!isPlaceholderData) {
              setPage((prevPage) => prevPage + 1);
            }
          }}
          disabled={isPlaceholderData}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default ProjectList;

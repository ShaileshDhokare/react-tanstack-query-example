import { Project } from '../types/project';

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <div className='card col-md-5 m-4 p-3 text-center'>
      <div className='card-body'>
        <h5 className='card-title'>
          {project.id}. {project.name}
        </h5>
        <p className='card-text'>{project.description}</p>
        <span className='badge bg-secondary mx-2'>
          Start Date: {project.startDate}
        </span>
        <span className='badge bg-secondary mx-2'>
          End Date: {project.endDate}
        </span>
      </div>
    </div>
  );
};

export default ProjectDetails;

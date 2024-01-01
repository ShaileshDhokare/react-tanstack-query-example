import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProjectList from './components/ProjectList';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container my-3'>
        <nav className='mb-3'>
          <div className='nav nav-tabs' id='nav-tab' role='tablist'>
            <button
              className='nav-link active'
              id='nav-home-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-home'
              type='button'
              role='tab'
              aria-controls='nav-home'
              aria-selected='true'
            >
              Todos - CRUD Operations
            </button>
            <button
              className='nav-link'
              id='nav-profile-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-profile'
              type='button'
              role='tab'
              aria-controls='nav-profile'
              aria-selected='false'
            >
              Projects - Pagination
            </button>
            <button
              className='nav-link'
              id='nav-contact-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-contact'
              type='button'
              role='tab'
              aria-controls='nav-contact'
              aria-selected='false'
            >
              Products - Infinite Scroll
            </button>
          </div>
        </nav>
        <div className='tab-content' id='nav-tabContent'>
          <div
            className='tab-pane fade show active'
            id='nav-home'
            role='tabpanel'
            aria-labelledby='nav-home-tab'
          >
            <TodoList />
          </div>
          <div
            className='tab-pane fade'
            id='nav-profile'
            role='tabpanel'
            aria-labelledby='nav-profile-tab'
          >
            <ProjectList />
          </div>
          <div
            className='tab-pane fade'
            id='nav-contact'
            role='tabpanel'
            aria-labelledby='nav-contact-tab'
          >
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
// import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        {/* <TodoList /> */}
        <ProjectList />
      </div>
    </>
  );
};

export default App;

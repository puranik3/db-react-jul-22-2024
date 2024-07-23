import HomePage from './pages/HomePage';
import WorkshopsListPage from './pages/WorkshopsListPage';
import { Routes, Route } from 'react-router-dom';

// {
//   title: "Workshops App",
//   subtitle: "Find workshops nearby"
// }

interface IAppProps {
  title: string,
  subtitle: string
}

const App = ( props : IAppProps ) => {
  console.log( props );

  return (
    <div className="container my-5">
      <Routes>
        <Route
          element={<HomePage title={props.title} />}
          path="/"
        />
        <Route
          element={<WorkshopsListPage />} 
          path="/workshops"
        />
      </Routes>
    </div>
  );
};

// there can be only 1 default export in a module (file)
export default App;

// named export 
// export {
//   App
// }

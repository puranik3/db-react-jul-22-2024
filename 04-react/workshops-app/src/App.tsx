import HomePage from './pages/HomePage';
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
      <HomePage title={props.title} />
    </div>
  );
};

// there can be only 1 default export in a module (file)
export default App;

// named export 
// export {
//   App
// }

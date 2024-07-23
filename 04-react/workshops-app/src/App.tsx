// {
//   title: "Workshops App",
//   subtitle: "Find workshops nearby"
// }

interface Props {
  title: string,
  subtitle: string
}

const App = ( props : Props ) => {
  console.log( props );

  return (
    <div>
      <h1>{props.title}</h1>
      <hr />
      {/* add subttile in h2 */}
    </div>
  );
};

// there can be only 1 default export in a module (file)
export default App;

// named export 
// export {
//   App
// }

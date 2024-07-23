import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';

// defult export can be imported with any name
import Application from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Application
      title="Workshops Application"
      subtitle="Find workshops nearby"
    />

  </React.StrictMode>
)

// root.render(
//   <React.StrictMode>
//     <Application
//       title="Workshops App"
//       subtitle="Find workshops nearby"
//     />
//     <Application title="GMail" subtitle="All your email safe abd secure" />
//     <Application title="Teams" subtitle="Chat, conference and share files" />
//   </React.StrictMode>
// )

// const el = <div>Hello <strong>React</strong></div>

// root.render(
//   <div>
//     Hello <strong>React</strong>
//   </div>
// );
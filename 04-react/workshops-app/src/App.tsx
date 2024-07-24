import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import WorkshopsListPage from "./pages/WorkshopsListPage";
import WorkshopDetailsPage from "./pages/WorkshopDetailsPage";

// {
//   title: "Workshops App",
//   subtitle: "Find workshops nearby"
// }

interface IAppProps {
    title: string;
    subtitle: string;
}

const App = (props: IAppProps) => {
    console.log(props);

    return (
        <>
            <Menu />

            <div className="container my-5">
                <Routes>
                    <Route
                        element={<HomePage title={props.title} />}
                        path="/"
                    />
                    <Route element={<WorkshopsListPage />} path="/workshops" />
                    <Route
                        element={<WorkshopDetailsPage />}
                        path="/workshops/:id"
                    />
                </Routes>
            </div>
        </>
    );
};

// there can be only 1 default export in a module (file)
export default App;

// named export
// export {
//   App
// }

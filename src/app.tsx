import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/styles/app.scss";

const App = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
    );
};

export default App;

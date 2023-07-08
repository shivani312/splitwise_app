import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/styles/app.scss";
import Group from "./features/expenseCard/container/groupContainer";
import Expense from "./features/expenseCard/container/expenseContainer";

const App = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Group />} />
            <Route path='/expense' element={<Expense/>}/>
        </Routes>
    );
};

export default App;

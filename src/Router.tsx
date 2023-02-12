import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/indext";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} />
        </Routes>
    )
}
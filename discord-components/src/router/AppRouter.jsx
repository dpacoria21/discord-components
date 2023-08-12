import { Route, Routes } from "react-router-dom"
import { LeftSidebarPage } from "../pages/LeftSidebarPage"
import { RightSidebarPage } from "../pages/RightSidebarPage"
import { ModalDisplayPage } from "../pages/ModalDisplayPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/left-sidebar" element={<LeftSidebarPage />}/>
            <Route path="/right-sidebar" element={<RightSidebarPage />}/>
            <Route path="/main-display" element={<ModalDisplayPage />}/>
        </Routes>
    )
}
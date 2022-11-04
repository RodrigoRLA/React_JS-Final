import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home/index_home";
import { NotFound } from "../Pages/NotFound/index_not_found";
import { Produtos } from "../Pages/Produtos/index_produtos";

export const Root = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";
import { About } from "../Pages/Produtos";

export const Root = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quemsomos/:nome" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
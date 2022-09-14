import React from "react";
import MainMessage from "./components/Main/MainMessage";
import Main from "./components/Main/Main";
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';

export default function Home(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>

                <Route path="/:messageId" element={<MainMessage />} />
            </Routes>
        </BrowserRouter>
    )
}
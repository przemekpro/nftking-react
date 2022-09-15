import React from "react";
import Header from "./pages/Header"
import Hero from "./pages/Hero";
import Trending from "./pages/Trending";
import TopList from "./pages/TopList";
import PopularList from "./pages/PopularList"
import FollowingList from "./pages/FollowingList"
import Newsletter from "./pages/Newsletter";
import Footer from "./pages/Footer";

import { ContextProvider } from "./Context";


import {Routes, Route} from "react-router-dom"

export default function App() {

    return(
        <div className="page-wrapper">
            <Header />
            <Hero />
            <Trending />
            <TopList />
            <ContextProvider>
                <Routes>
                    <Route exact path="/" element={<PopularList />}></Route>
                    <Route path="/following" element={<FollowingList />}></Route>
                </Routes>
            </ContextProvider>
            <Newsletter />
            <Footer />
        </div>
    )
}
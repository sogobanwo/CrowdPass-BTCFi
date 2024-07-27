import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { configureWeb3Modal } from "./connection";
import useGetENSByAddress from "./Functions/useGetEnsByAddress";
import LandingPage from "../src/pages/static/landing-page"
import Dashboard from "../src/pages/dashboard/dashboard"
import Events from "../src/pages/dashboard/events"
import EventDetails from "../src/pages/dashboard/event-details"
import CreateEvent from "../src/pages/dashboard/create-event"
import Tickets from "./pages/dashboard/tickets";
import Poap from "./pages/dashboard/poap";


const App = () => {
  configureWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  const { loading, data } = useGetENSByAddress();
  return (
      <Routes>
        <Route
          path="/"
          element={isConnected ? <Navigate to="/dashboard" /> : <LandingPage />}
        />
        <Route
          path="/dashboard"
          element={isConnected ? <Dashboard /> : <Navigate to="/" />  }
        />
        <Route
          path="/events"
          element={isConnected ?  <Events /> : <Navigate to="/" />} 
        />
        <Route
          path="/events/:id"
          element={isConnected ?  <EventDetails /> : <Navigate to="/" />} 
        />
        <Route
          path="/create-event"
          element={isConnected ?  <CreateEvent /> : <Navigate to="/" />} 
        />
        <Route
          path="/tickets"
          element={isConnected ?  <Tickets /> : <Navigate to="/" />} 
        />
        <Route
          path="/poap"
          element={isConnected ?  <Poap /> : <Navigate to="/" />} 
        />
      </Routes>
  );
};

export default App;

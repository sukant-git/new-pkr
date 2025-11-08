import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import AboutPkr from "./pages/AboutPkr";
import Admissions from "./pages/Admissions";
import Departments from "./pages/Departments";
import Research from "./pages/Research";
import CampusLife from "./pages/CampusLife";
import Resources from "./pages/Resources";
import Alumni from "./pages/Alumni";
import Gallery from "./pages/Gallery";
import Iqac from "./pages/Iqac";
import Payment from "./pages/Payment";
import Layout from "./components/Layout";
import Login from "./components2/Login";
import { useState } from "react";
import Dashboard from './components2/Dashboard1';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  const handleLogin = (userData: { name: string; role: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/Index" />} />
            <Route element={<Layout />}>
              <Route path="/Index" element={<Index />} />
              <Route path="/About" element={<AboutPkr />} />
              <Route path="/Admissions" element={<Admissions />} />
              <Route path="/Departments" element={<Departments />} />
              <Route path="/Research" element={<Research />} />
              <Route path="/Campus-Life" element={<CampusLife />} />
              <Route path="/Resources" element={<Resources />} />
              <Route path="/Alumni" element={<Alumni />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Iqac" element={<Iqac />} />
            </Route>
              <Route path="/payment" element={<Payment />} />
              <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
              <Route path="/dashboard/*" element={isLoggedIn ? <Dashboard user={user!} onLogout={handleLogout} /> : <Navigate to="/login" />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

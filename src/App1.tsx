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
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPkr />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/research" element={<Research />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/iqac" element={<Iqac />} />
            </Route>
              <Route path="/payment" element={<Payment />} />
              <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
              <Route path="/*" element={isLoggedIn ? <Dashboard user={user!} onLogout={handleLogout} /> : <Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
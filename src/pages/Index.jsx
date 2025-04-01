import Dashboard from "@/layouts/Dashboard";
import { Header } from "@/layouts/Header";
import { Sidebar } from "@/layouts/Sidebar";
import React from "react";

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-100">
        <Header />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 md:pb-6">
          <div className="max-w-7xl mx-auto ">
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;

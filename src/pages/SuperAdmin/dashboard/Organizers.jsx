import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Input, Button, Modal, Form, message, Pagination } from 'antd';
import { FaCheck, FaTimes, FaEye, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Organizers = () => {
return (
    <div className="app">
      <Sidebar />
      <section id="content">
        <Navbar />
        <main className="p-6 flex justify-center items-center min-h-[80vh]">
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-12 shadow-inner text-center max-w-lg">
            <h2 className="text-3xl font-bold text-gray-700 animate-pulse">
              🚧 Organizer Coming Soon 🚧
            </h2>
            <p className="text-gray-500 mt-4">
              We’re preparing powerful tools for tournament and event organizers.  
              <br />Stay tuned for seamless scheduling, registrations, and management features!
            </p>
          </div>
        </main>
      </section>
    </div>
  );
};


export default Organizers;
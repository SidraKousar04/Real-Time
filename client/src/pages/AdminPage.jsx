import React, { useState } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import ProjectForm from '../components/admin/ProjectForm';
import ProjectList from '../components/admin/ProjectList';
import ClientForm from '../components/admin/ClientForm';
import ClientList from '../components/admin/ClientList';
import ContactList from '../components/admin/ContactList';
import SubscriberList from '../components/admin/SubscriberList';

const AdminPage = () => {
  const [currentTab, setCurrentTab] = useState('Add Project');

  const renderTab = () => {
    switch (currentTab) {
      case 'Add Project':
        return <ProjectForm />;
      case 'View Projects':
        return <ProjectList />;
      case 'Add Client':
        return <ClientForm />;
      case 'View Clients':
        return <ClientList />;
      case 'Contacts':
        return <ContactList />;
      case 'Subscribers':
        return <SubscriberList />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <AdminSidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="flex-1 p-6">{renderTab()}</div>
    </div>
  );
};

export default AdminPage;

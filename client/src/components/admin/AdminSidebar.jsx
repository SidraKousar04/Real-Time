import React from 'react';

const AdminSidebar = ({ currentTab, setCurrentTab }) => {
  const tabs = ['Add Project', 'View Projects', 'Add Client', 'View Clients', 'Contacts', 'Subscribers'];

  return (
    <div className="bg-gray-100 w-64 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-3">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`cursor-pointer px-3 py-2 rounded hover:bg-blue-100 ${
              currentTab === tab ? 'bg-blue-200 font-semibold' : ''
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;

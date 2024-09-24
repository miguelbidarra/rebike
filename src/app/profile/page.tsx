"use client";

import React from "react";
import { signOut } from 'next-auth/react';

const Profile = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-gray-100">
      <div className="w-full max-w-5xl flex bg-white rounded-lg shadow-lg">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white shadow-lg p-6 border-r border-secondary">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-primary">Profile</h2>
            <p className="text-sm text-gray-600">Manage your profile settings</p>
          </div>
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="#profile"
                  className="block text-gray-700 font-medium hover:text-indigo-500"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#basic-info"
                  className="block text-gray-700 font-medium hover:text-indigo-500"
                >
                  Basic Info
                </a>
              </li>
              <li>
                <button
                  onClick={() => signOut()}
                  className="block text-gray-700 font-medium hover:text-indigo-500"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-primary">Account Settings</h1>

            {/* Name and Email (non-editable) */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value="John Doe"
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value="john.doe@example.com"
                  readOnly
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full bg-gray-100"
                />
              </div>
            </div>

            {/* Delete Account Button */}
            <div className="mt-8">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg">
                Delete Account
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
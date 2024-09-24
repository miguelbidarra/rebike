"use client";

import React, { useState, useEffect } from "react";

interface Bicycle {
  id: string;
  name: string;
  image: string;
  gears: string;
  wheelSize: string;
  frameSize: string;
}

const Admin = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    gears: "",
    wheelSize: "",
    frameSize: "",
  });

  const [bicycles, setBicycles] = useState<Bicycle[]>([]);
  const [editingBicycle, setEditingBicycle] = useState<Bicycle | null>(null);

  useEffect(() => {
    async function fetchBicycles() {
      const response = await fetch("/api/bicycle");
      const data: Bicycle[] = await response.json();
      setBicycles(data);
    }
    fetchBicycles();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, placeholder } = e.target;
    if (!formData[name as keyof typeof formData]) {
      setFormData({
        ...formData,
        [name]: placeholder,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/bicycle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      alert("Bicycle added successfully!");
      setFormData({
        name: "",
        image: "",
        gears: "",
        wheelSize: "",
        frameSize: "",
      });
      // Refresh the list of bicycles
      const response = await fetch("/api/bicycle");
      const data: Bicycle[] = await response.json();
      setBicycles(data);
    } catch (error) {
      console.error("Error adding bicycle:", error);
      alert("Failed to add bicycle.");
    }
  };

  const handleEdit = (bicycle: Bicycle) => {
    setEditingBicycle(bicycle);
    setFormData(bicycle);
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(`/api/bicycle`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      alert("Bicycle updated successfully!");
      setEditingBicycle(null);
      setFormData({
        name: "",
        image: "",
        gears: "",
        wheelSize: "",
        frameSize: "",
      });
      // Refresh the list of bicycles
      const response = await fetch("/api/bicycle");
      const data: Bicycle[] = await response.json();
      setBicycles(data);
    } catch (error) {
      console.error("Error updating bicycle:", error);
      alert("Failed to update bicycle.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/bicycle`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      alert("Bicycle deleted successfully!");
      // Refresh the list of bicycles
      const response = await fetch("/api/bicycle");
      const data: Bicycle[] = await response.json();
      setBicycles(data);
    } catch (error) {
      console.error("Error deleting bicycle:", error);
      alert("Failed to delete bicycle.");
    }
  };

  const handleCancel = () => {
    setEditingBicycle(null);
    setFormData({
      name: "",
      image: "",
      gears: "",
      wheelSize: "",
      frameSize: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-row items-start p-4">
      <form
        onSubmit={editingBicycle ? handleUpdate : handleSubmit}
        className="w-full max-w-md p-8 rounded-lg border border-secondary mb-8 mr-4"
      >
        <h1 className="text-primary font-bold text-4xl mb-4 text-center">
          {editingBicycle ? "Edit Bicycle" : "Add a New Bicycle"}
        </h1>

        <label htmlFor="name" className="text-black mb-2 block text-sm">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={handleFocus}
          className="p-3 rounded block mb-2 bg-white text-black w-full"
          placeholder="Blue Mountain"
          required
        />

        <label htmlFor="image" className="text-black mb-2 block text-sm">
          Image URL:
        </label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          onFocus={handleFocus}
          className="p-3 rounded block mb-2 bg-white text-black w-full"
          placeholder="/bike-placeholder.jpg?height=400&width=400"
          required
        />

        <label htmlFor="gears" className="text-black mb-2 block text-sm">
          Gears:
        </label>
        <input
          type="text"
          name="gears"
          value={formData.gears}
          onChange={handleChange}
          onFocus={handleFocus}
          className="p-3 rounded block mb-2 bg-white text-black w-full"
          placeholder="18-speed"
          required
        />

        <label htmlFor="wheelSize" className="text-black mb-2 block text-sm">
          Wheel Size:
        </label>
        <input
          type="text"
          name="wheelSize"
          value={formData.wheelSize}
          onChange={handleChange}
          onFocus={handleFocus}
          className="p-3 rounded block mb-2 bg-white text-black w-full"
          placeholder="26"
          required
        />

        <label htmlFor="frameSize" className="text-black mb-2 block text-sm">
          Frame Size:
        </label>
        <input
          type="text"
          name="frameSize"
          value={formData.frameSize}
          onChange={handleChange}
          onFocus={handleFocus}
          className="p-3 rounded block mb-2 bg-white text-black w-full"
          placeholder="18"
          required
        />

        <div className="flex justify-between">
          <button className="w-full bg-accent text-white p-3 rounded-lg mt-2 hover:bg-primary transition-colors">
            {editingBicycle ? "Update Bicycle" : "Add Bicycle"}
          </button>
          {editingBicycle && (
            <button
              type="button"
              onClick={handleCancel}
              className="w-full bg-gray-500 text-white p-3 rounded-lg mt-2 ml-2 hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="w-full max-w-4xl">
        <h2 className="text-primary font-bold text-3xl mb-4 text-center">
          Bicycles List
        </h2>
        <ul>
          {bicycles.map((bicycle) => (
            <li
              key={bicycle.id}
              className="mb-4 p-4 border border-secondary rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-bold">{bicycle.name}</h3>
                <p>Gears: {bicycle.gears}</p>
                <p>Wheel Size: {bicycle.wheelSize}</p>
                <p>Frame Size: {bicycle.frameSize}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(bicycle)}
                  className="bg-primary text-white p-2 rounded-lg mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(bicycle.id)}
                  className="bg-red-500 text-white p-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
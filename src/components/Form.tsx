"use client";
import { User } from "@/app/page";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import React, { EventHandler, useState } from "react";
//new value
interface FormProps {
  addNewUser: (user: User) => void;
}
const Form: React.FC<FormProps> = ({ addNewUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    image: null,
  });
  const [file, setFile] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(isModalOpen);
  };
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prevUser) => {
        return {
          ...prevUser,
          image: imageUrl,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Math.random().toString(36).substring(2, 8); // return 1f74e
    const newUser = { ...user, id: newId };
    addNewUser((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  return (
    <div className="w-[500px] h-[400px] bg-red-200 p-10 ml-[30%]">
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-400"
            onChange={handleNameChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="block mb-2">
            File:
          </label>
          <input
            type="file"
            id="file"
            name="file"
            required
            className="w-full rounded border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-400"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

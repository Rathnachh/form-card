"use client";
import { User } from "@/app/page";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import React, { EventHandler, useState } from "react";
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
    <div className="w-[500px] h-[500px] bg-red-200 p-10 ml-[30%]">
      {/* <div
        onClick={() => {
          toggleModal();
        }}
        className="w-10 h-10 bg-pink-200 rounded-full fixed"
      >
        <button className="flex justify-center items-center m-auto mt-2">
          &times;
        </button>
      </div> */}
      <form action="" className="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="py-2"
          type="text"
          id="name"
          name="name"
          onChange={handleNameChange}
        />
        <input className="py-2" type="file" onChange={handleFileChange} />
        <br />
        <input
          className="border-2 border-red-500 "
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Form;

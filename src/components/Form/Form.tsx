import React, { useState, ChangeEvent, FormEvent } from "react";
import { User } from "@/app/page";

interface FormProps {
  addNewUser: (user: User) => void;
}

const Form: React.FC<FormProps> = ({ addNewUser }) => {
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    image: null,
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prevUser) => ({
        ...prevUser,
        image: imageUrl,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newId = Math.random().toString(36).substring(2, 8);
    const newUser: User = { ...user, id: newId };
    addNewUser(newUser);
    setUser({
      id: "",
      name: "",
      image: null,
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
            value={user.name}
            onChange={handleNameChange}
            className="w-full rounded border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-400"
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
            onChange={handleFileChange}
            className="w-full rounded border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-400"
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

export { Form };

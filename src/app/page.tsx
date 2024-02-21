"use client";
import React, { useState } from "react";
import { CardList } from "@/components/Card"; 
import { Modal } from "@/components/modal";
import Form from "@/components/Form";
import { User } from "@/app/page"; // Import the User interface

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]); // Specify the type for the users state
  const [selectedCard, setSelectedCard] = useState<string>(""); // Specify the type for selectedCard

  const handleSelectCard = (id: string) => {
    setSelectedCard(id);
  };

  const handleDeleteCard = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
    setSelectedCard(""); // Deselect the card after deletion
  };

  const handleAddUser = (user: User) => { // Specify the type for the user argument
    setUsers([...users, user]);
  };

  return (
    <div>
      <CardList
        items={users}
        selectCard={selectedCard}
        onSelectCard={handleSelectCard}
        onDeleteCard={handleDeleteCard}
      />
      <Modal selectEdit={selectedCard} >
        <Form addNewUser={handleAddUser} />
      </Modal>
    </div>
  );
};

export default UserPage;

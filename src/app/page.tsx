"use client";
import React, { useState } from "react";
import { Modal } from "@/components";
import Form from "@/components/Form";
import Card from "@/components/Card";
export interface User {
  id: string;
  name: string;
  image: string;
}
export default function Home() {
  const [user, setUser] = useState<User[]>([]);
  const [onSelect, setOnSelect] = useState("");
  return (
    <div>
      <Card items={user} />
      <Modal selectEdit={onSelect}>
        <Form addNewUser={setUser}></Form>
      </Modal>
    </div>
  );
}

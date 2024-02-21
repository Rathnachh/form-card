import React from "react";
import { Card } from "./Card";
import { User } from "@/app/page";

interface CardListProps {
  items: User[];
  selectCard: string;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
  onDeleteCard: (id: string) => void; // Function to handle card deletion
}

const CardList: React.FC<CardListProps> = ({
    items,
    selectCard,
    onSelectCard,
    onDeleteCard,
  }: CardListProps) => {
    return (
      <div>
        {items.map((item) => (
          <Card
            id={item.id}
            name={item.username}
            key={item.id}
            image={item.profile}
            onSelectCard={onSelectCard}
            selectCard={selectCard}
            onDelete={() => onDeleteCard(item.id)} // Pass the ID argument here
          />
        ))}
      </div>
    );
  };

export { CardList };

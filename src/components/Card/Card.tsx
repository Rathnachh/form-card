import React from "react";
import Image from "next/image";
// import { User } from "@/app/page";

interface CardProps {
  id: string;
  name: string;
  image: string;
  selectCard: string;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  image,
  selectCard,
  onSelectCard,
  onDelete,
}: CardProps) => {
  return (
    <div>
      {
        <div key={id}>
          <div
            onClick={() => {
              // Unselect Card
              if (selectCard === id) {
                onSelectCard("");
              } else {
                // Select Card
                onSelectCard(id);
              }
            }}
            className={
              selectCard === id
                ? "flex justify-between items-start w-[620px] bg-gray-400 text-white m-auto mt-5 p-2 border border-[#d6c2e7] rounded-lg"
                : "flex justify-between items-start w-[620px] m-auto mt-5 p-2 border border-[#d6c2e7] rounded-lg hover:bg-gray-200"
            }
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg flex items-center mx-auto">
              <div className="w-1/3">
                <Image src={image} alt="next" width={100} height={100} />
              </div>
              <div className="w-2/3 px-3 py-4">
                <div className="flex justify-between items-center mb-2">
                  <h1 className="font-bold text-xl">{name}</h1>
                  <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(); // This line is causing the issue
                      }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M8.59094 7L13.0441 2.54687C13.2554 2.3359 13.3743 2.04962 13.3745 1.75099C13.3748 1.45237 13.2564 1.16587 13.0455 0.95453C12.8345 0.743185 12.5482 0.624305 12.2496 0.624041C11.951 0.623778 11.6645 0.742152 11.4531 0.953123L7 5.40625L2.54687 0.953123C2.33553 0.741779 2.04888 0.623047 1.75 0.623047C1.45111 0.623047 1.16447 0.741779 0.953123 0.953123C0.741779 1.16447 0.623047 1.45111 0.623047 1.75C0.623047 2.04888 0.741779 2.33553 0.953123 2.54687L5.40625 7L0.953123 11.4531C0.741779 11.6645 0.623047 11.9511 0.623047 12.25C0.623047 12.5489 0.741779 12.8355 0.953123 13.0469C1.16447 13.2582 1.45111 13.3769 1.75 13.3769C2.04888 13.3769 2.33553 13.2582 2.54687 13.0469L7 8.59375L11.4531 13.0469C11.6645 13.2582 11.9511 13.3769 12.25 13.3769C12.5489 13.3769 12.8355 13.2582 13.0469 13.0469C13.2582 12.8355 13.3769 12.5489 13.3769 12.25C13.3769 11.9511 13.2582 11.6645 13.0469 11.4531L8.59094 7Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export { Card };

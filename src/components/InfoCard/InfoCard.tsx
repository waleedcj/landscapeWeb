import React from "react";
import type { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  imageUrl: string;
  buttonText?: string; // Optional prop for button text
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  children,
  imageUrl,
  buttonText = "Learn More",
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 rounded-lg">
      <div className="md:hidden w-full">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg shadow-md w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:blur-sm z-0"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-between mb-4 md:mb-0">
        <div>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {children}
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="px-8 py-2 max-w-xs w-auto rounded-md bg-[#5F775D] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-800">
            {buttonText}
          </button>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
      <img
          src={imageUrl}
          alt={title}
          className="rounded-lg shadow-md w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 hover:blur-sm z-0"
        />
      </div>
    </div>
  );
};

export default InfoCard;

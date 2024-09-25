import React from "react";
import { FaHeart } from "react-icons/fa"; // Importing an icon for the favorite button

interface Bicycle {
  id: number;
  name: string;
  image: string;
  gears: number;
  wheelSize: number;
  frameSize: number;
}

interface BicycleModalProps {
  isOpen: boolean;
  onClose: () => void;
  bicycle: Bicycle | null;
}

const BicycleModal: React.FC<BicycleModalProps> = ({ isOpen, onClose, bicycle }) => {
  if (!isOpen || !bicycle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <section className="bg-white p-6 rounded-2xl max-w-2xl w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600">Close</button>
        </div>
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:h-auto h-64 rounded mb-4 overflow-hidden">
            <img
              alt={bicycle.name}
              className="w-full h-full object-cover object-center"
              src={bicycle.image}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {bicycle.name}
            </h1>
            <div className="leading-relaxed text-gray-600">
              <p><strong>Gears:</strong> {bicycle.gears}</p>
              <p><strong>Wheel Size:</strong> {bicycle.wheelSize} inches</p>
              <p><strong>Frame Size:</strong> {bicycle.frameSize} cm</p>
            </div>

            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>

            <div className="flex">
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Add to Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <FaHeart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BicycleModal;

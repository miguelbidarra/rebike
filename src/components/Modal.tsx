import React from "react";
import { FaComments, FaCalendarAlt } from "react-icons/fa"; // Import icons

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  bicycle: {
    name: string;
    image: string;
    gears: number;
    wheelSize: number;
    frameSize: number;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, bicycle }) => {
  if (!isOpen || !bicycle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <section className="bg-white p-6 rounded-2xl max-w-lg w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600">Close</button>
        </div>
        <div className="text-gray-600 body-font overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full h-64 overflow-hidden rounded mb-4">
                <img
                  alt={bicycle.name}
                  className="w-full h-full object-cover object-center"
                  src={bicycle.image}
                />
              </div>
              <div className="w-full">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {bicycle.name}
                </h1>
                <div className="flex my-4"></div>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Gears:</span>
                    <span className="text-base">{bicycle.gears}</span>
                  </div>
                </div>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Wheel Size:</span>
                    <span className="text-base">{bicycle.wheelSize}</span>
                  </div>
                </div>
                <div>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <span className="mr-3">Frame Size:</span>
                    <span className="text-base">{bicycle.frameSize}</span>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button className="flex mx-4 text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-dark rounded items-center">
                    <FaComments className="mr-2" /> Chat
                  </button>
                  <button className="flex mx-4 text-white bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-primary-dark rounded items-center">
                    <FaCalendarAlt className="mr-2" /> Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
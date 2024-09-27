import * as React from "react";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { FaComments, FaCalendarAlt } from "react-icons/fa";

interface Bicycle {
  id: number;
  name: string;
  image: string;
  gears: number;
  wheelSize: number;
  frameSize: number;
}

interface BicycleDrawerProps {
  bicycle: Bicycle | null;
  isOpen: boolean;
  onClose: () => void;
}

const ModalDrawer: React.FC<BicycleDrawerProps> = ({
  bicycle,
  isOpen,
  onClose,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      anchor="bottom"
      open={isOpen && isSmallScreen}
      onClose={onClose}
      PaperProps={{ style: { height: "auto", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" } }} // Adjust the height and add rounded corners
    >
      {bicycle && (
        <div className="">
          <div className="w-full">
            <div className="w-full h-64 overflow-hidden relative">
              <Image
                src={bicycle.image}
                alt={bicycle.name}
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">{bicycle.name}</h2>
            <p className="text-xl">Gears: {bicycle.gears}</p>
            <p className="text-xl">Wheel Size: {bicycle.wheelSize}</p>
            <p className="text-xl">Frame Size: {bicycle.frameSize}</p>
          </div>
          <div className="flex flex-col mt-4 space-y-4 relative bottom-4 w-full px-4">
            <button className="w-full text-white bg-primary border-0 py-4 focus:outline-none hover:bg-primary-dark rounded flex justify-center items-center text-lg">
              <FaComments className="mr-2" /> Chat
            </button>
            <button className="w-full text-white bg-accent border-0 py-4 focus:outline-none hover:bg-primary-dark rounded flex justify-center items-center text-lg">
              <FaCalendarAlt className="mr-2" /> Schedule
            </button>
          </div>
        </div>
      )}
    </Drawer>
  );
};

export default ModalDrawer;

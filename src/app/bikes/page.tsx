"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductModal from "@/components/ProductModal";
import ModalDrawer from "@/components/ModalDrawer";
import Image from 'next/image';
import { useMediaQuery, useTheme } from "@mui/material";

export default function Component() {
  interface Bicycle {
    id: number;
    name: string;
    image: string;
    gears: number;
    wheelSize: number;
    frameSize: number;
  }

  const [bicycles, setBicycles] = useState<Bicycle[]>([]);
  const [selectedBicycle, setSelectedBicycle] = useState<Bicycle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    async function fetchBicycles() {
      const response = await fetch("/api/bicycle");
      const data = await response.json();
      setBicycles(data);
    }
    fetchBicycles();
  }, []);

  const handleBicycleClick = (bicycle: Bicycle) => {
    setSelectedBicycle(bicycle);
    if (isSmallScreen) {
      setIsDrawerOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBicycle(null);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedBicycle(null);
  };

  return (
    <>
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        bicycle={selectedBicycle}
      />

      <ModalDrawer
        bicycle={selectedBicycle}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}

      />

      <div className="min-h-screen bg-background text-text">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-primary">
            Available bicycles
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bicycles.map((bicycle) => (
              <motion.div
                key={bicycle.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBicycleClick(bicycle)}
              >
                <div className="flex flex-col bg-background relative rounded-2xl border text-gray-900 shadow">
                  <div className="flex-grow p-6 pt-0">
                    <div className="w-full h-48 mb-4 rounded-2xl overflow-hidden">
                      <Image
                        src={bicycle.image}
                        alt={bicycle.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
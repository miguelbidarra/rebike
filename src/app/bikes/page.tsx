"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

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
  const [selectedBicycle, setselectedBicycle] = useState<Bicycle | null>(null);

  useEffect(() => {
    async function fetchBicycles() {
      const response = await fetch('/api/bicycle');
      const data = await response.json();
      setBicycles(data);
    }
    fetchBicycles();
  }, []);

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">Available bicycles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bicycles.map((bicycle) => (
            <Dialog key={bicycle.id}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setselectedBicycle(bicycle)}
                >
                  <Card className="flex flex-col bg-secondary relative rounded-2xl">
                    <CardContent className="flex-grow">
                      <div className="w-full h-48 mb-4 rounded-2xl overflow-hidden">
                        <Image
                          src={bicycle.image}
                          alt={bicycle.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-2xl"
                        />
                      </div>
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-primary text-center">{bicycle.name}</CardTitle>
                    </CardHeader>
                    <CardFooter />
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-background text-text rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-primary">{selectedBicycle?.name}</DialogTitle>
                  <DialogDescription>
                    <div className="w-full h-48 my-4 rounded-2xl overflow-hidden">
                      <Image
                        src={selectedBicycle?.image || '/default-image.jpg'}
                        alt={selectedBicycle?.name || 'Bicycle image'}
                        layout="responsive"
                        width={400}
                        height={400}
                        objectFit="cover"
                        className="rounded-2xl"
                      />
                    </div>
                    <p className="mb-2">
                      <strong>Gears:</strong> {selectedBicycle?.gears}
                    </p>
                    <p className="mb-2">
                      <strong>Wheel Size:</strong> {selectedBicycle?.wheelSize}
                    </p>
                    <p className="mb-2">
                      <strong>Frame Size:</strong> {selectedBicycle?.frameSize}
                    </p>
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex justify-between">
                  <Button className="bg-primary hover:bg-accent text-background">Schedule</Button>
                  <Button className="bg-primary hover:bg-accent text-background">Chat</Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
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

const puzzles = [
  {
    id: 1,
    name: "Cube Maze",
    image: "/maze-cube.jpg?height=200&width=200",
    edition: "September Edition",
    description: "A challenging 3D printed cube maze with intricate pathways.",
    difficulty: "Hard",
  },
  {
    id: 2,
    name: "Tetris Cube",
    image: "/tetris-cube.jpg?height=200&width=200",
    edition: "October Edition",
    description: "Interlock the gears to solve this mechanical marvel.",
    difficulty: "Medium",
  },
  {
    id: 3,
    name: "Cube Puzzle",
    image: "/cube-puzzle.jpg?height=200&width=200",
    edition: "November Edition",
    description: "Navigate a ball through a spherical 3D printed labyrinth.",
    difficulty: "Expert",
  },
  {
    id: 4,
    name: "Puzzle Box",
    image: "/placeholder.svg?height=200&width=200",
    edition: "December Edition",
    description: "A 3D printed box with multiple hidden compartments and mechanisms.",
    difficulty: "Hard",
  },
  {
    id: 5,
    name: "Fractal Puzzle",
    image: "/placeholder.svg?height=200&width=200",
    edition: "January Edition",
    description: "Assemble this mind-bending 3D printed fractal shape.",
    difficulty: "Expert",
  },
];

export default function Component() {
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 text-text">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-background">3D Printed Puzzles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {puzzles.map((puzzle) => (
            <Dialog key={puzzle.id}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPuzzle(puzzle)}
                >
                  <Card className="flex flex-col bg-secondary">
                    <CardHeader>
                      <CardTitle className="text-primary">{puzzle.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <img
                        src={puzzle.image}
                        alt={puzzle.name}
                        className="w-full h-48 object-cover mb-4 rounded-md"
                      />
                      <p className="text-lg text-accent">{puzzle.edition}</p>
                    </CardContent>
                    <CardFooter />
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-background text-text">
                <DialogHeader>
                  <DialogTitle className="text-primary">{selectedPuzzle?.name}</DialogTitle>
                  <DialogDescription>
                    <img
                      src={selectedPuzzle?.image}
                      alt={selectedPuzzle?.name}
                      className="w-full h-48 object-cover my-4 rounded-md"
                    />
                    <p className="mb-2">{selectedPuzzle?.description}</p>
                    <p className="mb-2">
                      <strong>Edition:</strong> {selectedPuzzle?.edition}
                    </p>
                    <p>
                      <strong>Difficulty:</strong> {selectedPuzzle?.difficulty}
                    </p>
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <Button className="w-full bg-primary hover:bg-accent text-background">Add to Cart</Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";
import { signOut } from 'next-auth/react';
import { useState } from 'react';

function PlaygroundPage() {
  // State for the game, you can expand this as needed
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to start the game
  const startGame = () => {
    setIsPlaying(true);
    // Additional logic to initialize the Tetris game can go here
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-700 flex flex-col justify-center items-center py-12">
      <h1 className="text-white text-5xl mb-6">Playground</h1>

      {/* Tetris Game Area */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl flex flex-col items-center p-4">
        <h2 className="text-2xl font-bold mb-4">Tetris Game</h2>
        {isPlaying ? (
          <div className="border-4 border-gray-300 w-full h-96 relative overflow-hidden">
            {/* Your Tetris game logic will go here */}
            <p className="absolute inset-0 flex items-center justify-center text-xl text-gray-700">
              Tetris Game Here
            </p>
          </div>
        ) : (
          <p className="text-gray-500 mb-4">Press "Start Game" to begin!</p>
        )}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          onClick={startGame}
        >
          Start Game
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => {/* Navigate to settings page */}}
        >
          Settings
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </section>
  );
}

export default PlaygroundPage;

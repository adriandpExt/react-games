import { useState, useEffect } from "react";
import { shuffle } from "lodash";

import Card from "./component/Card";
import Modal from "./component/Modal";

import { Pokemon } from "./utils";

const MemoryCard = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // Double the Pokemon array to create pairs
    const pairedPokemon = [...Pokemon, ...Pokemon];
    // Shuffle the paired Pokemon
    const shuffledPokemon = shuffle(pairedPokemon);
    // Create card objects with unique IDs
    const initialCards = shuffledPokemon.map((pokemon, index) => ({
      id: index,
      pokemon,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(initialCards);
  }, []);

  const handleCardClick = (index) => {
    // Do nothing if the card is already flipped or matched
    if (cards[index].isFlipped || cards[index].isMatched) return;

    // Flip the card
    const updatedCards = [...cards];
    updatedCards[index].isFlipped = true;
    setCards(updatedCards);

    // Check for a match
    if (flippedIndices.length === 1) {
      const firstIndex = flippedIndices[0];
      const secondIndex = index;

      if (cards[firstIndex].pokemon === cards[secondIndex].pokemon) {
        // Match found
        const updatedMatchedIndices = [
          ...matchedIndices,
          firstIndex,
          secondIndex,
        ];
        setMatchedIndices(updatedMatchedIndices);
      } else {
        // No match, flip back after a delay
        setTimeout(() => {
          const resetCards = [...updatedCards];
          resetCards[firstIndex].isFlipped = false;
          resetCards[secondIndex].isFlipped = false;
          setCards(resetCards);
        }, 500);
      }
      setFlippedIndices([]);
    } else {
      setFlippedIndices([index]);
    }
  };

  const handleClose = () => {
    // Reset all cards to their initial state
    const resetCards = cards.map((card) => ({
      ...card,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(resetCards);

    // Reset flipped and matched indices
    setFlippedIndices([]);
    setMatchedIndices([]);
    setOpenModal(false);
  };
  const isGameOver = matchedIndices.length === cards.length;

  return (
    <div className="h-screen p-3 space-y-10">
      <p className="text-center text-xl">Click the card to flip...</p>
      <div className="grid grid-cols-6 gap-4">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            pokemonName={card.pokemon}
            isFlipped={card.isFlipped || matchedIndices.includes(index)}
            onFlip={() => handleCardClick(index)}
          />
        ))}
        <Modal open={isGameOver && !openModal} onClose={handleClose} />
      </div>
    </div>
  );
};

export default MemoryCard;

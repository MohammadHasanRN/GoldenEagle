import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FlipCard, Text } from "@Components";
import { Box, useTheme } from "@Theme";
import { Cards, CardType } from "@Core";

export const MainScreen = () => {
    const { top } = useSafeAreaInsets();
    const theme = useTheme();
    const [cards, setCards] = useState<CardType[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);
    const [matches, setMatches] = useState(0);

    const generateCards = () => {
        const indices: number[] = [];
        while (indices.length < 10) {
            const idx = Math.floor(Math.random() * Cards.length);
            if (!indices.includes(idx)) {
                indices.push(idx);
            }
        }
        const selectedCards = indices.map(i => Cards[i]);
        const cardPairs = [...selectedCards, ...selectedCards];

        for (let i = cardPairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardPairs[i], cardPairs[j]] = [cardPairs[j], cardPairs[i]];
        }
        
        const cardsWithIds = cardPairs.map((card, index) => ({
            id: index,
            image: card,
            isFlipped: true,
            isMatched: false,
        }));
        
        setCards(cardsWithIds);
        setFlippedCards([]);
        setMoves(0);
        setMatches(0);

        setTimeout(() => {
            setCards(prevCards =>
                prevCards.map(c => ({ ...c, isFlipped: false }))
            );
        }, 3000);
    };

    const handleCardPress = (cardId: number) => {
        const card = cards.find(c => c.id === cardId);
        if (!card || card.isFlipped || card.isMatched || flippedCards.length >= 2) {
            return;
        }

        const newFlippedCards = [...flippedCards, cardId];
        setFlippedCards(newFlippedCards);

        setCards(prevCards => 
            prevCards.map(c => 
                c.id === cardId ? { ...c, isFlipped: true } : c
            )
        );

        if (newFlippedCards.length === 2) {
            setMoves(prev => prev + 1);
            
            const [firstCardId, secondCardId] = newFlippedCards;
            const firstCard = cards.find(c => c.id === firstCardId);
            const secondCard = cards.find(c => c.id === secondCardId);

            // Check if the cards match
            if (firstCard && secondCard && firstCard.image === secondCard.image) {
                setTimeout(() => {
                    setCards(prevCards => 
                        prevCards.map(c => 
                        c.id === firstCardId || c.id === secondCardId 
                            ? { ...c, isMatched: true }
                            : c
                        )
                    );
                    setMatches(prev => prev + 1);
                    setFlippedCards([]);
                }, 300);
            } else {
                setTimeout(() => {
                    setCards(prevCards => 
                        prevCards.map(c => 
                        c.id === firstCardId || c.id === secondCardId 
                            ? { ...c, isFlipped: false }
                            : c
                        )
                    );
                    setFlippedCards([]);
                }, 300);
            }
        }
    };

    useEffect(() => {
        generateCards();
    }, []);

    return (
        <Box flex={1} backgroundColor="LightGray" style={{paddingTop: top || theme.spacing.m}}>

            <Box flex={1} flexDirection="row" flexWrap="wrap" justifyContent="center" paddingTop="sm" gap="s">
                {cards.map((card) => (
                    <FlipCard
                        key={`card-${card.id}`}
                        cardId={card.id}
                        isFlipped={card.isFlipped}
                        isMatched={card.isMatched}
                        onPress={handleCardPress}
                        card={card.image}
                    />
                ))}
            </Box>
      </Box>
    );
};

import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "react-native-vector-icons/Feather";

import { FlipCard, Text, WinningModal } from "@Components";
import { Box, useTheme } from "@Theme";
import { Cards, CardType, IsIos, MainStackNavigationProps } from "@Core";
import { useEffects } from "@Store";
import { useSoundPlayer } from "@Hooks";

export const MainScreen: React.FC<MainStackNavigationProps<'Main'>> = ({route}) => {
    const theme = useTheme();
    const { top, bottom } = useSafeAreaInsets();

    const soundEnabled = useEffects(state => state.soundsEnabled);
    const setSoundEnabled = useEffects(state => state.setSoundsEnabled);

    const {playSound} = useSoundPlayer();

    const [level, setLevel] = useState(route.params.level);

    const [cards, setCards] = useState<CardType[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);
    const [matches, setMatches] = useState(0);

    const [winningModalVisible, setWinningModalVisible] = useState(false);

    const generateCards = (currentLevel: number) => {
        IsIos ? playSound('roundstart.wav') : playSound('roundstart.mp3'); 

        const indices: number[] = [];
        
        while (indices.length < currentLevel * 2) {
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
        }, currentLevel * 500);
    };

    const handleCardPress = (cardId: number) => {
        IsIos ? playSound('typing.wav') : playSound('typing.mp3'); 

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
                IsIos ? playSound('success.wav') : playSound('success.mp3'); 

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
                IsIos ? playSound('transition.wav') : playSound('transition.mp3'); 

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
        generateCards(level);
    }, []);

    const handleNewGame = async () => {
        setLevel(1);
        await AsyncStorage.setItem('CardsMemoryLevel', '1');
        generateCards(1);
    };

    useEffect(() => {
        if (matches === level * 2 && level < 5) {
            setMoves(0);
            setMatches(0);
            generateCards(level + 1);
            setLevel(level + 1);
            saveProgress(level + 1);
        } else if (matches === level * 2 && level === 5) {
            setWinningModalVisible(true);
            IsIos ? playSound('smallwin.wav') : playSound('smallwin.mp3'); 
        }
    }, [matches]);

    const saveProgress = async (levelToSave: number) => {
        await AsyncStorage.setItem('CardsMemoryLevel', levelToSave.toString());
    };

    return (
        <Box flex={1} backgroundColor="LightGray" style={{paddingBottom: bottom || theme.spacing.m}}>

            <WinningModal visible={winningModalVisible} onDismiss={() => {
                setWinningModalVisible(false);
                handleNewGame();
            }} />

            <Box  
                flexDirection="row" 
                justifyContent="space-between" 
                alignItems="center" 
                paddingHorizontal="lg" 
                paddingVertical="m"
                backgroundColor="Light"
                shadowColor="Dark"
                shadowOffset={{ width: 0, height: 2 }}
                shadowOpacity={0.1}
                shadowRadius={4}
                elevation={3}
                style={{paddingTop: top || theme.spacing.m}}
            >
                <Box>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>
                        Moves: {moves}
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                        Matches: {matches} / {level * 2}
                    </Text>
                </Box>
                <TouchableOpacity onPress={() => setSoundEnabled(!soundEnabled)}>
                    <Feather name={soundEnabled ? "volume-2" : "volume-x"} size={24} color="black" />
                </TouchableOpacity>
            </Box>

            <Box flex={1} justifyContent="center">
                <Box flexDirection="row" flexWrap="wrap" justifyContent="center" gap="s">
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

            <TouchableOpacity
                onPress={handleNewGame}
                style={{
                    backgroundColor: '#007AFF',
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    borderRadius: 8,
                    marginHorizontal: theme.spacing.sm,
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>New Game</Text>
            </TouchableOpacity>
      </Box>
    );
};

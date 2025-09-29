import React, { useState } from "react";

import { FlipCard } from "@Components";
import { Box } from "@Theme";

export const MainScreen = () => {
    const [card, setCard] = useState<{id: number, isFlipped: boolean, isMatched: boolean}>({id: 1, isFlipped: false, isMatched: false});
    const handleCardPress = () => {
        setCard({...card, isFlipped: !card.isFlipped});
    };

    return (
        <Box flex={1} alignItems="center" justifyContent="center">
            <FlipCard
              key={`card-${card.id}`}
              cardId={card.id}
              card={require('@Assets/images/cards/2_of_hearts.png')}
              isFlipped={card.isFlipped}
              isMatched={card.isMatched}
              onPress={handleCardPress}
            />
        </Box>
    );
};
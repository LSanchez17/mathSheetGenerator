import { DifficultyTier, difficultyRanges } from "./enums";

export const getTier = (difficulty: DifficultyTier) => {
    return difficultyRanges[difficulty];
}
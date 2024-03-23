export enum Operators {
    plus = '+',
    minus = '-',
    multiply = '*',
    divide = '/',
    modulo = '%'
}

export enum DifficultyTier {
    eTier = 'eTier',
    dTier = 'dTier',
    cTier = 'cTier',
    bTier = 'bTier',
    aTier = 'aTier',
    sTier = 'sTier',
    sPlusTier = 'sPlusTier'
}

export const difficultyRanges = {
    eTier: [9, 15],
    dTier: [25, 50],
    cTier: [100, 100],
    bTier: [300, 200],
    aTier: [525, 500],
    sTier: [1333, 3000],
    sPlusTier: [9999, 9999]
};
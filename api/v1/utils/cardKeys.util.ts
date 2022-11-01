export interface CardKeyValidation {
    success?: string;
    error?: string;
}
export const validateCardKeys = (cardKeys: string[]): CardKeyValidation => {
    let cardKeysHash: { [key: string]: string } = {};

    for (let i = 0; i < cardKeys.length; i++) {
        if (cardKeysHash[cardKeys[i]]) {
            return {
                error: "card keys must be unique"
            }
        }

        cardKeysHash[cardKeys[i]] = cardKeys[i]
    }

    return {
        success: "card keys are valid"
    }
}
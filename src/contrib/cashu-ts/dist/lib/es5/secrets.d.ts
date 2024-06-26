export declare const generateNewMnemonic: () => string;
export declare const deriveSeedFromMnemonic: (mnemonic: string) => Uint8Array;
export declare const deriveSecret: (seed: Uint8Array, keysetId: string, counter: number) => Uint8Array;
export declare const deriveBlindingFactor: (seed: Uint8Array, keysetId: string, counter: number) => Uint8Array;

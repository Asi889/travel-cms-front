export type Redefine<T, K> = Omit<T, keyof K> & K;

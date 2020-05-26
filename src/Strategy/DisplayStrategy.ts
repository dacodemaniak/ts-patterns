export interface DisplayStrategy<T> {
    display(concrete: T): string;
}
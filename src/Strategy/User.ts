import { DisplayStrategy } from "./DisplayStrategy";
import { FullNameStrategy } from "./FullNameStrategy";

export class User {
    public lastname: string;
    public firstname: string;
    public title: string;

    private displayStrategy: DisplayStrategy<User>;

    public constructor() {
        this.displayStrategy = new FullNameStrategy();
    }

    public setStrategy(strategy: DisplayStrategy<User>) {
        this.displayStrategy = strategy;
    }

    public display(): string {
        return this.displayStrategy.display(this);
    }
}
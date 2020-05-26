import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class Basket implements Subject {
    private observers: Observer[] = [];
    private products: string[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
    }
    detach(observer: Observer): void {
        this.observers.splice(this.observers.indexOf(observer));
    }
    notify(): void {
        this.observers.forEach((observer: Observer) => {
            observer.update(this);
        });
    }

    public add(product: string): Basket {
        this.products.push(product);

        // Please notify observers
        this.notify();

        return this;
    }
    
    public size(): number {
        return this.products.length;
    }
}
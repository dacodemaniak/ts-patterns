import { Basket } from "./Basket";
import { Observer } from "./Observer";

export class Stock implements Observer {
    update(subject: Basket): void {
        console.log(`Basket was updated with : ${subject.size()} elements.`)
    }
    
}
import { AvionFactory } from "./Factory/AvionFactory";
import { Documentation } from "./Factory/Documentation";
import { Signer } from "./Decorator/Signer";
import { SignerAuth } from "./Decorator/SignerAuth";
import { Basket } from "./Observer/Basket";
import { Stock } from "./Observer/Stock";
import { Observer } from "./Observer/Observer";
import { User } from "./Strategy/User";
import { FullNameInversedStrategy } from "./Strategy/FullNameInversedStrategy";

/**
 * Entry point of the application
 * @author IDea Factory (jean-luc.a@ideafactory.fr) - May 2020
 * @version 1.0.0
 */
export class Main {
    public constructor() {
        const basket: Basket = new Basket();
        const stockObserver: Stock = new Stock();

        basket.attach(stockObserver);

        basket.add("Orange");
        basket.add("Banane");

        basket.detach(stockObserver);

        basket.add("Pommes");

        // Finally...
        console.log(`Finally, basket contains : ${basket.size()} elements`);

        const user: User = new User();
        user.lastname = "Bond";
        user.firstname = "James";
        user.title = "Sir";

        console.log(user.display());

        user.setStrategy(new FullNameInversedStrategy());
        console.log(user.display());
        
    }
}

const app: Main = new Main();
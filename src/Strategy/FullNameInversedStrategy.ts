import { DisplayStrategy } from "./DisplayStrategy";
import { User } from "./User";

export class FullNameInversedStrategy implements DisplayStrategy<User> {
    display(concrete: User): string {
        return `${concrete.title} ${concrete.firstname} ${concrete.lastname}` 
    }
    
}
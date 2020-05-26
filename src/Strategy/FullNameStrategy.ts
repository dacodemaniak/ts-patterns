import { DisplayStrategy } from "./DisplayStrategy";
import { User } from "./User";

export class FullNameStrategy implements DisplayStrategy<User> {
    display(concrete: User): string {
        return `${concrete.title} ${concrete.lastname} ${concrete.firstname}` 
    }
    
}
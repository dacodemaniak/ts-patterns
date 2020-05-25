import { Documentation } from "./Documentation";

export class Automobile extends Documentation {
    public setRef(ref: string) {
        this.ref = super.setRef(ref) + "-auto";
    }
}
import { Documentation } from "./Documentation";

export class Avion extends Documentation {
    public setRef(ref: string) {
        const reference = ref + "-avion";
        super.setRef(reference);
    }
}
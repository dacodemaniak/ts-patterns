import { Emargement } from "./Emargement";

export class EmargementDecorator implements Emargement {
    private emargement: Emargement;

    public constructor(emargement: Emargement) {
        this.emargement = emargement;
    }

    public emarger(): string {
        return this.emargement.emarger();
    }
}
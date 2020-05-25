import { Emargement } from "./Emargement";

export class Signer implements Emargement {
    public emarger(): string {
        return "Signature simple";
    }
}
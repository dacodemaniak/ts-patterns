import { DocumentFactory } from "./DocumentFactory";
import { Avion } from "./Avion";
import { Documentation } from "./Documentation";

export class AvionFactory extends DocumentFactory {
    public createDocumentation(): DocumentFactory {
        this.documentation = new Avion();
        return this;
    }
}
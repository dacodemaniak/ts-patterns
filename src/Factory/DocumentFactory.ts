import { Documentation } from "./Documentation";

export abstract class DocumentFactory {
    protected documentation: Documentation;

    public get(): Documentation {
        return this.documentation;
    }

    public abstract createDocumentation(): DocumentFactory;
}
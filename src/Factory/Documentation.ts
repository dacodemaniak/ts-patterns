export abstract class Documentation {
    protected ref: string;

    public get reference(): string {
        return this.ref;
    }

    public setRef(ref: string): void {
        this.ref = ref;
    }
}
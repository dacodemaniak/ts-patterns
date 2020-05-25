import { EmargementDecorator } from "./EmargementDecorator"

export class SignerAuth extends EmargementDecorator {
    public emarger(): string {
        let signature: string = super.emarger() + this.authentifier();
        return signature;
    }

    // My specific logic here
    private authentifier() {
        return "1234";
    }
}
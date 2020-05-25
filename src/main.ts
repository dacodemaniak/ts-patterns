import { AvionFactory } from "./Factory/AvionFactory";
import { Documentation } from "./Factory/Documentation";
import { Signer } from "./Decorator/Signer";
import { SignerAuth } from "./Decorator/SignerAuth";

/**
 * Entry point of the application
 * @author IDea Factory (jean-luc.a@ideafactory.fr) - May 2020
 * @version 1.0.0
 */
export class Main {
    public constructor() {
        const avionFactory: AvionFactory = new AvionFactory();
        // Récupération de l'instance d'un document Avion
        const avion: Documentation = avionFactory.createDocumentation().get();
        avion.setRef("1234");
        console.log("Référence : " + avion.reference);

        // Utiliser un décorateur
        const emargement: Signer = new Signer();
        console.log(emargement.emarger());

        const signWithAuth: SignerAuth = new SignerAuth(emargement);
        console.log(signWithAuth.emarger());
    }
}

const app: Main = new Main();
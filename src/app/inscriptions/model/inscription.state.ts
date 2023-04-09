import { Inscription } from "./inscription.model";

export interface InscriptionState {
    loading: boolean;
    inscription: Inscription[];
}
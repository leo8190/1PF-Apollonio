import { User } from "../../users/model/user.model";

export interface Sesion {
    sesionActiva: boolean;
    usuarioActivo?: User;
}
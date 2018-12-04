import { Injectable } from "@angular/core";

@Injectable()
export class RolesService {
    public ROLE_SUPER: string = "Super";
    public ROLE_ADMINISTRADOR: string = "Administrador";
    public ROLE_CONTROLADOR: string = "Controlador";
    public ROLE_COLABORADOR: string = "Colaborador";
}
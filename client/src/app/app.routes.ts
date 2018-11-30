import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AcessoComponent } from './acesso/acesso.component';
import { ApplicationRolesComponent } from './application-roles/application-roles.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuário/cadastrar-usuário.component';
import { AddApplicationRoleComponent } from './add-application-role/add-application-role.component';
import { ApplicationUsersComponent } from './application-users/application-users.component';
import { EditarUsuarioComponent } from './editar-usuário/editar-usuário.component';
import { ProfileComponent } from './profile/profile.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ReunioesComponent } from './reunioes/reunioes.component';
import { AddReunioComponent } from './add-reunio/add-reunio.component';
import { EditReunioComponent } from './edit-reunio/edit-reunio.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { AddParticipanteComponent } from './add-participante/add-participante.component';
import { EditParticipanteComponent } from './edit-participante/edit-participante.component';
import { AddPassagemComponent } from './add-passagem/add-passagem.component';
import { ReembolsosDespesasComponent } from './reembolsos-despesas/reembolsos-despesas.component';
import { AddReembolsosDespesaComponent } from './add-reembolsos-despesa/add-reembolsos-despesa.component';
import { EditReembolsosDespesaComponent } from './edit-reembolsos-despesa/edit-reembolsos-despesa.component';
import { ItensReembolsosDespesasComponent } from './itens-reembolsos-despesas/itens-reembolsos-despesas.component';
import { AddItensReembolsosDespesaComponent } from './add-itens-reembolsos-despesa/add-itens-reembolsos-despesa.component';
import { EditItensReembolsosDespesaComponent } from './edit-itens-reembolsos-despesa/edit-itens-reembolsos-despesa.component';
import { ComprovantesComponent } from './comprovantes/comprovantes.component';
import { AddComprovanteComponent } from './add-comprovante/add-comprovante.component';
import { EditComprovanteComponent } from './edit-comprovante/edit-comprovante.component';
import { EditPendenciasComponent } from './edit-pendencias/edit-pendencias.component';
import { RelatorioReembolsoComponent } from './relatorio-reembolso/relatorio-reembolso.component';

import { SecurityService } from './security.service';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: '/reunioes', pathMatch: 'full' },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'acesso',
        data: {
          roles: ['Everybody'],
        },
        component: AcessoComponent
      },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'application-roles',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ApplicationRolesComponent
      },
      {
        path: 'cadastrar-usuário',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: CadastrarUsuarioComponent
      },
      {
        path: 'add-application-role',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddApplicationRoleComponent
      },
      {
        path: 'application-users',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ApplicationUsersComponent
      },
      {
        path: 'editar-usuário/:Id',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditarUsuarioComponent
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ProfileComponent
      },
      {
        path: 'unauthorized',
        data: {
          roles: ['Everybody'],
        },
        component: UnauthorizedComponent
      },
      {
        path: 'reunioes',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Super'],
        },
        component: ReunioesComponent
      },
      {
        path: 'add-reunio',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Super', 'Authenticated'],
        },
        component: AddReunioComponent
      },
      {
        path: 'edit-reunio/:Reuniao',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Super', 'Authenticated'],
        },
        component: EditReunioComponent
      },
      {
        path: 'participantes',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Super'],
        },
        component: ParticipantesComponent
      },
      {
        path: 'add-participante',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Super', 'Authenticated'],
        },
        component: AddParticipanteComponent
      },
      {
        path: 'edit-participante/:Participante1',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Super', 'Authenticated'],
        },
        component: EditParticipanteComponent
      },
      {
        path: 'add-passagem',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Colaborador', 'Super'],
        },
        component: AddPassagemComponent
      },
      {
        path: 'reembolsos-despesas',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Colaborador', 'Controlador', 'Super'],
        },
        component: ReembolsosDespesasComponent
      },
      {
        path: 'add-reembolsos-despesa',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Colaborador', 'Controlador', 'Super'],
        },
        component: AddReembolsosDespesaComponent
      },
      {
        path: 'edit-reembolsos-despesa/:ReembolsoDespesa',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Colaborador', 'Controlador', 'Super'],
        },
        component: EditReembolsosDespesaComponent
      },
      {
        path: 'itens-reembolsos-despesas',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Colaborador', 'Controlador', 'Super'],
        },
        component: ItensReembolsosDespesasComponent
      },
      {
        path: 'add-itens-reembolsos-despesa/:ReembolsoDespesa',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Colaborador', 'Controlador', 'Super'],
        },
        component: AddItensReembolsosDespesaComponent
      },
      {
        path: 'edit-itens-reembolsos-despesa/:ItemReembolsoDespesa',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrador', 'Colaborador', 'Controlador', 'Super'],
        },
        component: EditItensReembolsosDespesaComponent
      },
      {
        path: 'comprovantes',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ComprovantesComponent
      },
      {
        path: 'add-comprovante/:ItemReembolsoDespesa',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddComprovanteComponent
      },
      {
        path: 'edit-comprovante/:Comprovante1',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditComprovanteComponent
      },
      {
        path: 'edit-pendencias/:ReembolsoDespesa',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditPendenciasComponent
      },
      {
        path: 'relatorio-reembolso/:Reuniao/:ReembolsoDespesa',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: RelatorioReembolsoComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

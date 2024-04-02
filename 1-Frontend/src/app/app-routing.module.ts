import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { LoginComponent } from './login/login.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InicioComponent } from './inicio/inicio.component';
import { loginGuard } from './guards/login.guard';
//import { RegisterGuard } from './guards/register.guard';
import { EdicionComponent } from './edicion/edicion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'lista',  component: ListProductComponent},
  { path: 'edicion', component: EdicionComponent,
    canActivate: [loginGuard]},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'añadir', component: AddEditProductComponent  },
  { path: 'añadir/:id', component: AddEditProductComponent},
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'usuarios', component: UsuariosComponent,
    canActivate: [loginGuard]},
  { path: "registrar", component: RegistrarseComponent},
  { path: "**", component: ListProductComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

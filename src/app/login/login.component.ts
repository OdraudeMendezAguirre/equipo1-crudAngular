import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Entity/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  usuario:Usuario=new Usuario();
  constructor(private usuarioService:UsuarioService){}

  public login(){
    this.usuarioService.login(this.usuario).subscribe(resp=>{
      if(resp){
        window.alert(resp)
      }else{
        window.alert("Usuario no encontrado")
      }
    })
  }

}

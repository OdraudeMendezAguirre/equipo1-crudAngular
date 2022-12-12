import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Entity/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  usuarios:Usuario[]=[];
  usuario:Usuario=new Usuario();
  url="";
  constructor(private usuarioService:UsuarioService){}
  ngOnInit(): void {
    this.usuarioService.searchAll().subscribe(lista=>{
      this.usuarios=lista;
    })
  }

  public login(){
    for (let index = 0; index < this.usuarios.length; index++) {
      if(this.usuarios[index].correo== this.usuario.correo){
        if(this.usuarios[index].contrasena== this.usuario.contrasena){
          this.url="http://localhost:4200/crud"
        }else{
          window.alert("Contraseña incorrecta")
        }
      }
    }

  }

}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Usuario } from './Entity/usuario';

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService{

    private api="http://localhost:8085/usr";
    private cid= "";

    constructor(private http: HttpClient) { }

    setId(id:number){
      this.cid="http://localhost:8085/usr/"+id
    }

    public guardar(persona:any):Observable<any>{
        return this.http.post(this.api,persona)
    }

    public searchAll():Observable<any>{
      return this.http.get(this.api)
    }

    public searchById():Observable<any>{
      return this.http.get(this.cid)
    }

    public actualizar(usuario:any):Observable<any>{
      return this.http.put(this.api,usuario)
    }

    public eliminar():Observable<any>{
      return this.http.delete(this.cid)
    }

    public login(usuario:any):Observable<any>{
      return this.http.get(this.api,usuario)
    }

  }

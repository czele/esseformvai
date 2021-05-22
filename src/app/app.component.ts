import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testeformulario';
  nomeDoBotao= "Vai!"

  usuarioForm = this.formBuilder.group({
    nome: "",
    sobrenome: "",
    cpf: ""

  });
  constructor(
    private formBuilder: FormBuilder
  ){}

  onSubmit (){
    console.log(this.usuarioForm.value)
  }
}

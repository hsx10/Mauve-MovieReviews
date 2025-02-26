import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	standalone: false,
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent {
	form: FormGroup;
	message: string = "";

	constructor(private _formBuilder: FormBuilder) {
		this.form = _formBuilder.group({
			username: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required]
		})
	}


	validate(): void {
		//Formulaire envoyé
		console.log(this.form.value);

		//Il reste à tester si les données rentrées correspondent à celles d'un utilisateur dans la db 
		//Mettre un message selon le résultat



		//Vide le formulaire
		this.form.reset();
	}
}

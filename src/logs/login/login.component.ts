import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  submitted = false;
  mensaje: string = '';
  router: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    router: Router
  ) {
    this.router = router;
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.registerForm = this.fb.group({
      newUsuario: ['', Validators.required],
      newEmail: ['', [Validators.required, Validators.email]],
      newPassword: ['', Validators.required],
    });
  }

  onLoginSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      // Simula el inicio de sesión
      localStorage.setItem('isAuthenticated', 'true'); // Marca al usuario como autenticado
      this.router.navigate(['/listado']); // Redirige a la página principal
    } else {
      this.mensaje = 'Por favor completa todos los campos correctamente.';
    }
  }

  onRegisterSubmit(): void {
    this.submitted = true;
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      // Envía el userData a tu backend para guardarlo en la base de datos
      this.http.post('URL_DE_TU_BACKEND', userData).subscribe(
        (response) => {
          this.mensaje = 'Registro exitoso.';
          // Aquí puedes redirigir o limpiar el formulario si es necesario
        },
        (error) => {
          this.mensaje = 'Error al registrar el usuario.';
        }
      );
    } else {
      this.mensaje = 'Por favor completa todos los campos correctamente.';
    }
  }
}

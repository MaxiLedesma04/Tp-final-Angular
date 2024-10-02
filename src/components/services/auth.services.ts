import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Asegúrate de que esté disponible en toda la aplicación
})
export class AuthService {
  private isLoggedIn = false;

  login(usuario: string, email: string) {
    // Lógica para iniciar sesión
    this.isLoggedIn = true; // Ajusta según la lógica de autenticación real
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}

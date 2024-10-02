import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ListadoComponent } from '../components/listado/listado.component';
import { AniadirComponent } from '../components/aniadir/aniadir.component';
import { LoginComponent } from '../logs/login/login.component';
import { AuthService } from '../components/services/auth.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    ListadoComponent,
    AniadirComponent,
    LoginComponent,
  ],
  providers: [AuthService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-heroes';
  isAuthenticated: boolean;

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router'; // Importer provideRouter
import { routes } from './app/app.routes'; // Vos routes doivent être définies ici

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule), // Ajout de FormsModule
    provideRouter(routes), // Ajout du routeur avec vos routes
  ],
}).catch(err => console.error(err));

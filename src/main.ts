import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatListModule } from '@angular/material/list';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { provideRouter } from '@angular/router';
// import { importProvidersFrom } from '@angular/core';
// import { routes } from './app/app-routing.module';
// import { AuthService } from './app/guards/auth.service';
// import { CanDeactivateGuard } from './app/guards/can-deactivate.service';
// import { ApiService } from './app/api.service';

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(
//       BrowserAnimationsModule,
//       HttpClientModule,
//       MatSnackBarModule,
//       MatButtonModule,
//       MatListModule,
//       MatIconModule,
//       MatToolbarModule
//     ),
//     provideRouter(routes),
//     AuthService,
//     CanDeactivateGuard,
//     ApiService
//   ]
// }).catch(err => console.error(err));

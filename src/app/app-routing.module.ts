import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../@vex/layout/layout.component';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';

const childrenRoutes: VexRoutes = [
  {
    path: '',
    // redirectTo: 'dashboards/analytics',
    redirectTo: 'apps/personas',
    pathMatch: 'full',
  },
  {
    path: 'dashboards/analytics',
    loadChildren: () => import('./pages/dashboards/dashboard-analytics/dashboard-analytics.module').then(m => m.DashboardAnalyticsModule),
  },
  {
    path: 'apps',
    children: [
      {
        path: 'personas',
        loadChildren: () => import('./pages/apps/persona/persona.module').then(m => m.PersonaModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/apps/profile/profile.module').then(m => m.ProfileModule)
      },

      {
        path: 'terapia',
        loadChildren: () => import('./pages/apps/terapia/terapia.module').then(m => m.TerapiaModule),
      },
    ]
  },
  {
    path: 'pages',
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./pages/pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'error-404',
        loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
      },
      {
        path: 'error-500',
        loadChildren: () => import('./pages/pages/errors/error-500/error-500.module').then(m => m.Error500Module)
      }
    ]
  },
  {
    path: 'ui',
    children: [
      {
        path: 'components',
        loadChildren: () => import('./pages/ui/components/components.module').then(m => m.ComponentsModule),
      },
      {
        path: 'forms/form-elements',
        loadChildren: () => import('./pages/ui/forms/form-elements/form-elements.module').then(m => m.FormElementsModule),
        data: {
          containerEnabled: true
        }
      },
      {
        path: 'forms/form-wizard',
        loadChildren: () => import('./pages/ui/forms/form-wizard/form-wizard.module').then(m => m.FormWizardModule),
        data: {
          containerEnabled: true
        }
      },
      {
        path: 'icons',
        loadChildren: () => import('./pages/ui/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'page-layouts',
        loadChildren: () => import('./pages/ui/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule),
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
  }
];

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/pages/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/pages/auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: childrenRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

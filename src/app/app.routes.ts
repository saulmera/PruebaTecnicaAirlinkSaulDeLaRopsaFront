import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'productos',
        loadComponent: () => import('./pages/productos/productos.component').then(m => m.ProductosComponent)
    },

    {
        path: 'piezas',
        loadComponent: () => import('./pages/piezas/piezas.component').then(m => m.PiezasComponent)
    }
];

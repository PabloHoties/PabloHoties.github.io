import { Routes } from '@angular/router';
import { PortfolioLayoutShell } from './layout/shells/portfolio-layout-shell/portfolio-layout-shell';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

export const routes: Routes = [
    {
        path: '',
        component: PortfolioLayoutShell,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'about',
                component: About
            }
        ]
    }
];

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalendarioComponent } from "./calendario/calendario.component";
import { ProgramacionComponent } from "./programacion/programacion.component";


const appRoutes: Routes = [
    { path: 'calendario', component: CalendarioComponent },
    { path: 'programacion', component: ProgramacionComponent }
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
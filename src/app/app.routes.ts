import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    {
    path: '', //Vazio, pois é a página principal. + Componente Principal
    component:HomeComponent,
    pathMatch:'full' 
    },
    {
    path: 'content/:id', //Caminho + Componente Principal
    component: ContentComponent
    }
];

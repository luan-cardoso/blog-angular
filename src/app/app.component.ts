import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



import { BigCardComponent } from './components/big-card/big-card.component'
import { MainTitleComponent } from './components/main-title/main-title.component'
import { MenuBarComponent } from './components/menu-bar/menu-bar.component'
import { SmallCardComponent } from './components/small-card/small-card.component'
import { HomeComponent } from "./pages/home/home.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        BigCardComponent,
        MainTitleComponent,
        MenuBarComponent,
        SmallCardComponent,
        HomeComponent
    ]
})
export class AppComponent {
}

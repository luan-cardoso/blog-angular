import { Component } from '@angular/core';
import { MainTitleComponent } from "../../components/main-title/main-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MainTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent]
})
export class HomeComponent {

}

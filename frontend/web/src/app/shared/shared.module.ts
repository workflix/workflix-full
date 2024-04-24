import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { FilterPipe } from './filter.pipe';  



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    HeaderComponent,
    SidebarComponent,
    CarritoComponent,
    FilterPipe
    
    
  ],

  exports: [
    FooterComponent,
    NavComponent,
    HeaderComponent,
    SidebarComponent,
    FilterPipe
    
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
   
  ]
})
export class SharedModule { }

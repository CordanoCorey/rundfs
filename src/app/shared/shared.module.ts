import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { CommonModule, DialogModule, DatepickerModule, FileUploadModule, GridModule } from '@caiu/common';
import { FormsModule } from '@caiu/forms';

import { ContainerComponent } from './container/container.component';
import { FiltersComponent } from './filters/filters.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [
    // AutocompleteModule,
    CommonModule,
    DatepickerModule,
    DialogModule,
    FileUploadModule,
    FlexLayoutModule,
    FormsModule,
    GridModule,
    RouterModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  declarations: [
    ContainerComponent,
    FiltersComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PanelComponent,
    SearchComponent,
    SidebarComponent,
    TileComponent,
  ],
  exports: [
    DatepickerModule,
    DialogModule,
    CommonModule,
    FileUploadModule,
    FlexLayoutModule,
    FormsModule,
    GridModule,
    RouterModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    ContainerComponent,
    FiltersComponent,
    FooterComponent,
    HeaderComponent,
    PanelComponent,
    SearchComponent,
    SidebarComponent,
    TileComponent,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashComponent } from './components/dash/dash.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { TotalValueRenderer } from './components/data-grid/table.component';
import { TabLayoutComponent } from './layout/tab-layout/tab-layout.component';
import { TabsComponent } from './layout/tabs/tabs.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BuyerinfoComponent } from './components/buyerinfo/buyerinfo.component';
import { BuyerdashComponent } from './components/buyerdash/buyerdash.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { TreechartComponent } from './components/treechart/treechart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    DataGridComponent,
    TabLayoutComponent,
    TabsComponent,
    FooterComponent,
    BuyerinfoComponent,
    BuyerdashComponent,
    FileuploadComponent,
    TotalValueRenderer,
    TreechartComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    NgxSpinnerModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts'), }),  // or import('./path-to-my-custom-echarts')

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

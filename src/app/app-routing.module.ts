import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './components/dash/dash.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { LoginComponent } from './components/login/login.component';
import { BuyerdashComponent } from './components/buyerdash/buyerdash.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { TreechartComponent } from './components/treechart/treechart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashComponent },
  { path: 'data', component: DataGridComponent },
  { path: 'buyerdash', component: BuyerdashComponent },
  { path: 'fileupload', component: FileuploadComponent },
  { path: 'tree', component: TreechartComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

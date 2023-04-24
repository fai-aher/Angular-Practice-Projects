import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeriesComponent } from './listar-series/listar-series.component';



@NgModule({
  declarations: [
    ListarSeriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListarSeriesComponent
  ]
})
export class SeriesModule { }
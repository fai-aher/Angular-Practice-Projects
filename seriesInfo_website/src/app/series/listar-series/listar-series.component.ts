import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';


@Component({
  selector: 'app-listar-series',
  templateUrl: './listar-series.component.html',
  styleUrls: ['./listar-series.component.css']
})
export class ListarSeriesComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
      this.calculateAverageSeasons();
    });
  }

  // Function to calculate average seasons.
  calculateAverageSeasons(): void {
    let totalSeasons = 0;
    for (const serie of this.series) {
      totalSeasons += serie.seasons;
    }
    this.averageSeasons = totalSeasons / this.series.length;
  }
}

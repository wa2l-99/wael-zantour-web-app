import { Component, HostListener, OnInit } from '@angular/core';
import { ImageService } from '../../services/image-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public imageUrl: string = '';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageUrl = this.imageService.getResponsiveImage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.imageUrl = this.imageService.getResponsiveImage();
  }
}

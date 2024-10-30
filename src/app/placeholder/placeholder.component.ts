import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css'
})
export class PlaceholderComponent {
  dimensions!: any;
  width!: string;
  height!: string;
  customText!: string;
  textColor!: string;
  backgroundColor!: string;
  fontSize!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.dimensions = params.get('dimensions');

      if (this.dimensions) { // do regex for 'x'
        const [width, height] = this.dimensions.split('x').map(Number);
        let customText = `${width}x${height}`; // Default text
        let textColor = '#000000'; // Default text color
        let backgroundColor = '#cccccc'; // Default background color

        const minDimension = Math.min(width, height);
        const fontSize = minDimension * 0.1; // Font size as 5% of the smaller dimension

        this.width = String(width);
        this.height = height;
        this.customText = customText;
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
        this.fontSize = fontSize.toString();
        console.log("🚀 ~ PlaceholderComponent ~ ngOnInit ~ this.backgroundColor:", this.backgroundColor)
      }
    })
  }
}

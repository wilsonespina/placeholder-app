import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface ISetAttributes {
  dimensions: string;
}

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css',
})
export class PlaceholderComponent {
  dimensions!: any;
  width!: string;
  height!: string;
  customText!: string;
  textColor!: string;
  backgroundColor!: string;
  fontSize!: string;
  colorId!: string | null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log("🚀 ~ PlaceholderComponent ~ this.route.paramMap.subscribe ~ params:", params)
      this.dimensions = params.get('dimensions');

      // go to 404 if not valid URL
      this.setAttributes({ dimensions: this.dimensions });
    });

    console.log('>>>>> paramMap >>>>',this.route.snapshot.paramMap.get('dimensions'))

    this.colorId = this.route.snapshot.queryParamMap.get('color') ?? null;
    console.log("🚀 ~ PlaceholderComponent ~ ngOnInit ~ colorId:", this.colorId)
  }

  setAttributes({ dimensions }: ISetAttributes) {
    if (dimensions && this.isValidDimension(dimensions)) {
      // do regex for 'x'
      const [width, height] = dimensions.split('x').map(Number);
      let customText = `${width}x${height}`; // Default text
      let textColor = '#000000'; // Default text color
      let backgroundColor = '#cccccc'; // Default background color

      const minDimension = Math.min(width, height);
      const fontSize = minDimension * 0.1; // Font size as 5% of the smaller dimension

      this.width = String(width);
      this.height = String(height);
      this.customText = customText;
      this.textColor = textColor;
      this.backgroundColor = backgroundColor;
      this.fontSize = fontSize.toString();
    }
  }

  isValidDimension(dimension?: string): boolean {
    if (!dimension) return false;
    // '300x400'
    // ['300', 'x', '400']
    const splitDimension = dimension.split(/(x)/);

    return Boolean(
      dimension?.includes('x') &&
        splitDimension.length === 3 &&
        this.isNumber(splitDimension[0]) &&
        this.isNumber(splitDimension[2])
    );
  }

  isNumber(string: string): boolean {
    return !isNaN(Number(string));
  }
}

// https://github.dev/bick/placeholderjs

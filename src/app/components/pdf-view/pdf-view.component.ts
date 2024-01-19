import { Component, Input } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DataService } from 'src/app/services/data.service';

@Component({
  standalone: true,
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css'],
  imports: [
    NgxExtendedPdfViewerModule
  ]
})
export class PdfViewComponent {

  @Input() public src: string = "";
  @Input() public height: string = "";
  //@Input() public navigation: string = 'arrows';

  constructor(public conectarServicio:DataService) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
    // this.makePDF();
    //console.log("Pdf a cargar: " + this.src);
  }

  public page = 2;
  public pageLabel!: string;
}

export let pdfDefaultOptions = {
  externalLinkTarget: 0,
  renderer: 'canvas',
  assetsFolder: 'assets',
};

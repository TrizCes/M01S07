import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  public title = 'Galeria de imagens';
  @Input() public pictures: string[] = [];

  public atualPicture = 0;

  public toFirstPic(){
    this.atualPicture = this.firstPic();
  }

  public toLastPic(){
    this.atualPicture = this.lastPic();
  }


  public firstPic(){
    return 0;
  }

  public lastPic(){
    return (this.pictures.length - 1);
  }

  public nextPic(){
    this.atualPicture++;
  }

  public previousPic(){
    this.atualPicture--;
  }

}

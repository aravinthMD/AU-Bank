import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file-preview-dialog-box',
  templateUrl: './file-preview-dialog-box.component.html',
  styleUrls: ['./file-preview-dialog-box.component.scss']
})
export class FilePreviewDialogBoxComponent implements OnInit {

  stat:number = 404;
  previewUrl:any;
  validUrl:boolean;
  urlToFileSanitized:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private sanitizer:DomSanitizer) {
    console.log(data.previewData)
   }

   ngOnInit(): void {
    this.doesFileExist(this.data.previewData);
    // console.log("URL:"+this.previewUrl);
  }

  doesFileExist(urlToFile) {
    // this.urlToFileSanitized = this.sanitizer.bypassSecurityTrustResourceUrl(urlToFile);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', urlToFile, false);
    xhr.send();
     
    if (xhr.status === this.stat) {
      this.validUrl = false;
      console.log("false");
      this.previewUrl = null;
    } else {
      this.validUrl = true;
      console.log(this.urlToFileSanitized);
      this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urlToFile)
    }
}

}

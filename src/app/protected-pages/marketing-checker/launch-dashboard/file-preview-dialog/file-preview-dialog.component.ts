import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';

@Component({
  selector: 'app-file-preview-dialog',
  templateUrl: './file-preview-dialog.component.html',
  styleUrls: ['./file-preview-dialog.component.scss']
})
export class FilePreviewDialogComponent implements OnInit {

  stat:number = 404;
  previewUrl:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.previewData)
   }

   url : any ;


  ngOnInit(): void {
    this.previewUrl = this.doesFileExist(this.data.previewData);
  }

  doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', urlToFile, false);
    xhr.send();
     
    if (xhr.status === this.stat) {
      console.log("false");
        return null;
    } else {
        return urlToFile;
    }
}

}

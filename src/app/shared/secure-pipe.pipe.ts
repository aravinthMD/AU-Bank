import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
@Pipe({
  name: 'securePipe'
})
export class SecurePipePipe implements PipeTransform {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer){
  }

  transform(url): Observable<SafeUrl> {
      return this.http
      .get(url, { responseType: 'blob' })
      .pipe(map(val => this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(val))));
   
  }



}

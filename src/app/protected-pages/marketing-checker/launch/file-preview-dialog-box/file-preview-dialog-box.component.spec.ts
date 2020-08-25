import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePreviewDialogBoxComponent } from './file-preview-dialog-box.component';

describe('FilePreviewDialogBoxComponent', () => {
  let component: FilePreviewDialogBoxComponent;
  let fixture: ComponentFixture<FilePreviewDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilePreviewDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePreviewDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

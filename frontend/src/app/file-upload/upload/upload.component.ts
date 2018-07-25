import { Component } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  constructor(private uploadService: UploadService) { }
  onFilesAdded(fileInput) {
    const files: FileList = fileInput.target.files;
    if (files.length <= 0)
      return;


    for (const key in files) {
      if (!isNaN(parseInt(key))) {
        this.uploadService.addToQueue(files[key]);
      }
    }

    alert("New files queued!");
  }
}

import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

  editedContent!: string;

  constructor(public dialogRef: MatDialogRef<EditPostComponent>) { }

  saveEditedContent() {
    this.dialogRef.close(this.editedContent);
  }

}

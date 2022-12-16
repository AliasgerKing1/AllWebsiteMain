import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { JobPostService } from 'src/app/services/job-post.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent {
  jobPostForm : FormGroup;
  checkForm:boolean = false;
constructor(private _fb : FormBuilder, private _router :Router, private _job_post : JobPostService) {
      this.jobPostForm = this._fb.group({
          title: ["", Validators.required],
          category: ["", Validators.required],
          comp_name: ["", Validators.required],
          comp_email: ["", [Validators.required, Validators.email]],
          comp_website: [""],
          location: ["", Validators.required],
          type: ["", Validators.required],
          tags: ["", Validators.required],
          salary: [null, Validators.required],
          experience: ["", Validators.required],
          description: ["", Validators.required],
      })
}
submit() {
  if(this.jobPostForm.invalid) {
    this.checkForm = true;
    return;
  }
  this._job_post.addJob(this.jobPostForm.value).subscribe(result=> {
    this._router.navigate(["/recruiter"]);
  })
}
}

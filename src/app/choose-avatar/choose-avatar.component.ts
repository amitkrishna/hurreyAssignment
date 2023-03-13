import { Component, OnInit } from '@angular/core';
import { NavigationServiceService } from '../navigation-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-avatar',
  templateUrl: './choose-avatar.component.html',
  styleUrls: ['./choose-avatar.component.scss']
})
export class ChooseAvatarComponent implements OnInit {

  contactFormIcon: FormGroup;
  name: any;
  iconMapper = new Map([
    [1, "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dad32148-d723-47bf-9984-c36559221972/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230312T160844Z&X-Amz-Expires=86400&X-Amz-Signature=9c8bb8f59989fd648539894dfdc6bb731736b110e09c83e41f7595c3699f417c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"],
    [2, "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5dec79b9-59fe-4996-90c3-317d21fb6e72/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230312T160910Z&X-Amz-Expires=86400&X-Amz-Signature=b2f466986e2099855f43bf12cbc2dc5871e484adde929653999e992d9ecd9662&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"],
    [3, "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/61b941f0-08a3-4df8-aead-34fd68515d6d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230312T160953Z&X-Amz-Expires=86400&X-Amz-Signature=cb5344f1650b8b701facf6df543be018e33910216159960bc7f09ee2f5b03846&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"],
    [4, "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/53b1ae74-f79d-47bc-bcfc-8b682371296f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230312T161018Z&X-Amz-Expires=86400&X-Amz-Signature=d6bd069886c16fd0b68cc93ef72e3e6051f010034b905acf4198ac54f904824e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"]
  ]);

  constructor(private location: Location, 
    private dataService: NavigationServiceService,
    private _router: Router) { 
    // const data = this.dataService.getDataStream();
    this.contactFormIcon = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  }

  ngOnInit(): void {
  }

  backClicked(): void{
    this.location.back();
  }

  get f(){
    return this.contactFormIcon.controls;
  }

  onSubmit(){
    this._router.navigateByUrl('/chooseActivity');
  }

  getUserName(){
    console.log(this.dataService.getDataStreamName());
    this.dataService.getDataStreamName().subscribe((val) =>{
        this.name = val;
    });
    console.log(this.name);
    return this.name;
  }
}

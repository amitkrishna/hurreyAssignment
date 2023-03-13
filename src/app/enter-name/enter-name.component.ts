import { Component, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from  '@angular/forms';
import { NavigationServiceService } from '../navigation-service.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-name',
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.scss']
})
export class EnterNameComponent implements OnInit {

  // @Input() name:string = "";
  // @Output() passName = new EventEmitter();
  serviceData: string = "";
  
  contactForm: FormGroup;
  constructor(private location: Location, 
    private dataService: NavigationServiceService,
    private _router: Router) { 
    // this.createContactForm();
    this.contactForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  const data = this.dataService.getDataStreamName();
  data.subscribe({
    next:(data: string) =>{
      this.serviceData = data;
    },
    error: (err: any) =>{
      console.log(err);
    }
  })
  }

  ngOnInit(): void {
  }

  createContactForm(){
  }

  backClicked(): void{
    this.location.back();
  }
  onSubmit($event: any){
    console.log("Click Event"+  this.contactForm.controls['name'].value );
    this.dataService.putDataStreamName(this.contactForm.controls['name'].value);
    this._router.navigateByUrl('/chooseAvatar');
  }

  get f(){
    return this.contactForm.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  user: any ={};
  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl('Mark', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
      // mobile: new FormControl(null, [Validators.maxLength(10)])
    }, this.passwordMatchingValidator);
    // this.createRegistrationForm();
  }
  // createRegistrationForm(){
  //   this.registrationForm = this.fb.group({
  //     userName: [null, Validators.required],
  //     email: [null, [Validators.required, Validators.email]],
  //     password: [null, [Validators.required, Validators.minLength(8)]],
  //     confirmPassword: [null, [Validators.required]],
  //     mobile: [null, [Validators.required, Validators.maxLength(10)]]
  //   },{validatiors: this.passwordMatchingValidator});
  // }
  passwordMatchingValidator(fg: FormGroup): Validators{
    return fg.get('password').value == fg.get('confirmPassword').value? null : {notmatched: true};
  }
  //Getter methods for all form controls
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
  onSubmit(){
    console.log(this.registrationForm.value);
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.addUser(this.user);
    // this.registrationForm.reset();
  }
  
  addUser(user){
    let users = [];
    if (localStorage.getItem('Users'))
    {
      users = JSON.parse(localStorage.getItem('Users'));
      console.log(users);
      console.log(user);
      users = [user, ...users];
    }
    else{
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });

    // Check Value Change Syntax
    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    );

    // Check Value Change Syntax
    // this.signupForm.statusChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // set value syntax
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      }, 
      'gender': 'male',
      'hobbies': []
    })

    // patch value syntax
    this.signupForm.patchValue({
      'userData': {
        'username': 'Hanna',
      }
    })
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onAddHobby2() {
    const group = new FormGroup({
      "key": new FormControl('key', Validators.required),
      "value": new FormControl('value', Validators.required),
    });

    (<FormArray>this.signupForm.get('hobbies')).push(group);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return{'nameIsForbidden': true};
    }
    return null;
  }

  // Async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}

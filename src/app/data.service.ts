import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  data: Data = { userId: 0, email: "", password: "", firstName: "", lastName: "", gender: "", phoneno: "", dob: "", address: "", city: "", pincode: 0 }

}

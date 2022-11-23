import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Registration-Form';
  states=["option 1","option 2"];
  country!:string;
  date1!:Date;
  dd!:string;
  time!:string;
  utc!:string;
  dt() { 
    setInterval(() => {
      this.date1 = new Date()
    }, 100)
    this.dd="Date:";
    this.time="Time:";
  }
  setState(){
    
    if(this.country=="India")
      {
        this.utc='UTC+4';
      this.states=['Andaman and Nicobar Islands',
      'Andhra Pradesh',
      'Arunachal Pradesh',
      'Assam',
      'Bihar',
      'Chandigarh',
      'Chhattisgarh',
      'Dadra and Nagar Haveli and Daman and Diu',
      'Goa',
      'Gujurat',
      'Haryana',
      'Himachal Pradesh',
      'Jammu and Kashmir',
      'Jharkhand',
      'Karnataka',
      'Kerela',
      'Ladakh',
      'Lakshadweep',
      'Madhya Pradesh',
      'Maharashtra',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'NCT of Delhi',
      'Odisha',
      'Puducherry',
      'Punjab',
      'Rajasthan',
      'Sikkim',
      'Tamil Nadu',
      'Telangana',
      'Tripura',
      'Uttarakhand',
      'Uttar Pradesh',
      'West Bengal'];
      
    }
  else if(this.country=="US")
    this.states=['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia',
    'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
    'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',
    'North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
    'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  else if(this.country=="Europe")
    this.states=['Albania',
      'Andorra',
      'Armenia',
      'Austria',
      'Azerbaijan',
      'Belarus',
      'Belgium',
      'Bosnia and Herzegovina',
      'Bulgaria',
      'Croatia',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Estonia',
      'Finland',
      'France',
      'Georgia',
      'Germany',
      'Greece',
      'Hungary',
      'Iceland',
      'Ireland',
      'Italy',
      'Kosovo',
      'Latvia',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macedonia',
      'Malta',
      'Moldova',
      'Monaco',
      'Montenegro',
      'The Netherlands',
      'Norway',
      'Poland',
      'Portugal',
      'Romania',
      'Russia',
      'San Marino',
      'Serbia',
      'Slovakia',
      'Slovenia',
      'Spain',
      'Sweden',
      'Switzerland',
      'Turkey',
      'Ukraine',
      'United Kingdom',
      'Vatican City'];
    else
      this.states=["--Select Country--"];
  }
  
  popAlert(){
    alert("Registered successfully")
  }
}

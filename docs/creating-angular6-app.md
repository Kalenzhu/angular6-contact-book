
## Creating Thumbnail component

Let's create our very 1st component `thumbnail` which is how we will show the thumbnail view of a contact.

```ssh
ng generate component thumbnail
```

After this lets use Material Card for designing our contact thumbnail.

> Ref This is the reference link for [Material Card](https://material.angular.io/components/card/examples)

- Import  `MatCardModule` and add in `imports` and `exports` array in material.ts file

- Copy the Mat Card tags from [Material Card Doc](https://material.angular.io/components/card/overview) and paste it in your thumbnail.component.html file.

- Now remove everything from app.component.html file and add `<app.thumbnail></app.thumbnail>` in the file.

- Now when you run the angular app you will see thumbnail being rendered on your browser at `localhost:4200`


I have made few more components like MatListModule and MatSlideToggleModule to make thumbnail more attractive.
and changes some styles using SCSS file, so below the code changes in my file

material.ts
```
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  imports: [MatCardModule, MatListModule, MatIconModule, MatSlideToggleModule],
  exports: [MatCardModule, MatListModule, MatIconModule, MatSlideToggleModule],
})
export class MaterialModule {
}

```


thumbnail.component.html
```
<mat-card class="thumbnail-card">

  <mat-card-header>
      <img mat-card-avatar
           src="http://res.cloudinary.com/varun-cloud/image/upload/ar_1:1,b_rgb:262c35,bo_5px_solid_rgb:ff0000,c_fill,g_auto,q_auto:good,r_max,w_212/v1530391238/angular6-contact-book/user-avatar/PHOTO_20180409_074244.png">
    <mat-card-title>Varun</mat-card-title>
    <mat-card-subtitle>Sukheja</mat-card-subtitle>
  </mat-card-header>

  <img mat-card-image class="profile-image"
       src="http://res.cloudinary.com/varun-cloud/image/upload/c_scale,q_auto:good,w_251/v1530391246/angular6-contact-book/user-profile/1892-8x12_1.jpg"
       alt="Varun Sukheja">
  <mat-card-content>
    <!--Status: active-->

    <mat-list class="details-list">
      <h3 mat-subheader class="header-details">Details</h3>
      <mat-list-item>
        <mat-icon mat-list-icon>call</mat-icon>
        <h1 mat-line>9876543210</h1>
      </mat-list-item>

      <mat-list-item>
        <mat-icon mat-list-icon>email</mat-icon>
        <h5 mat-line>sukheja.varun@gmail.com</h5>
      </mat-list-item>

      <mat-list-item>
        <mat-icon mat-list-icon>location_on</mat-icon>
        <h5 mat-line>India</h5>
      </mat-list-item>
    </mat-list>

  </mat-card-content>

  <mat-card-actions>
    <button mat-button>EDIT</button>
    <button mat-button>DELETE</button>
    <mat-slide-toggle class="toggle-activate">Activate</mat-slide-toggle>
  </mat-card-actions>
</mat-card>

```

thumbnail.component.scss
```
.thumbnail-card {
  max-width: 250px;

  .profile-image {
    max-height: 250px;
    width: auto;
    margin-left: auto;
  }
  .details-list {
    margin-left: -30px;

    .header-details {
      margin-top: -25px;
      height: 35px;
    }
    .mat-list-item {
      height: 25px;
    }
  }
  .toggle-activate {
    float: right;
  }
}

```


## Creating contact class

- add a new file `contact.class.ts` file in src/app folder.
- Now add syntax to make this file a class and name it as `Contact`
  ```
  export class Contact {}
  ```
- Now we will add the fields that are present in our contact model and this is how our file looks
  ```
  export class Contact {
    id: number;
    firstName: string;
    lastName?: string;
    phoneNumber: number;
    email?: string;
    isActive: boolean;
    country: string;
    countryCode: string;
  }

  ```

Q. Why did we create this `contact.class.ts` file.

Ans. We want to achieve **Strong typing** in our app hence we have created this class file where we declared variables beforehand.


Q. Why have we used `?` in some of the properties and not in others.

Ans. `?` marks a parameter as optional. As in our Contact model we have kept lastName and email as optional with no default value
hence it is important to mark them as optional in Angular so that we do not get error if some of the Contact objects does not contains these properties.


## creating contacts mock data

- Add a new file `mock-contacts.ts` inside the folder src/app.
- Add syntac for exporting constant
  ```
  import {Contact} from './contact';

  export const CONTACTS: Contact[] = [];
  ```

> NOTE: we have given Contact type to CONSTANT variable so that we can achieve strong typing i.e. if in case our CONTACTS array contains any invalid data then typescript will throw error.

- Now create few objects with contact properties and add them in CONTACTS array.

  ```
  import {Contact} from './contact';

  export const CONTACTS: Contact[] = [
    {
      id: 1,
      firstName: 'Varun',
      lastName: 'Sukheja',
      phoneNumber: 9876543210,
      email: 'sukheja.varun@gmail.com',
      isActive: true,
      country: 'India',
      countryCode: '+91'
    },
    {
      id: 2,
      firstName: 'Vishal',
      lastName: 'Sukheja',
      phoneNumber: 1234567890,
      email: 'sukheja.vishal@gmail.com',
      isActive: true,
      country: 'India',
      countryCode: '+91'
    },
    {
      id: 3,
      firstName: 'Kamal',
      lastName: 'Khatwani',
      phoneNumber: 5432167890,
      email: 'kamla.khatwani@gmail.com',
      isActive: true,
      country: 'India',
      countryCode: '+91'
    },
  ];

  ```



## creating contact service


- Create a new `contact` service using angular CLI,
  ```
  ng generate service contact
  ```

- A new file `contact.service.ts` is generated under src/app folder

  contact.service.ts
  ```
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class ContactService {

    constructor() { }
  }

  ```


- Import `Contact` class and `CONTACTS` the mock-contacts.
  ```
  import {Contact} from './contact';
  import {CONTACTS} from './mock-contacts';
  ```

- Add a method `getContacts()` which will return the list of contacts from our mock-contacts file.
  ```
   getContacts(): Contact[] {
      return CONTACTS;
    }
  ```

- Next you need to register a provider. A provider is something that can create or deliver a service; in this case, it instantiates the ContactService class to provide the service.
  But if you look at the @Injectable() statement right before the ContactService class definition, you can see that the providedIn metadata value is 'root':
  ```
  @Injectable({
    providedIn: 'root',
  })
  ```
  which means Angular CLI has generated a provider at root level, so we need to do nothing in this step.

- Now our service is ready to be used in any component.


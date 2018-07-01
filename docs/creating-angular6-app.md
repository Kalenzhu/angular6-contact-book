
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

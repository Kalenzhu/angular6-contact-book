
> NOTE: Before going through the steps mentioned below make sure you have done angular-setup, if not then please refer to angular6-setup.md file.

## Installing Angular Material

To install angular material as mentioned in their [official doc](https://material.angular.io/guide/getting-started)
we need to install 2 packages **@angular/material** and **@angular/cdk**


```ssh
ng add @angular/material
ng add @angular/cdk
```


> NOTE: We are using `ng add` instead of `npm install` because ng add is the new functionality provided by angular6,
ng add will use your package manager to download new dependencies and invoke an installation script (implemented as a schematic)
which can update your project with configuration changes, add additional dependencies (e.g. polyfills),
or scaffold package-specific initialization code.


> You can also add `@angular/animations` for animations and `hammerjs` for gestures.


## Creating MaterialModule

To work with Angular material components you need to import them in your module .ts file.
But instead of directly adding components of @angular/material as a dependency in module.ys file,
we are creating a new module `MaterialModule` in which we will add all the material dependencies.
And finally we will add this MaterialModule as a dependency to AppModule

- Create a new file `material.ts` under src/app folder
- Copy paste below code in your material.ts file
  ```Angular6
  import {MatButtonModule, MatCheckboxModule} from '@angular/material';

  @NgModule({
    imports: [MatButtonModule, MatCheckboxModule],
    exports: [MatButtonModule, MatCheckboxModule],
  })
  export class MyOwnCustomMaterialModule { }
  ```
  > NOTE: Above snippet has been taken form [official Angular6 doc](https://material.angular.io/guide/getting-started#step-3-import-the-component-modules)

- Add below line in your material.ts file, which allows NgModule to be used
  ```Angular6
  import {NgModule} from '@angular/core';
  ```

- Rename **MyOwnCustomMaterialModule** to **MaterialModule**.

  Before
  ```Angular6
  export class MyOwnCustomMaterialModule { }
  ```
  After
  ```Angular6
  export class MaterialModule { }
  ```

- Now import  MaterialModule and also add it in the imports array of AppModule i.e. in app.module.ts file.

  `import {MaterialModule} from './material';`
  ```
    imports: [
      BrowserModule,
      MaterialModule
    ],
  ```

- Now whenever we need any Material component, simple import it in material.ts file and the add it to `imports` and `exports` array, that's it.



## Adding Material Icons
Below are the steps to install Material icons
- Add below line to index.html filr.
  ```html
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  ```

- Import MatIconModule in material.ts and add in the `imports` and `exports` array.
  ```ts
  import {MatIconModule} from '@angular/material/icon';


  @NgModule({
    imports: [MatCardModule, MatIconModule],
    exports: [MatCardModule, MatIconModule],
  })
  ```

- To add icons, simple add `<mat-icon>` tag to your html with icon name. Let's say we want a delete icon,
  ```html
  <mat-icon>delete</mat-icon>
  ```

> NOTE: To use more icons, you can check at [Official Material Icon](https://material.io/tools/icons/)


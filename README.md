# Synthwin Web Application

## 1. Add new application

```bat
ng generate application <app-name>
//or
ng g a <app-name>
```

### 1.1. Config new app

Add this code to `projects/<app-name>/src/style.scss` file (with PrimeNG):

```css
@layer tailwind-base, primeng, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}
```

**Note:** If don't use PrimeNG in project, just add like this:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 1.2. Run application

Run the command in terminal like this:

```bat
ng server <app-name>
```

## 2. Custom PrimeNG component with TailwindCSS classes

Using `styleClass` property, like:

```html
<p-button label="Create an account" size="small" styleClass="rounded-none outline-none bg-primary-2 border-primary-2" routerLink="/" />
```

Before that, remember to import the component's module to `.component.ts` file, example:

```ts
import { ButtonModule } from "primeng/button";
import { Component } from "@angular/core";
@Component({
  selector: "app-main-layout",
  standalone: true,
  imports: [ButtonModule], //Import like this
  templateUrl: "./main-layout.component.html",
  styleUrl: "./main-layout.component.scss",
})
export class MainLayoutComponent {}
```

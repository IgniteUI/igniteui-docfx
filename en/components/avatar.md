---
title: Avatar Component
_description: Ignite UI for Angular Avatar control enables users to add images, material icons or initials within any application for instances such as a profile button.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Avatar component, Angular Avatar control
---

# Avatar

<p class="highlight">The Ignite UI for Angular Avatar component helps adding initials, images, or material icons to your application.</p>
<div class="divider"></div>

## Angular Avatar Example


<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-sample-3" alt="Angular Avatar Example">
</code-view>

<div class="divider--half"></div>

## Usage

To get started with the Avatar component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxAvatarModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAvatarModule],
    ...
})
export class AppModule {}
```

## Examples

The Avatar can be either square or circular, with three size options (small, medium and large). It can be used for displaying initials, images or icons.

### Avatar displaying initials
To get a simple avatar with [`initials`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#initials) (i.e. JS  for  'Jack Sock'), add the following code inside the component template:

```html
<igx-avatar initials="JS">
</igx-avatar>
```
Let's enhance our avatar by making it circular and bigger in size. 

```html
<igx-avatar initials="JS"
            [roundShape]="true"
            size="medium">
</igx-avatar>
```
We can also change the background through the `background` property or set a color on the initials through the `color` property. 

```scss
// avatar.component.scss

.igx-avatar {
    background: #e41c77;
    color: #000000;
}

```
If all went well, you should see something like the following in the browser:


<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-sample-1" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxAvatarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
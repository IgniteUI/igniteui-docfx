---
title: Two-way data binding
_description: WPF to Angular guide topics help you switch from WPF to Angular.
_keywords: WPF, Windows Presentation Foundation, Angular, Ignite UI for Angular, two-way, binding
---

## Two-way data binding in Angular

In the previuos topic we discussed the [one-way binding](one_way_binding.md) in Angular, and how easy is to use it. One-way binding updates the view with data coming from the component class. Like in WPF, we can do the other way operation - updating the component class from the view. In that case we need to use two-way binding and we will demonstrate its power and how easy is to use it.

Essentially the one-way binding is taking a state from the our component class and displaying it in our view. Let's look at this code:
```html
<input #myTitle (keyup)="keyup(myTitle.value)">
<h2>{{ text }}</h2>
```
```typescript
export class SampleComponent implements OnInit {

text = 'default value';

keyup(value) {
  this.text = value;
}
...
```
Here we are simply using an `interpolation` to bind the text property to the HTML. That would display the value of the text propperty, which is `default value` at the UI. The other `input` element handles user's interaction and updates the class property from the UI, using the [event binding](angular_events.md). Essentially, the input does the opposite of the one-way binding, it take the information from the UI and updates the property in the component class. The method which is hooked up to the input's keyup event, is updating the text property each time when the event occurs. Once the text property value is changed by the event method, that is reflected to the UI by the one-way binding and `interpolation` at the h2 element. So if type something into the input element, that would immediately update the h2 text - that's a simulation of two-way binding. The same aslo can be achieved at WPF using one-way binding and keyup event handler, but the two-way binding is way more conveinient to use.

### Two-way binding

Fortunately, there is a better way to create the above sample and here it comes the two-way binding. The two-way binding is not just from the component class to the UI, but is also UI to class. To achieve UI binding in Angular, we are going to use a [directive](https://angular.io/api/core/Directive) called [`ngModel`](https://angular.io/api/forms/NgModel). So let's update the sample from above with `ngModel` directive. The syntax for that is - an open bracket followed by an open parentheses, and of course the coresponding closing parentheses and bracket. This is callsed banana in the box, so let's see it in action:
```html
<input [(ngModel)]="text">
<h2>{{ text }}</h2>
```
And the equivalent bindings in WPF would be:
```xml
<TextBox Text="{Binding Path=Text, Mode=TwoWay}"></TextBox>
<TextBlock Text="{Binding Path=Text, Mode=OneWay}"></TextBlock>
```
The Angular binding is a matter of syntax, and in WPF is more like a setup - in particular the value of `Binding.Mode`.

If run this code, an error would occur at the console - saying that the `ngModel` is unknown property of input element. So in order to use `ngModel` directive it's necessary to import the [`FormsModule`](https://angular.io/api/forms/FormsModule). It needs to be imported into the `app.module.ts` file:
```typescript
import { FormsModule } from '@angular/forms';
...
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ]
...
``` 
If run the sample, the initial input's value would be set to `default value`, which is the `text` property's value. And since input is editable, changing its value would reflect immediately at the h2 element. So typing into the input updates the `text` property, and then h2 element displays that value via the `interpolation`. Another equivalent way to achieve this is:
```html
<input [ngModel]="text" (ngModelChange)="text = $event">
```
Which is actually similar to the first sample, using the property binding and event binding.


## Additional Resources
* [Desktop to Web: Desktop to Web: Angular Two-Way Binding with ngModel](https://www.youtube.com/watch?v=MrjTTDEj7cA&list=PLG8rj6Rr0BU-AqcJMuwggKy0GMIkjkt3j)
* [One-way binding in Angular](one_way_binding.md)
* [Angular NgModel](https://angular.io/api/forms/NgModel)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
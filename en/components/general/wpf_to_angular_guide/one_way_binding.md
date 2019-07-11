---
title: One-way data binding
_description: WPF to Angular guide topics help you switch from WPF to Angular.
_keywords: WPF, Windows Presentation Foundation, Angular, Ignite UI for Angular, One-way, binding
---

## One-way data binding in Angular

One of the most powerful and widely used feature in WPF is data binding. It makes developers' life much easier, by synchronizing the business logic with views and vice versa, without having to write a single line of extra code. Without the power of it, WPF would be just a better-looking WindowsForms. 
Luckily, Angular does support data binding. There are two types of data binding, one-way binding, and two-way binding. 

### One-way data binding

Data binding in Angular is super easy, and unlike in WPF we don't have to worry about a data context or a view model. All we have to worry about is an HTML file and a typescript file. With any data binding, the first thing you need are properties to data bind to. So let's add a property called `text` into the component class, and set it a simple value.
In WPF, we need to set the DataContext and bind the property in XAML:
```csharp
public class IgniteUIClass
{
  public IgniteUIClass()
  { this.Text = "IgniteUI for Angular"; }
  
  public string Text
  { get; set; }
}
...
public MainWindow()
{
  InitializeComponent();
  this.DataContext = new IgniteUIClass();
}
```
```xml
<Label Content="{Binding Path=Text, Mode=OneWay}"></Label>
```
In Angular, we are directly binding a DOM property to component's property:
```typescript
export class SampleComponent implements OnInit {
  text = 'IgniteUI for Angular';

  constructor() { }
  ngOnInit() {}
}
```
```html
<h2>{{ text }}</h2>
```

### Interpolation

The above code, simply bind an element in the HTML which is h2, to the value of the `text` property. In this case, we are using the `interpolation` to create one-way binding. We do that by typing double curly braces, the name of the property - in our case `text`, and two closing curly braces. Another way to achieve the same result is, to create h2 tag and bind the `text` property to its innerHTML property, again using the `interpolation` syntax:
```html
<h2 innerHTML="{{ text }}"></h2>
```
There two important things about `interpolation`. First, everything inside curly braces is rendered as a `string`. 
And second, everything inside the curly braces is referred to `template expression`. This allows to do more complex things, such as a concatenation. For example, let's concatenate some text with the value of the `text` property:
```html
<h2>{{"Welcome to " + text }}</h2>
```
Using the template expression also allows to data bind to java script properties and methods. For example, we can data bind to the `text` propetry length which will result - 20:
```html
<h2>{{ text.length }}</h2>
```
We can also data bind to methods of that property, for example to `toUpperCase()`:
```html
<h2>{{ text.toUpperCase() }}</h2>
```
This is much more powerful than data binding in WPF, and a lot easier to use. We can even make mathematical calculation inside the template expression. For example, we can simply put 2+2 into the expression, and it will display the result - 4:
```html
<h2>{{ 2 + 2 }}</h2>
```
Another possible thing, is to data bind to actual methods from the typescript file. Here is a short example how to achieve this:
```html
<h2>{{ getTitle() }}</h2>
```
This `getTitle()` is a method defined in the typescript file. The result on the page from above binding, is the returned value of that method:
```typescript
getTitle() {
  return 'Simple Title';
}
```

Although the `interpolation` may look powerful, it has some limitations - it only represents a string.
So let's create a simple boolean property in the component class:
```typescript
export class SampleComponent implements OnInit {

  text = 'IgniteUI for Angular';
  isDisabled = false;
  constructor() { }
...
```
Then create a simple `input` of type text, and bind the `isDisabled` to its disabled property:
```html
<input type="text" disabled="{{ isDisabled }}">
```
The expected result is, that the `input` state should be enabled, but it's disabled. This is because the `interpolation` returns a string, but the input's disabled property is boolean and it requires a boolean value. 
Here it comes the `property binding` to make things work. It has a little different syntax:

### Property Binding

```html
<input type="text" [disabled]="isDisabled">
```
The actual property name is wrapped into square brackets, and its value does not contain curly braces - just the name of the property that is bind to. Now, the input's disabled property is data bind to a boolean result, not a string. The isDisabled value is false, and running the app would display the input into enabled state. So, it's important to keep in mind that, whenever binding to a property relies on the data type result, then a `property binding` should be used. And if the binding simply relies on a string, then `interpolation` should be used.


## Additional Resources
* [Desktop to Web: One-way data binding with Angular interpolation and property binding](https://www.youtube.com/watch?v=fP7iVhFNTOk&list=PLG8rj6Rr0BU-AqcJMuwggKy0GMIkjkt3j)
* [Two-way binding in Angular](two_way_binding.md)
* [Angular Displaying Data](https://angular.io/guide/displaying-data#displaying-data)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
---
title: One-way data binding
_description: WPF to Angular guide topics help you switch from WPF to Angular.
_keywords: WPF, Windows Presentation Foundation, Angular, Ignite UI for Angular, One-way, binding
---

## One-way data binding in Angular

One of the most powerful and widely used features in WPF is data binding. It makes developers' life much easier, by synchronizing the business logic with the view and vice versa, without having to write a single extra line of code. Without the power of it, WPF would just be a better-looking WindowsForms.
Luckily, Angular supports data binding! There are two types of data binding - one-way binding and two-way binding.

### One-way data binding

Data binding in Angular is super easy, and unlike in WPF we don't have to worry about a data context or a view model. All we have to worry about is an HTML file and a typescript file. With any data binding, the first thing you need are properties to bind to. So let's add a property called `text` into the component class, and set its value.
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

In the code from above, we simply display some text in the HTML by using a binding to the value of the `text` property. In this case, we are using `interpolation` to create a one-way binding. We do this by typing double curly braces, the name of the property - in our case `text`, and two closing curly braces. Another way to achieve the same result is to create h2 tag and bind the `text` property to its innerHTML property, by using the `interpolation` syntax again:
```html
<h2 innerHTML="{{ text }}"></h2>
```
There are two important things about `interpolation`. First, everything inside the curly braces is rendered as a `string`.
Second, everything inside the curly braces is referred to as a `template expression`. This allows us to do more complex things, such as concatenation. For example, let's concatenate some text with the value of the `text` property:
```html
<h2>{{"Welcome to " + text }}</h2>
```
The use of template expressions allows us to bind to javascript properties and methods as well. For example, we can bind to the `text` property's length which will result in the number 20:
```html
<h2>{{ text.length }}</h2>
```
We can also bind to methods of that property, for example to `toUpperCase()`:
```html
<h2>{{ text.toUpperCase() }}</h2>
```
This is a lot more powerful than the data binding in WPF and a lot easier to use too. We can even make mathematical calculations inside the template expression. For example, we can simply put **2 + 2** into the expression, and it will display the result, which is equal to 4:
```html
<h2>{{ 2 + 2 }}</h2>
```
One more thing that we can do is to bind to actual methods from the typescript file. Here is a short example on how to achieve this:
```html
<h2>{{ getTitle() }}</h2>
```
This `getTitle()` is a method defined in the typescript file. The result on the page is the returned value of that method:
```typescript
getTitle() {
  return 'Simple Title';
}
```

Although the `interpolation` looks quite powerful, it has its limitations, for example - it only represents a **string**.
So let's create a simple boolean property in the component class:
```typescript
export class SampleComponent implements OnInit {

  text = 'IgniteUI for Angular';
  isDisabled = false;
  constructor() { }
...
```
We will now create a simple `input` of type text and bind the `isDisabled` property to the input's `disabled` property:
```html
<input type="text" disabled="{{ isDisabled }}">
```
The expected result is that the `input` should be enabled, but it's disabled. This is because the `interpolation` returns a string, but the input's disabled property is of boolean type and it requires a boolean value.
In order for this to work correctly, Angular provides `property binding`. Its syntax is a bit different.

### Property Binding

```html
<input type="text" [disabled]="isDisabled">
```
The actual property name is wrapped into square brackets, and its value does not contain curly braces - just the name of the property that it is bound to. Now, the input's `disabled` property is bound to a boolean result, **not** a string. The `isDisabled` value is false and running the app would display the input as enabled.

> [!NOTE]
> It is very important to remember that when a binding relies on the data type result, then a `property binding` should be used! If the binding simply relies on a string value, then `interpolation` should be used.

## Additional Resources
* [Desktop to Web: One-way data binding with Angular interpolation and property binding](https://www.youtube.com/watch?v=fP7iVhFNTOk&list=PLG8rj6Rr0BU-AqcJMuwggKy0GMIkjkt3j)
* [Two-way binding in Angular](two_way_binding.md)
* [Angular Displaying Data](https://angular.io/guide/displaying-data#displaying-data)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

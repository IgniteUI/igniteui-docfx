---
title: Angular Events
_description: Learn how to respond to events in Angular and implement your own events.
_keywords: WPF, Windows Presentation Foundation, Angular, Ignite UI for Angular, Events, Event Binding
---

## Responding to Events

Every app you have probably ever had to write in your lifetime had to respond to some type of user interaction one way or another. The most common way to do that is with some type of event system. In WPF we had routed events, CLR events and commands while In Angular we have DOM events.

Here is a simple example how you respond to a click event of a button in WPF:

```xml
<Button Click="Button_Click">Click Me</Button>
```
```csharp
private void Button_Click(object sender, RoutedEventArgs e)
{
    Console.WriteLine("Hello World");
}
```

The same thing in Angular would look like this:
```html
<button (click)="onClicked()">Click Me</button>
```
```typescript
onClicked() {
    console.log('Hello World');
}
```

In WPF we are used to getting information about the event, such as the sender or any event arguments. In Angular we can use the `$event` variable. This variable will provide information to us about the event that was invoked.

```html
<button (click)="onClicked($event)">Click Me</button>
```
```typescript
onClicked(event) {
    console.log('Hello World');
    console.log(event.target);
}
```

Sometimes passing the event object might not be very useful. Instead you may want to pass for example the value of an `input` on the page.

```html
<input #messageInput>
<button (click)="onClicked(messageInput.value)">Click Me</button>
```
```typescript
onClicked(message) {
    console.log(message);
}
```

Let us say that we want to print the value of an input on pressing Enter. You could do that in Angular like this:

```html
<input #messageInput (keyup)="onInputKeyup($event, messageInput.value)">
```
```typescript
onInputKeyup(event, message) {
    if (event.keyCode === 13) {
        console.log(message);
    }
}
```

However, in Angular there is an easier way to do that, you could bind to the `keyup.enter` pseudo-event. This way the event handler will be called only when the user presses Enter.

```html
<input #messageInput (keyup.enter)="onInputKeyup(messageInput.value)">
```
```typescript
onInputKeyup(message) {
    console.log(message);
}
```

## Responding to Events of a Component

In WPF often when you define your own reusable controls, you need to listen for an event of that control inside it. Most commonly you will do this by overriding a base method like this:

```csharp
public class MyControl : Control
{
    protected override void OnMouseDown(MouseButtonEventArgs e)
    {
        base.OnMouseDown(e);
        // Place your custom logic here
    }
}
```

In Angular you could achieve similar result using the [HostListener](https://angular.io/api/core/HostListener) decorator.

```typescript
@Component({
    selector: 'app-my-component',
    templateUrl: './my.component.html',
    styleUrls: ['./my.component.css']
})
export class MyComponent {
    @HostListener('mousedown', ['$event'])
    onMouseDown(event) {
        // place your custom logic here
    }
}
```

## Create Your Own Events

Sometimes you need to define your own events. In WPF you could define either CLR or routed events. Let us take a look at a simple example of a CLR event in WPF:

```csharp
public event EventHandler<TaskEventArgs> TaskCompleted;

...
this.TaskCompleted(this, new TaskEventArgs());
```

In order to define a custom event in Angular, you have to define an [EventEmitter](https://angular.io/api/core/EventEmitter) property marked with the [Output](https://angular.io/api/core/Output) decorator.

```typescript
@Output()
taskCompleted = new EventEmitter<TaskEventArgs>();

...
this.taskCompleted.emit(new TaskEventArgs());
```

## Additional Resources
* [Desktop to Web: Responding to Events with Angular Event Binding](https://www.youtube.com/watch?v=V1Futz4W400&list=PLG8rj6Rr0BU-AqcJMuwggKy0GMIkjkt3j&index=6)
* [Angular User Input](https://angular.io/guide/user-input)
* [Component Interaction: Parent listens for child events](https://angular.io/guide/component-interaction#parent-listens-for-child-event)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
---
title: Angular イベントの処理 | IgniteUI for Angular | インフラジスティックス
_description: WPF から Angular への移行時の Angular イベント処理について学びます。
_keywords: angular events, ignite ui for angular, インフラジスティックス
_language: ja
---

## Angular イベントの処理

> [!Video https://www.youtube.com/embed/V1Futz4W400]

Angular イベントは、ユーザー インタラクションへの応答として発行されます。Angular イベントが発行されると、そのイベント処理ロジックが実行されます。WPF は、ルーティング イベント、CLR イベント、およびコマンドを提供します。Angular では、DOM イベントがあります。

WPF でボタンのクリックイベントに応答する簡単な例を次に示します。

```xml
<Button Click="Button_Click">Click Me</Button>
```
```csharp
private void Button_Click(object sender, RoutedEventArgs e)
{
    Console.WriteLine("Hello World");
}
```

以下は、Angular の例です。
```html
<button (click)="onClicked()">Click Me</button>
```
```typescript
onClicked() {
    console.log('Hello World');
}
```

WPF では、送信者やイベント引数など、イベントに関する情報をよく取得します。Angular では、`$event` 変数を使用できます。この変数は、呼び出されたイベントに関する情報を提供します。

```html
<button (click)="onClicked($event)">Click Me</button>
```
```typescript
onClicked(event) {
    console.log(event.target);
}
```

イベント オブジェクトを渡すことはあまり有用ではない場合があります。代わりに、ページの `input` 値を渡すことができます。

```html
<input #messageInput>
<button (click)="onClicked(messageInput.value)">Click Me</button>
```
```typescript
onClicked(message) {
    console.log(message);
}
```

Enter を押したときに入力値を出力するとします。次のように Angular でそれを行うことができます。

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

Angular にはより簡単な方法があります。`keyup.enter` 疑似イベントにバインドできます。このアプローチを使用すると、イベント ハンドラーは、ユーザーが Enter キーを押したときにのみ呼び出されます。

```html
<input #messageInput (keyup.enter)="onInputKeyup(messageInput.value)">
```
```typescript
onInputKeyup(message) {
    console.log(message);
}
```

### コンポーネントのイベントに応答

WPF では、独自のカスタム コントロールを作成するときに、次のようないくつかの基本イベントを拡張または変更する必要があります。

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

Angular では、[HostListener](https://angular.io/api/core/HostListener) デコレーターを使用して同様の結果を達成します。

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

## カスタム イベントの作成

場合によっては、カスタム イベントを定義する必要があります。WPF では、CLR またはルーティング イベントを定義できます。以下は、WPF の CLR イベントの簡単な例です。

```csharp
public event EventHandler<TaskEventArgs> TaskCompleted;

...
this.TaskCompleted(this, new TaskEventArgs());
```

Angular でカスタム イベントを定義するには、[Output](https://angular.io/api/core/Output) デコレータでマークされた [EventEmitter](https://angular.io/api/core/EventEmitter) プロパティを定義する必要があります。

```typescript
@Output()
taskCompleted = new EventEmitter<TaskEventArgs>();

...
this.taskCompleted.emit(new TaskEventArgs());
```

## その他のリソース
* [デスクトップから Web: Angular Event バインドを使用したイベントへの応答](https://www.youtube.com/watch?v=V1Futz4W400&list=PLG8rj6Rr0BU-AqcJMuwggKy0GMIkjkt3j&index=6)
* [Angular ユーザー入力](https://angular.io/guide/user-input)
* [コンポーネント インタラクション: 子イベントをリッスンする親](https://angular.io/guide/component-interaction#parent-listens-for-child-event)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
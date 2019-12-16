---
title: One-Way Data Binding in Angular | IgniteUI for Angular | Infragistics
_description: WPF から Angular に移行するときに、Angular で一方向のデータバインディングを作成する方法を説明します。
_keywords: data binding, ignite ui for angular, インフラジスティックス
_language: ja
---

## Angular 一方向バインディング

> [!Video https://www.youtube.com/embed/fP7iVhFNTOk]

Angular の一方向データ バインディングは、WPF の一方向バインディング同様、基になるデータが変わると自動的に同期し、最新の情報をエンドユーザーに表示できます。

Angular のデータ バインディングは非常に簡単で、WPF とは異なり、データ コンテキスト、ビューモデル、または `INotifyPropertyChanged` (INPC) の定義は必要ありません。必要なのは、HTML ファイルと typescript ファイルのみです。データ バインディングでは、最初にバインドするプロパティが必要です。それでは、`text` というプロパティをコンポーネント クラスに追加し、その値を設定しましょう。
WPF では、DataContext を設定し、XAML でプロパティをバインドします。
```csharp
public class IgniteUIClass
{
  public string Text  { get; set; }
  
  public IgniteUIClass()
  { 
    this.Text = "IgniteUI for Angular";
  }
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
Angular では、DOM プロパティをコンポーネントのプロパティに直接バインドしています。
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

### 補間

上記のコードでは、`text` プロパティの値へのバインディングを使用して、HTML にテキストを表示するだけです。ここでは、`補間`を使用して一方向のバインディングを作成しています。次に二重中括弧、プロパティの名前 (ここでは `text`)、2 つの閉じ中括弧を入力します。同じ結果となる他の方法として、`補間`構文を再度使用して、h2 タグを作成し、`text` プロパティをその innerHTML プロパティにバインドがあります。
```html
<h2 innerHTML="{{ text }}"></h2>
```
`補間`には 2 つの重要なことがあります。 
- 1 つ目は、中括弧内のすべてが `string` としてレンダリング、
- 2 つ目は、中括弧内のすべてが`テンプレート式`として参照されることです。これにより、連結などのより複雑な処理ができます。

たとえば、いくつかのテキストを `text` プロパティの値と連結してみましょう。
```html
<h2>{{"Welcome to " + text }}</h2>
```
テンプレート式を使用すると、javascript のプロパティとメソッドにもバインドできます。たとえば、`text` プロパティの長さにバインドすると、20 という結果になります。
```html
<h2>{{ text.length }}</h2>
```
`toUpperCase()` など、そのプロパティのメソッドにバインドすることもできます。
```html
<h2>{{ text.toUpperCase() }}</h2>
```
これは、WPF のデータ バインディングよりも高機能で、非常に使いやすくなっています。テンプレート式内で数学的計算を行うこともできます。たとえば、式に単純に　**2 + 2**　を入力すると、4　に等しい結果が表示されます。
```html
<h2>{{ 2 + 2 }}</h2>
```
もう 1 つの機能は、typescript　ファイルから実際のメソッドへのバインドです。これを実現する方法の簡単な例を次に示します。
```html
<h2>{{ getTitle() }}</h2>
```
この `getTitle()` は、typescript ファイルで定義されているメソッドです。ページ上の結果は、そのメソッドの戻り値です。
```typescript
getTitle() {
  return 'Simple Title';
}
```

`補間`は非常に強力に見えますが、たとえば、**string** のみを表すという制限があります。
それでは、コンポーネント クラスに単純なブール プロパティを作成しましょう。
```typescript
export class SampleComponent implements OnInit {

  text = 'IgniteUI for Angular';
  isDisabled = false;
  constructor() { }
...
```
テキストタイプの単純な `input` を作成し、`isDisabled` プロパティを入力の `disabled` プロパティにバインドします。
```html
<input type="text" disabled="{{ isDisabled }}">
```
結果は、`input` が有効のはずですが、無効になっています。これは、`補間`によって文字列が返されますが、入力の disabled プロパティはブール型であり、ブール値が必要なためです。
これを正しく機能させるために、Angular は`プロパティ バインディング`を提供します。 

### プロパティ バインディング

プロパティ バインディングの構文は、補間の構文とは少し異なります。プロパティ バインドでは、プロパティ名は角かっこで囲まれ、その値には中かっこは含まれません。バインドされるプロパティの名前だけです。  

```html
<input type="text" [disabled]="isDisabled">
```
プロパティ バインディングを使用することにより、入力の `disabled` プロパティは、文字列では**なく**ブール値の結果にバインドされます。`isDisabled` 値は false であり、アプリを実行すると、入力が有効として表示されます。

> [!NOTE]
> バインディングがデータ型の結果に依存する場合、`プロパティ バインディング`を使用する必要があることに注意してください。バインディングが単に文字列値に依存している場合は、`補間`を使用する必要があります。

## その他のリソース
* [デスクトップから Web: Angular 補間とプロパティバインディングによる一方向データバインディング](https://www.youtube.com/watch?v=fP7iVhFNTOk&list=PLG8rj6Rr0BU-AqcJMuwggKy0GMIkjkt3j)
* [双方向バインディング](two_way_binding.md)
* [Angular データの表示](https://angular.io/guide/displaying-data#displaying-data)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)

---
title: 双方向バインディング | IgniteUI for Angular | インフラジスティックス
_description: WPF から Angular へ移行時に Angular で双方向のデータバインディングを作成する方法を説明します。
_keywords: data binding, ignite ui for angular, インフラジスティックス
_language: ja
---

## 双方向バインディング

> [!Video https://www.youtube.com/embed/MrjTTDEj7cA]

Angular の双方向データ バインディングは、エンドユーザーに情報を表示するために使用され、エンドユーザーは UI を使用して基になるデータを変更できます。これにより、WPF の一方向バインディング同様、ビュー (テンプレート) とコンポーネントクラスの間に双方向の接続が確立されます。

一方向バインディングは、コンポーネント クラスから状態を取得し、ビューに表示します。このコードを見てみましょう。
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
ここでは、`補間`を使用してテキスト プロパティを HTML にバインドしています。これにより、UI にテキスト プロパティの値が表示されます。`Input` 要素は、ユーザー インタラクションを処理し、イベント バインディングによって UI を介して基になる `text` プロパティを更新します。基本的に、入力は一方向バインディングの反対を行い、UI から情報を取得して、コンポーネント クラスのプロパティを更新します。入力のキーアップ イベントにフックされるメソッドは、イベントが発生するたびにテキスト プロパティを更新します。イベント メソッドによってテキスト プロパティ値が変更されると、その変更は h2 要素の`補間`を使用した一方向バインディングによって UI に反映されます。したがって、ユーザーが入力要素に何かを入力すると、すぐに h2 テキストが更新されます。この動作は、基本的に双方向バインディングのシミュレーションです。同じことは、一方向バインディングとキー アップイベント ハンドラーを使用して WPF でも実現できますが、双方向バインディングを使用する方が便利です。

### 双方向バインディング

上記のサンプルのロジックをはるかに簡単な方法で実装することができます。以下は双方向バインディングの手順です。

双方向バインディングの方向は、**コンポーネントクラスから UI** だけでなく、**UI からコンポーネント クラス**でもあります。これを実現するために、[`ngModel`](https://angular.io/api/forms/NgModel) と呼ばれる[ディレクティブ](https://angular.io/api/core/Directive)を使用します。上記のサンプルを `ngModel` ディレクティブで更新しましょう。そのための構文は、開き括弧とそれに続く開き括弧、次に対応する閉じ括弧と括弧。これは**ボックス内のバナナ**と呼ばれるものですが、実際に試してみましょう。
```html
<input [(ngModel)]="text">
<h2>{{ text }}</h2>
```
そして、WPF の同様のバインディングは以下のようになります。
```xml
<TextBox Text="{Binding Path=Text, Mode=TwoWay}"></TextBox>
<TextBlock Text="{Binding Path=Text, Mode=OneWay}"></TextBlock>
```
Angular バインディングは構文の問題であり、WPF ではセットアップに似ています。特に `Binding.Mode` の値です。

このコードを実行すると、コンソールでエラーが発生します。`ngModel` lは入力要素の不明なプロパティであるということです。ここでは、ngModel ディレクティブを使用するために [`FormsModule`](https://angular.io/api/forms/FormsModule) をインポートする必要があります。`app.module.ts` ファイルにインポートする必要があります。
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
サンプルを実行すると、初期入力の値は**デフォルト値**、つまり `text` プロパティの値に等しくなります。入力は編集可能であるため、その値を変更するとすぐに h2 要素に反映されます。そのため、入力に入力すると `text` プロパティが更新され、h2 要素は`補間`によってその値を表示します。

その他の同様な方法として以下もあります。
```html
<input [ngModel]="text" (ngModelChange)="text = $event">
```
これは実際には、プロパティ バインディングとイベント バインディングを使用した最初のサンプルに似ています。


## その他のリソース
* [デスクトップから Web: デスクトップから Web: ngModel を使用した Angular 双方向バインディング](https://www.youtube.com/watch?v=MrjTTDEj7cA&list=PLG8rj6Rr0BU-AqcJMuwggKy0GMIkjkt3j)
* [Angular 一方向バインディング](one_way_binding.md)
* [Angular NgModel](https://angular.io/api/forms/NgModel)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)

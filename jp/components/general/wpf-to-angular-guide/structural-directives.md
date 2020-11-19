---
title: Angular ディレクティブ | IgniteUI for Angular | インフラジスティックス
_description: Angular 構造ディレクティブを使用して、カスタム条件に基づいて Angular コンポーネントの外観を設定します。
_keywords: angular ディレクティブ, ignite ui for angular, インフラジスティックス
_language: ja
---

## Angular 構造ディレクティブ

> [!Video https://www.youtube.com/embed/vQe7R78Od8k]

WPF でのビジュアル ツリー要素の外観を制御する場合、最も一般的な方法は、バインディングと可視コンバーターを使用することです。これには、追加のロジックと静的リソースが必要です。Angular にも同様のテクニックがあり、DOM 要素 (Angularディレクティブ) の外観や動作を変更します。Angular `ディレクティブ` タイプの 1 つは`構造ディレクティブ`です。DOM 要素を追加または削除することで DOM レイアウトを変更します。

このトピックでは、3 つの構造ディレクティブ (`ngIf`、`ngSwitch`、`ngFor`) を示します。名前からわかるように、これらはそれぞれ C# 構造と比較できます。`ngIf` は "if-else" C# コード ブロックと同じものであり、`ngSwitch` は C＃switch-case ステートメントと同じものであり、最後に、`ngFor` は C# "for-loop" とまったく同じものです。

### `ngIf` ディレクティブ
それぞれのディレクティブを `ngIf` から開始します。このディレクティブにより、ブール条件に基づいて要素を表示または非表示にすることができます。まず、名前を含む "h2" タグを持つ "div" 要素を作成します。
```html
<div>
  <h2>John</h2>
</div>
```
これを保存すると、ブラウザーは John という名前をレンダリングします。ただし、この "h2" タグの可視性の条件を基にしたいブール型の式があるとします。たとえば、「isFirstName」というプロパティを追加して、false に設定します。isFirstName が true に等しいときに div がレンダリングされるようにするには、次の構文 `*ngIf = "isFirstName"` を使用する必要があります。
```typescript
public isFirstName = false;
```
``` html
<div *ngIf="isFirstName">
  <h2>John</h2>
</div>
```
ファイルを保存すると、isFirstName が false であるため、名前がブラウザーに表示されなくなっていることがわかります。ただし、isFirstName を更新して true にすると、「John」という名がブラウザーに表示されます。isFirstName を false に戻すと、ブラウザーで名が表示されなくなり、空になります。これが `ngif` ステートメントのデフォルトの動作です-式が true の場合、提供されたテンプレートをレンダリングします。それ以外の場合は空です。

WPF で同じ動作を実現する場合、可視性コンバーターを使用する必要があります。以下の画像にような結果になります。
```cs
public bool IsFirstName { get; set; }
public Sample()
  {
      InitializeComponent();
      this.DataContext = this;
      this.IsFirstName = true;
  }
```
```xml
<UserControl.Resources>
  <BooleanToVisibilityConverter x:Key="VisibleIfTrueConverter" />
</UserControl.Resources>
<Grid>
  <Label Visibility="{Binding Path=IsFirstName, Converter={StaticResource VisibleIfTrueConverter}}">John</Label>
</Grid>
```
Angular では、非常に簡単でわかりやすいです。 

`isFirstName` プロパティが false の場合、代わりに姓を提供する要件を作成しましょう。そのために、`ngIf` ディレクティブの "else" 句を利用します。姓を含む "h2" タグを定義する `ng-template` を作成することから始めましょう。`ng-template` は、DOM の一部ではないコンテンツを定義できるようにする単なるプレースホルダーですが、`ngIf` ディレクティブを使用するなどのコードを介して追加できます。ただし、ディレクティブでこれを使用するには、"lastname" などのテンプレート参照変数名を指定する必要があります。`ng-template` に名前を付けたので、`ngIf` ディレクティブに進み、**; else lastname** を追加して保存します。「isFirstName」は false であるため、**姓を使用する**と言います。これは、姓を持つテンプレートを使用することを意味します。

```html
<div *ngIf="isFirstName; else lastname">
  <h2>John</h2>
</div>
<ng-template #lastname>
  <h2>Doe</h2>
</ng-template>
```
これを記述する別の方法は、**isFirstName; then firstname; else lastname** です。そのためには、"firstname" という別のテンプレートを作成する必要があります。

```html
<div *ngIf="isFirstName; then firstname; else lastname">
</div>
<ng-template #firstname>
  <h2>John</h2>
</ng-template>
<ng-template #lastname>
  <h2>Doe</h2>
</ng-template>
```
"isFirstName" を true に変更すると、ブラウザーに名が表示されます。`ngIf` ディレクティブの使用に関する最後のヒントは、式が単一のプロパティに限定されないことです。式が全体としてブール値の結果を返す限り、実際には複数のプロパティや関数を使用できます。たとえば、`" && isValid || getIsValidName()"` などの論理演算子を使用することもできます .

### `ngSwitch` ディレクティブ
次に説明するディレクティブは、`ngSwitch` ディレクティブです。これにより、1 つの式を複数の式と比較して、追加または削除するテンプレートを決定できます。
シェビー、フォード、GMC といった自動車のメーカーを表す h2 要素があるとします。typescript ファイルでデフォルト値 Chevy を定義した make プロパティの値に基づいて、これらの項目の 1 つだけを表示したいと思います。これを実現するには、次の構文 `[ngSwitch] = expression` で `ngSwitch` ディレクティブを使用する必要があります。ここで、expression は make プロパティです。h2 タグをラップする div 要素にこれを追加するだけでは不十分です。WPF の場合と同様に、各 h2 要素にいくつかの case ステートメントを追加する必要があります。そのための構文は `*ngSwitchCase = expression` です。この場合、テキストと直接比較するため、値を単一引用符で囲みます。これは、最終結果が `*ngSwitchCase = "'Chevy'"` /他の2つの値/と同様であることを意味します。

```typescript
make = "Chevy";
```

```html
<div [ngSwitch]="make">
  <h2 *ngSwitchCase="'Chevy'">Chevy</h2>
  <h2 *ngSwitchCase="'Ford'">Ford</h2>
  <h2 *ngSwitchCase="'GMC'">GMC</h2>
</div>
```
これを保存すると make プロパティの値が Chevy に設定されているため、ブラウザに表示されるのは Chevy オプションのみです。GMC へ変更して保存すると、GMC オプションのみがブラウザーにレンダリングされます。たとえば利用できないオプションの Lambo を追加すると、条件に一致しないため何もレンダリングされません。通常、C# 内で switch ステートメントを使用する場合、case だけでなくデフォルト値もあります。同じことが Angular でも利用可能です。「Not Found」テキストを含む別のオプションを追加し、他の値が見つからない場合にデフォルト値として機能する `*ngSwitchDefault` でマークすることができます。

```html
<h2 *ngSwitchDefault>Not Found</h2>
```
この場合、Lambo を探している場合は Lambo オプションがないため、デフォルトのケース Not found に切り替え、Not found がブラウザーにレンダリングされます。重要点の 1 つとして、これらが式であるため、渡す式に一致する結果が返される限り、関数を使用できることです。

### `ngFor` ディレクティブ

次は `ngFor` ディレクティブです。このディレクティブにより、オブジェクトのコレクションを反復処理し、そのコレクション内の各アイテムにテンプレートを追加できます。はじめに typescript ファイルにオブジェクトのコレクションを追加します。これをメーカーの配列と呼び、シェビー、フォード、GMC、ダッジを追加します。次に、div を作成し、div ごとに、その make の名前をリストする h2 タグを作成します。そのために、`ngFor` ディレクティブ (`*ngFor="let make of makes"` の構文) を使用します。これにより、補間を使用して、式の let make 部分で定義された make プロパティを使用し、h2 タグに出力することができます。
```typescript
makes = ["Chevy", "Ford", "GMC", "Dodge"];
```
```html
<div *ngFor="let make of makes">
  <h2>{{ make }}</h2>
</div>
```
正しく設定された場合、その配列内の各項目に対してブラウザーで表すために h2 タグを使用していることがわかります。さらに、`ngFor` ディレクティブは、次のようなそのコレクションに関する詳細情報を取得できるいくつかのヘルパー アイテムを提供します。
-	index as i - 各項目のインデックスを決定。

```html
<div *ngFor="let make of makes; index as i">
  <h2>{{ i }} - {{ make }}</h2>
</div>
```
-	first as f - 項目がコレクションの最初のものかどうかを取得。

```html
<div *ngFor="let make of makes; first as f">
  <h2>{{ f }} - {{ make }}</h2>
</div>
```
-	last as l - コレクションの最後の行または最後のアイテムを取得。

```html
<div *ngFor="let make of makes; last as l">
  <h2>{{ l }} - {{ make }}</h2>
</div>
```
-	odd as o または even as e - コレクション内のアイテムが奇数位置にあるか偶数位置にあるかを判別できます。

```html
<div *ngFor="let make of makes; odd as o">
  <h2>{{ o }} - {{ make }}</h2>
</div>
```
このように構造ディレクティブを使用して Angular アプリケーションでビューに要素を簡単に追加したり削除したりできます。

## その他のリソース
* [デスクトップから Web: Angular の構造ディレクティブ](https://www.youtube.com/watch?v=vQe7R78Od8k&t)
* [Angular 構造ディレクティブ](https://angular.io/guide/structural-directives)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
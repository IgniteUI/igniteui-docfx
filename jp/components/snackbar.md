---
title: Snackbar コンポーネント
_description: Ignite UI for Angular Snackbar を使用すると、単一行メッセージをモバイルおよびデスクトップ アプリケーションに含みます。
_keywords: Angular Snackbar コンポーネント, Angular Snackbar コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---
# Angular Snackbar (スナックバー) コンポーネントの概要
<p class="highlight">Ignite UI for Angular Snackbar コンポーネントは、アクションを含むことができる単一行のメッセージで操作のフィードバックを提供します。Snackbar メッセージがその他の画面要素の上に表示され、画面の中央下に配置されます。</p>
<div class="divider"></div>

## Angular Snackbar の例
<div class="divider--half"></div>


<code-view style="height: 140px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-1" alt="Angular Snackbar の例">
</code-view>


<div class="divider--half"></div>

## Ignite UI for Angular Snackbar を使用した作業の開始

Ignite UI for Angular Snackbar コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxSnackbarModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxSnackbarModule } from 'igniteui-angular';
// import { IgxSnackbarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxSnackbarModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxSnackbarComponent` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

import { IgxSnackbarComponent, IgxButtonDirective } from 'igniteui-angular';
// import { IgxSnackbarComponent, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <button igxButton="contained" (click)="snackbar.open()">Delete Message</button>
    <div>
        <igx-snackbar #snackbar>Message deleted</igx-snackbar>
    </div>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxSnackbarComponent, IgxButtonDirective]
})
export class HomeComponent {}
```

Ignite UI for Angular Snackbar モジュールまたはコンポーネントをインポートしたので、`igx-snackbar` コンポーネントの使用を開始できます。

## Angular Snackbar の使用

### Snackbar の表示
Snackbar コンポーネントを表示するには、ボタン クリックで [`open()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#open) メソッドを呼び出します。

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="snackbar.open()">Delete Message</button>
<div>
    <igx-snackbar #snackbar>Message deleted</igx-snackbar>
</div>
```
サンプルが正しく構成された場合、デモ サンプルが表示されます。ボタン クリック時にテキスト メッセージを表示する Snackbar が表示されます。
以上のコード スニペットで示されるように、スナックバーに表示されるメッセージを設定する 1 つの方法は、コンテンツ プロジェクションを使用することです。ただし、カスタム ロジックに基づいてプログラムによって値を切り替える必要がある場合は、値をパラメーターとして [`open()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#open) メソッドに渡すだけです。

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="snackbar.open('Message deleted')">Delete Message</button>
<button igxButton="contained" (click)="snackbar.open('Message deletion was not successful. Please try again')">Delete Message</button>
<div>
    <igx-snackbar #snackbar></igx-snackbar>
</div>
```

### 非表示/自動的に隠す
開いた後は、[`displayTime`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#displayTime) 入力によって指定した期間遅延後に非表示になります。デフォルト値は 4000 ミリ秒です。この動作はデフォルトで有効ですが、[`autoHide`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#autoHide) を **false** に設定して変更できます。この場合、Snackbar は非表示になりません。Snackbar の [`close()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#close) メソッドを使用して、コードでコンポーネントを閉じることができます。

```html
<!--sample.component.html-->

<button igxButton="contained" (click)="snackbar.open()">Send message</button>
<div>
  <igx-snackbar #snackbar [autoHide]="false" actionText="CLOSE" (clicked)="close(snackbar)">Message sent</igx-snackbar>
</div>
```

```typescript
// sample.component.ts

public close(element) {
    element.close();
}
```

サンプルを正しく構成した後、ボタンをクリックするとメッセージおよびアクション ボタンを含む Snackbar が表示されます。自動的に隠す機能が無効で、[CLOSE] ボタンのクリックで Snackbar が非表示になります。別のスナックバーが [`open()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#open) メソッドを介して別のメッセージを渡し、**表示時間**が終了すると非表示にします。3 番目のコンポーネントは、メッセージをパラメーターとして [`open()`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#open) メソッドに渡し、コンテンツ プロジェクションを使用してアイコンを追加します。

<code-view style="height: 230px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-2" >
</code-view>

### 表示時間
[`displayTime`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#displayTime) でミリ秒間隔に設定し、Snackbar コンポーネントが表示される時間を設定します。デフォルトでは 4000 ミリ秒に設定されています。 

### Snackbar のカスタマイズ
Snackbar の内容をカスタマイズして、メッセージやボタンよりも複雑な要素を表示することもできます。たとえば、ファイルの読み込み中にスナックバーを表示したい場合は、読み込みアニメーションをそのコンテンツに追加することができます。

```html
<!--sample.component.html-->
<button igxButton="contained" (click)="snackbar.open()">Load file</button>
<div>
  <igx-snackbar #snackbar displayTime="5000">File loading
    <svg id="dots" height="20px">
        <g id="dots" fill="#FFFFFF">
            <circle id="dot1" cx="5" cy="18" r="2"></circle>
            <circle id="dot2" cx="15" cy="18" r="2"></circle>
            <circle id="dot3" cx="25" cy="18" r="2"></circle>
        </g>
    </svg>
  </igx-snackbar>
</div>
```

```scss
//sample.component.scss
#dots #dot1 {
    animation: load 1s infinite;
}

#dots #dot2 {
    animation: load 1s infinite;
    animation-delay: 0.2s;
}

#dots #dot3 {
    animation: load 1s infinite;
    animation-delay: 0.4s;
}

@keyframes load {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
}
```

結果としてメッセージと 3 つのローディング ドットがスナックバーに表示されます。


<code-view style="height: 170px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-5" >
</code-view>


### リストの Snackbar
Snackbar の主な機能を説明しました。次の例はより複雑なサンプルにコンポーネントを追加します。通知およびアクションの元に戻す機能を提供する Snackbar を作成します。

削除可能な連絡先のリストを作成します。項目を削除後、メッセージおよびアクションを元に戻すボタンを含む Snackbar が表示されます。

```html
<!--sample.component.html-->
<igx-list>
    <igx-list-item [isHeader]="true">Contacts</igx-list-item>

    <igx-list-item igxRipple="pink" igxRippleTarget=".igx-list__item" *ngFor="let item of navItems">
        <div class="item-container">
            <div class="contact">
                <igx-avatar [src]="item.avatar" shape="circle"></igx-avatar>
                <div class="contact__info">
                    <span class="name">{{item.text}}</span>
                </div>
            </div>
            <span igxIconButton="flat" igxRipple igxRippleCentered="true" (click)="delete(item)">
                <igx-icon [style.color]="'#ff5252'">delete</igx-icon>
            </span>
        </div>

    </igx-list-item>

    <igx-snackbar actionText="Undo" (clicked)="restore()">Contact deleted</igx-snackbar>
</igx-list>
```

```typescript
//sample.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent } from 'igniteui-angular';
// import { IgxSnackbarComponent } from '@infragistics/igniteui-angular'; for licensed package
...
@ViewChild(IgxSnackbarComponent)
public snackbar: IgxSnackbarComponent;
public navItems: any[];
public deletedItems = [];

constructor() { }

public ngOnInit() {
    this.navItems = [
        { avatar: 'assets/images/avatar/2.jpg', text: 'Richard Mahoney'},
        { avatar: 'assets/images/avatar/4.jpg', text: 'Lisa Landers' },
        { avatar: 'assets/images/avatar/14.jpg', text: 'Marianne Taylor' },
        { avatar: 'assets/images/avatar/17.jpg', text: 'Ward Riley' }
    ];
}

public delete(item) {
    this.deletedItems.push([item, this.navItems.indexOf(item)]);
    this.navItems.splice(this.navItems.indexOf(item), 1);
    this.snackbar.open();
}

public restore() {
    const [item, index] = this.deletedItems.pop();
    this.navItems.splice(index, 0, item);
    this.snackbar.close();
}
```

<code-view style="height: 350px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-sample-4" >
</code-view>

### 配置
[`positionSettings`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html#positionSettings) プロパティを使用すると、Snackbar の表示位置を構成します。デフォルトで、ページの下に表示されます。以下のサンプルで、通知が上位置に表示されます。

```html
<!--sample.component.html-->
<button igxButton="contained" (click)="open(snackbar)">Show notification on top</button>
<igx-snackbar #snackbar>Notification displayed</igx-snackbar>
```

```typescript
// sample.component.ts
import { VerticalAlignment, HorizontalAlignment } from 'igniteui-angular';
// import { VerticalAlignment, HorizontalAlignment } from '@infragistics/igniteui-angular'; for licensed package
...
public open(snackbar) {
    snackbar.positionSettings.verticalDirection = VerticalAlignment.Top;
    snackbar.positionSettings.horizontalDirection = HorizontalAlignment.Right;
    snackbar.open();
}
...
```

## スタイル設定
スナックバーのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する index ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`snackbar-theme`]({environment:sassApiUrl}/index.html#function-snackbar-theme) を拡張する新しいテーマを作成し、`$text-color`、`$background`、`$button-color`、`$border-radius` パラメーターを受け取る方法です。

```scss
$dark-snackbar: snackbar-theme(
    $text-color: #FFCD0F,
    $background: #292826,
    $button-color: #FFCD0F,
    $border-radius: 12px
);
```

### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマを含めます。

`$legacy-support` が `true` に設定されている場合、**コンポーネントのテーマ**を以下のように含めます。

```scss
 @include snackbar($igx-snackbar-theme);
```
>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
     ::ng-deep {
        @include snackbar($igx-snackbar-theme);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include css-vars($igx-snackbar-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](./themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include css-vars($igx-snackbar-theme);
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: palette($primary: $black-color, $secondary: $yellow-color);
```

また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。 

```scss
$dark-snackbar: snackbar-theme(
    $text-color: color($dark-palette, "secondary", 400),
    $background: color($dark-palette, "primary", 400),
    $button-color: color($dark-palette, "secondary", 400),
    $border-radius: 12px
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](themes/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法のことです。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`dark-snackbar`]({environment:sassApiUrl}/index.html#variable-_dark-snackbar) の 1 つを拡張します。 

```scss
//  Extending the dark snackbar schema
$dark-snackbar-schema: extend($_dark-snackbar,
    (
        text-color:(
           color: ("secondary", 400)
        ),
        background: (
           color: ("primary", 400)
        ),
        button-color: (
           color: ("secondary", 400)
        ),
        border-radius: 12px
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
   snackbar: $dark-snackbar-schema
));

// Defining snackbar theme with the global dark schema
$dark-snackbar: snackbar-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ


<code-view style="height: 150px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/notifications/snackbar-style" >
</code-view>


<div class="divider--half"></div>

## API リファレンス
このトピックでは、[`IgxSnackbarComponent`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html) を使用と構成方法を説明しました。API の詳細については以下のリンク先を参照してください。

* [`IgxSnackbarComponent`]({environment:angularApiUrl}/classes/igxsnackbarcomponent.html)

スタイル:

* [`IgxSnackbarComponent スタイル`]({environment:sassApiUrl}/index.html#function-snackbar-theme)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

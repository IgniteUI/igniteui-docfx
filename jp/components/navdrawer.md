---
title: Navigation Drawer コンポーネント
_description: Ignite UI for Angular Navigation Drawer コンポーネントは、コードでスライド イン/アウト ナビゲーション コンテナーの実装が可能です。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Navigation Drawer コンポーネント, Angular Navigation Drawer コントロール
_language: ja
---

# Navigation Drawer
<p class="highlight">Ignite UI for Angular Navigation Drawer コンポーネントはサイド ナビゲーション コンテナーです。コンテンツの上からスライドインまたはスライドアウト、もしくはコンテンツ内で展開/縮小するためにピン固定できます。 ミニ バージョンが閉じている場合もナビゲーションへのクイック アクセスを提供します。Navigation Drawer はレスポンシブ モード選択およびタッチ ジェスチャをサポートします。コンテンツは、デフォルトのメニュー項目スタイル設定を使用する他、カスタマイズも可能です。</p>
<div class="divider"></div>

## Angular Navigation Drawer の例
<div class="divider--half"></div>


<code-view style="height: 500px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-simple" alt="Angular Navigation Drawer 例">
</code-view>


<div class="divider--half"></div>

## 依存関係

>[!NOTE]
>このコンポーネントでは、タッチ操作が正しく動作するために、アプリケーションのルート モジュールに [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) をインポートする必要があります。 

必要となるすべての依存関係を含むために `IgxNavigationDrawerModule` を使用して、'igniteui-angular/navigation-drawer' からアプリケーションにインポートします。
```ts
@NgModule({
    imports: [
        IgxNavigationDrawerModule,
        ...
    ]
})
export class AppModule {
}
```

> または、両方のモジュールで [`IgxNavigationDrawerComponent`]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html) および追加のディレクティブをエクスポートするため、必要に応じてそれを別に宣言/参照できます。

<div class="divider--half"></div>

## 使用方法

依存関係をインポートした後、Navigation Drawer をコンポーネントのテンプレートで定義できます。

```html
<igx-nav-drawer id="navdrawer" [isOpen]="true">
    <!-- template(s) -->
</igx-nav-drawer>
```
Drawer のコンテンツを igxDrawer ディレクティブでデコレートした <ng-template> で設定します。
任意のコンテンツをテンプレートに設定できますが、[`igxDrawerItem`]({environment:angularApiUrl}/classes/igxnavdraweritemdirective.html) ディレクティブ ([項目のスタイル](#項目のスタイル)を参照) が定義済みのスタイル設定を項目に適用します。 
このディレクティブに 2 つの `@Input` プロパティがあります。
- `active` - 項目を選択済みとしてスタイル設定します。
- `isHeader` - 項目をグループ ヘッダーとしてスタイル設定します。active に設定できません。

[`igxRipple`](ripple.md) ディレクティブは使用感を向上します。

```html
<!-- app.component.html -->
<div class="content-wrap">
  <igx-nav-drawer id="navigation" #drawer [isOpen]="true">
    <ng-template igxDrawer>
      <nav>
        <span igxDrawerItem [isHeader]="true">Components</span>
        <span *ngFor="let item of navItems" igxDrawerItem [active]="item.text === selected"
        igxRipple (click)="navigate(item)">
          <igx-icon fontSet="material">{{ item.name }}</igx-icon>
          <span>{{ item.text }}</span>
        </span>
      </nav>
    </ng-template>
  </igx-nav-drawer>
  <main>
    <!-- app content -->
  </main>
</div>
```
> `igxDrawerMini` ディレクティブでデコレートした追加のテンプレートを閉じた状態の代わりの [Mini バリアント](#ミニ-バリアント)として提供できます。 

> [!NOTE]
> Navigation Drawer はコンテンツの上にフローティングさせるか、隣に固定配置できます。デフォルトでは、ドロワーはビューポートのサイズに応じてこれらのモードを切り替えます。詳細は [モード](#モード) を参照してください。

モードの間に切り替えるため、2 つのコンテンツ セクションの周りに簡易なラッパーを以下のようにスタイルできます。
```css
/* app.component.css */
.content-wrap
{
    width: 100%;
    height: 100%;
    display: flex;
}
```

Navigation drawer に要素を追加して選択するためには、typescript ファイルを次のようにします。 

```ts
/* app.component.ts */
export class AppComponent {
    public navItems = [
        { name: "account_circle", text: "Avatar" },
        ...
    ];

    public selected = "Avatar";

    public navigate(item) {
        this.selected = item.text;
    }
}
```
Drawer を開く/閉じる方法が複数あります。入力プロパティをアプリケーション状態にバインドするか、[`@ViewChild(IgxNavigationDrawerComponent)`](https://angular.io/api/core/ViewChild) 参照を使用してコンポーネントの API へコードでアクセス、あるいはこのような場合では `#drawer` [テンプレート参照変数](https://angular.io/guide/template-syntax#ref-vars)を使用できます。
```html
<button (click)="drawer.toggle()"> Menu </button>
```
Navigation Drawer は [`igxNavigationService`]({environment:angularApiUrl}/classes/igxnavigationservice.html) とも統合し、[`igxToggleAction`](toggle.md#トグル自動操作) ディレクティブで id によって対象にされます。

**app.component.html** の `<main>` を以下のコードと置き換えます。トグルをスタイル設定するために [`igxButton`](button.md) および [Icon コンポーネント](icon.md)を追加します。
```html
<main>
  <span igxButton="icon" igxToggleAction="navigation">
    <igx-icon fontSet="material">menu</igx-icon>
  </span>
</main>
```

また、ドロワーから項目を選択した際にドロワーを閉じる場合は、次のように [`@ViewChild(IgxNavigationDrawerComponent)`](https://angular.io/api/core/ViewChild) 参照を使用できます。 

```ts
/* app.component.ts */
import { Component, ViewChild } from "@angular/core";
import { IgxNavigationDrawerComponent } from "igniteui-angular";

...

export class AppComponent  {
    @ViewChild(IgxNavigationDrawerComponent, { static: true })
    public drawer: IgxNavigationDrawerComponent;

    // And of couse add the key line to our navigate function

    public navigate(item) {
        this.selected = item.text;
        this.drawer.close();
    }
}
```

すべて適切に設定できると、ブラウザ上でデモサンプルを確認することができます。 

<div class="divider--half"></div>

## モード

ピン固定されていないモード (コンテンツの上に配置) は標準の動作です。Drawer は上に配置され、すべてのコンテンツの上に暗いオーバーレイを適用します。モバイル デバイスで使用される一時的なナビゲーションを提供するために使用されます。

より大きい画面に Drawer をピン固定すると、相対的な位置を使用して通常のコンテンツ フローで配置されます。アプリケーションに Drawer を切り替える方法を提供するかどうかにより、ピン固定モードを使用して、[確定または永続的な動作](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-behavior)を実装できます。

> [!NOTE]
> Navigation Drawer はデフォルトでレスポンシブです。画面サイズに基づいて固定解除および固定モード間で切り替わります。この動作は [`pinThreshold`]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html#pinthreshold) プロパティによって制御され、falsy 値 (0 など) を設定すると無効になります。


### ピン固定 (persistent) モード
ピン固定は、コンテンツと同じフローに配置するために、Drawer の位置を `fixed` から `relative` に変更します。従って、このモードで Drawer を切り替える必要がある場合、アプリケーションのスタイル設定を切り替えるためにレイアウトをデザインする必要があります。流動レイアウトを実装するには、[`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) および [`igxFlex`]({environment:angularApiUrl}/classes/igxflexdirective.html) ディレクティブを使用します。

上記の例に適用すると以下のようになります。
```html
<div class="content-wrap" igxLayout igxLayoutDir="row">
    <igx-nav-drawer id="navigation" #drawer [isOpen]="true" [pin]="true" [pinThreshold]="0">
        <!-- template(s) -->
    </igx-nav-drawer>
    <main igxFlex>
        <!-- content here -->
    </main>
</div>
```
```css
.content-wrap {
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```

結果は以下のようになります。


<code-view style="height: 500px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-pin" >
</code-view>


Drawer は `flex-basis` をホスト要素に適用すると、残りのコンテンツが残りの幅に合わせます。
代わりに、ディレクティブを使用せずに以下の手動的なスタイルを適用できます。
```css
.main {
    position: absolute;
    display: flex;
    flex-flow: row nowrap;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
}

.main > * {
    width: 100%;
}
```

### ミニ バリアント
ミニ バリアントを使用する場合、Navigation Drawer を閉じる代わりに幅を変更します。
サイドでクイック選択を利用可能にするためにアイコンが常に表示されます。
このバリアントを使用するには、`igxDrawerMini` ディレクティブでデコレートしたミニ テンプレートを設定します。

通常、ミニ バリアントが persistent セットアップで使用されるため、`pin` を設定し、レスポンシブしきい値を無効にしました。
```html
<igx-nav-drawer id="navigation" [pin]="true" [pinThreshold]="0">
    <ng-template igxDrawer>
        <span *ngFor="let item of navItems" igxDrawerItem [active]="item.text === selected" igxRipple (click)="navigate(item)">
          <igx-icon fontSet="material">{{ item.name }}</igx-icon>
          <span>{{ item.text }}</span>
        </span>
    </ng-template>
    <ng-template igxDrawerMini>
        <span *ngFor="let item of navItems" igxDrawerItem [active]="item.text === selected" igxRipple (click)="navigate(item)">
            <igx-icon fontSet="material">{{ item.name }}</igx-icon>
        </span>
    </ng-template>
</igx-nav-drawer>
```


<code-view style="height: 400px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-mini" >
</code-view>


<div class="divider--half"></div>

## Angular Router の使用

Angular Router を使用するには、最初に `@angular/router` から git をインポートし、コンストラクターでルーターのインスタンスを作成する必要があります。次に、リンク値にルーターを使用して、ナビゲーション項目を定義します。

```typescript
/* app.component.ts */
 ...

export class AppComponent {
    public componentLinks = [
        {
            link: "avatar",
            name: "Avatar"
        },
        {
            link:  "badge",
            name: "Badge"
        },
        {
            link:  "button-group",
            name: "Button Group"
        }
    ];
}
```

テンプレート変数に割り当てられている `routerLinkActive` を使用でき、その `isActive` プロパティを使用して、`igxDrawerItem` の `active` 入力にバインドできます。`<igx-nav-drawer>` テンプレートは以下のようになります。
```html
/* app.component.html */

<!-- ... -->
<ng-template igxDrawer>
    <nav>
        <span igxDrawerItem [isHeader]="true">Components</span>

        <span *ngFor="let item of componentLinks" routerLink="{{item.link}}"
            routerLinkActive #rla="routerLinkActive"
            igxDrawerItem igxRipple [active]="rla.isActive">
                {{item.name}}
        </span>
    </nav>
</ng-template>
<!-- ... -->
```
最後に、`app.module.ts` ファイルに項目のルートと共に RouterModule をインポートします。

```ts
/*app.module.ts*/
import { RouterModule } from "@angular/router";

@NgModule([
    ...
    imports: [
        ...
        RouterModule,
		RouterModule.forRoot([
            {path: "avatar", component: NavDrawerRoutingComponent},
            {path: "badge", component: NavDrawerRoutingComponent},
            {path: "button-group", component: NavDrawerRoutingComponent}
        ])
        ...
    ]
])
```
上記の手順が完了した後に、アプリは以下のようになります。


<code-view style="height: 400px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-routing" >
</code-view>


<div class="divider--half"></div>

## スタイル設定
Navigation drawer のスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法は、[`igx-navdrawer-theme`]({environment:sassApiUrl}/index.html#function-igx-navdrawer-theme) を拡張する新しいテーマを作成し、navdrawer の項目をスタイル設定するいくつかのパラメーターを受け取る方法です。

```scss
$custom-theme: igx-navdrawer-theme(
    $background: #2d313a,
    $item-active-background: #ecc256,
    $item-header-text-color: #ecc256
);
```
ご覧のとおり、`igx-navdrawer-theme` は、アイテムの基本的なスタイル設定に役立ついくつかのパラメーターを公開しています。

### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマをアプリケーションに**含めます**。

`$legacy-support` が `true` に設定されている場合、**コンポーネントのテーマ**を以下のように含めます。

```scss
 @include igx-navdrawer($custom-theme);
```
>[!NOTE]
>コンポーネントが [`Emulated`](./themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-navdrawer($custom-theme);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include igx-css-vars($custom-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](./themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include igx-css-vars($custom-theme);
}
```


<code-view style="height: 400px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-styling" >
</code-view>


<div class="divider--half"></div>

## API とスタイル リファレンス

* [IgxNavigationDrawerComponent API]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html)
* [IgxNavigationDrawerComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-navdrawer-theme)

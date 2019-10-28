---
title: Navigation Drawer コンポーネント
_description: Ignite UI for Angular Navigation Drawer コンポーネントは、コードでスライド イン/アウト ナビゲーション コンテナーの実装が可能です。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Navigation Drawer コンポーネント, Angular Navigation Drawer コントロール
_language: ja
---

## Navigation Drawer

<p class="highlight">Ignite UI for Angular Navigation Drawer コンポーネントはサイド ナビゲーション コンテナーです。コンテンツの上からスライドインまたはスライドアウト、コンテンツ内で展開/縮小するためにピン固定できます。ミニ バージョンが閉じている場合もナビゲーションへのクイック アクセスを提供します。Navigation Drawer はレスポンシブ モード選択およびタッチ ジェスチャをサポートします。コンテンツは、デフォルトのメニュー項目スタイル設定を使用する他、カスタマイズも可能です。</p>
<div class="divider"></div>

### Navigation Drawer デモ

<div class="sample-container loading" style="height: 600px">
    <iframe id="nav-drawer-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/menus/navigation-drawer" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-drawer-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係

Navigation Drawer コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

必要となるすべての依存関係を含むために `IgxNavigationDrawerModule` を使用して、'igniteui-angular/navigation-drawer' からアプリケーションにインポートします。
```
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

### 使用方法

依存関係をインポートした後、Navigation Drawer をコンポーネントのテンプレートで定義できます。

```html
<igx-nav-drawer id="navdrawer" [isOpen]="true">
    <!-- template(s) -->
</igx-nav-drawer>
```

Drawer のコンテンツを `igxDrawer` ディレクティブでデコレートした `<ng-template>` で設定します。
任意のコンテンツをテンプレートに設定できますが、[`igxDrawerItem`]({environment:angularApiUrl}/classes/igxnavdraweritemdirective.html) ディレクティブ ([項目のスタイル設定](#項目のスタイル)を参照) が定義済みのスタイル設定を項目に適用します。[`igxRipple`](ripple.md) ディレクティブはルックアンドフィールを向上します。

```html
<!-- app.component.html -->
<div class="content-wrap">
  <igx-nav-drawer id="navigation" #drawer [isOpen]="true">
    <ng-template igxDrawer>
      <nav>
        <span igxDrawerItem [isHeader]="true"> Email Account </span>
        <span igxDrawerItem igxRipple> Inbox </span>
        <span igxDrawerItem igxRipple [active]="true"> Drafts </span>
        <span igxDrawerItem igxRipple> Sent </span>
        <span igxDrawerItem [isHeader]="true"> Folders </span>
        <span igxDrawerItem igxRipple> Deleted </span>
        <span igxDrawerItem igxRipple> Archive </span>
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
> Navigation Drawer をコンテンツの上または隣に固定配置できます。デフォルトで、ビュー サイズに基づいてその配置の間に切り替えます。詳細については、「[モード](#モード)」を参照してください。

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

結果は以下のようになります。

<div class="sample-container loading" style="height: 500px">
    <iframe id="nav-drawer-simple-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/menus/navigation-drawer-simple" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-drawer-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### モード

ピン固定されていないモード (コンテンツの上に配置) は標準の動作です。Drawer は上に配置され、すべてのコンテンツの上に暗いオーバーレイを適用します。モバイル デバイスで使用される一時的なナビゲーションを提供するために使用されます。

より大きい画面に Drawer をピン固定すると、相対的な位置を使用して通常のコンテンツ フローで配置されます。アプリケーションに Drawer を切り替える方法を提供するかどうかにより、ピン固定モードを使用して、[確定または永続的な動作](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-behavior)を実装できます。

> [!NOTE]
> Navigation Drawer はデフォルトでレスポンシブです。画面サイズに基づいて固定解除および固定モード間で切り替わります。この動作は [`pinThreshold`]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html#pinthreshold) プロパティによって制御され、falsy 値 (0 など) を設定すると無効になります。


#### ピン固定 (persistent) モード

ピン固定は、コンテンツと同じフローに配置するために、Drawer の位置を `fixed` から `relative` に変更します。従って、このモードで Drawer を切り替える必要がある場合、アプリケーションのスタイル設定を切り替えるためにレイアウトをデザインする必要があります。流動レイアウトを実装するには、[`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) および [`igxFlex`]({environment:angularApiUrl}/classes/igxflexdirective.html) ディレクティブを使用します。

上記の例に適用すると以下のようになります。

```html
<div class="content-wrap" igxLayout igxLayoutDir="row">
    <igx-nav-drawer id="navigation" #drawer [isOpen]="true">
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
}
```

<div class="sample-container loading" style="height: 500px">
    <iframe id="nav-drawer-pin-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/menus/navigation-drawer-pin" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-drawer-pin-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

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

#### ミニ バリアント

ミニ バリアントを使用する場合、Navigation Drawer を閉じる代わりに幅を変更します。サイドでクイック選択を利用可能にするためにアイコンが常に表示されます。このバリアントを使用するには、`igxDrawerMini` ディレクティブでデコレートしたミニ テンプレートを設定します。

通常、ミニ バリアントが persistent セットアップで使用されるため、`pin` を設定し、レスポンシブしきい値を無効にしました。

```html
<igx-nav-drawer id="navigation" [pin]="true" [pinThreshold]="0">
  <ng-template igxDrawer>
      <span igxDrawerItem [isHeader]="true"> Header </span>
      <span igxDrawerItem igxRipple> 
          <igx-icon fontSet="material">home</igx-icon>
          <span>Home</span>
      </span>
  </ng-template>
  <ng-template igxDrawerMini>
      <span igxDrawerItem igxRipple> 
          <igx-icon fontSet="material">home</igx-icon>
      </span>
  </ng-template>
</igx-nav-drawer>
```

<div class="sample-container loading" style="height: 400px">
    <iframe id="nav-drawer-mini-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/menus/navigation-drawer-mini" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-drawer-mini-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### 項目のスタイル

Navigation Drawer のコンテンツをテンプレートに設定します。ナビゲーション項目の規格リストを使用するシナリオの場合、スタイル設定するためにオプションの [`igxDrawerItem`]({environment:angularApiUrl}/classes/igxnavdraweritemdirective.html) ディレクティブを使用できます。項目にデフォルト スタイル設定およびパターン、さらに適切なテーマ色を適用します。

このディレクティブに 2 つの `@Input` プロパティがあります。
- `active` - 項目を選択済みとしてスタイル設定します。
- `isHeader`- 項目をグループ ヘッダーとしてスタイル設定します。active に設定できません。

```html
<!-- ... -->
<ng-template igxDrawer>
    <span igxDrawerItem [isHeader]="true"> Header </span>
    <span igxDrawerItem [active]="true"> Selected Item </span>
<!-- ... -->
```

ディレクティブはメイン `IgxNavigationDrawerModule` からエクスポートされ、`IgxNavDrawerItemDirective` として個別にエクスポートされます。

<div class="divider--half"></div>

#### 事例: Angular ルーターでデフォルト項目スタイルの使用

項目をスタイル設定するために [`igxDrawerItem`]({environment:angularApiUrl}/classes/igxnavdraweritemdirective.html) ディレクティブを使用するには、`active` 入力を標準に設定しますが、ルーティングの場合、その状態が外部に制御されます。

`app.component.ts` に定義される以下の項目があります。

```typescript
export class AppComponent {
    public componentLinks = [
        {
            link: "/avatar",
            name: "Avatar"
        },
        {
            link: "/badge",
            name: "Badge"
        }
        // ...
    ];
}
```

アクティブ状態に接続するには、[`routerLinkActive`](https://angular.io/api/router/RouterLinkActive) デフォルト機能を直接使用し、Drawer 項目のアクティブ クラス `igx-nav-drawer__item--active` を渡します。`<igx-nav-drawer>` テンプレートは以下のようになります。 

```html
<!-- ... -->
<ng-template igxDrawer>
    <nav>
        <span *ngFor="let item of componentLinks" routerLink="{{item.link}}"
            igxDrawerItem igxRipple 
            routerLinkActive="igx-nav-drawer__item--active" >
                {{item.name}}
        </span>
    </nav>
</ng-template>
<!-- ... -->
```

この方法は実際のディレクティブのアクティブ状態に影響しませんが、スタイルが変更されると影響される場合があります。その代わり、`routerLinkActive` を使用して、テンプレート変数に割り当て、`isActive` をバインディングで使用します。

```html
<!-- ... -->
<ng-template igxDrawer>
    <nav>
        <span *ngFor="let item of componentLinks" routerLink="{{item.link}}"
            routerLinkActive #rla="routerLinkActive"
            igxDrawerItem igxRipple [active]="rla.isActive">
                {{item.name}}
        </span>
    </nav>
</ng-template>
<!-- ... -->
```

<div class="divider--half"></div>

### API 参照
* [IgxNavigationDrawerComponent]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html)

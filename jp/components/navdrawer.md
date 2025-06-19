---
title: Navigation Drawer コンポーネント
_description: Ignite UI for Angular Navigation Drawer コンポーネントは、コードでスライド イン/アウト ナビゲーション コンテナーの実装が可能です。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Navigation Drawer コンポーネント, Angular Navigation Drawer コントロール
_language: ja
---

# Angular Navigation Drawer (ナビゲーション ドロワー) コンポーネントの概要

<p class="highlight">Ignite UI for Angular Navigation Drawer コンポーネントはサイド ナビゲーション コンテナーです。コンテンツの上からスライドインまたはスライドアウト、もしくはコンテンツ内で展開/縮小するためにピン固定できます。ミニ バージョンが閉じている場合もナビゲーションへのクイック アクセスを提供します。Navigation Drawer はレスポンシブ モード選択およびタッチ ジェスチャをサポートします。コンテンツは、デフォルトのメニュー項目スタイル設定を使用する他、カスタマイズも可能です。</p>

## Angular Navigation Drawer の例
<div class="divider--half"></div>

<code-view style="height: 500px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-simple" alt="Angular Navigation Drawer 例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Navigation Drawer を使用した作業の開始

Ignite UI for Angular Navigation Drawer コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

はじめに、**app.module.ts** ファイルに `IgxNavigationDrawerModule` をインポートします。 

> [!NOTE]
> [`IgxNavigationDrawerComponent`]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html) はタッチ操作の [`BrowserAnimationsModule`](https://angular.io/api/platform-browser/animations/BrowserAnimationsModule) と [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) (**オプション**) に依存関係があり、これらも AppModule に追加する必要があります。

```typescript
// app.module.ts
...
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavigationDrawerModule } from 'igniteui-angular';
// import { IgxNavigationDrawerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxNavigationDrawerModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxNavigationDrawerComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_NAVIGATION_DRAWER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/navigation-drawer/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgFor } from '@angular/common';
import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxRippleDirective, IgxIconComponent } from 'igniteui-angular';
// import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxRippleDirective, IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <div class="content-wrap">
      <igx-nav-drawer [isOpen]="true">
        <ng-template igxDrawer>
            <span igxDrawerItem [isHeader]="true">Components</span>
            <span
              *ngFor="let item of navItems"
              igxDrawerItem
              [active]="item.text === selected"
              igxRipple
              (click)="navigate(item)"
            >
              <igx-icon fontSet="material">{{ item.name }}</igx-icon>
              <span>{{ item.text }}</span>
            </span>
        </ng-template>
      </igx-nav-drawer>
      <main>
        <!-- app content -->
      </main>
    </div>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [BrowserAnimationsModule, HammerModule, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxRippleDirective, IgxIconComponent, NgFor],
  /* or imports: [BrowserAnimationsModule, HammerModule, IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxIconComponent, IgxRippleDirective, NgFor] */
})
export class HomeComponent {
  public navItems: Product[];
}
```

Ignite UI for Angular Navigation Drawer モジュールまたはディレクティブをインポートしたので、`igx-nav-drawer` コンポーネントの使用を開始できます。

## Angular Navigation Drawer の使用

依存関係をインポートした後、Navigation Drawer をコンポーネントのテンプレートで定義できます。

```html
<igx-nav-drawer id="navdrawer" [isOpen]="true">
  <!-- template(s) -->
</igx-nav-drawer>
```

Drawer のコンテンツを `igxDrawer` ディレクティブでデコレートした `<ng-template>` で設定します。
任意のコンテンツをテンプレートに設定できますが、[`igxDrawerItem`]({environment:angularApiUrl}/classes/igxnavdraweritemdirective.html) ディレクティブ ([項目のスタイル](#スタイル設定)を参照) が定義済みのスタイル設定を項目に適用します。 
このディレクティブに 2 つの `@Input` プロパティがあります。

- `active` - 項目を選択済みとしてスタイル設定します。
- `isHeader` - 項目をグループ ヘッダーとしてスタイル設定します。active に設定できません。

[`igxRipple`](ripple.md) ディレクティブは使用感を向上します。

```html
<!-- app.component.html -->
<div class="content-wrap">
  <igx-nav-drawer id="navigation" #drawer [isOpen]="true">
    <ng-template igxDrawer>
        <span igxDrawerItem [isHeader]="true">Components</span>
        <span *ngFor="let item of navItems" igxDrawerItem [active]="item.text === selected" igxRipple (click)="navigate(item)">
          <igx-icon fontSet="material">{{ item.name }}</igx-icon>
          <span>{{ item.text }}</span>
        </span>
    </ng-template>
  </igx-nav-drawer>
  <main>
    <!-- app content -->
  </main>
</div>
```

> `igxDrawerMini` ディレクティブでデコレートした追加のテンプレートを閉じた状態の代わりの [Mini バリアント](#ミニ-バリアント)として提供できます。 

> [!NOTE]
> Navigation Drawer はコンテンツの上にフローティングさせるか、隣に固定配置できます。デフォルトでは、ドロワーはビューポートのサイズに応じてこれらのモードを切り替えます。詳細は[モード](#モード)を参照してください。

モードの間に切り替えるため、2 つのコンテンツ セクションの周りに簡易なラッパーを以下のようにスタイルできます。

```css
/* app.component.css */
.content-wrap {
  width: 100%;
  height: 100%;
  display: flex;
}
```

Navigation drawer に要素を追加して選択するためには、typescript ファイルを次のようにします。 

```ts
/* app.component.ts */
@Component({...})
export class AppComponent {
    public navItems = [
        { name: 'account_circle', text: 'Avatar' },
        ...
    ];

    public selected = 'Avatar';

    public navigate(item) {
        this.selected = item.text;
    }
}
```

Drawer を開く/閉じる方法が複数あります。入力プロパティをアプリケーション状態にバインドするか、[`@ViewChild(IgxNavigationDrawerComponent)`](https://angular.io/api/core/ViewChild) 参照を使用してコンポーネントの API へコードでアクセス、あるいはこのような場合では `#drawer` [テンプレート参照変数](https://angular.io/guide/template-syntax#ref-vars)を使用できます。

```html
<button (click)="drawer.toggle()">Menu</button>
```

Navigation Drawer は [`igxNavigationService`]({environment:angularApiUrl}/classes/igxnavigationservice.html) とも統合し、[`igxToggleAction`](toggle.md#トグル自動操作) ディレクティブで id によって対象にされます。

**app.component.html** の `<main>` を以下のコードと置き換えます。トグルをスタイル設定するために [`igxIconButton`](icon-button.md) および [Icon コンポーネント](icon.md)を追加します。
```html
<main>
  <span igxIconButton="flat" igxToggleAction="navigation">
    <igx-icon fontSet="material">menu</igx-icon>
  </span>
</main>
```

また、ドロワーから項目を選択した際にドロワーを閉じる場合は、次のように [`@ViewChild(IgxNavigationDrawerComponent)`](https://angular.io/api/core/ViewChild) 参照を使用できます。 

```ts
/* app.component.ts */
import { Component, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
// import { IgxNavigationDrawerComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({...})
export class AppComponent  {
    @ViewChild(IgxNavigationDrawerComponent, { static: true })
    public drawer: IgxNavigationDrawerComponent;

    // And of course add the key line to our navigate function

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
> Navigation Drawer はデフォルトでレスポンシブです。画面サイズに基づいて固定解除および固定モード間で切り替わります。この動作は [`pinThreshold`]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html#pinThreshold) プロパティによって制御され、falsy 値 (0 など) を設定すると無効になります。

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
            link: 'avatar',
            name: 'Avatar'
        },
        {
            link: 'badge',
            name: 'Badge'
        },
        {
            link: 'button-group',
            name: 'Button Group'
        }
    ];
}
```

テンプレート変数に割り当てられている `routerLinkActive` を使用でき、その `isActive` プロパティを使用して、`igxDrawerItem` の `active` 入力にバインドできます。`<igx-nav-drawer>` テンプレートは以下のようになります。

```html
/* app.component.html */

<!-- ... -->
<ng-template igxDrawer>
    <span igxDrawerItem [isHeader]="true">Components</span>

    <span
      *ngFor="let item of componentLinks"
      routerLink="{{item.link}}"
      routerLinkActive
      #rla="routerLinkActive"
      igxDrawerItem
      igxRipple
      [active]="rla.isActive">
       {{item.name}}
    </span>
</ng-template>
<!-- ... -->
```

最後に、`app.module.ts` ファイルに項目のルートと共に RouterModule をインポートします。

```ts
/*app.module.ts*/
import { RouterModule } from '@angular/router';

@NgModule([
    imports: [
        RouterModule,
		RouterModule.forRoot([
            {path: 'avatar', component: NavDrawerRoutingComponent},
            {path: 'badge', component: NavDrawerRoutingComponent},
            {path: 'button-group', component: NavDrawerRoutingComponent}
        ])
    ]
])
```

上記の手順が完了した後に、アプリは以下のようになります。

<code-view style="height: 400px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-routing" >
</code-view>

<div class="divider--half"></div>

## 階層ナビゲーション

`IgxNavigationDrawerComponent` を使用してマルチレベル階層ナビゲーションを作成するには、`igxDrawer` テンプレートの [IgxTreeComponent](tree.md) を使用できます。ツリーはアプリケーションの `Routes` オブジェクトから直接作成できます。以下はその方法です。

```html
<igx-nav-drawer [isOpen]="true" [enableGestures]="true" width="280px">
  <ng-template igxDrawer>
    <igx-tree>
      <igx-tree-node *ngFor="let route of routes">
        <a igxTreeNodeLink [routerLink]="route.path" routerLinkActive="route-selected-class">{{ route.data?.displayName }}</a>
        <igx-tree-node *ngFor="let child of route.children">
          <a igxTreeNodeLink [routerLink]="[route.path, child.path]" routerLinkActive="route-selected-class">{{ child.data?.displayName }}</a>
        </igx-tree-node>
      </igx-tree-node>
    </igx-tree>
  </ng-template>
</igx-nav-drawer>
```

> [!NOTE]
> この例では、`igxDrawerItem` を使用せずに、カスタム `igxDrawer` コンテンツ (この場合は `igx-tree`) を直接使用します。

```typescript
import { menusRoutes } from '../../menus-routing.module';

@Component({
  selector: 'app-nav-drawer-hierarchical',
  templateUrl: './nav-drawer-hierarchical.component.html',
  styleUrls: ['./nav-drawer-hierarchical.component.scss'],
})
export class NavDrawerHierarchicalComponent {
  public routes = menusRoutes;
}
```

この例では、`igx-tree` ノードでリンク テキストを可視化するために使用される `displayName` プロパティを含むカスタム ルーティング `data` でルートを生成します。以下は `Route` の例です。

```typescript
export const menusRoutes: Routes = [
  {
    component: NavDrawerHierarchicalComponent,
    path: 'navigation-drawer-hierarchical',
    data: { displayName: 'Hierarchical Drawer Menu' },
  },
];
```

ルートの `children` プロパティから抽出された子ルーティングもあります。このサンプルは 2 つの階層レベルを示していますが、ルーティングに複数の階層がある場合は、[ツリー ノード テンプレート](tree.md#テンプレート化)で 2 番目の下のレベルを定義するだけです。

> [!NOTE]
> 空のルート リダイレクト、エラー ルート、ページが見つからないなどの一部のルートは、可視化に直接適さない場合があることに注意してください。ツリーをルーティング オブジェクトにバインドする前に、コンポーネント ロジックでオブジェクトからそれらのルートを削除できます。

以下の例は、トピック名とリンクを含む定義済みデータを使用して、階層構造の機能を示しています。この構造により、ユーザーは機能的で詳細なナビゲーションを簡単に生成し、各要素をリンクとして表示するかインジケーターとして表示するかを定義することができます。

<code-view style="height: 400px; border: 1px solid #D4D4D4;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-hierarchical" >
</code-view>

<div class="divider--half"></div>

## スタイル設定

Navigation drawer のスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`navdrawer-theme`]({environment:sassApiUrl}/index.html#function-navdrawer-theme) を拡張する新しいテーマを作成し、navdrawer の項目をスタイル設定するいくつかのパラメーターを受け取る方法です。

```scss
$custom-theme: navdrawer-theme(
  $background: #2d313a,
  $item-active-background: #ecc256,
  $item-header-text-color: #ecc256,
);
```

ご覧のとおり、`navdrawer-theme` は、アイテムの基本的なスタイル設定に役立ついくつかのパラメーターを公開しています。

最後にコンポーネントのテーマをアプリケーションに**含めます**。

```scss
@include css-vars($custom-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、スタイルを適用するには `::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
  ::ng-deep { 
    @include css-vars($custom-theme);
  }
}
```        

<code-view style="height: 400px; border: 1px solid #D4D4D4;" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navigation-drawer-styling" >
</code-view>

<div class="divider--half"></div>

## API とスタイル リファレンス

* [IgxNavigationDrawerComponent API]({environment:angularApiUrl}/classes/igxnavigationdrawercomponent.html)
* [IgxNavigationDrawerComponent スタイル]({environment:sassApiUrl}/index.html#function-navdrawer-theme)

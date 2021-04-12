---
title: Tabs コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Tabs コンポーネントはタブを上側に配置し、複数のタブ項目がある場合にスクロールを許可します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コンポーネント, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Tabs コンポーネント, Angular Tabs コントロール, Angular Tabs
_language: ja
---

# Tabs

<p class="highlight">
Ignite UI for Angular [`igx-tabs`]({environment:angularApiUrl}/classes/igxtabscomponent.html) コンポーネントは、同様なデータ セットの体系化や切り替えに使用します。[`igx-tab-item`]({environment:angularApiUrl}/classes/igxtabitemcomponent.html) のラッパーとして機能し、それぞれデータのコンテナーおよびタブ ヘッダーを表します。Tabs コンポーネントは、タブを上側に配置して複数のタブ項目がある場合にスクロールを許可します。
</p>

## Angular Tabs の例


<code-view style="height: 250px; border: 1px solid #ededed;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-3" alt="Angular Tabs Example">
</code-view>

<div class="divider--half"></div>

## 使用方法

はじめに、**app.module.ts** ファイルに  `IgxTabsModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxTabsModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxTabsModule],
    ...
})
export class AppModule {}
```

We set the tabs header by providing content to [`igx-tab-header`]({environment:angularApiUrl}/classes/igxtabheader.html}). To set the tab's name we simply add a span with [`igxTabHeaderLabel`]({environment:angularApiUrl}/classes/igxtabheaderlabeldirective.html) directive. Any content that will appear as a tab item's content should be added between [`igx-tab-content`]({environment:angularApiUrl}/classes/igxtabcontent.html}) tags.

```html
<igx-tabs>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 1</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 1 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 2</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 2 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 3</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 3 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 4</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 4 content.
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <span igxTabHeaderLabel>Tab 5</span>
    </igx-tab-header>
    <igx-tab-content>
      This is Tab 5 content.
    </igx-tab-content>
  </igx-tab-item>
</igx-tabs>
```

サンプルを構成した後、結果は以下のようになります。


<code-view style="height: 200px; border: 1px solid #ededed;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-1" alt="Angular Tabs の例">
</code-view>


<div class="divider"></div>

## Tabs Alignment
`IgxTabs` [`tabAlignment`]({environment:angularApiUrl}/classes/igxtabscomponent.html#tabalignment) input property controls how tabs are positioned and arranged. It accepts four different values - start, center, end and justify.
- **Start** (default): the width of the tab header depends on the content (label, icon, both) and all tabs have equal padding. First tab is aligned to the tabs container left side.
- **Center**: the width of the tab header depends on the content and occupies the tabs container center. If the space is not enough to fit all items, scroll buttons are displayed.
- **End**: the width of the tab header depends on the content and all tabs have equal padding. Last tab is aligned to the tabs container right side.
- **Justify**: all tab headers are equal in width and fully fit the tabs container. If the space is not enough to fit all items, scroll buttons are displayed.


Sample below demostrates how tabs get aligned when switching between `tabAlignment` property values.

<code-view style="height: 250px; border: 1px solid #ededed"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-alignment" >
</code-view>


<div class="divider"></div>

## タブのカスタマイズ

タブに [`igxTabHeaderIcon`]({environment:angularApiUrl}/classes/igxtabheadericondirective.html) ディレクティブを追加します。`igx-tabs` コントロールはマテリアル デザイン [**アイコン**](https://material.io/icons/)と互換性があるため、アプリケーションにアイコンを簡単に追加できます。
> [!NOTE]
> If you haven't used the `igx-icon` in your application so far, please make sure to import the `IgxIconModule` in the **app.module.ts** before proceeding.

はじめに Material Icons をメイン アプリケーション フォルダーの 'styles.scss' ファイルにインポートします。Next, add `igx-icon` with [`igxTabHeaderIcon`]({environment:angularApiUrl}/classes/igxtabheadericondirective.html}) directive set, as a child of [`igx-tab-header`]({environment:angularApiUrl}/classes/igxtabheader.html}) .

```css
// styles.scss

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

```html
<igx-tabs>
  <igx-tab-item>
    <igx-tab-header>
        <igx-icon igxTabHeaderIcon>library_music</igx-icon>
        <span igxTabHeaderLabel>Albums</span>
    </igx-tab-header>
    <igx-tab-content>
        Albums
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
        <igx-icon igxTabHeaderIcon>favorite</igx-icon>
        <span igxTabHeaderLabel>Favorite</span>
    </igx-tab-header>
    <igx-tab-content>
        Favorite
    </igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
        <igx-icon igxTabHeaderIcon>info</igx-icon>
        <span igxTabHeaderLabel>Details</span>
    </igx-tab-header>
    <igx-tab-content>
        Details
    </igx-tab-content>
  </igx-tab-item>
</igx-tabs>

```

サンプルを正しく構成した場合、タブは以下の例のようになります。


<code-view style="height: 250px; border: 1px solid #ededed;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-3" >
</code-view>

<div class="divider--half"></div>

If setting the labels and icons is not enough, you can also provide your own custom content directly between [`igx-tab-header`]({environment:angularApiUrl}/classes/igxtabheader.html}) tags.

```html
<igx-tabs>
  <igx-tab-item>
    <igx-tab-header>
      <!-- your custom tab content goes here -->
      <div>
        <img src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg"
             width="80px" height="40px">
      </div>
    </igx-tab-header>
    <igx-tab-content>
      <h1>IgniteUI Rocks!</h1>
    </igx-tab-content>
  </igx-tab-item>
</igx-tabs>
```

You can also add you own custom tab header's prefix and suffix simply by using `igxPrefix` and `igxSuffix` directives. The sample below demonstrates how to add a tab with custom header content and prefix/suffix.

<code-view style="height: 250px; border: 1px solid #ededed;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-header-prefix-suffix" >
</code-view>

<div class="divider--half"></div>

## ルーター アウトレット コンテナとの統合

`igx-tabs` コンポーネントは、タブ 項目ごとにコンテンツが指定されたタブのリストとして使用することを目的としています。しかし、コンテンツがタブ コンテンツとは別のタブ項目を定義する場合があります。

タブ項目を定義する際にディレクティブを適用することができます。たとえば、この機能を使用して、Angular Router を使用してビュー間のナビゲーションを実現できます。次の例は、`igx-tabs` コンポーネントを構成して、単一の router-outlet で 3 つのコンポーネントを切り替える方法を示しています。

まず、`igx-tabs` コンポーネントを保持するメイン コンポーネントと、デモ用のコンテンツを含む 3 つのビュー コンポーネントが必要です。簡単にするために、ビュー コンポーネントには短いテンプレートがあります

```typescript
import { Component } from "@angular/core";

@Component({
    selector: "app-tabs-routing",
    styleUrls: ["tabs-routing.component.scss"],
    templateUrl: "tabs-routing.component.html"
})
export class TabsRoutingComponent { }

@Component({
    template: "<p>Tab 1 Content</p>"
})
export class TabsRoutingView1Component { }

@Component({
    template: "<p>Tab 2 Content</p>"
})
export class TabsRoutingView2Component { }

@Component({
    template: "<p>Tab 3 Content</p>"
})
export class TabsRoutingView3Component { }
```

次のステップでは、`app-routing.module.ts` ファイルに適切なナビゲーション マッピングを作成します。

```typescript
import { RouterModule, Routes } from "@angular/router";

import {
    TabsRoutingComponent,
    TabsRoutingView1Component,
    TabsRoutingView2Component,
    TabsRoutingView3Component
} from './tabs-routing.component';

...

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tabs-routing'
    },
    {
        path: 'tabs-routing',
        component: TabsRoutingComponent,
        children: [
            { path: 'view1', component: TabsRoutingView1Component },
            { path: 'view2', component: TabsRoutingView2Component },
            { path: 'view3', component: TabsRoutingView3Component },
        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
```

すべてのナビゲーション ルートがセットアップされたので、`igx-tabs` コンポーネントを宣言し、ルーティング用に構成する必要があります。ビュー コンポーネントをレンダリングするための router-outlet を必ず追加してください。

```html
<!-- tabs-routing.component.html -->

<igx-tabs #tabs1>
  <igx-tab-item
      routerLinkActive
      #rla1="routerLinkActive"
      [selected]="rla1.isActive"
  >
      <igx-tab-header routerLink="view1">
          <span igxTabHeaderLabel>Tab 1</span>
      </igx-tab-header>
  </igx-tab-item>
  <igx-tab-item
      routerLinkActive
      #rla2="routerLinkActive"
      [selected]="rla2.isActive"
  >
      <igx-tab-header routerLink="view2">
          <span igxTabHeaderLabel>Tab 2</span>
      </igx-tab-header>
  </igx-tab-item>
  <igx-tab-item
      routerLinkActive
      #rla3="routerLinkActive"
      [selected]="rla3.isActive"
  >
      <igx-tab-header routerLink="view3">
          <span igxTabHeaderLabel>Tab 3</span>
      </igx-tab-header>
  </igx-tab-item>
</igx-tabs>

<router-outlet></router-outlet>
```

上記のコードは、3 つのタブ項目を持つ `igx-tabs` コンポーネントを作成します。各タブ硬毛区のヘッダーには、ナビゲーションに使用されるルーティング リンクを指定するために使用される `RouterLink` ディレクティブが適用されています。リンクのいずれかがアクティブになると、`RouterLinkActive` ディレクティブの `isActive` プロパティにバインドされるため、対応するタブ項目の `selected` プロパティが設定されます。このようにして、選択したタブ項目は常に現在の URL パスと同期します。


<code-view style="height: 250px; border: 1px solid #ededed"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-4" >
</code-view>

> [!NOTE]
> Please note that the routerLink directive is set to the `igx-tab-header`, not directly to the `igx-tab-item`.


## スタイル設定

タブのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在するテーマ モジュールをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、[`igx-tabs-theme`]({environment:sassApiUrl}/index.html#function-igx-tabs-theme) を拡張する新しいテーマを作成し、タブグループのスタイルを設定できるさまざまなプロパティを受け取ります。

```scss
$dark-tabs: igx-tabs-theme(
    $item-text-color: #F4D45C,
    $item-background: #292826,
    $item-hover-background: #F4D45C,
    $item-hover-color: #292826,
    $item-active-color: #F4D45C,
    $item-active-icon-color: #F4D45C,
    $indicator-color: #F4D45C,
    $tab-ripple-color: #F4D45C
);
```

次に、[`igx-tabs-theme`]({environment:sassApiUrl}/index.html#function-igx-tabs-theme) を拡張する新しいテーマを作成し、タブグループのスタイルを設定できるさまざまなプロパティを受け取ります。

> [!NOTE]
> タブのコンテンツの一部として使用されるコンポーネントをスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成する必要があります。

最後にコンポーネントのテーマを**含めます**。

```scss
@include igx-css-vars($dark-tabs);
```

CSS 変数をサポートしないブラウザー (IE 11 など) をターゲットにしている場合、テーマ コンポーネント mixin を使用してデフォルト テーマを上書きできます。

```scss
:host {
  ::ng-deep {
    @include igx-tabs($dark-tabs);
  }
}
```
### パレットおよび色

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して色に関してより高い柔軟性を実現することができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #F4D45C;
$black-color: #292826;

$dark-palette: igx-palette(
  $primary: $black-color,
  $secondary: $yellow-color,
  $grays: #fff
);
```

[`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用して、パレットから簡単に取得することができます。

```scss
$dark-tabs: igx-tabs-theme(
    $palette: $dark-palette,
    $item-text-color: igx-color($dark-palette, "secondary", 400),
    $item-background: igx-color($dark-palette, "primary", 400),
    $item-hover-background: igx-color($dark-palette, "secondary", 400),
    $item-hover-color: igx-color($dark-palette, "primary", 400),
    $item-active-color: igx-color($dark-palette, "secondary", 400),
    $item-active-icon-color: igx-color($dark-palette, "secondary", 400),
    $indicator-color: igx-color($dark-palette, "secondary", 400),
    $tab-ripple-color: igx-color($dark-palette, "secondary", 400)
);
```


<code-view style="height: 250px; border: 1px solid #ededed"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-style" >
</code-view>


<div class="divider--half"></div>

## API リファレンス
<div class="divider"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxTabsComponent]({environment:angularApiUrl}/classes/igxtabscomponent.html)
* [IgxTabsComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-tabs-theme)
* [IgxTabItemComponent]({environment:angularApiUrl}/classes/igxtabitemcomponent.html)
* [IgxTabHeaderComponent]({environment:angularApiUrl}/classes/igxtabheadercomponent.html)
* [IgxTabContentComponent]({environment:angularApiUrl}/classes/igxtabcontentcomponent.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

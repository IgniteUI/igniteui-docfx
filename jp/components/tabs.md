---
title: Tabs コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Tabs コンポーネントはタブを上側に配置し、複数のタブ項目がある場合にスクロールを許可します。今すぐお試しください。
_keywords: Angular Tabs コンポーネント, Angular Tabs コントロール, Angular Tabs, Angular Tabbar コンポーネント, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コンポーネント, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# Angular Tabs (タブ) コンポーネントの概要
Ignite UI for Angular Tabs は、関連するコンテンツを 1 つのタブ付きビューで整理およびグループ化することを主な目的とするフル機能のユーザー インターフェース コンポーネントです。これにより、スペースを節約し、コンテンツをよりわかりやすくします。アニメーション、テンプレート化、カスタマイズ オプションなどのさまざまな機能がパックされています。

Angular のタブは、多くのコンテンツを含む Web ページをカテゴリに分類し、簡潔かつスペース効率の良い方法で表示する必要がある場合に非常に便利です。

<p class="highlight">

Ignite UI for Angular [`igx-tabs`]({environment:angularApiUrl}/classes/igxtabscomponent.html) コンポーネントは、同様なデータ セットの体系化や切り替えに使用します。[`igx-tab-item`]({environment:angularApiUrl}/classes/igxtabitemcomponent.html) のラッパーとして機能し、それぞれデータのコンテナーおよびタブ ヘッダーを表します。Angular Tabs コンポーネントは、タブを上側に配置して複数のタブ項目がある場合にスクロールを許可します。

</p>

## Angular Tabs の例

これは、一度に 1 つのビューしか表示できない別のタブ内に 1 つのタブがある Angular のネストされたタブの基本的な例です。Angular でネストされたタブを使用して、より適切で構造化された方法で情報を表示できます。

<code-view style="height: 250px; border: 1px solid #ededed;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-3" alt="Angular Tabs Example">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Tabs を使用した作業の開始

Ignite UI for Angular Tabs コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxTabsModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxTabsModule } from 'igniteui-angular';
// import { IgxTabsModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxTabsModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxTabsComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_TABS_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/tabs/tabs/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_TABS_DIRECTIVES } from 'igniteui-angular';
// import { IGX_TABS_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
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
    </igx-tabs>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_TABS_DIRECTIVES]
    /* or imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabContentComponent, IgxTabHeaderLabelDirective] */
})
export class HomeComponent {}
```

Ignite UI for Angular Tabs モジュールまたはディレクティブをインポートしたので、`igx-tabs` コンポーネントの使用を開始できます。

## Angular Tabs の使用

`igx-tab-header` にコンテンツを提供することにより、Angular Tabs ヘッダーを設定します。タブの名前を設定するには、`igxTabHeaderLabel` ディレクティブを使用してスパンを追加するだけです。タブ項目のコンテンツとして表示されるコンテンツは、`igx-tab-content` タグの間に追加する必要があります。

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

## Angular Tabs の配置
`IgxTabs` [`tabAlignment`]({environment:angularApiUrl}/classes/igxtabscomponent.html#tabAlignment) 入力プロパティは、タブの配置と配置の方法を制御します。start、center、end、justify の 4 つの異なる値を受け入れます。
- **Start** (デフォルト): タブ ヘッダーの幅はコンテンツ (ラベル、アイコン、両方) によって異なり、すべてのタブに同じパディングがあります。最初のタブは、タブ コンテナーの左側に配置されます。
- **Center**: タブ ヘッダーの幅はコンテンツによって異なり、タブ コンテナーの中央を占めます。スペースが足りない場合、スクロール ボタンが表示されます。
- **End** (デフォルト): タブ ヘッダーの幅はコンテンツによって異なり、すべてのタブに同じパディングがあります。最後のタブは、タブ コンテナーの右側に配置されます。
- **Justify**: すべてのタブ ヘッダーは幅が等しく、タブ コンテナーに完全に適合します。スペースが足りない場合、スクロール ボタンが表示されます。


以下のサンプルは、`tabAlignment` プロパティ値を切り替えるときにタブがどのように整列されるかを示しています。

<code-view style="height: 250px; border: 1px solid #ededed"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-alignment" >
</code-view>


<div class="divider"></div>

## Angular Tabs のカスタマイズ

タブに `igxTabHeaderIcon` ディレクティブを追加します。`igx-tabs` コントロールはマテリアル デザイン [**アイコン**](https://material.io/icons/)と互換性があるため、アプリケーションにアイコンを簡単に追加できます。
> [!NOTE]
> これまでアプリケーションで `igx-icon` を使用したことがない場合は、続行する前に必ず **app.module.ts** の `IgxIconModule` をインポートしてください。

はじめに Material Icons をメイン アプリケーション フォルダーの 'styles.scss' ファイルにインポートします。次に、`igx-tab-header` の子として、`igxTabHeaderIcon` ディレクティブが設定された `igx-icon` を追加します。 

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

ラベルとアイコンを設定するだけでは不十分な場合は、`igx-tab-header` タグの間に独自のカスタム コンテンツを直接提供することもできます。

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

`igxPrefix` および `igxSuffix` ディレクティブを使用するだけで、独自のカスタム タブ ヘッダーのプレフィックスとサフィックスを追加することもできます。以下のサンプルは、カスタム ヘッダー コンテンツとプレフィックス/サフィックスを含むタブを追加する方法を示しています。

<code-view style="height: 250px; border: 1px solid #ededed;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-header-prefix-suffix" >
</code-view>

<div class="divider--half"></div>

## ルーター アウトレット コンテナーとの統合

`igx-tabs` コンポーネントは、タブ 項目ごとにコンテンツが指定されたタブのリストとして使用することを目的としています。しかし、コンテンツがタブ コンテンツとは別のタブ項目を定義する場合があります。

タブ項目を定義する際にディレクティブを適用することができます。たとえば、この機能を使用して、Angular Router を使用してビュー間のナビゲーションを実現できます。次の例は、`igx-tabs` コンポーネントを構成して、単一の router-outlet で 3 つのコンポーネントを切り替える方法を示しています。

まず、`igx-tabs` コンポーネントを保持するメイン コンポーネントと、デモ用のコンテンツを含む 3 つのビュー コンポーネントが必要です。簡単にするために、ビュー コンポーネントには短いテンプレートがあります

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs-routing',
    styleUrls: ['tabs-routing.component.scss'],
    templateUrl: 'tabs-routing.component.html'
})
export class TabsRoutingComponent { }

@Component({
    template: '<p>Tab 1 Content</p>'
})
export class TabsRoutingView1Component { }

@Component({
    template: '<p>Tab 2 Content</p>'
})
export class TabsRoutingView2Component { }

@Component({
    template: '<p>Tab 3 Content</p>'
})
export class TabsRoutingView3Component { }
```

次のステップでは、`app-routing.module.ts` ファイルに適切なナビゲーション マッピングを作成します。

```typescript
import { RouterModule, Routes } from '@angular/router';

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
> routerLink ディレクティブは、直接 `igx-tab-item` ではなく、`igx-tab-header` に設定されていることに注意してください。


## スタイル設定

タブのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在するテーマ モジュールをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、[`tabs-theme`]({environment:sassApiUrl}/index.html#function-tabs-theme) を拡張する新しいテーマを作成し、タブグループのスタイルを設定できるさまざまなプロパティを受け取ります。

```scss
$dark-tabs: tabs-theme(
  $item-text-color: #f4d45c,
  $item-background: #292826,
  $item-hover-background: #f4d45c,
  $item-hover-color: #292826,
  $item-active-color: #f4d45c,
  $item-active-icon-color: #f4d45c,
  $indicator-color: #f4d45c,
  $tab-ripple-color: #f4d45c
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/index.html#function-palette) および [`color`]({environment:sassApiUrl}/index.html#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](themes/sass/palettes.md)のトピックをご覧ください。

次に、[`tabs-theme`]({environment:sassApiUrl}/index.html#function-tabs-theme) を拡張する新しいテーマを作成し、タブグループのスタイルを設定できるさまざまなプロパティを受け取ります。

> [!NOTE]
> タブのコンテンツの一部として使用されるコンポーネントをスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成する必要があります。

最後にコンポーネントのテーマを**含めます**。

```scss
@include css-vars($dark-tabs);
```

### デモ

<code-view style="height: 250px; border: 1px solid #ededed"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-style" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxTabsComponent]({environment:angularApiUrl}/classes/igxtabscomponent.html)
* [IgxTabsComponent スタイル]({environment:sassApiUrl}/index.html#function-tabs-theme)
* [IgxTabItemComponent]({environment:angularApiUrl}/classes/igxtabitemcomponent.html)
* [IgxTabHeaderComponent]({environment:angularApiUrl}/classes/igxtabheadercomponent.html)
* [IgxTabContentComponent]({environment:angularApiUrl}/classes/igxtabcontentcomponent.html)

## テーマの依存関係
* [IgxIcon テーマ]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxRipple テーマ]({environment:sassApiUrl}/index.html#function-ripple-theme)
* [IgxButton テーマ]({environment:sassApiUrl}/index.html#function-button-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

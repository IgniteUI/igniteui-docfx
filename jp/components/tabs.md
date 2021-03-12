---
title: Tabs コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Tabs コンポーネントはタブを上側に配置し、複数のタブ項目がある場合にスクロールを許可します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コンポーネント, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Tabs コンポーネント, Angular Tabs コントロール, Angular Tabs
_language: ja
---

# Tabs

<p class="highlight">
Ignite UI for Angular [`igx-tabs`]({environment:angularApiUrl}/classes/igxtabscomponent.html) コンポーネントは、同様なデータ セットの体系化や切り替えに使用します。[`igx-tab-item`]({environment:angularApiUrl}/classes/igxtabitemcomponent.html) および [`igx-tabs-group`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html) のラッパーとして機能し、データのコンテナーおよびタブ ヘッダーを表します。Tabs コンポーネントは、タブを上側に配置して複数のタブ項目がある場合にスクロールを許可します。
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

[`label`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html#label) 属性を使用してタブ名を設定します。`igx-tabs-group` タグの開始タグと終了タグの間に提供されるコンテンツは、それぞれのタブ グループにコンテンツとして表示されます。

```html
<igx-tabs>
  <igx-tabs-group label="Tab 1">This is Tab 1 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 2">This is Tab 2 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 3">This is Tab 3 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 4">This is Tab 4 content.</igx-tabs-group>
  <igx-tabs-group label="Tab 5">This is Tab 5 content.</igx-tabs-group>
</igx-tabs>
```

サンプルを構成した後、結果は以下のようになります。


<code-view style="height: 200px; border: 1px solid #ededed;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-1" alt="Angular Tabs の例">
</code-view>


<div class="divider"></div>

## Tabs タイプ
タブには、`fixed` および `contentfit` の 2 種類があります。[`type`]({environment:angularApiUrl}/classes/igxtabscomponent.html#type) 入力を設定してタブを選択します。
- **Content-fit タブ** (デフォルト): タブ ヘッダーの幅はコンテンツ (ラベル、アイコン、両方) に基づいて決定され、すべてのタブのパディングが等しくなります。
タブのタイプに関係なく、タブ ヘッダーの幅は指定した最小幅および最大幅によって制限されます。
- **Fixed タブ**: すべてのタブ ヘッダーは同じ幅を持ち、Tabs コンテナに完全に収まります。スペースが足りない場合、スクロール ボタンが表示されます。

```html
  <igx-tabs>
    <igx-tabs-group label="Home">Home content.</igx-tabs-group>
    <igx-tabs-group label="Recent Contacts">Recent contacts list.</igx-tabs-group>
    <igx-tabs-group label="More">More detailed contact information.</igx-tabs-group>
  </igx-tabs>

  <igx-tabs tabsType="fixed">
    <igx-tabs-group label="Home">Home content.</igx-tabs-group>
    <igx-tabs-group label="Recent Contacts">Recent contacts list.</igx-tabs-group>
    <igx-tabs-group label="More">More detailed contact information.</igx-tabs-group>
  </igx-tabs>
```


<code-view style="height: 450px; border: 1px solid #ededed" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-2" >
</code-view>


<div class="divider"></div>

## タブのカスタマイズ

タブに [`icon`]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html#icon) 入力を追加します。`igx-tabs` コントロールはマテリアル デザイン [**アイコン**](https://material.io/icons/)と互換性があるため、アプリケーションにアイコンを簡単に追加できます。

はじめに Material Icons をメイン アプリケーション フォルダーの 'styles.scss' ファイルにインポートします。

```css
// styles.scss

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

```html
<igx-tabs>
  <igx-tabs-group label="Albums" icon="library_music">
    Albums
  </igx-tabs-group>

  <igx-tabs-group label="Songs" icon="favorite">
    Songs
  </igx-tabs-group>

  <igx-tabs-group label="Details" icon="info">
    Details
  </igx-tabs-group>
</igx-tabs>
```

サンプルを正しく構成した場合、タブは以下の例のようになります。


<code-view style="height: 250px; border: 1px solid #ededed;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-3" >
</code-view>

<div class="divider--half"></div>

ラベルおよびアイコンの変更を拡張する場合、[`IgxTabItemTemplateDirective`]({environment:angularApiUrl}/classes/igxtabitemtemplatedirective.html) を使用して各タブ ヘッダーでカスタム テンプレートを提供することもできます。

```html
<igx-tabs>
    <igx-tabs-group>
        <ng-template igxTab>
            <div>
                <!-- your custom tab content goes here -->
            </div>
        </ng-template>
        <h1>Tab content</h1>
    </igx-tabs-group>
</igx-tabs>
```

## ルーター アウトレット コンテナとの統合

`igx-tabs` コンポーネントは、タブ グループごとにコンテンツが指定されたタブのリストとして使用することを目的としています。しかし、コンテンツがタブ グループとは別のタブ項目を定義する場合があります。。

> [!NOTE]
> タブ項目定義モードはタブ グループのコンテンツをサポートしていないことに注意してください。コンポーネントはタブ項目のストリップのみをレンダリングします。また、このコンポーネントでタブ項目定義とグループ定義を混合することはサポートされません。

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

<igx-tabs>
  <igx-tab-item
    label="Tab 1"
    icon="dashboard"
    routerLink="view1"
    routerLinkActive
    #rla1="routerLinkActive"
    [isSelected]="rla1.isActive"
  ></igx-tab-item>

  <igx-tab-item
    label="Tab 2"
    icon="check_circle_outline"
    routerLink="view2"
    routerLinkActive
    #rla2="routerLinkActive"
    [isSelected]="rla2.isActive"
  ></igx-tab-item>

  <igx-tab-item
    label="Tab 3"
    icon="radio-button_checked"
    routerLink="view3"
    routerLinkActive
    #rla3="routerLinkActive"
    [isSelected]="rla3.isActive"
  ></igx-tab-item>
</igx-tabs>

<router-outlet></router-outlet>
```

上記のコードは、3 つのタブ項目を持つ `igx-tabs` コンポーネントを作成します。すべてのタブ項目には、ナビゲーションに使用されるルーティング リンクを指定するために使用される `RouterLink` ディレクティブが適用されています。リンクのいずれかがアクティブになると、`RouterLinkActive` ディレクティブの `isActive` プロパティにバインドされるため、対応するタブ項目の `isSelected` プロパティが設定されます。このようにして、選択したタブ項目は常に現在の URL パスと同期します。


<code-view style="height: 250px; border: 1px solid #ededed" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/tabs-sample-4" >
</code-view>


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
> タブ グループのコンテンツの一部として使用されるコンポーネントをスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成する必要があります。

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

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxCardComponent]({environment:angularApiUrl}/classes/igxcardcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxTabsComponent]({environment:angularApiUrl}/classes/igxtabscomponent.html)
* [IgxTabsComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-tabs-theme)
* [IgxTabsGroupComponent]({environment:angularApiUrl}/classes/igxtabsgroupcomponent.html)
* [IgxTabItemComponent]({environment:angularApiUrl}/classes/igxtabitemcomponent.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

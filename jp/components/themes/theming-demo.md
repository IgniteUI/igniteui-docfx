---
title: テーマ
_description: Ignite UI for Angular は、SASS 機能と mixins でアプリケーション全体および特定部分を最小限のコードでスタイル設定できます。
_keywords: Ignite UI for Angular, Angular Theming コンポーネント, Angular Theming, Ignite UI for Angular コンポーネント, Ignite for Agular Themes, グローバル テーマ, コンポーネント テーマ
_language: ja
---

## テーマ
**Ignite UI for Angular Theming** は、グローバル設定でアプリケーション全体のテーマをカスタマイズしてすべての既定の要素に適用、あるいはコンポーネント別にテーマをそれぞれ適用することができます。

### デモ
<div class="sample-container" style="height: 650px">
    <iframe id="theme-chooser-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/theme-chooser" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="theme-chooser-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く
    </button>
</div>
<div class="divider--half"></div>


### デフォルトのテーマ

**デフォルトのテーマ**は、**Ignite UI for Angular コントロール**のすべてのコンポーネントのスタイルを設定します。はじめに `styles.scss` ファイルに設定します。

```scss
// import first the IgniteUI themes library
@import "~igniteui-angular/lib/core/styles/themes/index";

// Don't forget to include the igx-core first
@include igx-core();

// the default color palette is passed to the global theme
@include igx-theme($default-palette);
```

以下は上記コード スニペットの結果です。

<div class="sample-container" style="height: 650px">
    <iframe id="default-theme-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/default-theme-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="default-theme-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}"> stackblitz で開く
    </button>
</div>
<div class="divider--half"></div>

コンポーネントの外観を変更したい場合や**デフォルト テーマ**がアプリケーションの UI に合わない場合は、**Ignite UI for Angular Theming** を使用して多数の CSS ファイルを書かずにスタイル設定が簡単にできます。

### 作業の開始

はじめに、**SASS functions と mixins** が入れ子になっている**テーマ ユーティリティ**をインポートします。
理想的なコード構成は、別々のディレクトリ**テーマ ロジック**に配置することです。

```scss
// styles/dark-theme.scss

@import '~igniteui-angular/lib/core/styles/themes/utilities';

```
<div class="divider--half"></div>

次のステップは、カスタマイズするコンポーネントと対応するテーマをすべてインポートします。

以下がアプリに含まれます。
- **Igx-Grid** の `paging` と **フィルタリング**。

```scss
// Import grid component and theme styles
@import '~igniteui-angular/lib/core/styles/components/grid/grid-component';
@import '~igniteui-angular/lib/core/styles//components/grid/grid-theme';

// Import grid-paginator component and theme styles
@import '~igniteui-angular/lib/core/styles//components/grid-paginator/grid-paginator-component';
@import '~igniteui-angular/lib/core/styles//components/grid-paginator/grid-paginator-theme';

// Import grid-filtering component and theme styles
@import '~igniteui-angular/lib/core/styles//components/grid-filtering/grid-filtering-component';
@import '~igniteui-angular/lib/core/styles//components/grid-filtering/grid-filtering-theme';

```
- **Igx-Dialog** の組み込み `IgxInputGroupComponent`。

```scss

// Import dialog-group component and theme styles
@import '~igniteui-angular/lib/core/styles//components/dialog/dialog-component';
@import '~igniteui-angular/lib/core/styles//components/dialog/dialog-theme';

// Import input-group component and theme styles
@import '~igniteui-angular/lib/core/styles//components/input/input-group-component';
@import '~igniteui-angular/lib/core/styles//components/input/input-group-theme';

```

コンポーネントのテーマ設定に必要なすべての機能があるため、使用する**色パレット**を定義するだけです。

```scss
// Define the primary color
$dark-color: #282828;

// Define the secondary color
$orange-color: #FFA500;

// Define the palette:
$dark-theme-palette: igx-palette($primary: $dark-color, $secondary: $orange-color);
```

次にアプリに新しいスタイルを設定します。
<div class="divider--half"></div>

### テーマの設定

**テーマの設定**は、プライマリおよびセカンダリの色の異なるシェードをコンポーネント パーツに適用します。[**Ignite UI for Angular Themes**](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/) のヘルプでスタイル設定可能なコンポーネント パーツを確認できます。

適用する **コンポーネント テーマ**を定義します。

#### コンポーネント テーマの定義
<div class="divider--half"></div>

- [**Igx-Grid-Theme**](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/#function-igx-grid-theme)

```scss
// Define dark theme for the dialog
$dark-grid-theme: igx-grid-theme(
  $palette: $dark-theme-palette,
  $content-background: igx-color($dark-theme-palette, "secondary", 100),
  $header-background: igx-color($dark-theme-palette, "primary", 500),
  $header-text-color: igx-color($dark-theme-palette, "secondary", 600),
  $cell-selected-background: igx-color($dark-theme-palette, "secondary", 600),
  $cell-selected-text-color: igx-color($dark-theme-palette, "primary", 600),
  $row-hover-background: igx-color($dark-theme-palette, "primary", 100),
  $header-border-color: igx-color($dark-theme-palette, "primary", 600)
);
```

- [**Igx-Dialog-Theme**](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/#themes-function-igx-dialog-theme)

```scss

// Define dark theme for the dialog
$dark-dialog-theme: igx-dialog-theme(
  $palette: $dark-theme-palette,
  $background: igx-color($dark-theme-palette, "primary", 100),
  $title-color: igx-color($dark-theme-palette, "secondary", 500),
  $message-color: igx-color($dark-theme-palette, "secondary", 600)
);

```

- [**Igx-Input-Group-Theme**](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/#themes-function-igx-input-group-theme)

```scss
// Define dark theme for the input-group
$dark-input-group-theme: igx-input-group-theme(
  $palette: $dark-theme-palette,
  $box-background:  igx-color($dark-theme-palette, "primary", 100),
  $disabled-border-color: igx-color($dark-theme-palette, "primary", 500),
  $box-disabled-background: igx-color($dark-theme-palette, "secondary", 100),
  $hover-bottom-line-color: igx-color($dark-theme-palette, "secondary", 700),
  $focused-bottom-line-color: igx-color($dark-theme-palette, "secondary", 700),
  $focused-text-color: igx-color($dark-theme-palette, "secondary", 500),
  $idle-text-color: igx-color($dark-theme-palette, "secondary", 700)
);
```

これで完了しました。

アプリの各コンポーネントにテーマを作成しました。最後に適用します。

#### コンポーネント テーマの適用
ホスト要素の `class` を**テーマ クラス**でバインドします。

```typescript
@HostBinding("class")
public themesClass = "dark-theme";
```
<div class="divider--half"></div>

次にホスト要素で**テーマ クラス**をネストした新しい SCSS ファイルにテーマを適用したコンポーネントを含みます。

```scss
// styles/dark-themes-class.scss
@import 'dark-theme';

:host {
    display: block;
    margin: 16px;
    box-shadow: igx-elevation($elevations, 12);

    &.dark-theme {
      background: $dark-color;
        ::ng-deep {
          @include igx-grid($dark-grid-theme);
          @include igx-snackbar($dark-snackbar-theme);
          @include igx-input-group($dark-input-group-theme);
          @include igx-grid-paginator($dark-grid-paginator-theme);
          @include igx-button($dark-button-theme);
          @include igx-dialog($dark-dialog-theme);
          @include igx-grid-filtering($dark-grid-filtering-theme);
          @include igx-button-group($dark-button-group-theme);
      }
    }
}
```
結果は以下です。

<div class="sample-container" style="height: 650px">
    <iframe id="dark-theme-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/dark-theme-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dark-theme-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}"> stackblitz で開く
    </button>
</div>
<div class="divider--half"></div>

*utilities*、コンポーネント mixins とテーマ関数をインポートし、テーマを定義して適用します。**Ignite UI for Angular Theming** でアプリをスタイル設定するための手順があります。

### テーマの選択
上記サンプルは、各コンポーネントに 1 つのテーマを設定しました。

**Ignite UI for Angular コンポーネント**にその他のテーマを定義する場合は、**テーマ**を追加できます。

変更を少し加えるだけです。
- SCSS ファイルを作成してテーマを含むクラスを定義します

```scss
// styles/themes-classes.scss
@import 'themes';

:host {
    display: block;
    margin: 16px;
    box-shadow: igx-elevation($elevations, 12);

    // Set the light themes for the components.
    &.light-theme {
      background: $light-color;
      ::ng-deep {
        @include igx-grid($light-grid);
        @include igx-snackbar($light-snackbar);
        @include igx-input-group($light-input-group);
        @include igx-grid-paginator($light-grid-paginator);
        @include igx-button($light-button);
        @include igx-dialog($light-dialog);
        @include igx-grid-filtering($light-grid-filtering);
        @include igx-button-group($light-button-group);
      }
    }
    ...
  }
```

<div class="divider--half"></div>

- ホスト要素の `class` を操作する関数をトリガーするイベントを設定します。

```html
<!-- Adding igxButton that triggers a dropdown with the theme options -->
<div class = "grid_wrapper" igxOverlayOutlet #outlet>
    <div class="grid-options" igxLayout igxLayoutDir="row" igxLayoutWrap="wrap">
        <button igxButton="raised" class="addProdBtn" (click)="openDialog()">Add New Product</button>
        <button class="drop-down-button" igxButton="raised" (click)="toggleDropDown($event, dropdown)" [igxDropDownItemNavigation]="dropdown">Themes</button>
        <igx-drop-down #dropdown class="theme-chooser">
            <igx-drop-down-item class="light-theme-option" (click)="selectTheme(THEME.LIGHT)">
            </igx-drop-down-item>
            <igx-drop-down-item class="dark-theme-option" (click)="selectTheme(THEME.DARK)">
            </igx-drop-down-item>
            <igx-drop-down-item class="black-theme-option" (click)="selectTheme(THEME.BLACK)">
            </igx-drop-down-item>
        </igx-drop-down>
    </div>
...
</div>
```

<div class="divider--half"></div>

**テーマ クラス**を表すデータおよびホスト要素の `class` セレクターを操作する関数を追加します。

```typescript

// Enumeration that will represent the themes classes

export enum THEME {
    LIGHT = "light-theme",
    DARK = "dark-theme",
    BLACK = "black-theme"
}

@Component({
    selector: "app-theme-chooser-sample",
    styleUrls: ["./theme-chooser-sample.component.scss"],
    templateUrl: "./theme-chooser-sample.component.html"
})
export class ThemeChooserSampleComponent implements OnInit {
    // Provide a reference to the themes classes
    public THEME: typeof THEME = THEME;
    // Bind the host element class with the themes class and set a default value
    @HostBinding("class")
    public themesClass: THEME = THEME.LIGHT;
    ...
    // Provide a function that manipulates the the class reference
    public selectTheme(theme: THEME) {
        this.themesClass = theme;
    }
    ...

```
<div class="divider--half"></div>

`click` イベントのみで定義済みテーマを簡単に変更できます。

<div class="sample-container" style="height: 650px">
    <iframe id="theme-chooser-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/theme-chooser" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="theme-chooser-iframe" data-demos-base-url="{environment:demosBaseUrl}"> stackblitz で開く
    </button>
</div>

### その他のリソース
<div class="divider--half"></div>

* [グローバル テーマ](global-theme.md)
* [コンポーネント テーマ](component-themes.md)
* [カラー パレット](palette.md)
* [Grid](../grid.md)
* [ページング](../grid_paging.md)
* [フィルタリング](../grid_filtering.md)
* [Dialog](../dialog.md)
* [Input Group](../input_group.md)
* [Snackbar](../snackbar.md)
* [Button](../button.md)
* [Button Group](../buttonGroup.md)
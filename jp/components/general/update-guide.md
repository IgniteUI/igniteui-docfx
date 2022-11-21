---
title: アップデート ガイド | Ignite UI for Angular | インフラジスティックス
_description: 新しいバージョンの Ignite UI for Angular ライブラリにアップデートする方法については、この記事を参照してください。
_keywords: ignite ui for angular, アップデート, npm パッケージ, マテリアル コンポーネント
_language: ja
---

# アップデート ガイド

Ignite UI for Angular [バージョニング](https://github.com/IgniteUI/igniteui-angular/wiki/Ignite-UI-for-Angular-versioning)は、最初の数字がコードでサポートされる Angular のメジャー バージョンで、2 番目の数字はメジャー バージョン リリースの数字です。また重大な変更がメジャー リリース間でリリースされる場合があります。
**Ignite UI for Angular** 各リリースのすべての変更の一覧は、製品 [CHANGELOG](https://github.com/IgniteUI/igniteui-angular/blob/master/CHANGELOG.md) (英語) をご覧ください。

Ignite UI for Angular パッケージは `ng update` Schematics で自動バージョン マイグレーションをサポートします。これにより、すべての可能性のある重大な変更 (セレクターの名前、クラス、@Input/Output プロパティの変更) をマイグレーションを試みます。ただし、マイグレーションできない変更がある場合もあります。通常これらの変更はタイプ スクリプト アプリケーション ロジックに関連しており、[詳細](#その他の手動の変更)は以下をご確認ください。

はじめに [**`ng update`**](https://angular.io/cli/update) コマンドを実行してアプリケーションとパッケージに使用できるアップデートをチェックします。
```cmd
ng update
```

**Ignite UI for Angular** ライセンス版パッケージをアップデートする場合は、以下のコマンドを実行してください。

```cmd
ng update @infragistics/igniteui-angular
```

**Ignite UI for Angular** 無料パッケージをアップデートする場合は、以下のコマンドを実行してください。

```cmd
ng update igniteui-angular
```
`@infragistics/igniteui-angular` または `igniteui-angular` を更新するときは、`@angular/core`、`@angular/cli` および `igniteui-cli` パッケージを一致するバージョンに更新してください。
**Ignite UI CLI** パッケージをアップデートする場合は、以下のコマンドを実行してください。
```cmd
ng update igniteui-cli
```
**Angular Core** パッケージをアップデートする場合は、以下のコマンドを実行してください。
```cmd
ng update @angular/core
```
**Angular CLI** パッケージをアップデートするには、以下のコマンドを使用してください。
```cmd
ng update @angular/cli
```

>[!NOTE]
> パッケージの依存関係の不一致が原因で `ng update` コマンドが失敗した場合は、アップデートを元に戻し、`node_modules` フォルダを削除してから、`--force` フラグを指定してアップデートを再実行します。

## その他の手動の変更


自動的にアップデートできない変更もあります。以下の変更はバージョンごとにセクションが分かれています。アッププデートが必要な場合は、現在のバージョンから開始してそれ以降のアップデートを適用しjます。

例: 6.2.4 から 7.1.0 にアップデートする場合、[6.x .. から] セクションから始めて変更を適用していきます。

## 14.2.x から 15.0.x の場合:
### 一般
- Ignite UI for Angular に [igniteui-theming](https://github.com/IgniteUI/igniteui-theming) のピア依存関係があります。テーマ パッケージをインストールし、`angular.json` ファイルに以下のプリプロセッサー設定を追加します。

    ```sh
    npm install igniteui-theming
    ```

    ```json
        "build": {
          "options": {
            "stylePreprocessorOptions": {
                "includePaths": ["node_modules"]
            }
          }
        }
    ```

- **重大な変更** - テーマの構成、カラー、エレベーション、およびタイポグラフィのすべてのグローバル CSS 変数のプレフィックスが `--igx` から `--ig` に変更されました。この変更はグローバル コンポーネント変数には影響しません。
    
    **例**:

    14.2.x の場合:

    ```css
    :root {
        --igx-typography: 'Titillium Web', sans-serif; 
    }
    ```

    15.0.x の場合は以下のようになります:

    ```css
    :root {
        --ig-typography: 'Titillium Web', sans-serif; 
    }
    ```

### テーマ
- **重大な変更** - `grays` 入力引数の名前が `gray` に変更されました。<br />
既存のコードに与える影響は以下のとおりです。

    14.2.x の場合:

    ```scss
    $my-palette: palette(
        $primary: #09f,
        $secondary: #e41c77,
        $grays: #000
    );

    .my-class {
        background: color($color: 'grays', $variant: 300);
        color: contrast-color($color: 'grays', $variant: 300);
        border-color: hsl(var(--ig-grays-500));
    }
    ```

    15.0.x 以降:

    ```scss
    $my-palette: palette(
        $primary: #09f,
        $secondary: #e41c77,
        $gray: #000
    );
    
    .my-class {
        background: color($color: 'gray', $variant: 300);
        color: contrast-color($color: 'gray', $variant: 300);
        border-color: hsl(var(--ig-gray-500));
    }
    ```


- **重大な変更** - **パレットの CSS 変数の生成**は **palette-vars mixin** の代わりに **palette mixin** によって実行されます。

- **重大な変更** - **palette 関数**は**サーフェイス カラーを渡す必要があります**が、`gray` カラーの値を渡すのはオプションです。グレー基本カラーの値が提供されない場合、サーフェイス カラーの明度に基づいて自動的に生成されます。明るいサーフェイス カラーは black (#000) グレー基本カラーになり、暗いサーフェス カラーは white (#fff) 基本グレー色。パレットを生成する場合、**info、success、error、および warn** カラーのデフォルト値がないことに注意してください。使用する場合は明示的に設定する必要があります。値を自分で考えたくない場合は、既存のパレットからこれらのカラーを取得することもできます。
    
    #### 例:
    ```scss
    $my-palette: palette(
        $primary: #09f,
        $secondary: #e41c77,
        $surface: #fff,
        $info: color($light-material-palette, 'info'),
        $success: color($light-material-palette, 'success'),
        $error: color($light-material-palette, 'error'),
        $warn: color($light-material-palette, 'warn'),
    );

    @include palette($my-palette);
    ```

- **重大な変更** - **パレット パラメーターはすべてのコンポーネント テーマから削除されました。****palette mixin** を使用して、カスタム コンポーネントのコンポーネント テーマのカスタム パレットをスコープできます。IE11 のサポートを終了したため、すべてのコンポーネントテーマはカラー、高さ、タイポグラフィなどのグローバル CSS 変数を参照するため、カスタム パレットをコンポーネント テーマに渡す必要はなくなりました。

    カスタム パレットでカスタムテーマを生成する場合:

    ```scss
    // app.component.scss

    $my-palette: palette(
        $primary: royalblue,
        $secondary: orange,
        $surface: white
    );

    $avatar: avatar-theme(
        $background: color($color: 'primary'), 
        $color: contrast-color($color: 'primary')
    );

    :host ::ng-deep {
        // Include the custom palette in the scope of the app component.
        // It will have a higher specificity than the global palette.
        @include palette($my-palette):
        
        .my-avatar {
            @include avatar($avatar);
        }
    }
    ```

### タイポグラフィ
- **重大な変更** - **type-style** mixin はパラメーターとして type-scale を受け付けず、カテゴリ名のみを受け付けます。

    14.2.x 以前:

    ```scss
    .my-class {
        @include type-style($type-scale: $my-type-scale, $category: h1);
    }
    ```

    15.0.x 以降:

    ```scss
    .my-class {
        @include type-style(h1);
    }
    ```

### エレベーション
- **重大な変更** - **elevation 関数**には名前付き引数が 1 つのみあります- **$name (エレベーション名)**。
- **重大な変更**- **elevations 機能**が削除されました。`configure-elevations` mixin を使用してエレベーションの色を設定できます。

    14.2.x 以前:
    
    ```scss
    .my-class {
        box-shadow: elevation($elevations, $elevation: 8);
    }
    ```

    15.0.x 以降:
    
    ```scss
    .my-class {
        box-shadow: elevation(8);
    }
    ```

## 13.1.x から 13.2.x の場合:

### テーマ
- **重大な変更** - RTL 固有のスタイル シートはすべて削除されました。Ignite UI テーマは、デフォルトで RTL 方向をサポートするようになりました。以前に `*-rtl.css` 固有のテーマを使用したことがあるユーザーは、通常のテーマ ファイルに切り替える必要があります。

## 13.0.x から 13.1.x の場合:

### 一般
- `igxGrid`、`igxHierarchicalGrid`、`igxTreeGrid`
    - **重大な変更** - 列の `movable` プロパティは非推奨になりました。代わりに、公開されたグリッドの `moving` プロパティを使用してください:
    ```html
    <igx-grid [moving]="true">
    </igx-grid>
    ```
- `IgxHierarchicalGrid`
    - **重大な変更** - igxHierarchicalGrid および igxRowIsland コンポーネントのパブリック API サービス `hgridAPI` は `gridAPI` に名前が変更されました。
- `IgxToast`
    - **重大な変更** - `igx-toast` で非推奨になった `position` プロパティは削除されました。次のように `positionSettings` プロパティを使用することをお勧めします:
    ```typescript
    @ViewChild('toast', { static: true }) public toast: IgxToastComponent;

    public ngOnInit(): void {
        this.toast.positionSettings.verticalDirection = VerticalAlignment.Middle;
    }
    ```
## 12.2.x から 13.0.x の場合:

### 一般
- `IE のサポート終了`
- `IgxDialog`
    - **重大な変更** - デフォルトの positionSettingsopenclose アニメーションが `fadeIn`/`fadeOut` に変更されました。
- `igxGrid`、`igxHierarchicalGrid`、`igxTreeGrid`
    - **重大な変更** - 次の非推奨の入力が削除されました - `showToolbar`、`toolbarTitle`、`columnHiding`、`columnHidingTitle`、`hiddenColumnsText`、`columnPinning`、`columnPinningTitle`、`pinnedColumnsText`。代わりに、`IgxGridToolbarComponent`、`IgxGridToolbarHidingComponent`、`IgxGridToolbarPinningComponent` を使用してください。
    - **重大な変更** - `igx-toolbar` コンポーネントを追加したら、有効にする機能を手動で指定する必要があります - 列の非表示、ピン固定、Excel のエクスポート。高度なフィルタリングは、グリッドの `allowAdvancedFiltering` 入力プロパティを介して有効にすることができますが、他の機能と同様に、マークアップを使用して宣言的に有効にすることをお勧めします。
    - **重大な変更** - `rowSelected` イベントは、その機能をより適切に反映するために、`rowSelectionChanging` に名前が変更されました。
    - **重大な変更** - `columnSelected` イベントは、その機能をより適切に反映するために、`columnSelectionChanging` に名前が変更されました。
    - **重大な変更** - `columnsCollection` が削除されました。代わりに `columns` を使用してください。特定の場合に `columns` が空の配列を返す場合は、`ViewChildren`を使用して列にクエリを実行し、`ngAfterViewInit` の列にアクセスします。
        ```typescript
        @ViewChildren(IgxColumnComponent, { read: IgxColumnComponent })
        public columns: QueryList<IgxColumnComponent>;
        ```
    - **重大な変更** - グリッドにカスタム ディレクティブを適用する場合、ホスティング グリッドへの参照を取得するために、コンストラクターに `IGX_GRID_BASE` トークンを注入します。
        ```html
        <igx-grid customDirective ...></igx-grid>
        ```

        ```typescript
        @Directive({
            selector: '[customDirective]'
        })
        export class customDirective {

        constructor(@Host() @Optional() @Inject(IGX_GRID_BASE) grid: IgxGridBaseDirective) { }
        ```
- `RowDirective`、`RowType`
    - **重大な変更** - `rowData` および  `rowID` プロパティは、`RowDirective` および `RowType` インターフェイスを実装するクラスから削除されます。代わりに `data` と `key` を使用してください。自動移行には `ng update` を使用します。自動移行では、テンプレート コンテキスト オブジェクトが入力されていないテンプレートからから一部の例を取得できません。
        ```html
        <ng-template igxCell let-cell="cell">
            <span>{{ cell.rowID }}</span>
            <span>{{ cell.row.rowData.ProductID }}</span>
        </ng-template>
        ```
        このようなテンプレートを手動で更新します:
        ```html
        <span>{{ cell.key }}</span>
        <span>{{ cell.row.data.ProductID }}</span>
        ```
- `igxGrid`
    - `sortStrategy` と同様に機能する `groupStrategy` 入力を公開し、グリッドのグループ化動作をカスタマイズできるようにしました。
- `IgxCsvExporterService`、`IgxExcelExporterService`
    - エクスポーター サービスはルート レベルで注入されるようになったため、アプリケーションで提供する必要がなくなりました。
- `IgxGridToolbarPinningComponent`、`IgxGridToolbarHidingComponent`
    - ツールバーのドロップダウン ボタン内に表示されるテキストを設定する新しい入力 `buttonText` を公開しました。
- `IgxCombo`
    - グループのソート順序を設定できる `groupSortingDirection` 入力が追加されました。
- `IgxGrid`、`IgxTreeGrid`、`IgxHierarchicalGrid`
    - ヘッダー ソート インジケーターを再テンプレート化するための新しいディレクティブを追加しました - `IgxSortHeaderIconDirective`、`IgxSortAscendingHeaderIconDirective`、および `IgxSortDescendingHeaderIconDirective`。
- `IgxDialog`
    - 開いたときに Tab キーのフォーカスをダイアログ内にトラップするかどうかを設定する `focusTrap`入力を追加しました。デフォルトは `true` です。
    - **重大な変更** - 次の入力が削除されました:
        - `columns` 入力。代わりに `igxGrid``columns` 入力を使用してください。
- `IgxCarousel`
    - **重大な変更** - カルーセル アニメーション タイプ `CarouselAnimationType` は `HorizontalAnimationType` に名前が変更されました。
- `IgxGridStateDirective` - `disableHiding` 列プロパティと列グループをサポートするようになりました。

### テーマ

- Icon コンポーネントの `color` プロパティは非推奨になりました。`style.color` CSS プロパティを使用して、デフォルトの色を変更します。例:

```html
<igx-icon [style.color]="'#e41c77'">home</igx-icon>
```

```html
<igx-icon style.color="{{ col.hasSummary ? '#e41c77' : '' }}">functions</igx-icon>
```

* Sass モジュール:
テーマ エンジンは [Sass モジュール](https://sass-lang.com/documentation/at-rules/use)に切り替わりました。この変更は、すべてのテーマ ライブラリ関数 (コンポーネント テーマなど)、ミックスイン (コンポーネント ミックスインなど)、および変数が単一ファイルから`転送される`ことを意味します。Sass テーマ ライブラリを正しく使用するには、プロジェクトで Dart Sass バージョン 1.33.0 以降を使用し、テーマ ライブラリのすべてのインポートを以下から変更する必要があります。

```scss
// free version
@import '~igniteui-angular/lib/core/styles/themes/index';

// licensed version
@import '~@infragistics/igniteui-angular/lib/core/styles/themes/index';
```

結果:

```scss
// free version
@use 'igniteui-angular/theming' as *;

// licensed version:
@use '@infragistics/igniteui-angular/theming' as *;
```

テーマ ライブラリ全体を一度だけインポートし、アプリ内の他の Sass ファイルで使用する場合は、転送する必要があります。インポートされた Sassフ ァイルは自動的に転送されません。

次から:

```scss
// _variables.scss
// free version
@import '~igniteui-angular/lib/core/styles/themes/index';

// licensed version
@import '~@infragistics/igniteui-angular/lib/core/styles/themes/index';

// _other-file.scss
@import 'variables';
```

次へ:

```scss
// _variables.scss
// free versioin
@use 'igniteui-angular/theming' as *;
@forward 'igniteui-angular/theming';

// licensed version
@use '@infragistics/igniteui-angular/theming' as *;
@forward '@infragistics/igniteui-angular/theming';


// _other-file.scss
@use 'variables' as *;
```

* パレットとスキーマ:
- CSS パレット変数は HEX 値を参照しなくなり、代わりに H、S、L の 3 つの値のリストを表します。つまり、`hsl` または `hsla` CSS 関数に渡す必要があります。

次から:

```scss
.some-class {
    background: var(--igx-surface-500); // returns HEX color
}
```

次へ:

```scss
.some-class {
    background: hsl(var(--igx-surface-500)); // returns a list of H, S, L
}
```

これは、CSS 変数のみを使用して実行時にパレットを変更できるようにするためです。このようにして、指定したパレット色のアルファ チャネルを実行時に基本色に影響を与えることなく変更できます。

- 正しいパレットとコンポーネント スキーマがカスタム コンポーネントとグローバルテーマに渡されることを確認してください。グローバル暗いテーマを作成する場合、グレー色に明るい色合いを選択してください。例:

```scss
$my-dark-palette: palette(
    $primary: olive,
    $secondary: yellow,
    $grays: #fff
);

@include dark-theme($palette: $my-dark-palette);
```

同様に、明るいテーマはより暗い灰色の色調と明るいカラー スキーマを必要とします。

グローバル テーマからコンポーネント テーマを除外していないが、`css-vars` ミックスインを使用してカスタム置換テーマを作成する場合、テーマが正しいパレットと対応するスキーマに渡されることを確認してください。

```scss
$my-custom-grid: grid-theme(
    $palette: $my-dark-palette,
    $schema: $dark-schema
);

@include css-vars($my-custom-grid);
```

* 除外されたコンポーネント テーマ:

グローバル テーマからコンポーネント テーマを除外し、カスタム置換テーマを作成した場合、コンポーネント ミックスインが含まれ、正しいコンポーネント テーマが渡されることを確認してください。

```scss
$my-dark-palette: palette(
    ...
    $exclude: ('igx-grid')
);

$my-custom-grid: grid-theme(
    $palette: $my-dark-palette,
    $schema: $dark-schema
);

// Ensure grid is included:
@include grid($my-custom-grid);
```

カスタム コンポーネント テーマがグローバル `styles.scss` 以外の別のコンポーネント Sass ファイルで宣言されている場合は、`core` ミックスインも含まれていることを確認してください。

```scss
// free version
@use 'igniteui-angular/theming' as *;

// licensed version
@use '@infragistics/igniteui-angular/theming' as *;

// Include the core module mixin.
@include core();

// Create your theme.
$my-custom-grid: grid-theme(
    $palette: $my-dark-palette,
    $schema: $dark-schema
);

// Include your custom theme styles.
@include grid($my-custom-grid);
```

Sass Moule システムについて理解を深めるために、[Miriam Suzanne](https://css-tricks.com/author/miriam/) の[記事 (英語)](https://css-tricks.com/introducing-sass-modules/) を参照ください。

## 12.0.x から 12.1.x の場合:
### グリッド
* 重大な変更:
    * [`IgxPaginatorComponent`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html) - グリッドでページネーターがインスタンス化される方法が変更されました。グリッド ツリーに投影される別個のコンポーネントになりました。したがって、`[paging]="true"` プロパティはすべてのグリッドから削除され、グリッド内のページネーターに関連する他のすべてのプロパティは非推奨です。[ページング トピック](../grid/paging.md)で説明されているように、`Grid Paging` 機能を有効にするためのガイドに従うことをお勧めします。
    * [`IgxPageSizeSelectorComponent`]({environment:angularApiUrl}/classes/IgxPageSizeSelectorComponent.html) および [`IgxPageNavigationComponent`]({environment:angularApiUrl}/classes/IgxPageNavigationComponent.html) が導入され、カスタム コンテンツの実装が容易になりました。

    ```html
    <igx-paginator #paginator>
        <igx-paginator-content>
            <igx-page-size></igx-page-size>
            [My custom text]
            <igx-page-nav></igx-page-nav>
        </igx-paginator-content>
    </igx-paginator>
    ```

    * ページング コンポーネントの API はリファクタリング中に変更され、古いプロパティの多くは非推奨になりました。残念ながら、これらの変更の一部を適切に移行することは控えめに言っても複雑であるため、エラーはアプリケーション レベルで処理する必要があります。
    * 次のプロパティはグリッドから非推奨になりました:
        - paging、perPage page、totalPages、isFirstPage、isLastPage、pageChange、perPageChange、pagingDone
    * 次のメソッドも非推奨です:
        - nextPage()
        - previousPage()
    * 次のプロパティが削除されました:
        - paginationTemplate - カスタム テンプレートを定義するには、`igx-paginator-content` を使用します。
    * HierarchicalGrid の詳細 - RowIslands でページングを有効にする場合は、次の `*igxPaginator` ディレクティブの使用法が必要です。

    ```html
    <igx-hierarchical-grid #hGrid >
        <igx-column *ngFor="let c of hColumns" [field]="c.field">
        </igx-column>
        <igx-row-island [key]="'childData'" [autoGenerate]="true">
            <igx-row-island [key]="'childData'" [autoGenerate]="true">
                <igx-paginator *igxPaginator></igx-paginator>
            </igx-row-island>
            <igx-paginator *igxPaginator></igx-paginator>
        </igx-row-island>
        <igx-row-island [key]="'childData2'" [autoGenerate]="true">
            <igx-paginator *igxPaginator></igx-paginator>
        </igx-row-island>

        <igx-paginator></igx-paginator>
    </igx-hierarchical-grid>
    ```

    * 移行によりテンプレート コンテンツが `igx-paginator-content` コンテンツ内に移動しますが、すべてのテンプレート バインディングが解決されるとは限りません。移行後は、必ずテンプレート ファイルを確認してください。次のバインディングは、これらのプロパティ (`pagerEnabled`、`pagerHidden`、`dropdownEnabled`、`dropdownHidden`) が削除されているため、手動で変更する必要があります:

    次から:
    ```html
    <igx-paginator #paginator
        [pagerEnabled]="!isPagerDisabled" [pagerHidden]="isPagerHidden"
        [dropdownHidden]="isDropdownHidden">
    </igx-paginator>
    ```

    次へ:
    ```html
    <igx-paginator #paginator *ngIf="!isPagerDisabled">
        <igx-paginator-content>
            <igx-page-size *ngIf="isDropdownHidden"></igx-page-size>
            <igx-page-nav *ngIf="isPagerHidden"></igx-page-nav>
        </igx-paginator-content>
    </igx-paginator>
    ```

    * IgxGridCellComponent、IgxTreeGridCellComponent、IgxHierarchicalGridCellComponent、IgxGridExpandableCellComponent はパブリック API で公開されなくなりました。新しい `IgxGridCell` へのアップグレードの詳細ガイドについては、以下のセクションを参照してください。



* グリッド非推奨:
    * `IgxGridTransaction` を提供するための DI パターンは非推奨になりました。以下は引き続き機能しますが、将来のバージョンで**削除される可能性がある**ため、リファクタリングすることをお勧めします。

    ```typescript
    @Component({
        template: `<igx-grid [data]="data">
        ...
        </igx-grid>`,
        providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
        ...
    })
    export class MyCustomComponent {
        ...
    }
    ```

    上記の動作を実現するには、新しく追加された[`一括編集`](../grid/batch-editing.md)入力を使用する必要があります。
    ```typescript
    @Component({
        template: `<igx-grid [data]="data" [batchEditing]="true">
        ...
        </igx-grid>`
        ...
    })
    export class MyCustomComponent {
        ...
    }
    ```
    * `getCellByColumnVisibleIndex` は非推奨になり、次のメジャー バージョンで削除される予定です。代わりに `getCellByKey`、`getCellByColumn` を使用してください。


### IgxGridCell の移行

* *IgxGridCellComponent*、*IgxTreeGridCellComponent*、*IgxHierarchicalGridCellComponent*、*IgxGridExpandableCellComponent* はパブリック API で公開されなくなりました。

* 上記のいずれかのインスタンスを返すために使用されていたパブリック API は、[`IgxGridCell`]({environment:angularApiUrl}/classes/igxgridcell.html) のインスタンスを返すようになりました。

```ts
const cell = grid.getCellByColumn(0, 'ProductID');     // returns IgxGridCell
const cell = grid.getCellByKey('ALFKI', 'ProductID');  // returns IgxGridCell
const cell = grid.getCellByColumnVisibleIndex(0, 0);   // returns IgxGridCell
const rowCells = grid.getRowByIndex(0).cells;          // returns IgxGridCell[]
const selectedCells = grid.selectedCells;              // returns IgxGridCell[]
const cells = grid.getColumnByName('ProductID').cells; // returns IgxGridCell[]
```

- *cellClick*、*selected*、*contextMenu*、および *doubleClick* イベントによって発行される `IGridCellEventArgs` イベント引数の `cell` プロパティは、[`IgxGridCell`]({environment:angularApiUrl}/classes/igxgridcell.html) のインスタンスになりました。 
- セル テンプレートの `let-cell` プロパティは `IgxGridCell` になりました。
- `getCellByColumnVisibleIndex` は非推奨になり、次のメジャー バージョンで削除される予定です。代わりに `getCellByKey`、`getCellByColumn` を使用してください。

ご注意ください:

*ng update* は、*IgxGridCellComponent*、*IgxTreeGridCellComponent*、*IgxHierarchicalGridCellComponent*、*IgxGridExpandableCellComponent* のインポート、入力、キャストなどの使用方法を移行します。上記のいずれかを使用するコード内の場所が移行されない場合は、入力/キャストを削除するか、[`IgxGridCell`]({environment:angularApiUrl}/classes/igxgridcell.html) で変更してください。
* *getCellByIndex* およびその他のメソッドは、そのインデックスの行がデータ行ではなく、IgxGroupByRow、IgxSummaryRow、詳細行などである場合、undefined を返します。


### テーマ
コンパイルの警告に関する苦情 ([#9793](https://github.com/IgniteUI/igniteui-angular/issues/9793) を参照) のため、[`math.div`](https://sass-lang.com/documentation/modules/math#div) 関数を使用するようになりました。この機能は、バージョン 1.33.0 以降の [Dart Sass (英語)](https://sass-lang.com/dart-sass) でサポートされています。

#### ソリューション
何らかの理由で `math.div` が既知の関数ではないという Sass コンパイル エラーが表示された場合は、プロジェクトで古いバージョンの Sass を使用していることを意味します。

1. `ng update` を使用して Angular の最新バージョンに更新します - Angular 12.1.0 以降はデフォルトで dart-sass コンパイラーを使用します。

```sh
ng update [options]
```

何らかの理由で Ignite UI/Angular CLI を使用しない場合は、Node プロジェクトで `node-sass` を `sass` に置き換える必要があります。

```sh
npm uninstall node-sass
npm install sass --save-dev
```

2. 何らかの理由で、上記の方法を使用して Angular の最新バージョンにアップグレードできない場合は、Sass ファイルにグローバル フラグを設定することで、古い Sass 除算方法にフォールバックできます。

```scss
$__legacy-libsass: true;
```

## 11.1.x から 12.0.x の場合:
### テーマ:
* 重大な変更:
    * `IgxAvatar` テーマが簡略化されました。テーマ パラメーター (`avatar-theme`) の数が大幅に削減され、接頭辞付きのパラメーター (`icon-*`, `initials-*`, `image-*`) と接尾辞付きのパラメーター (`border-radius-*`) が含まれなくなりました。`ng update` で実行された更新は、既存のボタン テーマを移行しますが、接頭辞付きと接尾辞付きのパラメーターがないことを考慮して、いくつかの追加の調整が必要になる場合があります。

    既存のタイプ固有のアバター テーマを以下のように変更する必要があります。

    例えば、次の例は

        ```scss
        $avatar-theme: avatar-theme(
            $initials-background: blue,
            $initials-color: orange,
            $icon-background: blue,
            $icon-color: orange,
        );

        @include avatar($avatar-theme);
        ```

    このとおりに変換する必要があります。

        ```scss
        $initials-avatar: avatar-theme(
            $background: blue,
            $color: orange,
        );

        $icon-avatar: avatar-theme(
            $background: blue,
            $color: orange,
        );

        .initials-avatar {
            @include avatar($initials-avatar);
        }

        .icon-avatar {
            @include avatar($icon-avatar);
        }
        ```

    * `IgxButton` テーマが簡略化されました。テーマ パラメーター (`button-theme`) 数が大幅に削減され、接頭辞付きのパラメーター (`flat-*`、`raised-*` など) が含まれなくなりました。`ng update` で実行された更新は、既存のボタン テーマを移行しますが、接頭辞付きのパラメーターがないことを考慮して、いくつかの追加の調整が必要になる場合があります。 

    以下のコード スニペットと同じ結果を得るには: 

        ```html
        <button igxButton="raised">Raised button</button>
        <button igxButton="outlined">Outlined button</button>
        ```
        ```scss
        $my-button-theme: button-theme(
            $raised-background: red,
            $outlined-outline-color: green
        );

        @include css-vars($my-button-theme);
        ```
    ボタン タイプごとに個別のテーマを作成し、CSS セレクターにスコープする必要があります。
        ```html
        <div class="my-raised-btn">
            <button igxButton="raised">Raised button</button>
        </div>
        <div class="my-outlined-btn">
            <button igxButton="outlined">Outlined button</button>
        </div>
        ```

        ```scss
        $my-raised-button: button-theme(
            $background: red
        );

        $my-outlined-button: button-theme(
            $border-color: red
        );

        .my-raised-btn {
            @include css-vars($my-raised-button);
         }

        .my-outlined-btn {
            @include css-vars($my-outlined-button);
        }
        ```
ご覧のとおり、`button-theme` パラメーターはボタン タイプごとに同じ名前になっているため、タイプごとに異なる色を使用するには、ボタン テーマのスコープを CSS セレクターに設定する必要があります。

ここでは、`button-theme` のすべての[利用可能なプロパティ](https://jp.infragistics.com/products/ignite-ui-angular/docs/sass/latest/index.html#function-button-theme)を確認できます。

* `typography` ミックスインは `core` に暗黙的に含まれなくなりました。タイポグラフィ スタイルを使用するには、`core` の後と `theme` の前に ミックスインを明示的に含める必要があります。

    ```scss
    // in styles.scss

    @include core();

    @include typography(
        $font-family: $material-typeface,
        $type-scale: $material-type-scale
    );

    @include theme();
    ```

    > [!IMPORTANT]
    > `core` ミックスインは常に最初に含める必要があります。

    Ignite UI for Angular に含まれるテーマごとに、使用できる特定の `font-family` 変数と `type-scale` 変数を提供します。

    | **テーマ** | **フォント ファミリ** | **タイプ スケール**   |
    | --------- | ------------------- | --------------------- |
    | Material  | $material-typeface  | $material-type-scale  |
    | Fluent    | $fluent-typeface    | $fluent-type-scale    |
    | Bootstrap | $bootstrap-typeface | $bootstrap-type-scale |
    | Indigo    | $indigo-typeface    | $indigo-type-scale    |

### IgxBottomNav コンポーネント

[**IgxBottomNavComponent**]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html) は、タブ ヘッダーとコンテンツの定義を、より柔軟な方法を提供するために、リファクタリングされました。既存の **igx-bottom-nav** 定義を新しい定義に移行するには、**ng update** を介して更新することをお勧めします。


* テンプレート
    * *新しい構造は、ヘッダーとコンテンツ コンポーネントをそれぞれラップする下部ナビゲーション項目コンポーネントを定義します。ヘッダーには通常、アイコン ([`マテリアル ガイドライン`](https://material.io/components/bottom-navigation#usage)) が含まれていますが、ラベルやその他のカスタム コンテンツが含まれている場合もあります。
    * ヘッダーのスタイル設定のために、`igxBottomNavHeaderLabel` と `igxBottomNavHeaderIcon` の 2 つの新しいディレクティブを用意しました。
    * ヘッダー コンポーネントで任意のコンテンツを追加できるようになったため、以前はタブのヘッダーを再テンプレート化するために使用されていた `igxTab` ディレクティブは、不要になったため削除されました。
    * コンポーネントをナビゲーション シナリオで使用する場合、`routerLink` ディレクティブをヘッダー コンポーネントにアタッチする必要があります。

    ```html
    <igx-bottom-nav>
        <igx-bottom-nav-item>
            <igx-bottom-nav-header>
                <igx-icon igxBottomNavHeaderIcon>folder</igx-icon>
                <span igxBottomNavHeaderLabel>Tab 1</span>
            </igx-bottom-nav-header>
            <igx-bottom-nav-content>
                Content 1
            </igx-bottom-nav-content>
        </igx-bottom-nav-item>
        ...
    </igx-bottom-nav>
    ```
* API 変更
    * `id`、`itemStyle`、`panels`、`viewTabs`、`contentTabs`、`tabs` プロパティが削除されました。現在、[`items`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html#items) プロパティはタブのコレクションを返します。
    * 次のプロパティが変更されました。
        * タブ項目の `isSelected` プロパティの名前が [` selected`]({environment:angularApiUrl}/classes/igxbottomnavitemcomponent.html#selected) に変更されました。
        * `selectedTab` プロパティの名前が [`selectedItem`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html#selecteditem) に変更されました。
    * `onTabSelected` および `onTabDeselected` イベントが削除されました。[`selectedIndexChanging`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html#selectedindexchanging)、[`selectedIndexChange`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html#selectedindexchange)、[`selectedItemChange`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html#selecteditemchange) の 3 つの新しいイベントが導入されました。これらのイベントにより、タブの選択をより柔軟に制御できます。残念ながら、これらのイベント変更に対して適切な移行を行うことはとても複雑であるため、エラーはプロジェクト レベルで処理する必要があります。

### IgxTabs コンポーネント
[**IgxTabsComponent**]({environment:angularApiUrl}/classes/igxtabscomponent.html) は、タブ ヘッダーとコンテンツを定義するためのより柔軟で説明的な方法を提供するために、完全にリファクタリングされました。既存の **igx-tabs** 定義を新しい定義に変更するには、**ng update** を介して更新することをお勧めします。


* テンプレート
    * 新しい構造は、ヘッダーとコンテンツ コンポーネントをそれぞれラップするタブ項目コンポーネントを定義します。ヘッダーには通常、アイコンおよびラベルが含まれていますが、その他のカスタム コンテンツが含まれている場合もあります。
    * ヘッダーのスタイル設定のために、`igxTabHeaderLabel` と `igxTabHeaderIcon` の 2 つの新しいディレクティブを導入しました。
    * ヘッダー コンポーネントで任意のコンテンツを追加できるようになったため、以前はタブのヘッダーを再テンプレート化するために使用されていた `igxTab` ディレクティブは、不要になったため削除されました。
    * コンポーネントをナビゲーション シナリオで使用する場合、`routerLink` ディレクティブをヘッダー コンポーネントにアタッチする必要があります。

    ```html
    <igx-tabs>
        <igx-tab-item>
            <igx-tab-header>
                <igx-icon igxTabHeaderIcon>folder</igx-icon>
                <span igxTabHeaderLabel>Tab 1</span>
            </igx-tab-header>
            <igx-tab-content>
                <h1>Tab 1 Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </igx-tab-content>
        </igx-tab-item>
    ...
    </igx-tabs>
    ```
* API 変更
    * `id`、`groups`、`viewTabs`、`contentTabs`、および `tabs` プロパティが削除されました。現在、[`items`]({environment:angularApiUrl}/classes/igxtabscomponent.html#items) プロパティはタブのコレクションを返します。
    * 次のプロパティが変更されました。
        * タブ項目の `isSelected` プロパティの名前が [` selected`]({environment:angularApiUrl}/classes/igxtabitemcomponent.html#selected) に変更されました。
        * `selectedTabItem` プロパティは [`selectedItem`]({environment:angularApiUrl}/classes/igxtabscomponent.html#selecteditem) に変更されました。
        * contentFit と固定オプションを含む `type` プロパティは使用できなくなりました。ヘッダーのサイズ設定と配置モードは現在、[`tabAlignment`]({environment:angularApiUrl}/classes/igxtabscomponent.html#tabalignment) 入力プロパティによって制御されています。この入力プロパティは、start (デフォルト)、center、end、justify の 4 つのいずれかが設定できます。古い `contentFit` タイプは現在の `start` 配置値に対応し、古い  `fixed` タイプは現在の `justify` 値に対応します。
    * `tabItemSelected` および `tabItemDeselected` イベントが削除されました。[`selectedIndexChanging`]({environment:angularApiUrl}/classes/igxtabscomponent.html#selectedindexchanging)、[`selectedIndexChange`]({environment:angularApiUrl}/classes/igxtabscomponent.html#selectedindexchange)、[`selectedItemChange`]({environment:angularApiUrl}/classes/igxtabscomponent.html#selecteditemchange) の 3 つの新しいイベントが導入されました。これらのイベントにより、タブの選択をより柔軟に制御できます。残念ながら、これらのイベント変更に対して適切な移行を行うことはとても複雑であるため、エラーはプロジェクト レベルで処理する必要があります。

### IgxGridComponent、IgxTreeGridComponent、IgxHierarchicalGridComponent
* *IgxGridRowComponent*、*IgxTreeGridRowComponent*、*IgxHierarchicalRowComponent*、*IgxGridGroupByRowComponent* はパブリック API で公開されなくなりました。
* 以前は上記のいずれかのインスタンスを返していたパブリック API は、パブリック [`RowType`]({environment:angularApiUrl}/interfaces/rowtype.html) インターフェースを実装するオブジェクトを返すようになりました。

```ts
const row = grid.getRowByIndex(0);
const row = grid.getRowByKey(2);
const row = cell.row;
```

[`RowType`]({environment:angularApiUrl}/interfaces/rowtype.html) のパブリック API は、*IgxRowComponent* などが公開していたものと同じですが、次の点に注意してください:

* *IgxHierarchicalRowComponent* によって公開される *toggle* メソッドは使用できません。すべての行タイプに [`expanded`]({environment:angularApiUrl}/interfaces/rowtype.html#expanded) プロパティを使用します:

```ts
grid.getRowByIndex(0).expanded = false;
```
*row.rowData* および *row.rowID* は非推奨であり、バージョン 13 で完全に削除されます。代わりに *row.data* と *row.key* を使用してください。

* *onRowPinning* によって発行されたイベント引数の *row* プロパティ、および *onRowDragStart* によって発行されたイベント引数の *dragData* プロパティ、*onRowDragEnd* は [`RowType`]({environment:angularApiUrl}/interfaces/rowtype.html) を実装しています。 
* *ng update* は、*IgxGridRowComponent*、*IgxTreeGridRowComponent*、*IgxHierarchicalRowComponent*、*IgxGridGroupByRowComponent* のインポート、入力、キャストなどの使用方法のほとんどが移行されます上記のいずれかを使用するコード内の場所が移行されない場合は、入力/キャストを削除するか、[`RowType`]({environment:angularApiUrl}/interfaces/rowtype.html) で変更してください。
* *getRowByIndex* は、そのインデックスの行が集計行である場合、[`RowType`]({environment:angularApiUrl}/interfaces/rowtype.html) オブジェクトを返すようになりました (以前は *undefined* を返していました)。*row.isSummaryRow* および *row.isGroupByRow* は、インデックスの行が集計行またはグループ行の場合に true を返します。
### IgxInputGroupComponent
* `disabled` プロパティは削除されました。入力グループの状態は常に基になる `igxInput` によって管理されていたため、このプロパティは誤解を招く可能性がありました。
    * `ng update` を実行すると、テンプレートで `[disabled]` が `@Input` として使用されたすべてのインスタンスが処理されます。
    * `.ts` ファイルでプロパティを参照している場合:
    ```typescript
    export class CustomComponent {
        public inputGroup: IgxInputGroupComponent
        ...
        this.inputGroup.disabled = false;
    }
    ```

    基になる入力ディレクティブの `disabled` プロパティを参照するように、コードを手動で更新する必要があります:
    ```typescript
    export class CustomComponent {
        public input: IgxInputDirective
        ...
        this.input.disabled = false;
    }
    ```

### IgxDateTimeDirective、IgxDatePickerComponent、IgxTimePickerComponent、IgxDateRangePickerComponent

* IgxDateTimeDirective、IgxDatePickerComponent、IgxTimePickerComponent、IgxDateRangePickerComponent の `value` プロパティは、ISO 8601 文字列形式を受け入れるようになりました。これは、`value` タイプが `date` または `string` である可能性があることを意味します。
* IgxDateTimeDirective、IgxDatePickerComponent、IgxTimePickerComponent、IgxDateRangePickerComponent の `inputFormat` プロパティは、年の部分に `y` を受け入れないようになりました。`yy` に更新する必要があります。

## 10.2.x から 11.0.x の場合:
* IgxGrid、IgxTreeGrid、IgxHierarchicalGrid
    * グリッドでツール バーをインスタンス化される方法が変更されました。グリッド ツリーに投影される別個のコンポーネントになりました。したがって、`showToolbar` プロパティはすべてのグリッドから削除され、グリッド内のツールバーに関連する他のすべてのプロパティは非推奨です。
    [ツールバー トピック](../grid/toolbar.md)で説明されているように、ツールバー機能を有効にするための推奨される方法に従うことをお勧めします。
    * `igxToolbarCustomContent` ディレクティブが削除されました。移行により、テンプレート コンテンツがツールバー コンテンツ内に移動しますが、テンプレート バインディングは解決されません。移行後は、必ずテンプレート ファイルを確認してください。
    * ツールバー コンポーネントの API はリファクタリング中に変更され、古いプロパティの多くが削除されました。残念ながら、これらの変更に対して適切な移行を行うことはとても複雑であるため、エラーはプロジェクト レベルで処理する必要があります。

## 10.0.x から 10.1.x の場合:
* IgxGrid、IgxTreeGrid、IgxHierarchicalGrid
    * Excel スタイル フィルター メニューを再テンプレート化するための `IgxExcelStyleSortingTemplateDirective`、`IgxExcelStyleHidingTemplateDirective`、`IgxExcelStyleMovingTemplateDirective`、`IgxExcelStylePinningTemplateDirective`  `IgxExcelStyleSelectingTemplateDirective` ディレクティブは削除されたため、列操作とフィルター操作領域を再テンプレート化するために新しく追加されたディレクティブ - `IgxExcelStyleColumnOperationsTemplateDirective` と `IgxExcelStyleFilterOperationsTemplateDirective` を使用できます。テンプレート内で使用するために、Excel スタイル フィルター メニューのすべての内部コンポーネントも公開しました。新しいテンプレートディレクティブの使用に関する詳細は、この[トピック](../grid/excel-style-filtering.md#テンプレート)をご覧ください。
* IgxGrid
    * `selectedRows()` メソッドは、`selectedRows`入力プロパティに変更されました。この重大な変更により、ユーザーは実行時にグリッドの選択状態を簡単に変更できます。行の事前選択もサポートされています。`selectedRows()` メソッドが呼び出されるすべてのインスタンスは、括弧なしで書き換える必要があります。
    * `selectedRows` 入力のバインディングは次のようになります:
    ```typescript
    public mySelectedRows = [0, 1, 2];
    ```
    ```html
    <igx-grid [data]="myData" rowSelection="multiple"
        primaryKey="ID" [selectedRows]="mySelectedRows">
        <!-- ... -->
    </igx-grid>
    ```

## 9.0.x から 10.0.x の場合:
* IgxDropdown
    * ドロップダウン項目の表示プロパティが `flex` から `block` に変更されました。これは、切り捨てられたテキストをデフォルトで有効にするために行われました。この変更により、ドロップダウン項目のコンテンツにテキスト以外のものが含まれる場合、レイアウトはアプリケーション レベルで処理する必要があります。

    * 次の例は、アイコンとテキスト コンテンツでドロップダウン アイテムをスタイルし、垂直配置させる方法を示しています。

    ```html
    <igx-drop-down-item>
        <div class="my-styles">
            <igx-icon>alarm</igx-icon>
            <span>item text</span>
        </div>
    </igx-drop-down-item>
    ```
    ```scss
    .my-styles {
        display: flex;
        align-items: center;

        span {
          margin-left: 8px;
        }
    }
    ```

## 8.x.x から 9.0.x の場合:
Angular 9 の重大な変更により、Hammer プロバイダー は暗黙的に追加されていません 
[詳細は](https://github.com/angular/angular/blob/master/CHANGELOG.md#breaking-changes-9 )を参照してください。このため、以下のコンポネントの**タッチ**操作が正しく動作するには、アプリケーションのルート モジュールに `HammerModule` をインポートする必要があります。

* igxGrid
* igxHierarchicalGrid
* igxTreeGrid
* igxList
* igxNavigationDrawer
* igxTimePicker
* igxDatePicker
* igxMonthPicker
* *igxSlider**
* igxCalendar
* igxCarousel

> **\* 注** - igxSlider のすべてのユーザー操作には HammerModule が必要です。

以下のコード スニペットでアプリのルート モジュール ファイルを更新できます。

```typescript
import { HammerModule } from "@angular/platform-browser";

@NgModule({
    ...
    imports: [
        ...
        HammerModule
    ]
})
```

エクスポートで名前が変更された `Enumeration` があるため、メンバーを手動で更新する必要があります。以下は、手動の更新が必要なすべての変更のリストです。

* AvatarType.`DEFAULT` -> IgxAvatarType.`CUSTOM`
* Type.`DEFAULT` -> IgxBadgeType.`PRIMARY`
* IgxCardType.`DEFAULT` -> IgxCardType.`ELEVATED`
* IgxCardActionsLayout.`DEFAULT` -> IgxCardActionsLayout.`START`
* IgxDividerType.`DEFAULT` -> IgxDividerType.`SOLID`
* IgxProgressType.`DANGER` -> IgxProgressType.`ERROR`

`ng update` プロセスは、`AvatarType`、`Type` などのすべての列挙名を `IgxAvatarType` と `IgxBadgeType` にそれぞれ更新します。その他の列挙メンバー名は変更されません。 

## 8.1.x から 8.2.x の場合:

* IgxDrag
    * `hideBaseOnDrag` と `visible` 入力は非推奨のため、アプリケーションで同じ機能を実現するために、Angular が提供する基本要素を非表示にする任意の方法を使用できます。1 つの例として、可視性スタイルの非表示設定があります。これは、非表示にして DOM で使用するスペースを保持するためです。

        ```html
        <div igxDrag [ngStyle]="{ 'visibility': targetDragged ? 'hidden' : 'visible' }"
            (dragStart)="onDragStarted($event)" (dragEnd)="onDragEnded($event)">
            Drag me!
        </div>
        ```

        ```typescript
        public targetDragged = false;

        public onDragStarted(event) {
            this.targetDragged = true;
        }

        public onDragEnded(event) {
            this.targetDragged = false;
        }
        ```

    * `animateOnRelease` と `dropFinished()` も非推奨のため、`dropFinished()` メソッドの使用は `transitionToOrigin()` に置き換える必要があります。それ以外の場合は、ドラッグした要素を元の位置に戻すタイミングに応じて、`transitionToOrigin()` を呼び出す必要があります。ドラッグされた要素の DOM の位置が変更されると、元の場所もそれに基づいて変更されることに注意してください。

* IgxDrop
    * `IxgDrop` ディレクティブで提供されるデフォルトのドロップ戦略はデフォルトでは適用されなくなったため、同じ動作を継続するには、新しい入力 `dropStrategy` を提供された `IgxAppendDropStrategy` 実装に設定する必要があります。

        ```html
        <div igxDrop [dropStrategy]="appendStrategy"></div>
        ```
        ```typescript
        import { IgxAppendDropStrategy } from 'igniteui-angular';
        // import { IgxAppendDropStrategy } from '@infragistics/igniteui-angular'; for licensed package

        public appendStrategy = IgxAppendDropStrategy;
        ```
    * インターフェイス `IgxDropEnterEventArgs` と `IgxDropLeaveEventArgs` を使用する場合は、`IDragBaseEventArgs` に置き換える必要があります。
    * また、`IgxDropEventArgs` インターフェイスの使用はすべて、用する場合は、`IDropDroppedEventArgs` に置き換える必要があります。

* IgxRowDragDirective
    * `IRowDragStartEventArgs` および `IRowDragEndEventArgs` では、関連先をより明確にするために引数の名前が変更されています。`owner` 引数は `dragDirective` に名前が変更されます。
    `owner` 引数は、owner コンポーネントへの参照を提供するようになりました。コードが以下のような場合:
        ```typescript
        public dragStart(event) {
            const directive = event.owner;
        }
        ```
        バージョン 8.2.x から以下のように更新します。
        ```typescript
        public dragStart(event) {
            const directive = event.dragDirective;
            const grid = event.owner;
        }
        ```

* IgxCombo
    * [`igx-combo`](../combo.md) が選択とデータバインディングを処理する方法が変更されました。

    - コンボの [`valueKey`] 入力が定義されている場合、コントロールは選択を実行するときに、渡されたデータ項目の配列でその特定のプロパティを探します。
    **すべて**の選択イベントは、データ項目の `valueKey` プロパティの値で処理されます。
    `valueKey` が指定されているすべてのコンボには、入力で指定されたオブジェクト プロパティの値のみで構成される選択/双方向バインディングが必要です。
    ```html
    <igx-combo [data]="cities" valueKey="id" displayKey="name"></igx-combo>
    ```
    ```typescript
    export class MyExampleCombo {
        public data: { name: string, id: string }[] = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01' }, ...];
        ...
        selectFavorites() {
            // Selection is handled with the data entries' id properties
            this.combo.selectItems(['UK01', 'BG01']);
        }
    }
    ```

    - コンボに `valueKey` が定義されて**いない**場合、**すべて**の選択イベントは **equality (===)** で処理されます。
    `valueKey` が指定されて**いない**すべてのコンボでは、データ項目への**参照**で選択/双方向バインディングを処理する必要があります。
    ```html
    <igx-combo [data]="cities" displayKey="name"></igx-combo>
    ```
    ```typescript
    export class MyExampleCombo {
        public data: { name: string, id: string }[] = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01' }, ...];
        ...
        selectFavorites() {
            // Selection is handled with references to the data entries
            this.combo.selectItems([this.data[0], this.data[1]]);
        }
    }
    ```

    コンボの設定の詳細については、[readme](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/combo/README.md#value-binding) および[ドキュメント](../combo.md#選択-api)をご覧ください。

## 8.0.x から 8.1.x の場合:
* `igx-paginator` コンポーネントはスタンドアロン コンポーネントとして導入され、Grid コンポーネントでも使用されます。
`paginationTemplate` を設定している場合は、CSS を変更してページネーションを正しく表示する必要がある場合があることに注意してください。これは、コンテンツをセンタリングするための CSS ルールを持つページング固有のコンテナーの下にテンプレートが適用されなくなったため、手動で追加する必要がある場合があるためです。
以下はスタイルの例です。

```html
<igx-grid #grid [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager">
</igx-grid>
<ng-template #pager>
    <div class="pagination-container"></div>
</ng-template>
```

```css
.pagination-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
```

## 7.3.x から 8.0.x の場合:
* アップデート中に以下のエラーが発生した場合、`パッケージ "@angular/compiler-cli" は "typescript" と互換性のないピア依存関係を持っているため (">=3.1.1 <3.3" が必要で、"3.4.5" をインストールします。)`、最初に `@angular/core` パッケージを更新する必要があります。このエラーは [Angular CLI](https://github.com/angular/angular-cli/issues/13095) の既知の問題に関連しています
* `igniteui-angular` パッケージの更新中に次のエラーが表示された場合、`パッケージ "igniteui-angular" は "web-animations-js" と互換性のないピア依存関係を持っているため ("^2.3.1" が必要で、"2.3.2-pr208" をインストールします。)`、`ng update igniteui-angular --force` を使用して更新する必要があります。これは、`igniteui-angular` を更新する前に `@angular/core` と `@angular/cli` を更新した場合に発生する場合があります。

## 7.2.x または 7.3.x から 7.3.4 の場合:
* `IgxGrid`、`IgxTreeGrid`、または `IgxHierarchicalGrid` メソッドを使用する場合は、`condition` パラメーターがオプションではなくなったことに注意してください。`filterGlobal` メソッドが無効な条件で呼び出されると、すべての列の既存のフィルターは消去されません。

## 7.1.x から 7.2.x の場合:
* `combo.value` と一緒に IgxCombo を使う場合、`combo.value` が唯一のゲッターであることに注意してください。
* `IgxTextHighlightDirective` を使用している場合、`page` 入力プロパティは推奨されません。`IActiveHighlightInfo` インターフェイスの `rowIndex`、`columnIndex`、`page` プロパティも非推奨です。代わりに、`行`と`列`のオプション プロパティが追加されています。
* `button-theme` を使用する場合は、ボタンの種類ごとに `$button-roundness` が `$flat-border-radius`、`$raised-border-radius`、`$outline-border-radius`、`$fab-border-radius`、`$icon-border-radius` で置き換えられることに注意してください。

## 7.0.x から 7.1.x
 * アプリケーションで IgxGrid の集計を使用する場合、`IgxSummaryOperand.operate()` メソッドがからデータとともに順番に呼び出されて集計行に必要な高さを計算します。カスタム集計オペランドは、メソッドが常に適切な長さの IgxSummaryResult の配列を返します。

	バージョン 7.1 以前:
```typescript
export class CustomSummary extends IgxNumberSummaryOperand {
	public operate(data?: any[]): IgxSummaryResult[] {
		return [{
			key: 'average',
			label: 'average',
			summaryResult: IgxNumberSummaryOperand.average(data).toFixed(2)
		}];
	}
}
```

	バージョン 7.1 以降:
```typescript
export class CustomSummary extends IgxNumberSummaryOperand {
	public operate(data?: any[]): IgxSummaryResult[] {
		return [{
			key: 'average',
			label: 'average',
			summaryResult: data.length ?  IgxNumberSummaryOperand.average(data).toFixed(2) : null
		}];
	}
}
```

## 6.0.x から 6.1.x

* アプリケーションで IgxCombo コントロールを使用する場合、`itemsMaxWidth` オプションを設定し、このオプションを `itemsWidth` に変更してください。

---
title: Angular Select コンポーネント - IgniteUI for Angular
_description: Angular Select コンポーネントを構成する方法について説明します。Angular Select は、Angular ドロップダウン リストを備えた入力を提供し、Angular Combobox の単一項目選択を可能にします。今すぐお試しください。
_keywords: angular select, angular select コンポーネント, angular フォーム, angular フォーム select コンポーネント, angular ui コンポーネント, igniteui for angular, インフラジスティックス
_language: ja
---

# Angular Select (選択) コンポーネントの概要
Angular Select は、事前定義された値のリストから 1 つの値を選択するために使用されるフォーム コンポーネントです。Angular Select コンポーネントは、ネイティブ HTML select 要素と同じ機能を提供しますが、さらに多くのカスタマイズ オプションを提供します。これは [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) に基づいており、テンプレート、仮想化、ドロップダウン リスト項目のカスタマイズなどのすべての機能をサポートしています。

## Angular Select の例
以下は基本的な Angular Select の例です。クリックごとに開く、いくつかの選択肢のリストを表示するシンプルなコンテキスト メニューがあります。

<code-view style="height: 300px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-sample-1" alt="Angular Select の例">
</code-view>

## Ignite UI for Angular Select を使用した作業の開始

Ignite UI for Angular Select コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxSelectModule` をインポートします。

```typescript
// app.module.ts
...
import { IgxSelectModule } from 'igniteui-angular';
// import { IgxSelectModule } from '@infragistics/igniteui-angular'; for licensed package
@NgModule({
    ...
    imports: [..., IgxSelectModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxSelectComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_SELECT_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/select/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_SELECT_DIRECTIVES } from 'igniteui-angular';
// import { IGX_SELECT_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-select [(ngModel)]="selected">
        <label igxLabel>Simple Select</label>
        <igx-select-item value="Orange">Orange</igx-select-item>
        <igx-select-item value="Apple">Apple</igx-select-item>
        <igx-select-item value="Banana">Banana</igx-select-item>
        <igx-select-item value="Mango">Mango</igx-select-item>
    </igx-select>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_SELECT_DIRECTIVES, FormsModule]
    /* or imports: [IgxSelectComponent, IgxSelectItemComponent, IgxLabelDirective, FormsModule] */
})
export class HomeComponent {
    public selected: string;
}
```

Ignite UI for Angular Select モジュールまたはディレクティブをインポートしたので、`igx-select` コンポーネントの使用を開始できます。

## Angular Select の使用

選択する項目のリストと共に `igx-select` を追加します。[`igx-select-item`]({environment:angularApiUrl}/classes/igxselectitemcomponent.html) を使用して、`igx-select` に含まれる項目を表示します。
```html
<igx-select>
    <label igxLabel>Simple Select</label>
    <igx-select-item value="Orange">Orange</igx-select-item>
    <igx-select-item value="Apple">Apple</igx-select-item>
    <igx-select-item value="Banana">Banana</igx-select-item>
    <igx-select-item value="Mango">Mango</igx-select-item>
</igx-select>
```

その他 [*ngFor](https://angular.io/api/common/NgForOf) 構造ディレクティブに表示したい項目のコレクションを使用する方法があります。

```typescript
public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
```

```html
<igx-select [(ngModel)]="selected">
    <label igxLabel>Simple Select</label>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```

デフォルトでは、Select コンポーネントは入力フィールドの item 要素の `innerText` を使用します。複雑な項目テンプレートの場合、`text` プロパティを明示的に設定して、項目が選択された場合入力フィールドに何を表示するかを指定できます。例:

```html
<igx-select>
    <igx-select-item *ngFor="let item of items" [value]="item.value" [text]="item.text">
        {{item.text}} ( {{item.count}} )
    </igx-select-item>
</igx-select>
```

より複雑な項目テンプレートで `text` プロパティを確認するには、以下のグループ化サンプル [グループ選択](#選択項目のグループ化)を参照してください。

### 入力プロパティ

Select コンポーネントは、[入力グループ](input-group.md)に適用可能な次のディレクティブをサポートしています。

- `igxLabel` - Angular Select 入力とのリンクは `aria-labelledby` を介して自動的に処理されるため、`for` プロパティを設定する必要はありません。
- `igx-prefix`/`igxPrefix`
- `igx-suffix`/`igxSuffix` - 組み込みのトグル ボタンサフィックスが常に最後に表示されることに注意してください。
- `igx-hint`/`igxHint`

```html
<igx-select [(ngModel)]="selected">
    <label igxLabel>Pick a fruit</label>
    <igx-prefix>
        <span class="bio-prefix">BIO</span>
    </igx-prefix>
    <igx-suffix *ngIf="selected">
        <igx-icon (click)="clearSelection($event)">clear</igx-icon>
    </igx-suffix>
    <igx-hint>Choose a banana</igx-hint>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```
<code-view style="height: 350px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-input-directives" >
</code-view>

>[!NOTE]
>Select コンポーネントに [`placeholder`]({environment:angularApiUrl}/classes/igxselectcomponent.html#placeholder) が指定されておらず、選択も行われていない場合、`igxLabel` は遷移し、プレースホルダーが適切な場所に表示されます。

### 選択項目のグループ化
項目グループを視覚的に分離するために、Select コンポーネントは、項目を `<igx-select-item-group>` にラップすることで項目のグループ化をサポートします。
これは、コンポーネントを宣言するために反復可能な階層データに適しています。以下の例では、各グループには `label` と `items` のコレクションがあります。

```typescript
public greengrocery: Array<{ label: string, items: Array<{ type: string, origin: string }> }> = [
    { label: 'Fruits', items: [
            { type: 'Apple', origin: 'local' },
            { type: 'Orange', origin: 'import' },
            { type: 'Banana', origin: 'import'}
        ]
    },
    { label: 'Vegetables', items: [
            { type: 'Cucumber', origin: 'local' },
            { type: 'Potato', origin: 'import' },
            { type: 'Pepper', origin: 'local' }
        ]
    }
];
```

次にテンプレート ファイルでこれらのオブジェクトを反復して項目へ適切にアクセスします。

```html
<igx-select #select>
    <label igxLabel>Select With Groups</label>
    <igx-select-item-group *ngFor="let group of greengrocery" [label]="group.label">
        <igx-select-item *ngFor="let item of group.items" [value]="item.type" [text]="item.type">
            {{item.type}}
            <igx-icon
                title="Local product"
                *ngIf="item.origin === 'local'; else templateImport"
            >local_shipping</igx-icon>
            <ng-template #templateImport>
                <igx-icon title="Import product">flight</igx-icon>
            </ng-template>
        </igx-select-item>
    </igx-select-item-group>
</igx-select>
```

<code-view style="height: 400px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-sample-2" >
</code-view>

### ヘッダーとフッター
現在 Select コンポーネントにデフォルトのヘッダーとフッターのテンプレートはありません。ただし、ヘッダーまたはフッター テンプレートを追加するには、`igxSelectHeader` または `igxSelectFooter` でそれぞれマークします。これらはカスタム テンプレートであるため、スタイル設定も定義する必要があります。

以下の例では、ヘッダーとフッターの両方の ng テンプレートが定義されています。ヘッダーには、[`igx-buttongroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) で実装された基本的なフィルタリングがあります。フッターには、配信方法に基づいて、すべての項目の静的な集計が含まれます。

```html
<igx-select>
    <label igxLabel>Pick your fruit</label>
    <igx-select-item *ngFor="let fruit of fruits" [value]="fruit.type" [text]="fruit.type" [ngSwitch]="fruit.delivery">
        {{fruit.type}}
        <igx-icon *ngSwitchCase="'flight'">flight</igx-icon>
        <igx-icon *ngSwitchCase="'train'">train</igx-icon>
        <igx-icon *ngSwitchCase="'boat'">directions_boat</igx-icon>
    </igx-select-item>
    <ng-template igxSelectHeader>
        <div class="custom-select-header">
            <span class="sample-template-heading">DELIVERY METHOD</span>
            <igx-buttongroup (click)="filter($event.target.title)">
                    <button igxButton title="flight"><igx-icon title="flight">flight</igx-icon></button>
                    <button igxButton title="train"><igx-icon title="train">train</igx-icon></button>
                    <button igxButton title="boat"><igx-icon title="boat">directions_boat</igx-icon></button>
            </igx-buttongroup>
        </div>
    </ng-template>
    <ng-template igxSelectFooter>
        <div class="custom-select-footer">
            <span class="sample-template-heading">TOTAL</span>
            <div class="sample-template-icons">
                <span class="sample-template-icons__item">
                    <igx-icon
                        title="flight"
                        [class.important-icon]="selected === 'flight'"
                    >flight</igx-icon>
                    {{flightCount}}
                </span>
                <span class="sample-template-icons__item">
                    <igx-icon
                        title="train"
                        [class.important-icon]="selected === 'train'"
                    >train</igx-icon>
                    {{trainCount}}
                </span>
                <span class="sample-template-icons__item">
                    <igx-icon
                        title="boat"
                        [class.important-icon]="selected === 'boat'"
                    >directions_boat
                    </igx-icon>
                    {{boatCount}}
                </span>
            </div>
        </div>
    </ng-template>
</igx-select>
```
<code-view style="height: 610px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-header-footer" >
</code-view>


### Angular Select のカスタム切り替えボタン
`igxSelectToggleIcon` ディレクティブを使用するか、あるいは [`toggleIconTemplate`]({environment:angularApiUrl}/classes/igxselectcomponent.html#toggleIconTemplate) プロパティに `TemplateRef` を設定して、デフォルトの切り替えボタンをカスタマイズできます。

```html
<igx-select #select>
    ...
    <ng-template igxSelectToggleIcon let-collapsed>
        <igx-icon>{{ collapsed ? 'add_circle' : 'add_circle_outline'}}</igx-icon>
    </ng-template>
    ...
<igx-select>
```

## キーボード ナビゲーション

- 選択がフォーカスされているときに `Space`、`Enter`、または `ALT + 上矢印/下矢印` キーをクリックして、`igx-select` を開きます。
- `ALT + 上矢印/下矢印` の組み合わせ、または `Enter`、`Space`、`Esc`、`Tab` キーのいずれかを使用して、`igx-select` を閉じます。
- `上矢印/下矢印` キーを使用して項目間を移動します。
- `Home` または `End` キーを使用して、リストの最初と最後の項目へ移動します。
- 特定の文字で始まるリスト項目を移動するには、対応するキーを押します。
- 必要な項目の最初の数文字を入力してすばやく特定の項目に移動できます。
- `Enter` キーまたは `Space` キーを使用して項目を選択します。

>[!NOTE]
>`igx-select` は項目の**単一**選択のみをサポートします。

また、[ドラッグアンドドロップ App Builder™](https://jp.infragistics.com/products/appbuilder) を試して、特定のプロセスを自動化し、次の Angular アプリを構築する際の過度の手動コーディングの必要性を減らす方法を確認することもできます。

## カスタム オーバーレイ設定
カスタム [`OverlaySettings`]({environment:angularApiUrl}/interfaces/overlaysettings.html) を作成できます。テンプレートを以下のように定義します。
```html
<igx-select [overlaySettings]="customOverlaySettings">
    <igx-select-item *ngFor="let item of items">
        {{item}}
    </igx-select-item>
</igx-select>
```
- `overlaySettings` プロパティがカスタム設定にバインドされます。

クラスの内側に以下のようなコードがあります。
```typescript
export class MyClass implements OnInit {
    @ViewChild(IgxSelectComponent)
    public select: IgxSelectComponent;
    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango', 'Tomato'];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this.customOverlaySettings = {
            target: this.select.inputGroup.element.nativeElement,
            positionStrategy: new ConnectedPositioningStrategy(
                positionSettings
            ),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
}
```
[ConnectedPositioningStrategy]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html) に直接渡す [PositionSettings]({environment:angularApiUrl}/interfaces/positionsettings.html) オブジェクトを作成しましたが必須ではありません。ただし、カスタム ポジショニングを定義するためにストラテジのデフォルト設定をオーバーライドします。

- [ngOnInit](https://angular.io/api/core/OnInit) フックの内側にすべて設定できます。コンポーネントの生成時にテンプレートに自動的に反映します。


<code-view style="height: 260px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-sample-4" >
</code-view>


テンプレートを以下のようにカスタマイズされた [OverlaySettings]({environment:angularApiUrl}/interfaces/overlaysettings.html) オブジェクトを [IgxSelectComponent]({environment:angularApiUrl}/classes/igxselectcomponent.html#open) の open 関数に渡すこともできます。
```html
<igx-select>
    <igx-select-item *ngFor="let item of items">
        {{item}}
    </igx-select-item>
</igx-select>

<button (click)="onClick($event)"></button>
```

クラスには以下があります。
```typescript
export class MyClass implements OnInit {
    /* -- */
    private otherCustomOverlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy()
    }
    onClick(event: MouseEvent): void {
        this.select.open(this.otherCustomOverlaySettings)
    }
    /* -- */
}
```
>[!NOTE]
>テンプレートと同様に関数 `open` 引数としてカスタム設定を渡す場合、`igx-select` は関数 `open` 提供されるものを使用します。ただし、`opening` たは `opened` などのインターナル イベントにバインドした場合は、`igx-select` はテンプレートの設定を使用します。

## スタイル設定

各コンポーネントには独自のテーマ関数があります。

Select コンポーネントのスタイルを設定するには、それに含まれるコンポーネントのスタイルを設定します。この場合、[input-group-theme]({environment:sassApiUrl}/themes#function-input-group-theme) と [drop-down-theme]({environment:sassApiUrl}/themes#function-drop-down-theme) を使用する必要があります。
[`Input Group`](input-group.md#スタイル設定) と [`Drop Down`](drop-down.md#スタイル設定) のスタイル設定セクションを参照して、これら 2 つのコンポーネントのスタイル設定方法をより深く理解してください。

また、Select コンポーネントのボタンのスタイル設定にのみ使用される [`select-theme`]({environment:sassApiUrl}/themes#function-select-theme) 関数もあります。 <br>
Select コンポーネントのボタンのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`select-theme`]({environment:sassApiUrl}/themes#function-select-theme) を拡張し、`$toggle-button-background` のみを提供して新しいテーマを作成します。theme 関数は、この単一の値に基づいて、さまざまな状態に対応するすべての背景色と前景色を自動的に計算します。

```scss
$custom-select-theme: select-theme(
  $toggle-button-background: #57a5cd,
);
```

最後には、カスタム ラジオ テーマをアプリケーションに渡します。

```scss
@include css-vars($custom-select-theme);
```

<code-view style="height: 220px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/select-styling" >
</code-view>


<div class="divider--half"></div>

## API リファレンス
* [IgxSelectComponent]({environment:angularApiUrl}/classes/igxselectcomponent.html)
* [IgxSelectItemComponent]({environment:angularApiUrl}/classes/igxselectitemcomponent.html)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxDropDownItemComponent]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html)
* [OverlaySettings]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [ConnectedPositioningStrategy]({environment:angularApiUrl}/classes/connectedpositioningstrategy.html)
* [GlobalPositionStrategy]({environment:angularApiUrl}/classes/globalpositionstrategy.html#constructor)
* [AbsoluteScrollStrategy]({environment:angularApiUrl}/classes/absolutescrollstrategy.html)
* [PositionSettings]({environment:angularApiUrl}/interfaces/positionsettings.html)

## テーマの依存関係
* [IgxDropDown テーマ]({environment:sassApiUrl}/themes#function-drop-down-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)
* [IgxOverlay テーマ]({environment:sassApiUrl}/themes#function-overlay-theme)
* [IgxInputGroup テーマ]({environment:sassApiUrl}/themes#function-input-group-theme)

## その他のリソース
* [NgModel](https://angular.io/api/forms/NgModel)
* [ViewChild](https://angular.io/api/core/ViewChild)
* [ngForOf](https://angular.io/api/common/NgForOf)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

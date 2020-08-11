---
title: カスケーディング
_description: igx-combo と igx-select は、ユーザーが一方または両方のコントロールを使用してカスケード シナリオを簡単に構築できるようにするイベント、プロパティ、およびメソッドを公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール、Angular カスケーディング Combo, Angular Select, Angular カスケーディング
_language: ja
---

## カスケーディング
<p class="highlight">
 [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) と [igx-select]({environment:angularApiUrl}/classes/igxselectcomponent.html) は、簡単にカスケーディングを作成できるイベント、プロパティ、メソッドを公開します。
</p>
<div class="divider"></div>

### デモ

以下のサンプルは、2 つの [igx-select]({environment:angularApiUrl}/classes/igxselectcomponent.html) と [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) コンポーネントを使用しています。

<div class="sample-container loading" style="height: 540px;">
    <iframe id="cascading-combos-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/cascading-combos" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="cascading-combos-sample" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="cascading-combos-sample" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法
はじめに `IgxComboModule`, `IgxDropDownModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxComboModule, IgxDropDownModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule, IgxDropDownModule ],
    ...
})
export class AppModule {}
```

以下のサンプルは、[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) と 2 つの [igx-select]({environment:angularApiUrl}/classes/igxselectcomponent.html) コンポーネント、それらに対応する入力要素を使用しています。両コンポーネントの API は、選択された項目を取得してドロップダウンまたはコンボのいずれかにデータソースを読み込み、選択をクリアまたはデータソースをリセットします。

```html
<igx-select type="box" #cntr placeholder="Choose Country..."
    (onSelection)="selectCountry($event)" [(ngModel)]="location.country">
    <igx-select-item *ngFor="let c of countryData" [value]="c"> {{ c }} </igx-select-item>
</igx-select>
<igx-select type="box" #prvnc placeholder="Choose Province..." [disabled]="!cntr.value"
    (onSelection)="selectProvince($event)" [(ngModel)]="location.province">
    <igx-select-item *ngFor="let p of provinceData" [value]="p"> {{ p }} </igx-select-item>
</igx-select>
<igx-combo #twn [itemsMaxHeight]="225" [data]="townData" [disabled]="!prvnc.value"
    placeholder="Choose Town..." searchPlaceholder="Search..." [allowCustomValues]="false"
    [(ngModel)]="location.towns">
</igx-combo>

```

```typescript
import { Component } from "@angular/core";
import { data } from "./local-data";

@Component({
    selector: "app-combo",
    styleUrls: ["./cascading-combos.component.scss"],
    templateUrl: "./cascading-combos.component.html"
})
export class CascadingCombos {
    public location: { country: string, province: string, towns: string[] } = { country: "", province: "", towns: [] };
    public data = data;
    public countryData = [];
    public provinceData = [];
    public townData = [];

    constructor() {
        this.countryData = Object.keys(data);
    }

    public selectCountry(args) {
        this.provinceData = Object.keys(this.data[args.newSelection.value]);
        this.location.province = "";
        this.location.towns = [];
    }

    public selectProvince(args) {
        this.townData = this.data[this.location.country][args.newSelection.value];
        this.location.towns = [this.townData[0]];
    }
}
```

## その他のリソース
<div class="divider--half"></div>

* [コンボ機能](combo_features.md)
* [コンボ リモート バインディング](combo_remote.md)
* [コンボ テンプレート](combo_templates.md)
* [テンプレート駆動フォームの統合](input_group.md)
* [リアクティブ フォームの統合](input_group_reactive_forms.md)
* [IgxOverlay]({environment:angularApiUrl}/classes/igxoverlayservice.html)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

---
title: Angular 星評価コンポーネント – Ignite UI for Angular
_description: Angular 星評価コンポーネントを使用すると、ユーザーはフィードバックをすばやく表示して提供できます。任意の Angular アプリおよび Angular フォームで評価コンポーネントを使用できます。今すぐお試しください。
_keywords: Angular Rating コンポーネント, Angular Rating コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---
# Angular Star Rating (星評価) の概要

Angular の評価は、星評価システムを使用して、ユーザーが Web ページ上でフィードバックを迅速に提供し、製品またはサービスを評価できるようにするウィジェットを表します。使いやすいこのコンポーネントにより、開発者は表示される星評価項目のサイズと数を構成できます。

Ignite UI Angular Star Rating コンポーネントは、igniteui-webcomponents パッケージから簡単にインストールできます。エンドユーザーに直感的な評価エクスペリエンスを提供し、製品 / サービスを表示して評価できるようにします (通常、最も一般的なシナリオでは、0 から 5 までの星から選択するオプションがあります)。


## Angular Rating の例

この Angular Star Rating の例では、Ignite UI Angular を使用して単純な 5 つ星評価ウィジェットを作成し、さまざまな製品のスコアを比較および表示する方法を示します。

<code-view style="height: 550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-with-rating" alt="Angular Rating の例">
</code-view>


<div class="divider--half"></div>


## Ignite UI for Angular Star Rating の概要

Ignite UI Rating は標準の[ウェブ コンポーネント](https://developer.mozilla.org/ja/docs/Web/Web_Components)であるため、Angular アプリケーションで使用できます。

以下の手順に従って、Ignite UI Web Components のパッケージを Angular プロジェクトに追加し、コンポーネントを使用するためにセットアップします。

最初に、`igniteui-webcomponents` パッケージをインストールします。

```cmd
npm install igniteui-webcomponents --save
```

次に、`main.ts` ファイルまたは `IgcRating` を使用しているコンポーネントの `.ts` ファイルで `IgcRatingComponent` 引数を指定して `defineCustomElements()` 関数を呼び出す必要があります。

```typescript
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);
```

また、`AppModule` に `CUSTOM_ELEMENTS_SCHEMA` スキーマを含める必要があります。

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

これらを使用して、Angular コンポーネント テンプレートに Rating コンポーネントを追加し、その入力と表示を使用できるようになります:

```html
<igc-rating value="ratingVal" min="1" max="5" (igcChange)="ratingChanged($event);"></igc-rating>
```

## フォームで Angular Star Rating を使用する

Angular フォームでは、多くの場合、コンポーネントはその値を `ngModel` にバインドしたり、Angular の `ControlValueAccessor` インターフェイスの実装を必要とする `formControl` を使用したりできる必要があります。Ignite UI for Angular パッケージは、要素セレクターを使用してサポートされているウェブ コンポーネントにアタッチするディレクティブの形式で、このような実装を提供します。現在、サポートされているコンポーネントは `IgcRating` のみです。ディレクティブを使用するには、ライブラリから `IgcFormsModule` をインポートするだけです。

```typescript
import { IgcFormsModule } from 'igniteui-angular';
// import { IgcFormsModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        IgcFormsModule
    ]
})
export class AppModule { }
```

>[!NOTE]
>`IgcFormsModule` をインポートして `ngModel` または `formControl` を使用する場合、Angular はカスタム `ControlValueAccessor` ディレクティブによって `igc-rating` タグを認識するため、`CUSTOM_ELEMENTS_SCHEMA` を含める必要はありません。

あるいは、`16.0.0` 以降、`IgcFormControlDirective` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IgcFormControlDirective } from 'igniteui-angular';
// import { IgcFormControlDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igc-rating name="modelRating" [(ngModel)]="product.Rating" max="10" label="Model Rating"></igc-rating>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgcFormControlDirective, FormsModule]
})
export class HomeComponent {
    public product: Product;
}
```

たとえば、値に ngModel を使用して評価を追加すると、問題なくモデルと双方向にバインドされます。

```html
<igc-rating name="modelRating" [(ngModel)]="model.Rating" max="10" label="Model Rating"></igc-rating>
```

次のアプリケーションは、フォームを使用した実際のユースケースでこの統合がどのように機能するかを示す一例です。

<code-view style="height: 550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/rating-form" alt="Angular Rating の例">
</code-view>

Rating コンポーネントの使用方法の詳細については、[このトピック]({environment:infragisticsBaseUrl}/products/ignite-ui-web-components/web-components/components/inputs/rating.html)を参照してください。


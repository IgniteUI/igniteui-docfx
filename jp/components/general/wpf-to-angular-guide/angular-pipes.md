---
title: Angular パイプでデータを変換 | IgniteUI for Angular | インフラジスティックス
_description: WPF コンバーターに類似した、Angular パイプを使用してデータを変換する方法を学びます。
_keywords: transform data, ignite ui for angular, インフラジスティックス
_language: ja
---

## Angular パイプでデータを変換

> [!Video https://www.youtube.com/embed/Gmz5kio50FE]

WPF コンバーターに類似した、Angular パイプを使用してデータを変換する方法を学びます。このテクニックは、WPF コンバーターに似ています。

WPF では、データをある値から別の値に変換するために、[IValueConverter](https://docs.microsoft.com/ja-jp/dotnet/api/system.windows.data.ivalueconverter?view=netframework-4.8) を使用します。Angular アプリケーションでデータを変換するには、[Pipe](https://angular.io/api/core/Pipe) を使用します。パイプは WPF コンバーターにとても似ています。データを入力として受け取り、そのデータを表示用の目的の出力に変換します。

Angular は、最も一般的なデータ変換用に事前定義された多数のパイプを提供します。たとえば、ヘッダー テキストを大文字で表示する場合は、[UpperCasePipe](https://angular.io/api/common/UpperCasePipe) を使用できます。パイプの使用はとても簡単です。式の後に、パイプ演算子 `|` とその後にパイプ名を提供します。

```html
<h2>{{ header | uppercase }}</h2>
```

WPF コンバーターと比較した場合の Angular のパイプの利点は、一度に複数のパイプを使用できることです。たとえば、[DatePipe](https://angular.io/api/common/DatePipe) と [UpperCasePipe](https://angular.io/api/common/UpperCasePipe) を使用して、日付を使いやすい形式にフォーマットし、大文字にすることができます。

```html
<h2>{{ birthday | date | uppercase }}</h2>
```

更に、パイプにパラメーターを提供するオプションもあります。たとえば、[DatePipe](https://angular.io/api/common/DatePipe) には、形式、タイムゾーン、ロケールなどのパラメーターがあります。

```html
<h2>{{ birthday | date:"MM/dd/yy" }}</h2>
```

## パイプの作成

事前定義されたパイプを使用する以外に、Angular では独自のパイプを定義できます。以下は、文字列を別の文字列に置き換える WPF コンバーターの実装です。

```csharp
public class ReplaceConverter : IValueConverter
{
    public string OldValue { get; set; }
    public string NewValue { get; set; }

    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        var strValue = value.ToString();
        return strValue.Replace(this.OldValue, this.NewValue);
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}
```

```xml
<Window.Resources>
    <local:ReplaceConverter OldValue=" " NewValue="-" x:Key="replaceConverter"></local:ReplaceConverter>
</Window.Resources>
<Grid>
    <TextBlock Text="{Binding Path=Name, Mode=OneWay, Converter={StaticResource replaceConverter}}"></TextBlock>
</Grid>
```

Angular で同じことを行うには、[PipeTransform](https://angular.io/api/core/PipeTransform) インターフェイスを実装し、[@Pipe](https://angular.io/api/core/Pipe) デコレータを持つクラスを定義する必要があります。

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {

    transform(value: string, oldValue: string, newValue: string): string {
        return value.replace(oldValue, newValue);
    }
}
```

```html
<span>{{ name | replace:" ":"-" }}</span>
```
> [!NOTE]
> コンポーネントの html テンプレートでパイプを使用できるようにするには、モジュール宣言にパイプを追加する必要があります。

> [!NOTE]
> Angular パイプと WPF コンバーターの重要な違いは、Angular パイプは [ConvertBack](https://docs.microsoft.com/ja-jp/dotnet/api/system.windows.data.ivalueconverter.convertback?view=netframework-4.8) メソッドを持つ WPF コンバーターとは異なり、一方向のバインディングに対してのみ機能することです。

## その他のリソース
* [デスクトップから Web: Angular パイプを使用したデータの変換](https://www.youtube.com/watch?v=Gmz5kio50FE&list=PLG8rj6Rr0BU-AqcJMuwggKy0GMIkjkt3j&index=9)
* [Angular パイプ](https://angular.io/guide/pipes)
* [事前定義された Angular パイプのリスト](https://angular.io/api?type=pipe)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
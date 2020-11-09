---
title: Angular データ チャート | データ可視化ツール | データソース | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して、積層型棒、積層型エリアなどの積層型チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, stacked chart, Ignite UI for Angular, Infragistics, data source, Angular チャート, データ チャート, 積層型チャート, インフラジスティックス, データソース
mentionedTypes: ['XamDataChart']
_language: ja
---

# Angular 積層シリーズのサンプル データソース

このトピックでは、積層シリーズのデータソースを実装する方法の例を示します。

    public class SampleCategoryData
        {
            public static List<SampleCategoryItem> Create() {
                // total olympic medals for top countries
                var data = new List<SampleCategoryItem>() {
                    new SampleCategoryItem {Year = "1996", USA= 148, CHN= 110, RUS= 95},
                    new SampleCategoryItem {Year = "2000", USA= 142, CHN= 115, RUS= 91},
                    new SampleCategoryItem {Year = "2004", USA= 134, CHN= 121, RUS= 86},
                    new SampleCategoryItem {Year = "2008", USA= 131, CHN= 129, RUS= 65},
                    new SampleCategoryItem {Year = "2012", USA= 135, CHN= 115, RUS= 77},
                    new SampleCategoryItem {Year = "2016", USA= 146, CHN= 112, RUS= 88},
                };
                return data;
            }
        }

        public class SampleCategoryItem
        {    
            public int USA { get; set; }
            public int CHN { get; set; }
            public int RUS { get; set; }

            public string Year { get; set; }
        }

```ts
export class SampleCategoryItem  {
    public Year?: string;
    public USA?: number;
    public RUS?: number;
    public CHN?: number;

    constructor(year: string, usa: number, chn: number, rus: number) {
        this.Year = year;
        this.USA = usa;
        this.RUS = chn;
        this.CHN = rus;
    }
}

export class SampleCategoryData {
    public static create(): SampleCategoryItem[] {
        const data: SampleCategoryItem[] = [];
        // total olympic medals for top countries: USA, CHN, RUS
        data.push(new SampleCategoryItem("1996", 148, 110, 95));
        data.push(new SampleCategoryItem("2000", 142, 115, 91));
        data.push(new SampleCategoryItem("2004", 134, 121, 86));
        data.push(new SampleCategoryItem("2008", 131, 129, 65));
        data.push(new SampleCategoryItem("2012", 135, 115, 77));
        data.push(new SampleCategoryItem("2016", 146, 112, 88));
        return data;
    }
}
```

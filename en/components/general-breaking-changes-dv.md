---
title: Angular Breaking Changes | Ignite UI for Angular | Infragistics
_description: Learn about breaking changes in the Ignite UI for Angular and how to update your code to latest API.
_keywords: Breaking Changes,  Ignite UI for Angular, Infragistics
---

# Breaking Changes in Ignite UI for Angular

This topic provides information about breaking changes in Ignite UI for Angular as well as how to update older code to latest API.

## Redesigned Chart Defaults

> [!NOTE]
> These breaking changes were introduce in version **11.2.0** of these packages and components:

-   All types of charts/series have new colors for brush/fill and outlines

| Old series brushes outlines | New series outline brushes |
| --------------------------- | -------------------------- |
| `Color_001=#7446B9`         | `Color_001=#8bdc5c`        |
| `Color_002=#9FB328`         | `Color_002=#8b5bb1`        |
| `Color_003=#F96232`         | `Color_003=#6db1ff`        |
| `Color_004=#2E9CA6`         | `Color_004=#f8a15f`        |
| `Color_005=#DC3F76`         | `Color_005=#ee5879`        |
| `Color_006=#FF9800`         | `Color_006=#735656`        |
| `Color_007=#3F51B5`         | `Color_007=#f7d262`        |
| `Color_008=#439C47`         | `Color_008=#8ce7d9`        |
| `Color_009=#795548`         | `Color_009=#e051a9`        |
| `Color_010=#9A9A9A`         | `Color_010=#a8a8b7`        |

-   All types of charts/series have marker outlines with 2px thickness

-   Bar/Column/Waterfall series have outlines with 1px thickness (other series have 2px thickness)

-   Bar/Column/Waterfall series have square corners instead of rounded corners anymore

-   Point/Bubble/ScatterSeries/PolarScatter series have markers with 70% transparent fill

-   Point/Bubble/ScatterSeries/PolarScatter series have markers with fill that matches marker outline. To revert to the previous styling behavior for these series a new property has been added to the series, `MarkerFillMode`, which can be set to normal to mimic the prior behavior.

-   Scatter High Density series has new colors for min/max heat properties

    | Old heat min color | New heat min color |
    | ------------------ | ------------------ |
    | `#FF7446B9`        | `#ff8b5bb1`        |

    | Old heat max color | New heat max color |
    | ------------------ | ------------------ |
    | `#FFC62828`        | `#ffee5879`        |

-   Financial/Waterfall series have new colors for negative fill of their visuals

    | Old negative brush | new negative brush |
    | ------------------ | ------------------ |
    | `#FFC62828`        | `#ffee5879`        |

<div class="divider--half"></div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## Changed Import Statements

Import statements have been simplified to use just package names instead of full paths to API classes and enums.

> [!NOTE]
> These breaking changes were introduce in version **8.2.12** of these packages and components:

| Affected Packages                                                                                                              | Affected Components                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| <a href="https://www.npmjs.com/package/igniteui-angular-excel/v/8.2.12" target="_blank">igniteui-angular-excel</a>             | [Excel Library](excel-library.md)                                                                           |
| <a href="https://www.npmjs.com/package/igniteui-angular-spreadsheet/v/8.2.12" target="_blank">igniteui-angular-spreadsheet</a> | [Spreadsheet](spreadsheet-overview.md)                                                                      |
| <a href="https://www.npmjs.com/package/igniteui-angular-maps/v/8.2.12" target="_blank">igniteui-angular-maps</a>               | [Geo Map](geo-map.md), [Treemap](charts/types/treemap-chart.md)                                                       |
| <a href="https://www.npmjs.com/package/igniteui-angular-gauges/v/8.2.12" target="_blank">igniteui-angular-gauges</a>           | [Bullet Graph](bullet-graph.md), [Linear Gauge](linear-gauge.md), [Radial Gauge](radial-gauge.md)           |
| <a href="https://www.npmjs.com/package/igniteui-angular-charts/v/8.2.12" target="_blank">igniteui-angular-charts</a>           | Category Chart, Data Chart, Donut Chart, Financial Chart], Pie Chart, [Zoom Slider](zoomslider-overview.md) |
| <a href="https://www.npmjs.com/package/igniteui-angular-grids/v/8.2.12" target="_blank">igniteui-angular-grids</a>             | [Data Grid](data-grid.md)                                                                                   |
| <a href="https://www.npmjs.com/package/igniteui-angular-core/v/8.2.12" target="_blank">igniteui-angular-core</a>               | all classes and enums                                                                                       |

## Code After Changes

Now, you need to use just package names instead of full paths to API classes and enums.

Please also note that the name of the Data Grid component and its corresponding modules have also changed.

```ts
// gauges:
import { IgxLinearGauge } from "igniteui-angular-gauges";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";
import { IgxLinearGraphRange } from "igniteui-angular-gauges";

import { IgxRadialGauge } from 'igniteui-angular-gauges}';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { IgxRadialGaugeRange } from 'igniteui-angular-gauges';
import { SweepDirection } from 'igniteui-angular-core';

// charts:
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxDataChartCoreModule } from "igniteui-angular-charts";

// maps:
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicMapModule } from "igniteui-angular-maps";
```

## Code Before Changes

Before, you had to import using full paths to API classes and enums:

```ts
// gauges:
import { IgxLinearGaugeComponent } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-component';
import { IgxLinearGaugeModule } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-module';
import { IgxLinearGraphRange } from 'igniteui-webcomponents-gauges/ES5/igx-linear-graph-range';

import { IgxRadialGaugeComponent } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-component";
import { IgxRadialGaugeModule } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-module";
import { IgxRadialGaugeRange } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-range";
import { SweepDirection } from "igniteui-webcomponents-core/ES5/SweepDirection";

// charts:
import { IgxFinancialChartComponent } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-component";
import { IgxFinancialChartModule } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-module";
import { IgxDataChartComponent } from "igniteui-webcomponents-charts/ES5/igx-data-chart-component";
import { IgxDataChartCoreModule } from "igniteui-webcomponents-charts/ES5/igx-data-chart-core-module";

// maps:
import { IgxGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-component";
import { IgxGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-module";
```

<!-- end: Angular, React, WebComponents -->

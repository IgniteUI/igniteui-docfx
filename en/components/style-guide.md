# Style guide

### Colors

<div class="sg-palette">
    <div class="sg-color-block sg-color-block--primary">
        <strong>Primary</strong>
        <span></span>
    </div>
    <div class="sg-color-block sg-color-block--info">
        <strong>Info</strong>
        <span></span>
    </div>
    <div class="sg-color-block sg-color-block--success">
        <strong>Success</strong>
        <span></span>
    </div>
    <div class="sg-color-block sg-color-block--warning">
        <strong>Warning</strong>
        <span></span>
    </div>
    <div class="sg-color-block sg-color-block--error">
        <strong>Error</strong>
        <span></span>
    </div>
</div>

### Bold, italic and scratched

This text is **bold**.  
This text is *italic*.  
This text is ~~scratched~~.

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### Paragraph(Line Continuation)

By default Markdown adds paragraphs at double line breaks.
Single line breaks by themselves are simply wrapped together into a single line.
If you want to have soft <a hre="#">returns</a> that break a single line, add two spaces at the end of the line.

This line has a paragraph break at the end (empty line after).

Theses two lines should display as a single
line because there's no double space at the end.

The following line has a soft break at the end (two spaces at end)   
This line should be following on the very next line.
This line has a paragraph break at the end (empty line after).

### Links

[www.infragistics.com](https://www.infragistics.com/)

### Block Quotes
> ### Headers break on their own
> Note that headers don't need line continuation characters
as they are block elements and automatically break.
Only text lines require the double spaces for single line breaks.

###Unordered Lists

* Item 1
* Item 2
* Item 3

### Ordered Lists
1. **Item 1**  
   Item 1 is really something
2. **Item 2**  
   Item two is really something else

### Inline Code
Structured statements like for `x =1 to 10` loop <a href="#"><code>structures</code></a> can be codified using single back ticks.

### Code Blocks
```scss
:host {
    ::ng-deep {
        // comment
        @include igx-splitter($custom-splitter-theme);
    }
}
```

### Alerts
> [!WARNING]
> This is some Note Text  
> that spreads across two lines

> [!NOTE]
> Singe line note.

A block of text between note boxes.

> [!TIP]
> Tipping my hat to the clown

> [!IMPORTANT]
> Don't forget to screw on your hat!

### Table
| test | test                                                    | test | test | test |
|------|---------------------------------------------------------|------|------|------|
| val  | Using the Table menu set the desired size of the table. | val  | val  | val  |
| val  | Using the Table menu set the desired size of the table. | val  | val  | val  |
| val  | Using the Table menu set the desired size of the table. | val  | val  | val  |

# Style guide

### Bold, italic and scratched
```markdown
This text **is bold**.
This text *is italic*.
This text ~~is scratched~~.
```

This text is **bold**.  
This text is *italic*.  
This text is ~~scratched~~.

### Header Text
```markdown
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```
<h1>Header text h1</h1>
<h2>Header text h2</h2>
<h3>Header text h3</h3>
<h4>Header text h4</h4>
<h5>Header text h5</h5>
<h6>Header text h6</h6>

### Paragraph(Line Continuation)
By default Markdown adds paragraphs at double line breaks. 
Single line breaks by themselves are simply wrapped together into a single line. 
If you want to have soft returns that break a single line, add two spaces at the end of the line.

This line has a paragraph break at the end (empty line after).

Theses two lines should display as a single
line because there's no double space at the end.

The following line has a soft break at the end (two spaces at end)   
This line should be following on the very next line.
This line has a paragraph break at the end (empty line after).

### Links
```markdown
[www.infragistics.com](https://www.infragistics.com/)
```

[www.infragistics.com](https://www.infragistics.com/)

If you need additional tags like targets or title attributes you can also embed HTML directly:

#### Link attributes
```markdown
Go the Help Builder sitest Wind site: <a href="https://www.infragistics.com" target="_blank">Help Builder Site</a>.
```

### Block Quotes
Block quotes are callouts that are great for adding notes or warnings into documentation.

```markdown
> ###  Headers break on their own
> Note that headers don't need line continuation characters
as they are block elements and automatically break. Only text
lines require the double spaces for single line breaks.
```

> ### Headers break on their own
> Note that headers don't need line continuation characters
as they are block elements and automatically break.
Only text lines require the double spaces for single line breaks.

###Unordered Lists
```markdown
* Item 1
* Item 2
* Item 3
```

* Item 1
* Item 2
* Item 3

### Ordered Lists
```markdown
1. **Item 1**  
   Item 1 is really something
2. **Item 2**  
   Item two is really something else
```

1. **Item 1**  
   Item 1 is really something
2. **Item 2**  
   Item two is really something else

### Inline Code
If you want to embed code in the middle of a paragraph of text to highlight a coding syntax or class/member name you can use inline code syntax:

```markdown
Structured statements like `for x =1 to 10` loop structures
can be codified using single back ticks.
```

Structured statements like for `x =1 to 10` loop <a href="#"><code>structures</code></a> can be codified using single back ticks.

### Code Blocks
You can also use triple back ticks plus an optional coding language to support for syntax highlighting (space injected before last ` to avoid markdown parsing):

```markdown

    ```csharp
    // this code will be syntax highlighted
    for(var i=0; i++; i < 10) {
        Console.WriteLine(i);
    }
    ```

```

```csharp
for(var i=0; i++; i < 10) {
    Console.WriteLine(i);
}
```

Many languages are supported: html, xml, javascript, css, csharp, foxpro, vbnet, sql, python, ruby, php and many more. Use the Code drop down list to get a list of available languages.
You can also leave out the language to get no syntax coloring but the code box.

### Alerts
```markdown
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
```
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

```markdown
| test | test                                                    | test | test | test |
|------|---------------------------------------------------------|------|------|------|
| val  | Using the Table menu set the desired size of the table. | val  | val  | val  |
| val  | Using the Table menu set the desired size of the table. | val  | val  | val  |
| val  | Using the Table menu set the desired size of the table. | val  | val  | val  |
```

| test | test                                                    | test | test | test |
|------|---------------------------------------------------------|------|------|------|
| val  | Using the Table menu set the desired size of the table. | val  | val  | val  |
| val  | Using the Table menu set the desired size of the table. | val  | val  | val  |
| val  | Using the Table menu set the desired size of the table. | val  | val  | val  |

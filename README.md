#Show Your Keywords on the page

**Author**:   Daniel Gasser
**Date**:     2013-12-29
**Version**:  1.0
******************************

#Description

This jQuery (<http://jquery.com>) Plugin parses a given HTML-elements for words in the text
and displays them in another element in different sizes, colors and at different positions.
******************************

#Skills required


This plugin is for frontend-developers, if you think, you aren't, read below links.

- Basic knowledge about jQuery selectors: <http://api.jquery.com/category/selectors/>
  and the jQuery ```ready()``` method <http://api.jquery.com/ready/>
  
- HTML elements
******************************

#Basic Usage

1. Link the Javascript file ```displayKeywords.js``` in the ```<head>``` section of your HTML-file

2. Bind the plugin to the container to search in.
   Eg. ```'#container'```, ```'body'```, ```'ul'```, etc.

3. Set the element to display the keywords. ```displayElement:```
 
   Eg. ```'#keywords'```, ```'.class'```, ```'#whatever'```, etc.

```
<html>
    <head>
    ...
        <script type="text/javascript" src="../js/displayKeywords"></script>
        $(document).ready(function () {
            $('#container').displayKeywords({
                displayElement: '#keywords'
            });
        });
    </head>
```
That's it! At least, if the given elements exists and contain some words...

Live example on <http://pc-shooter.ch>
& <http://www.daniel-gasser.com/>
******************************

#Options

Set options like this:
```
$(document).ready(function () {
     $('#container').displayKeywords({
         displayElement: '#keywords'
         displayElementHeight: '160px',
         maxFontSize: 3.5,
         minFontSize: 1,
         fontColors: [
             '#ff9900',
             '#ffffff',
             '#000000'
         ],
         //and so on, no comma after the last option
     });
});
```

******************************

#Options explanation

**displayElement**: (String)

HTML element to display the keywords
Eg. ```'#keywords'```, ```'.class'```, ```'whatever element desired'```, etc.

Default: ```'#pagekeywords'```
******************************

**displayElementHeight**: (String)

height & max-height of **displayElement**

Default: ```'160px'```
******************************

**fontSizeFactor**: (Float)

Used for ```Math.random()``` to calcuate the font size depending on the size of the **displayElement**

Default: ```0.03```
******************************

**fontColors**: (Array)

Font colors for random colors, put as many as you like. 
Eg. ```'#ff9900'```, ```rgb(255, 153, 0)```, ```rgba(255, 153, 0, 0.5)```
     
Default: ```['#ff9900',
             '#ffffff',
             '#000000',
             '#cccccc']```
******************************

**wordMinSize**: (Integer)

The minimal size (letter count) of a word to be taken.

Default: ```3```
******************************

**fontFamily**: (String)

Default: ```'Verdana, sans-serif'```
******************************

**filterWords**: (Array)
     
Words are excluded
     
Default: ```['I',
             'You',
             'He',
             'She',
             'It',
             'We',
             'You',
             'They',
             'Me',
             'You',
             'Him',
             'Her',
             'It',
             'Us',
             'You',
             'Them',
             'My',
             'Your',
             'His',
             'Her',
             'Its',
             'Our',
             'Your',
             'Their',
             'This',
             'That',
             'These',
             'Those',
             'Mine',
             'Yours',
             'His',
             'Hers',
             'Ours',
             'Yours',
             'Theirs']```
******************************

**onlyCapitalWords**: (Boolean)

If set to true, only Words with a capital letter at the beginning are token.

Default: ```true```
******************************

#Show Your Keywords on the page

**Author**:   Daniel Gasser

******************************

#Description

This jQuery (<http://jquery.com>) Plugin parses HTML-element(s), a JSON object or a JavaScript array/object for words in the text
and displays them in another element in different sizes, colors and at different positions.
******************************

#Skills required


This plugin is for frontend-developers, if you think, you aren't, read below links.

- Basic knowledge about jQuery selectors: <http://api.jquery.com/category/selectors/>
  and the jQuery `ready()` method <http://api.jquery.com/ready/>
  
- HTML elements
******************************

#Basic Usage

1. Link the Javascript file `displayKeywords.js` in the `<head>` section of your HTML-file

2. Bind the plugin to the container to search in.
   Eg. `'#container'`, `'body'`, `'ul'`, etc.

3. Set the element to display the keywords. `displayElement:`
 
   Eg. `'#keywords'`, `'.class'`, `'#whatever'`, etc.


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

That's it! At least, if the given elements exists and contain some words...

Live example on <http://pc-shooter.ch>

******************************

#Options

Set options like this:

    $(document).ready(function () {
         $('#container').displayKeywords({
             displayElement: '#keywords'
             displayElementHeight: '160px',
             fontSizeFactor: 0.03,
             fontColors: [
                 '#ff9900',
                 '#ffffff',
                 '#000000'
             ],
             //and so on, no comma after the last option
         });
    });


**displayElement**: (String)

HTML element to display the keywords
Eg. `'#keywords'`, `'.class'`, `'whatever element desired'`, etc.

Default: `'#pagekeywords'`
******************************

**displayElementHeight**: (Integer)

height & max-height of **displayElement**

Default: `160`
******************************

**displayElementHeightUnit**: (String)

height & max-height unit of **displayElementHeight**

Default: `'px'`
******************************

**fontSizeFactor**: (Float)

Used for `Math.random()` to calcuate the font size depending on the size of the **displayElement**

Default: `0.03`
******************************

**fontColors**: (Array)

Font colors for random colors, put as many as you like. 
Eg. `'#ff9900'`, `rgb(255, 153, 0)`, `rgba(255, 153, 0, 0.5)`
     
Default:

    ['#000000', '#000033', '#000066', '#000099', '#0000CC', '#0000FF', '#003300', '#003333', '#003366', '#003399', '#0033CC', '#0033FF', '#006600', '#006633', '#006666', '#006699', '#0066CC', '#0066FF', '#009900', '#009933', '#009966', '#009999', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#00FF00', '#00FF33', '#00FF66', '#00FF99', '#00FFCC', '#00FFFF', '#330000', '#330033', '#330066', '#330099', '#3300CC', '#3300FF', '#333300', '#333333', '#333366', '#333399', '#3333CC', '#3333FF', '#336600', '#336633', '#336666', '#336699', '#3366CC', '#3366FF', '#339900', '#339933', '#339966', '#339999', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#33FF00', '#33FF33', '#33FF66', '#33FF99', '#33FFCC', '#33FFFF', '#660000', '#660033', '#660066', '#660099', '#6600CC', '#6600FF', '#663300', '#663333', '#663366', '#663399', '#6633CC', '#6633FF', '#666600', '#666633', '#666666', '#666699', '#6666CC', '#6666FF', '#669900', '#669933', '#669966', '#669999', '#6699CC', '#6699FF', '#66CC00', '#66CC33', '#66CC66', '#66CC99', '#66CCCC', '#66CCFF', '#66FF00', '#66FF33', '#66FF66', '#66FF99', '#66FFCC', '#66FFFF', '#990000', '#990033', '#990066', '#990099', '#9900CC', '#9900FF', '#993300', '#993333', '#993366', '#993399', '#9933CC', '#9933FF', '#996600', '#996633', '#996666', '#996699', '#9966CC', '#9966FF', '#999900', '#999933', '#999966', '#999999', '#9999CC', '#9999FF', '#99CC00', '#99CC33', '#99CC66', '#99CC99', '#99CCCC', '#99CCFF', '#99FF00', '#99FF33', '#99FF66', '#99FF99', '#99FFCC', '#99FFFF', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC6666', '#CC6699', '#CC66CC', '#CC66FF', '#CC9900', '#CC9933', '#CC9966', '#CC9999', '#CC99CC', '#CC99FF', '#CCCC00', '#CCCC33', '#CCCC66', '#CCCC99', '#CCCCCC', '#CCCCFF', '#CCFF00', '#CCFF33', '#CCFF66', '#CCFF99', '#CCFFCC', '#CCFFFF', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF6666', '#FF6699', '#FF66CC', '#FF66FF', '#FF9900', '#FF9933', '#FF9966', '#FF9999', '#FF99CC', '#FF99FF', '#FFCC00', '#FFCC33', '#FFCC66', '#FFCC99', '#FFCCCC', '#FFCCFF', '#FFFF00', '#FFFF33']

******************************

**wordMinSize**: (Integer)

The minimal size (letter count) of a word to be taken.

Default: `3`
******************************

**fontFamily**: (String)

Default: `'Verdana, sans-serif'`
******************************

**filterWords**: (Array)
     
Words are excluded
     
Default:

    ['I',
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
     'Theirs']

******************************

**onlyCapitalWords**: (Boolean)

If set to true, only Words with a capital letter at the beginning are token.

Default: `true`

******************************************************************************************

#New options in Version 1.0

******************************************************************************************

**dataOrigin**: (String)
Where the keywords are coming from:
Possible choices

`'DOM'`
takes the words from the HTML-DOM. See **Basic Usage**
******************************

`'JSON'`
takes words from a JSON-object:

  Options to set if `'JSON'` is set:

**dataUrl**: (string)

The path to your php script/Json-file

Default: `'js/jQueryDisplayKeywords/php/data.php'`

**dataParams**: (array of js-objects)

The $_GET-params to pass to your php script/Json-file

Default: `empty`
******************************

`'Object'`

The words are taken from a js-object

Defaut:

    dataObject: [
        {
            ExampleOne: 'Beautiful',
            ExampleTwo: 'Web-based',
            ExampleThree: 'user-interfaces',
            ExampleFour: 'with',
            ExampleFive: 'HTML5/JavaScript'
        },
        {
            ExampleOne: 'Maintenance',
            ExampleTwo: 'documentation',
            ExampleThree: 'instruction',
            ExampleFour: '',
            ExampleFive: ''
        },
        {
            ExampleOne: 'Maintenance',
            ExampleTwo: 'documentation',
            ExampleThree: 'help-files',
            ExampleFour: 'project-management',
            ExampleFive: ''
        }
    ],


Default: `'DOM'`
******************************

******************************************************************************************

*End of Release 1.0*

******************************************************************************************


#Show Your Keywords on the page - How To Use

####Author:   Daniel Gasser

____________________________________________________________________________________

#Description

This jQuery (<http://jquery.com>) Plugin parses HTML-element(s), a JSON object or a JavaScript array/object for words
and displays them in another element in different sizes, colors and at different positions.
____________________________________________________________________________________

#Skills required


This plugin is for frontend-developers, if you think, you aren't, read below links.

- Basic knowledge about jQuery selectors: <http://api.jquery.com/category/selectors/>
  and the jQuery `ready()` method <http://api.jquery.com/ready/>
  
- HTML elements
____________________________________________________________________________________

#Basic Usage

1. Link the Javascript file `displayKeywords.js` in the `<head>` section of your HTML-file

2. Bind the plugin to the container to search in.
   Eg. `'#container'`, `'body'`, `'ul'`, etc.

3. Set the element to display the keywords. `displayElement:`
 
   Eg. `'#keywords'`, `'.class'`, `'#whatever'`, etc.


    `<html>`

            <head>
                ...
                <script type="text/javascript" src="../js/displayKeywords.js"></script>
                $(document).ready(function () {
                    $('#container').displayKeywords({
                        displayElement: '#keywords'
                    });
                });
            </head>
            <body>
                ....
            </body>

    `</html>`

**That's it! At least, if the given elements exists and contain some words...**

Live example on <http://pc-shooter.ch>

____________________________________________________________________________________

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


####displayElement: (String)

HTML element to display the keywords
Eg. `'#keywords'`, `'.class'`, `'whatever element desired'`, etc.

Default: `'#pagekeywords'`
____________________________________________________________________________________

####displayElementHeight: (Integer)

height & max-height of ***displayElement***

Default: `160`
____________________________________________________________________________________

####displayElementHeightUnit: (String)

height & max-height unit of ***displayElementHeight***

Default: `'px'`
____________________________________________________________________________________

####fontSizeFactor: (Float)

Used for `Math.random()` to calcuate the font size depending on the size of ***thedisplayElement***

Default: `0.03`
____________________________________________________________________________________

####fontColors: (Array)

Font colors for random colors, put as many as you like. 
Eg. `'#ff9900'`, `rgb(255, 153, 0)`, `rgba(255, 153, 0, 0.5)`
     
Default:

    ['#000000', '#000033', '#000066', '#000099', '#0000CC', '#0000FF', '#003300',
     '#003333', '#003366', '#003399', '#0033CC', '#0033FF', '#006600', '#006633',
     '#006666', '#006699', '#0066CC', '#0066FF', '#009900', '#009933', '#009966',
     '#009999', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99',
     '#00CCCC', '#00CCFF', '#00FF00', '#00FF33', '#00FF66', '#00FF99', '#00FFCC',
     '#00FFFF', '#330000', '#330033', '#330066', '#330099', '#3300CC', '#3300FF', 
     '#333300', '#333333', '#333366', '#333399', '#3333CC', '#3333FF', '#336600', 
     '#336633', '#336666', '#336699', '#3366CC', '#3366FF', '#339900', '#339933', 
    ...     
      '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399',
      '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC6666', '#CC6699', '#CC66CC', 
      '#CC66FF', '#CC9900', '#CC9933', '#CC9966', '#CC9999', '#CC99CC', '#CC99FF', 
      '#CCCC00', '#CCCC33', '#CCCC66', '#CCCC99', '#CCCCCC', '#CCCCFF', '#CCFF00', 
      '#CCFF33', '#CCFF66', '#CCFF99', '#CCFFCC', '#CCFFFF', '#FF0000', '#FF0033', 
      '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', 
      '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF6666', '#FF6699', 
      '#FF66CC', '#FF66FF', '#FF9900', '#FF9933', '#FF9966', '#FF9999', '#FF99CC', 
      '#FFCC33', '#FFCC66', '#FFCC99', '#FFCCCC', '#FFCCFF', '#FFFF00', '#FFFF33']


____________________________________________________________________________________

####wordMinSize: (Integer)

The minimal size (letter count) of a word to be taken.

Default: `3`
____________________________________________________________________________________

####fontFamily: (String)

Default: `'Verdana, sans-serif'`
____________________________________________________________________________________

####filterWords: (Array)
     
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

____________________________________________________________________________________

####onlyCapitalWords: (Boolean)

If set to true, only Words with a capital letter at the beginning are token.

Default: `true`

____________________________________________________________________________________

#New options in Version 1.0
____________________________________________________________________________________


####dataOrigin: (String)
Where the keywords are coming from:
Possible choices

`'DOM'`
takes the words from the HTML-DOM. See ***Basic Usage***

____________________________________________________________________________________


`'JSON'`
takes words from a JSON-object:

  Options to set if `'JSON'` is set:

####dataUrl: (string)

The path to your php script/Json-file

Default: `'js/jQueryDisplayKeywords/php/data.php'`

####dataParams: (array of js-objects)

The $_GET-params to pass to your php script/Json-file

Default: `empty`
____________________________________________________________________________________


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
____________________________________________________________________________________

____________________________________________________________________________________

#End of Release 1.0

____________________________________________________________________________________
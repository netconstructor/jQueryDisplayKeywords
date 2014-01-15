#Show Your Keywords on the page
**Version**:  1.0

**Author**:   Daniel Gasser

**Date**:     2013-12-29

******************************
**Update**:   2014-01-14

____________________________________________________________________________________

#Description

This jQuery (<http://jquery.com>) Plugin parses HTML-element(s), a JSON object or a JavaScript array/object for words
and displays them in another element in different sizes, colors and at different positions.
____________________________________________________________________________________


**Updated or added**


1. Debugged JS for FF's & IE's
2. The positioning of the keywords in the **displayElement** -div is now faster
3. All IE till 7.0 supported
4. Options added.


#New options in Version 1.0
******************************

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
 See <https://github.com/pcshooter/jQueryDisplayKeywords/blob/master/Howto.md> for instructions
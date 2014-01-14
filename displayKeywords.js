/**
 *
 * Show Your Keywords on the page
 * ******************************
 *
 * Author:      Daniel Gasser
 * Date:        2013-12-29
 * Version:     1.0
 *
 * Description
 * ******************************
 * This jQuery (http://jquery.com) Plugin parses a given HTML-elements for words in the text
 * and displays them in another element in different sizes, colors and at different positions
 *
 * Skills required
 * ******************************
 * This plugin is for frontend-developers, if you think, you aren't, read below links.
 * - Basic knowledge about jQuery selectors: http://api.jquery.com/category/selectors/
 *   and the jQuery ready() method http://api.jquery.com/ready/
 * - HTML elements
 *
 * See ReadMe.md for instructions on how to use
 */
(function ($) {
    "use strict";
    $.fn.displayKeywords = function (options) {
        var words = [],
            patternUppercase = /[A-ZÜÖÄ_0-9]/g,
            patternLowercase = (navigator.userAgent.indexOf('MSIE 7.0') === -1) ? /[A-ZÜÖÄ_a-züäö_0-9]/g : /[A-ZÜÖÄa-züäö_0-9]/gi,
            settings = $.extend({
                displayElement: '#pagekeywords',
                displayElementHeight: 400,
                fontSizeFactor: 0.03,
                fontColors: [
                    '#ff9900',
                    '#000000',
                    '#cccccc'],
                wordMinSize: 3,
                fontFamily: 'Verdana, sans-serif',
                filterWords: [  'I',  'You',  'He',  'She',  'It',  'We',  'You',  'They',  'Me',  'You',  'Him',  'Her',  'It',  'Us',  'You',  'Them',  'My',  'Your',  'His',  'Her',  'Its',  'Our',  'Your',  'Their',  'This',  'That',  'These',  'Those',  'Mine',  'Yours',  'His',  'Hers',  'Ours',  'Yours',  'Theirs'],
                onlyCapitalWords: true,
                dataOrigin: 'DOM',
                dataUrl: 'js/jQueryDisplayKeywords/php/data.php',
                dataParams: [{}],
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
                displayDataObjectProperties: true

            }, options),
            displayElementPos = document.getElementById(settings.displayElement.substring(1)).getBoundingClientRect(),
            insideDivs = function (el) {
                var i = 0,
                    decreaseFs,
                    decreaseBt,
                    decreasePos,
                    keywordPos,
                    elObj = $(el),
                    elObjWidth,
                    keywordPosRight;
                keywordPos = document.getElementById(el.substring(1)).getBoundingClientRect();
                displayElementPos = document.getElementById(settings.displayElement.substring(1)).getBoundingClientRect();
                while (
                    (keywordPos.left < displayElementPos.left || keywordPos.right > displayElementPos.right) ||
                        (keywordPos.left < 0 || keywordPos.right < 0) ||
                        (keywordPos.bottom > displayElementPos.bottom)
                ) {
                    elObjWidth = parseInt(elObj.css('right').split('px')[0], 10);
                    keywordPos = document.getElementById(el.substring(1)).getBoundingClientRect();
                    displayElementPos = document.getElementById(settings.displayElement.substring(1)).getBoundingClientRect();
                    keywordPosRight = (keywordPos.right + document.getElementById(el.substring(1)).clientWidth);
                    while (keywordPos.bottom > displayElementPos.bottom) {
                        decreaseBt = parseInt(elObj.css('top'), 10) - (parseInt(elObj.css('top'), 10) * 0.05);
                        elObj.css({'top': decreaseBt + 'px'});
                        keywordPos = document.getElementById(el.substring(1)).getBoundingClientRect();
                        displayElementPos = document.getElementById(settings.displayElement.substring(1)).getBoundingClientRect();
                        keywordPosRight = (keywordPos.right + document.getElementById(el.substring(1)).clientWidth);
                    }
                    decreaseFs = parseInt(elObj.css('font-size'), 10) - (parseInt(elObj.css('font-size'), 10) * 0.1);
                    decreaseBt = (Math.floor(Math.random() * (document.getElementById(settings.displayElement.substring(1)).clientHeight + 1))) / 60 + (Math.floor(Math.random() * (settings.displayElementHeight / 60 + 1)));
                    decreasePos = (parseInt(elObj.css('left'), 10) <= 5) ? (Math.floor(Math.random() * 11)) : (parseInt(elObj.css('left'), 10) - (parseInt(elObj.css('left'), 10) * 0.2));
                    elObj.css({'left': decreasePos + 'px',
                        'font-size': decreaseFs + 'px',
                        'width': 'auto'
                        });
                    i += 1;
                    keywordPos = document.getElementById(el.substring(1)).getBoundingClientRect();
                    displayElementPos = document.getElementById(settings.displayElement.substring(1)).getBoundingClientRect();
                    keywordPosRight = (keywordPos.right + document.getElementById(el.substring(1)).clientWidth);
                    elObjWidth = parseInt(elObj.css('right').split('px')[0], 10);
                }
                if (parseInt(elObj.css('top'), 10) <= 0) {
                    elObj.css({'top': '2px'});
                }
            },
            displayWords = function (data) {
                var pattern = (settings.onlyCapitalWords) ? patternUppercase : patternLowercase;
                $.each(data, function (i, n) {
                    var fc = settings.fontColors[(Math.floor(Math.random() * settings.fontColors.length))],
                        nnn = n.replace(/[\.,-\/#!?$%\^&\*;:{}=\-_`~()]/g, ''),
                        fs = (Math.floor(Math.random() * (settings.displayElementHeight * settings.fontSizeFactor + 1))),
                        posTop = (Math.floor(Math.random() * (document.getElementById(settings.displayElement.substring(1)).clientHeight + 1))) / 100 + (Math.floor(Math.random() * (settings.displayElementHeight / 100 + 1))),
                        posLeft = (Math.floor(Math.random() * (document.getElementById(settings.displayElement.substring(1)).clientWidth + 1))) / 100 + (Math.floor(Math.random() * (settings.displayElementHeight / 100 + 1))),
                        floater = (i % 2 === 0) ? 'left' : 'right',
                        cssObj = {},
                        fontSize = (fs <= 0) ? 1 : fs;
                    if (i % 2 === 0) {
                        cssObj = {
                            'font-size': fontSize + 'em',
                            'float': floater,
                            'position': 'absolute',
                            'top': posTop + 'em',
                            'left': posLeft + 'em',
                            'color': fc
                        };
                    } else {
                        cssObj = {
                            'font-size': fontSize + 'em',
                            'float': floater,
                            'position': 'absolute',
                            'top': posTop + 'em',
                            'left': posLeft + 'em',
                            'color': fc
                        };
                    }
                    if (pattern.test(nnn.charAt(0)) && $.inArray(nnn, words) === -1 && nnn.length > settings.wordMinSize && $.inArray(nnn, settings.filterWords) === -1) {
                        words.push(nnn);
                        $('<div>')
                            .attr('id', '_' + nnn)
                            .css(cssObj)
                            .html(nnn)
                            .appendTo(settings.displayElement);
                        $(settings.displayElement).css({'max-height': settings.displayElementHeight, 'height': settings.displayElementHeight});
                        insideDivs('#_' + nnn);
                    }

                });
                window.console.log(words);
            },
            displayObjectWords = function (data) {
                var pattern = (settings.onlyCapitalWords) ? patternUppercase : patternLowercase;
                $.each(data, function (i, n) {
                    var fc = settings.fontColors[(Math.floor(Math.random() * settings.fontColors.length))],
                        fs = (Math.floor(Math.random() * (settings.displayElementHeight * settings.fontSizeFactor + 1))),
                        posTop = (Math.floor(Math.random() * (displayElementPos.top + 1))) / 100 + (Math.floor(Math.random() * (settings.displayElementHeight / 100 + 1))),
                        posLeft = (Math.floor(Math.random() * (displayElementPos.bottom + 1))) / 100 + (Math.floor(Math.random() * (settings.displayElementHeight / 100 + 1))),
                        floater = (i % 2 === 0) ? 'left' : 'right',
                        cssObj = {},
                        fontSize = (fs <= 0) ? 1 : fs;
                    if (i % 2 === 0) {
                        cssObj = {
                            'font-size': fontSize + 'em',
                            'float': floater,
                            'position': 'absolute',
                            'top': posTop + 'em',
                            'left': posLeft + 'em',
                            'color': fc
                        };
                    } else {
                        cssObj = {
                            'font-size': fontSize + 'em',
                            'float': floater,
                            'position': 'absolute',
                            'top': posTop + 'em',
                            'left': posLeft + 'em',
                            'color': fc
                        };
                    }
                    $.each(n, function (i, n) {
                        var nn = n.replace(/[\.,-\/#!?$%\^&\*;:{}=\-_`~()]/g, '');
                        if (pattern.test(nn.charAt(0)) && $.inArray(nn, words) === -1 && n.length > settings.wordMinSize && $.inArray(nn, settings.filterWords) === -1) {
                            words.push(nn);
                            $('<div>')
                                .attr('id', '_' + nn)
                                .css(cssObj)
                                .html(nn)
                                .appendTo(settings.displayElement);
                            $(settings.displayElement).css({'max-height': settings.displayElementHeight, 'height': settings.displayElementHeight});
                            insideDivs('#_' + nn);
                        }
                    });
                });
            };
        if (settings.dataOrigin === 'DOM') {
            return this.children().each(function (i, n) {
                var t = [];

                $(settings.displayElement).css('position', 'relative');
                if (n.firstChild !== null && n.firstChild.nodeType === 3 && (n.textContent !== undefined || n.innerText !== undefined)) {
                    if (n.innerText !== null || n.innerText !== undefined) {
                        t = n.innerText.split(/\s/g);
                    } else {
                        t = n.textContent.split(/\s/g);
                    }
                }
                displayWords(t);
            });
        }
        if (settings.dataOrigin === 'JSON') {
            $.ajax({
                type: 'GET',
                url: settings.dataUrl,
                data: {
                    params: settings.dataParams
                },
                success: function (data) {
                    displayWords($.parseJSON(data));
                }

            });
        }
        if (settings.dataOrigin === 'OBJECT') {
            return displayObjectWords(settings.dataObject);
        }
    };
}(jQuery));

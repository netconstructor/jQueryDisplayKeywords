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
                onlyCapitalWords: true

            }, options),
            insideDivs = function (el, holder) {
                var decreaseFs,
                    decreaseBt,
                    keywordPos = document.getElementById(el.substring(1)).getBoundingClientRect(),
                    elObj = $(el);
                while (keywordPos.left < holder.left || keywordPos.right > holder.right) {
                    decreaseFs = parseInt(elObj.css('font-size'), 10) - 1;
                    if (elObj.css('left') !== 'auto') {
                        elObj.css({'left': '1em', 'font-size': decreaseFs + 'px'});
                    } else {
                        elObj.css({'right': '1em', 'font-size': decreaseFs + 'px'});
                    }
                    keywordPos = document.getElementById(el.substring(1)).getBoundingClientRect();
                }
                while (keywordPos.bottom > holder.bottom - (holder.bottom + 1.5)) {
                    decreaseBt = parseInt(elObj.css('top'), 10) - 10;
                    elObj.css({'top': decreaseBt + 'px'});
                    keywordPos = document.getElementById(el.substring(1)).getBoundingClientRect();
                }
                if (parseInt(elObj.css('top'), 10) <= 0) {
                    elObj.css({'top': '2px'});
                }
            };
        return this.children().each(function (i, n) {
            var t = [],
                displayElementPos,
                pattern = (settings.onlyCapitalWords) ? patternUppercase : patternLowercase;

            $(settings.displayElement).css('position', 'relative');
            displayElementPos = document.getElementById(settings.displayElement.substring(1)).getBoundingClientRect();
            if (n.firstChild !== null && n.firstChild.nodeType === 3 && n.innerText !== undefined) {
                t = n.innerText.split(/\s/g);
            }
            $.each(t, function (i, n) {
                var fc = settings.fontColors[(Math.floor(Math.random() * settings.fontColors.length))],
                    nnn = n.replace(/[\.,-\/#!?$%\^&\*;:{}=\-_`~()]/g, ''),
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
                        'right': posLeft + 'em',
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
                    insideDivs('#_' + nnn, displayElementPos);
                }

            });
        });
    };
}(jQuery));

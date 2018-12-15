// ==UserScript==
// @name         GOG Hide Owned Games
// @namespace    https://github.com/Slashbunny
// @version      0.1
// @description  Gives you the option to hide owned games
// @author       Slashbunny
// @license      GPLv3
// @match        https://www.gog.com/games*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var options_html = '<div class="filter__item">'
                   + '  <div class="filter__header">'
                   + '    <div class="filter__title">Userscript</div>'
                   + '  </div>'
                   + '  <div class="filter__item-options">'
                   + '    <button id="hide-games-button">Hide Owned Games</button>'
                   + '  </div>'
                   + '</div>';

jQuery(document).ready(function(){
    // Add options to filter sidebar
    jQuery('.catalog__sidebar').prepend(options_html);

    // Call function when button is clicked
    jQuery("#hide-games-button").click(hideOwnedGames);

    // Function to remove owned games from the DOM
    function hideOwnedGames() {
        jQuery('.product-tile__labels--in-library').closest('.product-tile').remove();
    }
});

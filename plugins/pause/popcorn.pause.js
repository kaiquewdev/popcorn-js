/**
* Pause Popcorn Plug-in
*
* When this plugin is used, links on the webpage, when clicked, will pause
* popcorn videos that especified 'pauseOnLinkClicked' as an option. Links may
* cause a new page to display on a new window, or may cause a new page to
* display in the current window, in which case the videos won't be available
* anymore. It only affects anchor tags. It does not affect objects with click
* events that act as anchors.
*
* Example:
 var p = Popcorn('#video', { pauseOnLinkClicked : true } )
   .play();
*
*/

document.addEventListener( "click", function( event ) {
  //Consider I.E.
  var targetElement = event.target;
  if ( window.event ) {
    targetElement = window.event.srcElement;
  }

  //Some browsers use an element as the target, some use the text node inside
  if ( targetElement.tagName === "A" || targetElement.parentNode.tagName === "A" ) {
    Popcorn.instances.forEach( function( video ) {
      if ( video.options.pauseOnLinkClicked ) {
        video.pause();
      }
    });
  }
}, false );

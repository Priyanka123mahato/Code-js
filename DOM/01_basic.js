//use to show the documentation of any webpage
// console.log(document)
// VM828:1 #document
// undefined


//use of found the baseUrl
// console.log(document.baseURI)
// VM929:1 https://en.wikipedia.org/wiki/Brendan_Eich
// undefined


//get all links
// console.log(document.links)
// VM965:1 HTMLCollection(728) [a.mw-jump-link, a, a, a, a, a, a, a, a, a, a, a, a, a.mw-logo, a.cdx-button.cdx-button--fake-button.cdx-button--fake-button--enabled.cdx-button--weight-quiet.cdx-…, a, a, a, a, a, a, a, a#banner1.cbnnr-message.fade, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.vector-toc-link, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.interlanguage-link-target, a.wbc-editpage, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a.mw-file-description, a, a, a, a, a.external.text, a, a, a, a, a, a, a, a.mw-redirect, a, …]
// undefined


//get the 2nd link 
// console.log(document.links[2])
// VM986:1 <a href=​"/​wiki/​Wikipedia:​Contents" title=​"Guides to browsing Wikipedia">​…​</a>​flex
// undefined


//fetch headings in this way
// document.getElementById('firstHeading')
// <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​



//change inner html text
// document.getElementById('firstHeading').innerHTMl="<h1> chai aur code</h1>"
// '<h1> chai aur code</h1>'
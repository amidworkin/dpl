// Pattern Library GTM Google Analytics
// Id = $Id: 2-4-pattern-library.js 5102 2017-03-09 21:18:45Z jgilvary $
// URL = $URL: https://dev-wbm-svn.dev.uspto.gov/repos/live/assets-content/trunk/production/common/html/js/ais/2-4-pattern-library.js $
//

// Declare dataLayer for GTM use later
var dataLayer = window.dataLayer || [];

// Send to both properties
dataLayer.push({'enableRollup': true, 'enableSiteSpecific': true});

// Set the global variable for this ais property
var ais_prop_id='UA-56653675-4';

// Participates in DAP
var enableDAP=true;

// Set up the GTM code for the default container
// Google Tag Manager 

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5D5BBD');

// End Google Tag Manager 
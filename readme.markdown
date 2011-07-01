This repository serves to curate a handful of JavaScript code snippets used on FCC.gov and transition.fcc.gov to better inform the website's redesign. It contains three files.

Conditionally Load Google Analytics
==================================
Script to check if a page has Google Analytics already initialized, if not, adds the necesssary code. Used via server-side include on http://transition.fcc.gov as some pages already had the tracking code while others did not.

Conditionally Load jQuery
=========================
Script to check if a page has jQuery already initialized, if not, adds the necessary code (pulling the latest version of jQuery from the Google API), and fires an on-load event. Also used on http://transition.fcc.gov via SSI where some pages had jQuery called elsewhere on the page and others did not.

Google Analytics Virtual Event Tracking Code
===========================================
Three code snippets to fire various Google Analytics virtual events. The first tracks the usage of mailto: links, the second tracks downloads of common file types, and the last tracks external link usage.

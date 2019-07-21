## multiviews

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO


### Package Solution
gulp serve
gulp build
gulp bundle --ship
gulp deploy-azure-storage (if deploy to Azure CDN instead of Office 365 CDN)
gulp package-solution --ship

### Notes:
When building SharePoint Framework web parts, we might need to implement multiple views in a web part, and switching between the different views that we don't modify the URL in the browser's address bar, which could render undesired behavior in other components present on the page. 
When building web parts using React, one way to implement multiple views in a web part is by conditionally showing the different components that represent the different views. 
=> Recently Microsoft published a code sample illustrating how to do this. The code sample is available on GitHub at https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-multipage.
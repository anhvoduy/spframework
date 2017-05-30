# spframework
SharePoint App Framework Development
Copyright 2017

1. Setup development environment:

npm install -g npm

npm install -g yo gulp

npm install -g @microsoft/generator-sharepoint 

2. Build first client side webpart

md first-webpart

cd first-webpart

yo @microsoft/sharepoint

Preview WebPart:

gulp trust-dev-cert

gulp serve

3. Package Solution

gulp package-solution

gulp serve --nobrowser

gulp --ship

gulp bundle --ship

gulp package-solution --ship
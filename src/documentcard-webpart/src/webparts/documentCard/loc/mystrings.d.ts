declare interface IDocumentCardStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'documentCardStrings' {
  const strings: IDocumentCardStrings;
  export = strings;
}

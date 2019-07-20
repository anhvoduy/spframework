declare interface IMultiviewsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;

  DataGroupName: string;
  ListNameFieldLabel: string;
  PollTitleFieldLabel: string;
  PollDescriptionFieldLabel: string;
}

declare module 'MultiviewsWebPartStrings' {
  const strings: IMultiviewsWebPartStrings;
  export = strings;
}

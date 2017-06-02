require('set-webpack-public-path!');

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';

import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'documentcardexampleStrings';
import Documentcardexample from './components/Documentcardexample';
import { IDocumentcardexampleProps } from './components/IDocumentcardexampleProps';
import { IDocumentcardexampleWebPartProps } from './IDocumentcardexampleWebPartProps';

export default class DocumentcardexampleWebPart extends BaseClientSideWebPart<IDocumentcardexampleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDocumentcardexampleProps > = React.createElement(
      Documentcardexample,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {  
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

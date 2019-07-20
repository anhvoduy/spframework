import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'MultiviewsWebPartStrings';
import { IMultiviewsWebPartProps } from './IMultiviewsWebPartProps';
import Multiviews from './components/Multiviews';
import { IMultiviewsProps } from './components/IMultiviewsProps';

import { IPollService, PollService, MockPollService } from './services/index';

export default class MultiviewsWebPart extends BaseClientSideWebPart<IMultiviewsWebPartProps> {
  private pollService: IPollService;

  protected onInit(): Promise<void> {
    if (DEBUG && Environment.type === EnvironmentType.Local) {
      this.pollService = new MockPollService();
    } else {
      this.pollService = new PollService(this.context);
    }

    this.configureWebPart = this.configureWebPart.bind(this);
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IMultiviewsProps > = React.createElement(
      Multiviews,
      {
        description: this.properties.description,
        listName: this.properties.listName,
        pollTitle: this.properties.pollTitle,
        pollDescription: this.properties.pollDescription,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
            },
            {
              groupName: strings.DataGroupName,
              groupFields: [
                PropertyPaneTextField('listName', {
                  label: strings.ListNameFieldLabel
                }),
                PropertyPaneTextField('pollTitle', {
                  label: strings.PollTitleFieldLabel
                }),
                PropertyPaneTextField('pollDescription', {
                  label: strings.PollDescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }

  private configureWebPart(): void {
    this.context.propertyPane.open();
  }
}

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

import { IPollService, PollService, MockPollService } from './services/index';

import { Main, IMainProps } from './components/main';

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
    const element: React.ReactElement<IMainProps > = React.createElement(
      Main,
      {
        description: this.properties.description,
        listName: this.properties.listName,
        pollTitle: this.properties.pollTitle,
        pollDescription: this.properties.pollDescription,
        needsConfiguration: this.needsConfiguration(),
        displayMode: this.displayMode,
        configureWebPart: this.configureWebPart,
        pollService: this.pollService
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

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  private needsConfiguration(): boolean {
    return this.properties.listName === null ||
      this.properties.listName === null ||
      this.properties.pollTitle === null ||
      this.properties.pollTitle === null;
  }

  private configureWebPart(): void {
    this.context.propertyPane.open();
  }
}

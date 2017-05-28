import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './FirstWebPart.module.scss';
import * as strings from 'firstWebPartStrings';
import { IFirstWebPartWebPartProps } from './IFirstWebPartWebPartProps';

export default class FirstWebPartWebPart extends BaseClientSideWebPart<IFirstWebPartWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.helloWorld}">
        <div class="${styles.container}">
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span class="ms-font-xl ms-fontColor-white">
                Welcome to SharePoint Framework!
              </span>
                     
              <p class="ms-font-l ms-fontColor-white">
                Customize SharePoint experiences using Web Parts.
              </p>              
              <p class="ms-font-l ms-fontColor-white">
                ${escape(this.properties.description)}
              </p>
              <p class="ms-font-l ms-fontColor-white">
                ${escape(this.properties.test2)}
              </p>
              <p class="ms-font-l ms-fontColor-white">Loading from 
                ${escape(this.context.pageContext.web.title)}
              </p>              
              <a href="https://aka.ms/spfx" class="${styles.button}">
                <span class="${styles.label}">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
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
                  //label: strings.DescriptionFieldLabel
                  label: 'Description'
                }),
                PropertyPaneTextField('test',{
                  label: 'Multi-line Text Field',
                  multiline: true
                }),
                PropertyPaneCheckbox('test1',{
                  text: 'Checkbox'
                }),
                PropertyPaneDropdown('test2',{
                  label: 'Dropdown',
                  options: [
                    {key: 1, text: 'one'},
                    {key: 2, text: 'two'},
                    {key: 3, text: 'three'}
                  ]
                }),
                PropertyPaneToggle('test3',{
                    label: 'Toogle',
                    onText: 'On',
                    offText: 'Off'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

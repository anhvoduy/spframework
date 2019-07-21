import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react';
import { DisplayMode } from '@microsoft/sp-core-library';
import { Placeholder } from '@pnp/spfx-controls-react';
import { IConfigProps } from './IConfigProps';

/**
 * Placeholder controls is now available from following open source library, 
 * which can be used for getting reusable controls for SPFx solutions 
 * - https://github.com/SharePoint/sp-dev-fx-controls-react. 
 */
class Config extends React.Component<IConfigProps, {}> {
  public render(): JSX.Element {
    return (
      <Fabric>
        { this.props.displayMode === DisplayMode.Edit &&
          <Placeholder
            iconName="ms-Icon--CheckboxComposite"
            iconText="Poll"
            description="Find out what others think."
            buttonLabel="Configure"
            onConfigure={ this.props.configure } 
            />
        }
        { this.props.displayMode === DisplayMode.Read &&
          <Placeholder
            iconName="ms-ICon--CheckboxComposite"
            iconText="Poll"
            description="Find out what others think." 
            />
        }
      </Fabric>
    );
  }
}

export default Config;
import * as React from 'react';
import styles from '../Multiviews.module.scss';
import { IWelcomeProps } from './IWelcomeProps';
import { escape } from '@microsoft/sp-lodash-subset';

class Welcome extends React.Component<IWelcomeProps, {}> {
  public render(): React.ReactElement<IWelcomeProps> {
    return (      
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint Online!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.title)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>      
    );
  }
}

export default Welcome;
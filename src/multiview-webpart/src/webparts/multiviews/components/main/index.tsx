import * as React from 'react';
import styles from '../Multiviews.module.scss';
import { IMainProps } from './IMainProps';

class Main extends React.Component<IMainProps, {}> {
  public render(): React.ReactElement<IMainProps> {
    return (      
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Main Webpart</span>
            </div>
          </div>
        </div>      
    );
  }
}

export default Main;
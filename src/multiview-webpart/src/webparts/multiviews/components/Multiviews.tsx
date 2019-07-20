import * as React from 'react';
import styles from './Multiviews.module.scss';
import { IMultiviewsProps } from './IMultiviewsProps';
import Welcome from './welcome';

export default class Multiviews extends React.Component<IMultiviewsProps, {}> {
  public render(): React.ReactElement<IMultiviewsProps> {
    return (
      <div className={ styles.multiviews }>
        <Welcome title={this.props.description} />        
      </div>
    );
  }
}

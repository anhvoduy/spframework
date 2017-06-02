import * as React from 'react';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity,
  IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';

import styles from './DocumentCard.module.scss';
import { IDocumentCardProps } from './IDocumentCardProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class DocumentCard extends React.Component<IDocumentCardProps, void> {
  public render(): JSX.Element {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
            previewImageSrc: String(require('document-preview.png')),
            iconSrc: String(require('icon-ppt.png')),
            width: 318,
            height: 196,
            accentColor: '#ce4b1f'
        }
      ],
    };

    return (
        <DocumentCard onClickHref='http://bing.com'>
        <DocumentCardPreview { ...previewProps } />
        <DocumentCardTitle title='Revenue stream proposal fiscal year 2016 version02.pptx' />
        <DocumentCardActivity
            activity='Created Feb 23, 2016'
            people={
            [
                { name: 'Kat Larrson', profileImageSrc: String(require('avatar-kat.png')) }
            ]
            }
            />
        </DocumentCard>
    );
  };
}

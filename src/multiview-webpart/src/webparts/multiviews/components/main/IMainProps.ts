import { IMultiviewsWebPartProps } from '../../IMultiviewsWebPartProps';
import { DisplayMode } from '@microsoft/sp-core-library';
import { IPollService } from '../../services';

export interface IMainProps extends IMultiviewsWebPartProps {
  needsConfiguration: boolean;
  configureWebPart: () => void;
  displayMode: DisplayMode;
  pollService: IPollService;
}
export class ProgressConfig {
  id: string;
  progressTemplate?: any;
  /**
   * Indicates that marked component will be replaced with the progress bar, if specified will use
   *  component from {@link progressTemplate}, will display default progress otherwise
   *  Worth noting that progress will have size of the container or predefined size using style param
   */
  replace = false;
  /**
   * Styles object for progress
   */
  style?: any;
}

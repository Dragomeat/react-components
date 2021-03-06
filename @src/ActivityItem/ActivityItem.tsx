import * as moment from 'moment';
import * as React from 'react';

interface IActivityItemProps {
  delimiter?: boolean;
  description: string;
  time: Date;
  userName: string;
  userPic: string;
}

export class ActivityItem extends React.PureComponent<IActivityItemProps, any> {
  public static defaultProps: Partial<IActivityItemProps> = {
    delimiter: false
  };

  public render() {
    const { delimiter, description, time, userName, userPic } = this.props;

    return (
      <React.Fragment>
        <div styleName="activity-item">
          <div styleName="userpic">
            <img src={userPic} alt={userName} />
          </div>
          <div styleName="description">
            <b>{userName}</b> {description}
          </div>
          <div styleName="time" title={moment(time).format()}>
            {moment(time)
              .startOf('second')
              .fromNow()}
          </div>
        </div>
        {delimiter && <hr />}
      </React.Fragment>
    );
  }
}

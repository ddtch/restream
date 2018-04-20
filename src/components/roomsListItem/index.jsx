import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './index.css';

export class RoomsListItem extends Component {
  render() {
    const {room} = this.props;
    return (
      <div className="room-row">
        <div className="room-col number">
          {room.room}
        </div>
        <div className="room-col status">
          {
            room.available ?
              <Fragment>
                <span className="ball green"/> Свободен
              </Fragment> :

              <Fragment>
                <span className="ball blue"/> Заселен
              </Fragment>
          }
        </div>
        <div className="room-col purchase">
          {room.purchaseSum} ₽
        </div>
        <div className="room-col purchase-status">
          <input type="checkbox" defaultChecked={room.purchaseDeprecation} />
        </div>
      </div>
    );
  }
}

RoomsListItem.propTypes = {
  room: PropTypes.object.isRequired
};
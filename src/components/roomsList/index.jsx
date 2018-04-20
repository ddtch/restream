import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {RoomsListItem} from "../roomsListItem";
import './index.css';
import {SearchBar} from "../searchBar";
import {Loader} from "../shared/loader";

export class RoomsList extends Component {

  renderList = () => {
    const headers = [
      'Номер', 'Статус', 'Покупки', 'Запрет на покупки'
    ];

    return (
      <Fragment>
        <div className="room-row header">
          {headers.map((head, idx) =>
            <div className="room-col" key={idx}>
              {head}
            </div>
          )}
        </div>
        {
          this.props.rooms.map(room =>
            <RoomsListItem key={room.id} room={room}/>
          )
        }
      </Fragment>
    )
  };

  render() {
    const {isLoading, rooms, onSearch} = this.props;

    return (
      <Fragment>
        <div className="dashboard-card">
          <SearchBar onSearch={onSearch}/>
          {!isLoading &&
            <div className="room-table">
              {
                !rooms.length ?
                  'По вашему запросу ничего не найдено :(' :
                  this.renderList()
              }
            </div>
          }
          <Loader show={isLoading}/>
        </div>
      </Fragment>
    );
  }
}

RoomsList.propTypes = {
  isLoading: PropTypes.bool,
  rooms: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired
};

import React, {PureComponent} from 'react';
import {RoomsList} from "../../components/roomsList";
import {debounce, isNumber, isString} from "../../utils";
import {RoomsService} from "../../services";

export class RoomsPage extends PureComponent {

  state = {
    rooms: [],
    isLoading: true
  };

  componentDidMount() {
    this.getAllRoomsData();
  }

  getAllRoomsData = () => {
    RoomsService.getAllRooms()
      .then(rooms => {
        this.setState({rooms, isLoading: false});
      })
      .catch(err => console.error(err))
  };

  getFilteredRooms = (filterName, filterValue) => {
    RoomsService.getFilteredRooms(filterName, filterValue)
      .then(rooms => {
        this.setState({rooms});
      })
      .catch(err => console.error(err))
  };

  filterRooms = debounce((query) => {
    if(query && !isString(query) && !isNumber(query))
      return alert('Измените ваш запрос');

    this.getFilteredRooms((isString(query) ? 'name' : 'room'), query);
  }, 400);

  render() {
    const {rooms, isLoading} = this.state;

    return (
      <RoomsList
        isLoading={isLoading}
        rooms={rooms}
        onSearch={this.filterRooms}/>
    );
  }
}

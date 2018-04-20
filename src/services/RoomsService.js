import axios from 'axios';

class RoomsServiceClass {

  getAllRooms() {
    return axios.get('/mock.json')
      .then(resp =>
        new Promise(resolve =>
          setTimeout(() => resolve(resp.data.rooms), 1300))
      )
  }

  getFilteredRooms(filterName, filterValue) {
    return axios.get(`/mock.json?${filterName}=${filterValue}`)
      .then(resp => {

        const filteredRooms = resp.data.rooms.filter(room => {
          if(filterName === 'name') {
            return room.guest.lastName.toUpperCase().includes(
              filterValue.toUpperCase()
            );
          }
          return room.room.includes(filterValue);
        });

        return new Promise(resolve =>
          setTimeout(() => resolve(filteredRooms), 800))
      });
  }
}

export const RoomsService = new RoomsServiceClass();
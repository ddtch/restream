import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

export class SearchBar extends Component {

  onChanged = (e) => this.props.onSearch(e.target.value);

  render() {
    return (
      <div className="search-bar">
        <input type="text" onChange={this.onChanged}
          placeholder="Введите номер комнаты или имя гостя"/>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

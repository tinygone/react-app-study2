import React from 'react';
import PropTypes from 'prop-types';

function ListItem({item, onClick}) {
  return (
    <a href="#" className="list-group-item item-component"
    onClick={onClick}>
      <span className="label label-default label-pill pull-xs-right">
        {item.time}
      </span>
      {item.title}
    </a>
  );
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ListItem;

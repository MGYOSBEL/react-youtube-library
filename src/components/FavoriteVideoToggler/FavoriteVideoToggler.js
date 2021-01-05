import React from 'react';
import IconButton from '../UI/Buttons/IconButton/IconButton';

const favoriteVideoToggler = props => {
    let heartIconStyle = props.isFavorite ? 'fas' : 'far';
    let favoriteButton = (
        <div className="text-pink-600 text-lg">
        <IconButton icons={[heartIconStyle, "heart"]} />
      </div>
    ); 

    return favoriteButton;
}

export default favoriteVideoToggler;





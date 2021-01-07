import React from 'react';

import * as Styled from './styles';
import filter from '../../assets/filter.png'


function FilterCard(props) {
    return (
        <React.Fragment>
            <Styled.Container actived={props.actived}>
                <img src={filter} alt="Filtro"/>
                <span>{props.title}</span>
            </Styled.Container>
        </React.Fragment>
    );
}

export default FilterCard;  
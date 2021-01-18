import React, { useMemo } from 'react';

import { format } from 'date-fns';
import * as Styled from './styles';
import typeIcons from '../../utils/typeIcons';


function TaskCard(props) {
    const date = useMemo(() => format(new Date(props.when), 'dd/MM/yyyy'));
    const hour = useMemo(() => format(new Date(props.when), 'HH:mm'));

    return (
        <React.Fragment>
            <Styled.Container done={props.done}>
                <Styled.TopCard>
                    <img src={typeIcons[props.type]} alt="Icone da Tarefa" />
                    <h3>{props.title}</h3>
                </Styled.TopCard>

                <Styled.BottomCard>
                    <strong>{date}</strong>
                    <span>{hour}</span>
                </Styled.BottomCard>
            </Styled.Container>
        </React.Fragment>
    );
}

export default TaskCard;  
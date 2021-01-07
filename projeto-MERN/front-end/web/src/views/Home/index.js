import React, { useState, useEffect } from 'react';

import * as Styled from './styles';
import api from '../../services/api'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';


function Home() {
    const [filterActived, setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);
    const [lateTask, setLateTasks] = useState(0);

    async function loadTasks() {
        await api.get(`/task/filter/${filterActived}/11:1B:11:11:1A:B1`).then(response => {
            setTasks(response.data);
        });
    }

    async function lateVerify() {
        await api.get(`/task/filter/late/11:1B:11:11:1A:B1`).then(response => {
            setLateTasks(response.data.length);
        });
    }

    function notification() {
        setFilterActived('late')
    }

    useEffect(() => {
        loadTasks();
        lateVerify();
    }, [filterActived]);

    return (
        <React.Fragment>
            <Styled.Container>
                <Header lateCount={lateTask} clickNotification={notification} />
                <Styled.FilterArea>
                    <button type="button" onClick={() => setFilterActived("all")}>
                        <FilterCard title="Todos" actived={filterActived === 'all'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("today")}>
                        <FilterCard title="Hoje" actived={filterActived === 'today'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("week")} >
                        <FilterCard title="Semana" actived={filterActived === 'week'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("month")} >
                        <FilterCard title="Mês" actived={filterActived === 'month'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("year")} >
                        <FilterCard title="Ano" actived={filterActived === 'year'} />
                    </button>

                </Styled.FilterArea>

                <Styled.Title>
                    <h3>TAREFAS {filterActived === 'late' ? 'ATRASADAS' : null}</h3>
                </Styled.Title>

                <Styled.Content>
                    {
                        tasks.map(taskElement => (
                            <TaskCard key={taskElement._id} title={taskElement.title} type={taskElement.type} when={taskElement.when}/>
                        ))
                    }
                </Styled.Content>

                <Footer />
            </Styled.Container>
        </React.Fragment>
    );
}

export default Home;  
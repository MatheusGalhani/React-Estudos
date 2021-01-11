import React, { useState, useEffect } from 'react';
import { Link, Redirect} from 'react-router-dom';

import * as Styled from './styles';
import api from '../../services/api'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';
import isConnected from '../../utils/isConnected';


function Home() {
    const [filterActived, setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);
    const [redirect, setRedirect] = useState(false);

    async function loadTasks() {
        await api.get(`/task/filter/${filterActived}/`).then(response => {
            setTasks(response.data);
        });
    }

    function notification() {
        setFilterActived('late')
    }

    useEffect(() => {
        loadTasks();
        if (!isConnected) setRedirect(true)
    }, [filterActived]);

    return (
        <React.Fragment>
            { redirect ? <Redirect to="/qrcode" /> : null}
            <Styled.Container>
                <Header clickNotification={notification} />
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
                            <Link to={`/task/${taskElement._id}`} key={`redirect-${taskElement._id}`}>
                                <TaskCard key={taskElement._id} 
                                      title={taskElement.title} 
                                      type={taskElement.type} 
                                      when={taskElement.when}
                                      done={taskElement.done}/>
                            </Link>
                            
                        ))
                    }
                </Styled.Content>

                <Footer />
            </Styled.Container>
        </React.Fragment>
    );
}

export default Home;  
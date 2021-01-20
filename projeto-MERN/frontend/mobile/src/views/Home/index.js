import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView, ActivityIndicator } from 'react-native';

import styles from './styles';

// Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

// API
import api from '../../services/api';

function Home() {
    const [filterActived, setFilterActived] = useState('today');
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);
    const [lateCount, setLateCount] = useState(0);
    const [macaddress, setMacaddress] = useState('11:1B:11:11:1A:B1');

    async function loadTasks() {
        setLoad(true);
        await api.get(`/task/filter/${filterActived}/${macaddress}`)
            .then(response => {
                setTasks(response.data)
                setLoad(false)
            });
    }

    async function lateVerify() {
        await api.get(`/task/filter/late/${macaddress}`)
            .then(response => {
                setLateCount(response.data.length)
            });
    }

    function notification() {
        setFilterActived('late');
    }

    useEffect(() => {
        loadTasks();
        lateVerify();
    }, [filterActived, macaddress])

    return (
        <View style={styles.container}>
            <Header showNotification={true} showBack={false} pressNotification={notification} late={lateCount} />

            {/* Inicio filtros */}
            <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilterActived("all")}>
                    <Text style={filterActived === 'all'
                        ? styles.filterTextActived
                        : styles.filterTextInactived} >Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilterActived("today")}>
                    <Text style={filterActived === 'today'
                        ? styles.filterTextActived
                        : styles.filterTextInactived} >Hoje</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilterActived("month")}>
                    <Text style={filterActived === 'month'
                        ? styles.filterTextActived
                        : styles.filterTextInactived}>Mês</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilterActived("week")}>
                    <Text style={filterActived === 'week'
                        ? styles.filterTextActived
                        : styles.filterTextInactived} >Semana</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilterActived("year")}>
                    <Text style={filterActived === 'year'
                        ? styles.filterTextActived
                        : styles.filterTextInactived} >Ano</Text>
                </TouchableOpacity>
            </View>
            {/* Fim filtros */}

            <View style={styles.title}>
                <Text style={styles.titleText}>{filterActived === 'late' 
                                                ? 'TAREFAS ATRASADAS'
                                                : 'TAREFAS'}</Text>
            </View>

            {/* Inicio Task Card */}
            <ScrollView style={styles.content} contentContainerStyle={{
                alignItems: 'center'
            }}>
                {
                    load ? <ActivityIndicator color='#EE6B26' size={50} /> :
                        tasks.map(task => (
                            <TaskCard
                                done={task.done}
                                title={task.title}
                                when={task.when}
                                type={task.type}
                            />
                        ))
                }
            </ScrollView>
            {/* Fim Task Card */}

            <Footer addIcon={true} />
        </View>
    )
}


export default Home;
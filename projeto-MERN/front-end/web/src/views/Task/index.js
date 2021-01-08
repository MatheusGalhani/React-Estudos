import React, { useState, useEffect } from 'react';

import * as Styled from './styles';
import api from '../../services/api';

import { format } from 'date-fns'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';


function Task(props) {
    const [type, setType] = useState(1);   
    const [lateTask, setLateTasks] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState(false);
    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [macaddress, setMacaddress] = useState('11:1B:11:11:1A:B1');

    async function lateVerify() {
        await api.get(`/task/filter/late/11:1B:11:11:1A:B1`).then(response => {
            setLateTasks(response.data.length);
        });
    }

    async function loadComponentsByID() {
        await api.get(`/task/${props.match.params._id}`).then(response => {
            setId(response.data._id);
            setTitle(response.data.title);
            setMacaddress(response.data.macaddress);
            setType(response.data.type);
            setDescription(response.data.description);
            setDone(response.data.done);
            setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
            setHour(format(new Date(response.data.when), 'HH:mm'));
        });
    }

    useEffect(() => {
        lateVerify();
        if (props.match.params._id) loadComponentsByID();
    }, []);

    async function saveForm() {
        await api.post('/task', {
            macaddress,
            type,
            title,
            description,
            "when": `${date}T${hour}:00.000`,
            done
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        });
        console.log("Aq")
    }

    return (
        <React.Fragment>
            <Styled.Container>
                <Header lateCount={lateTask} />

                <Styled.Form>
                    <Styled.TypeIcons>
                        {
                            TypeIcons.map((icon, index) => (
                                index > 0 && (
                                    <button key={index} type="submit" onClick={() => setType(index)}>
                                        <img src={icon} className={(type && type !== index) ? 'inative' : null}
                                             alt="Tipo da tarefa" />
                                    </button>
                                )
                            ))
                        }
                    </Styled.TypeIcons>
                    
                    <Styled.InputField>
                        <span>Título</span>
                        <input type="text" placeholder="Título da tarefa..."
                               value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Styled.InputField>

                    <Styled.TextAreaField>
                        <span>Desccrição</span>
                        <textarea rows={5} placeholder="Detalhes da tarefa ..."
                                  value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Styled.TextAreaField>

                    <Styled.InputField>
                        <span>Data</span>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </Styled.InputField>

                    <Styled.InputField>
                        <span>Hora</span>
                        <input type="time" value={hour} onChange={(e) => setHour(e.target.value)}/>
                    </Styled.InputField>

                    <Styled.Options>
                        <div>
                            <input type="checkbox" checked={done} onChange={(e) => setDone(e.target.checked)}/>
                            <span>CONCLUÍDO</span>
                        </div>
                        <button type="button">EXCLUIR</button>
                    </Styled.Options>

                    <Styled.Save>
                        <button type="button" onClick={saveForm}>SALVAR</button>
                    </Styled.Save>

                </Styled.Form>

                <Footer />
            </Styled.Container>
        </React.Fragment>
    );
}

export default Task;  
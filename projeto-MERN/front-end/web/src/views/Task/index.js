import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import * as Styled from './styles';
import api from '../../services/api';

import { format } from 'date-fns'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';
import isConnected from '../../utils/isConnected';


function Task(props) {
    const [type, setType] = useState(1);   
    const [lateTask, setLateTasks] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState(false);
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [macaddress, setMacaddress] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [redirectQr, setRedirectQr]  = useState(false);

    
    async function lateVerify() {
        await api.get(`/task/filter/late/${macaddress}`).then(response => {
            setLateTasks(response.data.length);
        });
    }

    async function loadComponentsByID() {
        await api.get(`/task/${props.match.params._id}`).then(response => {
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
        if (!isConnected) {
            setRedirectQr(true);
        } else {
            setMacaddress(isConnected);
            lateVerify();
            if (props.match.params._id) loadComponentsByID();
        }
    }, []);

    const validateFields = () => {
        const requiredFields = {
            title() {
                if (!title) {
                    return "Você precisa informar o titulo da tarefa"
                }
            },
            description() {
                if (!description) {
                    return "Você precisa informar a descrição da tarefa"
                }
            },
            date() {
                if (!date) {
                    return "Você precisa informar a data da tarefa"
                }
            },
            hour() {
                if (!hour) {
                    return "Você precisa informar a hora da tarefa"
                }
            }
        }

        const errors = [];
    
        Object.entries(requiredFields).forEach(([key, methodValidate]) => {
            const result = methodValidate();
            if (result !== undefined) errors.push(result);
        });
        
        if(errors.length > 0){
            return errors[0]
        } else {
            return null;
        }
    }

    async function saveForm() {     
        const messageForUser = validateFields();
        if (messageForUser) {
            alert(messageForUser);
        } else {
            if (props.match.params._id) {
                await api.put(`/task/${props.match.params._id}`, {
                    macaddress,
                    type,
                    title,
                    description,
                    "when": `${date}T${hour}:00.000`,
                    done
                }).then(response => {
                    setRedirect(true);
                }).catch(error => {
                    console.log(error);
                });
            } else {
                await api.post('/task', {
                    macaddress,
                    type,
                    title,
                    description,
                    "when": `${date}T${hour}:00.000`,
                    done
                }).then(response => {
                    setRedirect(true);
                }).catch(error => {
                    console.log(error);
                });
            };
        }
    }

    async function deleteItemByID() {
        const res = window.confirm("Deseja realmente remover a tarefa? ")
        if (props.match.params._id && res) {
            await api.delete(`/task/${props.match.params._id}`).then(response => {
                setRedirect(true);
            }).catch(error => {
                console.log(error);
            });
        }
    }

    return (
        <React.Fragment>
            <Styled.Container>
                { redirect ? <Redirect to="/"/> : null }
                { redirectQr ? <Redirect to="/qrcode" /> : null}

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
                        {
                            props.match.params._id ?
                            <button type="button" onClick={deleteItemByID}>EXCLUIR</button>
                            : null
                        }
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
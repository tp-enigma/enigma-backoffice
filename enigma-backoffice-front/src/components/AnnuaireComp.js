import React, { Component } from 'react';
import '../model/Agent'
import Agent from '../model/Agent';

import '../styles/AnnuaireComp.css'

const EMPTY_FIELD = 0;
var fetchAgentlist = () => {
    let i=0
    let agentList = new Array()
    for (; i< 10; i++) {
        let agent = initAgent('nom'+i, 'prenom'+i, 'telephone'+i, 'mail'+i)
        agentList.push(agent)
    }
    return agentList
}


var initAgent = (nom, prenom, telphone, mail) => {
    return new Agent(nom, prenom, telphone, mail)
}

var filterByField = (field, filter) => {
    return field.length !== EMPTY_FIELD && filter.includes(field)
}



class AnnuaireComp extends Component {

    state={
        filtreNom:'',
        filtrePrenom:'',
        filtreTelephone:'',
        filtreMail:'',
        agents: fetchAgentlist(),
    }

    filtrer = () => {
        if (this.state.filtreNom.length === EMPTY_FIELD
            && this.state.filtreNom.length === EMPTY_FIELD
            && this.state.filtreNom.length === EMPTY_FIELD
            && this.state.filtreNom.length === EMPTY_FIELD) {
            this.setState({
                agents: fetchAgentlist()
            })
        } else {
            let agentlist = fetchAgentlist()
            agentlist = agentlist.filter(a => {
                return filterByField(this.state.filtreNom,a.getNom()) ||
                       filterByField(this.state.filtrePrenom,a.getPrenom())  ||
                       filterByField(this.state.filtreTelephone,a.getTelephone()) ||
                       filterByField(this.state.filtreMail,a.getMail())
            })

            this.setState({
                agents: agentlist != null ? agentlist : []
            })
        }
    }

    onNomChange = (e) => {
        this.setState({
            filtreNom: e.target.value
        })
        this.filtrer()
    }

    onPrenomChange = (e) => {
        this.setState({
            filtrePrenom: e.target.value
        })
        this.filtrer()
    }

    onTelephoneChange = (e) => {
        this.setState({
            filtreTelephone: e.target.value
        })
        this.filtrer()
    }

    onMailChange = (e) => {
        this.setState({
            filtreMail: e.target.value
        })
        this.filtrer()
    }

    


    addAgents = () => {
        return (<ul>{
            this.state.agents.map((agent,index) => (
                    <li key={index} className="listAgentClass">
                        <label className="agentDescription">{agent.getNom()}</label>
                        <label className="agentDescription">{agent.getPrenom()}</label>
                        <label className="agentDescription">{agent.getTelephone()}</label>
                        <label className="agentDescription">{agent.getMail()}</label>
                    </li>
            ))}
        </ul>)
    }

    render() {
        return (
            <React.Fragment>
            <div>
                <h1>Liste des agents</h1>
                <div>
                    <label className="textSearchClass" >nom:</label>
                    <input type="text" onChange={this.onNomChange} value={this.state.filtreNom}></input>
                    <label className="textSearchClass" >prenom:</label>
                    <input type="text" onChange={this.onPrenomChange} value={this.state.filtrePrenom}></input>
                    <label className="textSearchClass" >telephone</label>
                    <input type="text" onChange={this.onTelephoneChange} value={this.state.filtreTelephone}></input>
                    <label className="textSearchClass" >mail</label>
                    <input type="text" onChange={this.onMailChange} value={this.state.filtreMail}></input>
                </div>
                {this.addAgents()}
            </div>    
            </React.Fragment>
        )
    }
}

export default AnnuaireComp;
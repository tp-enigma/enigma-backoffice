import React, { Component } from 'react';
import '../model/Agent'
import Agent from '../model/Agent';

import '../styles/AnnuaireComp.css'

var testAgent = () => {
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



class AnnuaireComp extends Component {

    state={
        element:'',
        agents: testAgent() == null ? [] : testAgent(),
    }

    addAgents = () => {
        return (<ul>{
            this.state.agents.map((agent,index) => (
                    <li key={index}>
                        <p className="agentDescription"><h3>{agent.getNom()}</h3></p>
                        <p className="agentDescription"><h3>{agent.getPrenom()}</h3></p>
                        <p className="agentDescription"><h3>{agent.getTelephone()}</h3></p>
                        <p className="agentDescription"><h3>{agent.getMail()}</h3></p>
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
                    <label>Chercher un agent</label>
                    <input type="text"></input>
                    <button>chercher</button>
                </div>
                {this.addAgents()}
            </div>    
            </React.Fragment>
        )
    }
}

export default AnnuaireComp;
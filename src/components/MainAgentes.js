import React, { useState, useEffect } from 'react';
import styles from "./MainAgentes.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const fetchAgentData = async () => {
    const response = await fetch('https://valorant-api.com/v1/agents');
    const data = await response.json();
    return data.data; 
};

function Main({ searchTerm }) {
    const [agents, setAgents] = useState([]);
    const [filteredAgents, setFilteredAgents] = useState([]);

    useEffect(() => {
        fetchAgentData().then(data => {
            setAgents(data);
            setFilteredAgents(data);
        });
    }, []);

    useEffect(() => {
        const filtered = agents.filter(agent =>
            agent.displayName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredAgents(filtered);
    }, [searchTerm, agents]);

    return (
        <div>
            <section className={styles.section__container}>
                <Swiper spaceBetween={50} slidesPerView={1}>
                    {filteredAgents.map(agent => (
                        <SwiperSlide key={agent.uuid}>
                            <ul>
                                <li className={styles.li__cards}>
                                    <div>
                                        <div className={styles.card}> 
                                        <img src={agent.displayIcon} alt={agent.displayName} className={styles.agentIcon} />
                                        <h3>{agent.displayName}</h3>
                                        <div className={styles.card_descricao}> 
                                        <p>{agent.description}</p></div>
                                        <div className={styles.abilities}>
                                            {agent.abilities.map((ability, index) => (
                                                <div key={index} className={styles.ability}>
                                                    <img src={ability.displayIcon} alt={ability.displayName} className={styles.abilityIcon} />
                                                    <h4>{ability.displayName}</h4>
                                                    <p>{ability.description}</p>
                                                </div>
                                                
                                            ))}
                                        </div>
                                    </div>
                                    </div></li>
                            </ul>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
}

export default Main;
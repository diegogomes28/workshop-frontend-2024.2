import styles from "./Main.module.css";
import breach from "../imgs/breach.png";

function Main() {
    return (
        <div>
            <section className={styles.section__container}>
                <div className={styles.section__main}> 
                    <div className={styles.section__first}> 
                        <h1 className={styles.section__main_titulo}>BREACH </h1>
                        <h5>(para ver a API, vá em agentes)</h5>
                        <p>
                        Criminoso sueco, Erik Torsten seria condenado junto com o resto de sua família por seus crimes. 
                        No entanto, como ele era um amputado congênito duplo, o juiz foi lamentável e indulgente com ele, 
                        dando-lhe uma sentença menor que logo permitiu que Erik voltasse aos seus velhos hábitos. 
                        Construindo para si seus próprios braços mecânicos para usar, Erik reagiria com suas próprias missões criminosas, 
                        tornando-se tão famoso pelas coisas terríveis que havia feito que eventualmente teve que se esconder e efetivamente 
                        se exilar de sua casa. Nessa época, ele também conheceu a jovem brasileira Tayane Alves, que trabalhou ao seu lado 
                        por um tempo e fez algumas atualizações importantes em seus braços, resultando na versão revestida de titânio em aço 
                        carbono que ele usa até hoje. </p>

                        <p>Mais tarde abordado para se tornar um agente de VALORANT, 
                        Torsten aceitou a oferta, embora sua introdução não tenha sido tranquila. 
                        Deixando para trás sua vida criminosa de acordo com os procedimentos do VP, 
                        seus registros foram lacrados e ele se tornou o décimo terceiro agente do Protocolo, 
                        "Breach". Apesar de agora servir para a organização secreta com ações mais dignas, 
                        as consequências de seu passado criminoso permanecem para sempre, deixando-o um homem 
                     que, por tudo o que faz agora, nunca poderá realmente voltar para casa.
                        </p>
                                
                    </div>

                    <div className={styles.section__second}>
                        <img src={breach} alt="Breach" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;
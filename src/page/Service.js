import visions from '../assets/logos/visions.png'
import { useDispatch, useSelector } from 'react-redux';
import { addAsyncVisions } from '../features/reducers/visionsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { modalReducer } from '../features/reducers/connectionSlice';


const Service = ({ dashboard, t }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const servicesList = useSelector((state) => state.servicesList.service);
    const usersList = useSelector((state) => state.usersList.user);
    const service = servicesList.filter(service => service.id === id)
    const provider = usersList.filter(user => user.did === service[0].authorDid)
    const did = useSelector((state) => state.connection.did);
    const user = usersList.filter(user => user.did === did)

    const handleBack = () => {
        navigate(-1);
    }

    const handleIntegration = async () => {
        // const data = {
        //     "providerJwt": provider[0].vcJwt,
        //     "sdJwt": service[0].sdJwt,
        //     "userJwt": user[0].vcJwt
        // }

        const data = {
            "providerJwt": "eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRGFzZXNJZGVudGl0eSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJzdGF0ZW1lbnQiOnsidHlwZSI6IkNlcnRpZmljYXQgUGFydGljaXBhbnQgREFTRVMiLCJkaWRPd25lciI6ImRpZDpldGhyOjB4NDoweEM4NDM5YjRhMmE2Y2EwMTg1M2E4ZTA1OTcxNzdiNTk5QUYyZkYzQmYiLCJnaXZlbk5hbWUiOiJQZXJyaW4iLCJmYW1pbHlOYW1lIjoiR1JBTkRORSIsImVtYWlsT3duZXIiOiJwZXJyaW4uZ3JhbmRuZUBnbWFpbC5jb20iLCJjb21wYW55TmFtZSI6Ik1FTkpTIiwiY29tcGFueUFkcmVzcyI6IjIxIHJ1ZSBkZXMgQXJjaGl2ZXMgNzUwMDMgUGFyaXMiLCJsZWdhbFJlcHJlc2VudGF0aXZlIjoiUGVycmluIEdSQU5ETkUiLCJlbWFpbExlZ2FsUmVwcmVzZW50YXRpdmUiOiJwZXJyaW4uZ3JhbmRuZUBnbWFpbC5jb20ifX19LCJzdWIiOiJkaWQ6ZXRocjoweDQ6MHhDODQzOWI0YTJhNmNhMDE4NTNhOGUwNTk3MTc3YjU5OUFGMmZGM0JmIiwibmJmIjoxNjQ2NDI1MTI5LCJpc3MiOiJkaWQ6ZXRocjpyaW5rZWJ5OjB4YzVBNzViYTg3ODc2YjIzNzI2NWIwNUY4NDgxNjBmNTRkMzZDYTA2NSJ9.TY47-R5_jLsYdtxdZ634NBKKCbJdA5WPldSat6zqR8KFx19lX2_nNHrxvaetkSf6lStLAtoMkYvtNWmX3b6S_wE",
            "sdJwt": "eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiU2VsZkRlc2NyaXB0aW9uIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InN0YXRlbWVudCI6eyJoYXNTZXJ2aWNlVGl0bGUiOiJGb3JtYXRpb25zIGluaXRpYWxlcyBlbiBGcmFuY2UiLCJoYXNTZXJ2aWNlRGVzY3JpcHRpb24iOiJDZSBqZXUgZGUgZG9ubsOpZXMgZXN0IHJlcHJpcyBkZSBsYSBwbGF0ZWZvcm1lIG9wZW5kYXRhIGRlIGwnT05JU0VQIiwiaGFzS2V5d29yZCI6WyJlZHVjYXRpb24iLCJ0cmFpbmluZyJdLCJoYXNEYXRhVHlwZSI6WyJEaXBsb21lcyIsIkNvbXBldGVuY2VzIiwiRm9ybWF0aW9uIiwiQmFkZ2UiXSwicHJvdmlkZWRCeSI6Ik1FTkpTIiwiaGFzUHJvdmlzaW9uVHlwZSI6IlB1YmxpY1Byb3Zpc2lvbmluZyIsImhhc1NlcnZpY2VNb2RlbCI6IkRhYVMiLCJoYXNXZWJBZGRyZXNzIjoiaHR0cHM6Ly9kYXRhLmVkdWNhdGlvbi5nb3V2LmZyL2V4cGxvcmUvZGF0YXNldC9mci1lbi1mb3JtYXRpb25zLWluaXRpYWxlcy1lbi1mcmFuY2UvaW5mb3JtYXRpb24iLCJ0eXBlU2VydmljZU9mZmVyaW5nIjoiRGF0YSIsImRpZE93bmVyIjoiZGlkOmV0aHI6MHg0OjB4Qzg0MzliNGEyYTZjYTAxODUzYThlMDU5NzE3N2I1OTlBRjJmRjNCZiIsIm5hbWVPd25lciI6IlBlcnJpbiBHUkFORE5FIiwiY29tcGFueU93bmVyIjoiTUVOSlMiLCJlbWFpbE93bmVyIjoicGVycmluLmdyYW5kbmVAZWR1Y2F0aW9uLmdvdXYuZnIifX19LCJzdWIiOiJkaWQ6ZXRocjoweDQ6MHhDODQzOWI0YTJhNmNhMDE4NTNhOGUwNTk3MTc3YjU5OUFGMmZGM0JmIiwibmJmIjoxNjQ2NDI1MTI5LCJpc3MiOiJkaWQ6ZXRocjpyaW5rZWJ5OjB4YzVBNzViYTg3ODc2YjIzNzI2NWIwNUY4NDgxNjBmNTRkMzZDYTA2NSJ9.mT-aXdo9Vi36ab2udwXzctqLsKuvVzpWs62In4lJc78OmrV-TikvaR8PV_HGggkYDYpKJJMBe0NvgWdjnN-2XQA",
            "userJwt": "eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRGFzZXNJZGVudGl0eSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJzdGF0ZW1lbnQiOnsidHlwZSI6IkNlcnRpZmljYXQgUGFydGljaXBhbnQgREFTRVMiLCJkaWRPd25lciI6ImRpZDpldGhyOjB4NDoweGEzNTM0ZTQ1RTMzYUMxOTQzYkNCODc1MThlMzQ2RjhENEY3MDZDNzciLCJnaXZlbk5hbWUiOiJKb2huIiwiZmFtaWx5TmFtZSI6IkRPRSIsImVtYWlsT3duZXIiOiJqb2huLmRvZUBjb250YWN0LmNvbSIsImNvbXBhbnlOYW1lIjoiRWRUZWNoVGVzdCIsImNvbXBhbnlBZHJlc3MiOiIxNSBydWUgZGVzIEFyY2hpdmVzIDc1MDAzIFBhcmlzIiwibGVnYWxSZXByZXNlbnRhdGl2ZSI6IkpvaG4gRG9lIiwiZW1haWxMZWdhbFJlcHJlc2VudGF0aXZlIjoiam9obi5kb2VAY29udGFjdC5jb20ifX19LCJzdWIiOiJkaWQ6ZXRocjoweDQ6MHhhMzUzNGU0NUUzM2FDMTk0M2JDQjg3NTE4ZTM0NkY4RDRGNzA2Qzc3IiwibmJmIjoxNjQ2NDI1MTI5LCJpc3MiOiJkaWQ6ZXRocjpyaW5rZWJ5OjB4YzVBNzViYTg3ODc2YjIzNzI2NWIwNUY4NDgxNjBmNTRkMzZDYTA2NSJ9.6Pm4RU2l_zTdjp_83FRID1kG_e15_ztDMxXfbhdEFNrIRMv19ftpaQWwMfO8MWeYNna5aOaXwhB5TK7auY7NMwA"
        }

        window.alert("Vous allez ??tre redirig?? vers le service Visions pour signer le contrat d'??change de donn??es");
        console.log(data)
        dispatch(addAsyncVisions(data));
    }

    const logoSelect = (entity) => {
		switch(entity) {
			case 'MENJS':
				return ('/logos/menjs.jpg');
			case 'Inokufu':
				return ('prometheus.svg')
			case 'Mindmatcher':
				return ('/logos/prometheus.svg')
			case 'Visions':
				return ('/logos/prometheus.svg')
			default:
				return ('/logos/entityUnKnown.svg')
		}
	}

    return (
        <section className="main flex column flex-1">
            <ul className="container breadcrumb flex row">
                <li className="back"><button onClick={handleBack}>{t('retour')}</button></li>
                <li><button onClick={handleBack}>{t('catalogue')}</button></li>
                <li className="current"><button onClick={handleBack}>{service[0].title}</button></li>
            </ul>
            <div className="servicePage">
                <main className="container sectionContent">
                    <section className="container servicePageTitle flex row">
                    <img src={logoSelect(service[0].entity)} alt="" />
                        <div>
                            <h1>{service[0].title}</h1>
                            <ul className="resourceTags flex row center wrap">
                                <li className="resourceType dataSet"></li>
                                <li className="isResourceOpen locked"></li>
                                <li>
                                    <ul className="tagList flex row">
                                        <li className="tag tagSkyBlue">API</li>
                                        <li className="tag tagLightBlue">Dataset</li>
                                        <li className="tag tagPurple">Students</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {service[0].personalData === "oui" &&
                            <ul className="ctas">
                                <li>
                                    {dashboard === "false" && <button className="button blackButton"
                                    onClick={() => { dispatch(modalReducer({ modal: 'welcome', source: 'use' })) }}
                        >
                            {t("Demander l'int??gration")}
                        </button>}      
                                     {/* <Connection buttonName={buttonName} typeConnection={typeConnection} id={service[0].id} /> */}
                                    {dashboard === "true" && <button className="useService button blackButton export" onClick={handleIntegration}>Demander l'int??gration</button>}
                                    <br/>
                                    <span>powered by <img src={visions} alt="" /></span>
                                </li>
                            </ul>}
                    </section>
                    <section className="container servicePageContent flex wrap column">
                        <div className="serviceDescription flex-1">
                            {service[0].personalData === "oui" &&
                                <p className="warning">
                                    ??? Cette ressource donne acc??s ?? des donn??es personnelles <br />
                                    <a href="https://daseslab.on.fleek.co/" className="questionLink">En apprendre plus sur les contraintes li??es ?? cet usage</a>
                                </p>}
                            <h2>Description</h2>
                            <p>{service[0].description}</p>
                        </div>
                        <div className="serviceDetails">
                            <div className="serviceEditor">
                                <h2>Editeur</h2>
                                <button className="button whiteButton">{service[0].entity}</button>
                            </div>
                            <div className="serviceEditor">
                                <h2>Documentation</h2>
                                <button className="button whiteButton external">
                                    <a href={service[0].documentation} target="_blank" rel="noopener noreferrer">Voir la documentation</a>
                                </button>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td colSpan="2">
                                            <h2>{t('D??tails')}</h2>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Type</td>
                                        <td>{service[0].typeData}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Niveau')}</td>
                                        <td>{service[0].levelData}</td>
                                    </tr>
                                    <tr>
                                        <td>Format</td>
                                        <td>{service[0].formatData}</td>
                                    </tr>
                                    <tr>
                                        <td>Standard</td>
                                        <td>{service[0].originalData}</td>
                                    </tr>
                                    <tr>
                                        <td>Licence</td>
                                        <td>{service[0].licence}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Donn??es personnelles')}</td>
                                        <td>{service[0].personalData}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Label Gaia-X')}</td>
                                        <td>{service[0].labelData}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Conditions d???utilisation')}</td>
                                        <td><a href={service[0].conditions} target="_blank" rel="noopener noreferrer" className="button whiteButton external block">{service[0].conditions}</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        </section>
    )
}

export default Service;

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { modalReducer } from '../features/reducers/connectionSlice';
import entityUnkown from '../assets/entityUnKnown.svg'
import menjs from '../assets/logos/menjs.jpg'

const CatalogList = ({ dashboard, query, licence, openData, t }) => {
	const servicesList = useSelector((state) => state.servicesList.service);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	if (!servicesList.length) {
		return <h3>Loading...</h3>;
	}

	const handleService = (id) => {
		if (!dashboard) navigate(`/service/${id}`)
		else navigate(`/dashboard/service/${id}`)
	}

	const handleAdd = () => {
		navigate("/dashboard/add")
	}

	return (
		<section className="container flex wrap catalogueList">
			{servicesList.filter(item => (item.title.toLowerCase().includes(query) ||
				item.description.toLowerCase().includes(query)) &&
				item.licence.includes(licence) &&
				item.personalData.includes(openData)
			).map((item) => (
				<div key={item.id} className="catalogueCell" onClick={() => handleService(item.id)}>
					<div className="title flex center">
						{(item.entity === 'MENJS') &&
							<img src={menjs} alt="" />}
						{(item.entity !== 'MENJS') &&
							<img src={entityUnkown} alt="" />}
						<div>
							<h2>{item.title}</h2>
							<ul className="flex">
								<li key="api"><span className="tag">API</span></li>
								<li key="lo"><span className="tag">Education</span></li>
								{/* <li key="li">{licencesList[0]}</li> */}
							</ul>
						</div>
					</div>
					<p className="description">
						{item.description}
					</p>
				</div>))}
			<div className="catalogueCell addService">
				{!dashboard && <button
					onClick={() => { dispatch(modalReducer({ modal: true, source: 'add' })) }}
				>
					{t("Participer à l'offre")}
				</button>}

				{dashboard && <button className="button blackButton connectWallet" onClick={handleAdd}>{t("Participer à l'offre")}</button>}
			</div>
		</section>
	)
}

export default CatalogList;
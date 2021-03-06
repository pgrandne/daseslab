
import readyForCatalog from '../../../assets/img/readyForCatalog.svg';

const AddPage5 = ({ t }) => {
	return (
		<div>
			<p className="textCenter">
				<strong>{t("Prêt pour le catalogage ?")}</strong> <br />
				Votre service sera analysé par Prometheus et vous serez notifié via l’e-mail renseigné <br />
				lors de votre inscription sur le portail lors de sa parution. <br />
				<img src={readyForCatalog} width="250" height="250" alt="" />
			</p>
		</div>

	)
}

export default AddPage5;
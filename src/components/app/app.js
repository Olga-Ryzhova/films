import Stars  from '../stars/stars';
import '../../css/main.css';
import superman from '../../img/superman.jpg';
import loneRunner from '../../img/lone-runner.jpg';

const App = () => {
	const films = [{
			id: 1,
			poster: superman,
			title: 'Супермен',
			stars: 4,
	  },{
			id: 2,
			poster: loneRunner,
			title: 'Одинокий странник',
			stars: 3
		}];

		return (
			<div className="container">
				{films.map(item => (
					<div className="film-item">
						<img src={item.poster} alt="" className="film-img" />
						<div className="film-descr">
							<h2 className="film-title">{item.title}</h2>
							<Stars count={item.stars} key={item.id}/>
						</div>
					</div>
				))}
			</div>
	);
}

export default App;

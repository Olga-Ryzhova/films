import Star from '../star/star';
import '../../css/main.css'

const Stars = ({count}) => {
	if (count < 1 || count > 5 || isNaN(count)) {
		return null;
	}

	const countStars = Array.from({length: count}).map(item => {
		return (
			<li key = {item}>
				<Star />
			</li>
		)
	})

	return (
		<ul className="card-body-stars u-clearfix">
			{countStars}
		</ul>
	);
};

export default Stars;
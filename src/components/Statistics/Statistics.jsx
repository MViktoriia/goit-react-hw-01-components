import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function Statistics({ title, stats }) {
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}

            <ul className={style.statlist}>
                {stats.map(stat => (
                    <li key={stat.id} className={style.item} style={{ backgroundColor: getRandomHexColor() }}>
                            <span className={style.label}>{stat.label}</span>
                            <span className={style.percentage}>{`${stat.percentage} %`}</span>
                        </li>
                    )                    
                )}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;


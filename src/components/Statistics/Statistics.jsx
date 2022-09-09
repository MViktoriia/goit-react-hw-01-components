import PropTypes from 'prop-types';
import { StatisticsStyled, Title, Statlist, Item, StyledSpan } from './Statistics.styled';

function Statistics({ title, stats }) {
    return (
        <StatisticsStyled>
            {title && <Title>{title}</Title>}

            <Statlist>
                {stats.map(stat => (
                    <Item key={stat.id}>
                            <StyledSpan>{stat.label}</StyledSpan>
                            <StyledSpan>{`${stat.percentage} %`}</StyledSpan>
                        </Item>
                    )                    
                )}
            </Statlist>
        </StatisticsStyled>
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



export default Statistics;


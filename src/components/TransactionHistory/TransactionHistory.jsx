import PropTypes from 'prop-types';
import { TransactionHistoryTable, StyledTh, StyledTd } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
    return (
        <TransactionHistoryTable>
            <thead>
                <tr>
                    <StyledTh>Type</StyledTh>
                    <StyledTh>Amount</StyledTh>
                    <StyledTh>Currency</StyledTh>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key = {item.id}>
                        <StyledTd>{item.type}</StyledTd>
                        <StyledTd>{item.amount}</StyledTd>
                        <StyledTd>{item.currency}</StyledTd>
                    </tr>
                )
                )}
                
            </tbody>
        </TransactionHistoryTable>
    );

};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
};

export default TransactionHistory;
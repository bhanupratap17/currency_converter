import PropTypes from 'prop-types';
import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
    currencyCountryMap = {},
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-4 rounded-lg text-sm flex ${className}`}>
            {/* Amount Input Section */}
            <div className="w-1/2 pr-2">
                <label htmlFor={amountInputId} className="text-black mb-2 block font-medium">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-slate-300 py-1.5 px-2 rounded"
                    type="number"
                    placeholder="Amount"
                    id={amountInputId}
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Currency Select Section */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    className="rounded-lg px-1 py-1 bg-slate-300 cursor-pointer outline-none"
                    disabled={currencyDisable}
                >
                    {currencyOption.map((currency) => (
                        <option
                            key={currency}
                            value={currency}
                            title={currencyCountryMap[currency] || 'Unknown'}
                            className="text-gray-700"
                        >
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,  // label is now required
    amount: PropTypes.number.isRequired,
    onAmountChange: PropTypes.func.isRequired,
    onCurrencyChange: PropTypes.func.isRequired,
    currencyOption: PropTypes.arrayOf(PropTypes.string),
    selectCurrency: PropTypes.string,
    amountDisable: PropTypes.bool,
    currencyDisable: PropTypes.bool,
    className: PropTypes.string,
    currencyCountryMap: PropTypes.objectOf(PropTypes.string),
};

export default InputBox;

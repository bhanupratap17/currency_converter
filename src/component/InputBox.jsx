// import React from 'react'
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
}) {
    const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-slate-300 py-1.5 px-2"
                    type="number"
                    placeholder="Amount"
                    id={amountInputId}
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && 
                    onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-slate-300 cursor-pointer outline-none"  
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}   
                > 
                        {currencyOption.map( (currency) => 
                        (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

InputBox.propTypes = {
    label: PropTypes.string,
    amount: PropTypes.number.isRequired,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func.isRequired,
    currencyOption: PropTypes.arrayOf(PropTypes.string),
    selectCurrency: PropTypes.string,
    amountDisable: PropTypes.bool,
    currencyDisable: PropTypes.bool,
    className: PropTypes.string,
};

export default InputBox;

import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './component';
import { useState, useEffect } from 'react';

export default function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);  // Fetch currency conversion rates
    const options = Object.keys(currencyInfo);

    // Currency code to country name mapping
    const currencyCountryMap = {
        usd: 'United States',
        inr: 'India',
        eur: 'European Union',
        gbp: 'United Kingdom',
        jpy: 'Japan',
        cad: 'Canada',
        aud: 'Australia',
        chf: 'Switzerland',
        cny: 'China',
        sek: 'Sweden',
        nzd: 'New Zealand',
        mxn: 'Mexico',
        sgd: 'Singapore',
        hkd: 'Hong Kong',
        nok: 'Norway',
        krw: 'South Korea',
        try: 'Turkey',
        rub: 'Russia',
        zar: 'South Africa',
        brl: 'Brazil',
        twd: 'Taiwan',
        dkk: 'Denmark',
        pln: 'Poland',
        thb: 'Thailand',
        idr: 'Indonesia',
        huf: 'Hungary',
        czk: 'Czech Republic',
        ils: 'Israel',
        clp: 'Chile',
        php: 'Philippines',
        aed: 'United Arab Emirates',
        sar: 'Saudi Arabia',
        myr: 'Malaysia',
        ron: 'Romania',
        vnd: 'Vietnam',
        egp: 'Egypt',
        bdt: 'Bangladesh',
        ngn: 'Nigeria',
        pkr: 'Pakistan',
        lkr: 'Sri Lanka',
        ars: 'Argentina',
        uah: 'Ukraine',
        kes: 'Kenya',
        cop: 'Colombia',
        kwd: 'Kuwait',
        qar: 'Qatar',
        omr: 'Oman',
        jod: 'Jordan',
        bhd: 'Bahrain',
        bgn: 'Bulgaria',
        hrk: 'Croatia',
        isk: 'Iceland',
        mad: 'Morocco',
        dzd: 'Algeria',
        tnd: 'Tunisia',
        bwp: 'Botswana',
        ghs: 'Ghana',
        zmw: 'Zambia',
        mzn: 'Mozambique',
        ugx: 'Uganda',
        tzs: 'Tanzania',
        // Add more currencies as necessary
    };

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    const convert = () => {
        if (currencyInfo[to]) {
            setConvertedAmount(amount * currencyInfo[to]);
        }
    };

    // Run conversion when amount or currency change
    useEffect(() => {
        convert();
    }, [amount, from, to, currencyInfo]);

    return (
        <div
            className="w-screen h-screen flex justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://cdn.pixabay.com/photo/2021/10/10/03/21/stock-market-6695482_1280.jpg)`,
            }}
        >
            <div className="w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-lg m-4 sm:m-8">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    {/* Amount and Currency Selection for "From" Currency */}
                    <div className="w-full mb-1 text-black">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            amountDisable={false}
                            currencyCountryMap={currencyCountryMap}
                        />
                    </div>

                    {/* Swap Button */}
                    <div className="relative w-full h-0.5 mb-4">
                        <button
                            type="button"
                            onClick={swap}
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm md:text-base mt-2"
                        >
                            Swap
                        </button>
                    </div>

                    {/* Amount and Currency Selection for "To" Currency */}
                    <div className="w-full mt-1 mb-4 text-black">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOption={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            currencyCountryMap={currencyCountryMap}
                        />
                    </div>

                    {/* Convert Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    );
}

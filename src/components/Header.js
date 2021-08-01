import React from 'react';

const Header = () => (
    <header
        className="w-full mx-auto mb-8 space-y-8"
    >
        <h1 className="md:text-3xl lg:text-4xl py-8 text-xl text-center border-0 border-b border-gray-300 shadow">2021 National Basketball Association Statistics</h1>

        <section className="max-w-screen-2xl px-8 mx-auto space-y-4">
            <h2 className="text-2xl text-center text-gray-500 uppercase">About</h2>
            <div className="space-y-4 text-left">
                <p className="leading-7">
                    The visualization below provides a narrative of the 2021 NBA season in the form of two statistical measures commonly used for forecasting.
                    The data used for this visualization is from FiveThirtyEight and is a subset of the data used to create their article{' '}
                    <a
                        className="hover:underline text-blue-500"
                        href="https://projects.fivethirtyeight.com/complete-history-of-the-nba/#bucks"
                    >The Complete History of the NBA <span className="text-xs">(fivethirtyeight.com)</span></a>.
                </p>
                <p className="space-x-4 leading-8">
                    <span>
                        <span>Data Source:</span>{' '}
                        <a href="https://github.com/fivethirtyeight/data/tree/master/nba-forecasts" className="hover:underline text-blue-500">FiveThirtyEight</a>
                        <span className="text-xs">
                            {' ['}
                            <a href="https://projects.fivethirtyeight.com/nba-model/nba_elo.csv" className="hover:underline text-blue-500">Download CSV</a>
                            {']'}
                        </span>
                    </span>
                    <span>|</span>
                    <span>
                        <span>Elo:</span>{' '}
                        <a
                            className="hover:underline text-blue-500"
                            href="https://en.wikipedia.org/wiki/Elo_rating_system"
                        >Elo Rating System <span className="text-xs">(wikipedia.com)</span></a>
                    </span>
                    <span>|</span>
                    <span>
                        <span>RAPTOR:</span>{' '}
                        <a
                            className="hover:underline text-blue-500"
                            href="https://fivethirtyeight.com/features/how-our-raptor-metric-works/"
                        >How Our RAPTOR Metric Works <span className="text-xs">(wikipedia.com)</span></a>
                    </span>
                </p>
            </div>
        </section>
    </header>
)

export default Header;

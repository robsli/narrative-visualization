import React from 'react';

const Header = (props) => {
    return (
        <header
            className="max-w-screen-2xl md:mb-12 w-full py-8 mx-auto mb-8 space-y-8 text-center"
        >
            <h1 className="md:text-3xl lg:text-4xl text-xl">2021 National Basketball Association Statistics</h1>

            <section className="p-8 mx-auto space-y-4">
                <div className="">
                    <span>Data Source:</span>{' '}
                    <a href="https://github.com/fivethirtyeight/data/tree/master/nba-forecasts" className="hover:underline text-blue-500">FiveThirtyEight</a>
                    <span className="text-xs">
                        {' ['}
                        <a href="https://projects.fivethirtyeight.com/nba-model/nba_elo.csv" className="hover:underline cursor- text-blue-500">Download CSV</a>
                        {']'}
                    </span>
                </div>
                <div className="">
                    Elo
                    Raptor
                </div>
            </section>
        </header>
    )
}

export default Header;

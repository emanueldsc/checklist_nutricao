import React, { createContext, useState } from 'react';

interface DateNow {
    dateNow: string;
    setDate(newDate: string): void;
}

const DataContext = createContext<DateNow>({} as DateNow);

const DataProvider: React.FC = ({ children }) => {

    const [dateNow, setDateNow] = useState<string>('');

    function setDate(newDate: string) {
        setDateNow(newDate);
    }

    return (
        <DataContext.Provider value={ { dateNow, setDate } }>
            { children }
        </DataContext.Provider>
    )
};

export { DataContext, DataProvider }

import React, { useState, useEffect } from 'react';

interface BackgroundTaskResult<T> {
    value: T | undefined;
    isLoading: boolean;
    error: Error | undefined;
}

export const UseBackground = <T extends React.ReactNode>(
    asyncFunc: () => Promise<T>,
    arrayOfDeps: any[]
): BackgroundTaskResult<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | undefined>(undefined);
    const [value, setValue] = useState<T | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await asyncFunc();
                setValue(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, arrayOfDeps);

    return {
        isLoading,
        error,
        value,
    };
};

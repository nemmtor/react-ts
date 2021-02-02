import { useEffect } from 'react';

interface HookReturn {
    logHello: () => void;
    someNumber: number;
}

export const useHelloWorld = (): HookReturn => {
    const someNumber = 5;

    const logHello = (): void => {
        console.log('Hello world');
    };

    useEffect(() => {
        logHello();
    }, []);

    return { logHello, someNumber };
};

import { useEffect, useRef, useCallback } from 'react';

const useTimeout = (callback, delay) => {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef();

    // here we make sure that we use actual callback
    useEffect(() => {
      callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        set(delay)

        return clear;
    }, [delay]);

    const set = useCallback((delay) => {
        const timeoutId = setTimeout(() => callbackRef.current(), delay);
        timeoutRef.current = timeoutId;
    }, [delay])

    const clear = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, []);

    const restart = useCallback((newDelay) => {
        clear()
        if (newDelay !== undefined) {
            set(newDelay)
        } else {
            set(delay)
        }
    }, [clear, set]);
    
    return { clear, restart };
};

export default useTimeout;
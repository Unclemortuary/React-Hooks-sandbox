// useId is used when you need an unique id
// This id will be the same between renders and browser refreshes if component tree is the same
// It is useful with SSR when you need the same id for HTML node in server-side and client-side

import React, { useId } from 'react';

const EmailField = () => {
    const id = useId();

    return (
        <>
            <label htmlFor={id}>Email</label>
            {/* now this this id will be unique with every new instance */}
            <input id={id} type='email' />
        </>
    );
};

export const UseIdExample = () => (
    <div style={{ width: '300px' }}>
        <EmailField />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <EmailField />
    </div>
);

export default UseIdExample;
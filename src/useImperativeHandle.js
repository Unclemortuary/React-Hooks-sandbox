// useImperativeHandle is used to create custom ref behavior
// It's recommended to use when you need to control multiple elements from parent component

import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';

const Popup = forwardRef((props, ref) => {
    const close = useRef();
    const yes = useRef();
    const no = useRef();

    useImperativeHandle(ref, () => ({ close: close.current, yes: yes.current, no: no.current }));

    return (
        <div className='modal'>
            <div>
                <h3>Title</h3>
                <button className='closeButton' ref={close} onClick={() => yes.current.focus()}>X</button>
            </div>
            <p>This is some text how do you think?</p>
            <div>
                <button className='yesButton' ref={yes}>Yes</button>
                <button className='noButton' ref={no}>No</button>
            </div>
        </div>
    );
});

export const UseImperativeHandle = () => {
    const [show, setShow] = useState(false);
    const ref = useRef();

    return (
        <div>
            <button onClick={() => setShow(prev => !prev)}>Open/Close</button>
            <button onClick={() => ref.current.close.focus()}>Focus Close</button>
            <button onClick={() => ref.current.yes.focus()}>Focus Yes</button>
            <button onClick={() => ref.current.no.focus()}>Focus No</button>
            { show && <Popup ref={ref}/>}
        </div>
    )
};

export default UseImperativeHandle;
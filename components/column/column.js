import React from 'react';

export function Column (props) {

    const styles = {
        'flex-grow': props?.grow || '1',
        'flex-shrink': props?.shrink || '1',
        'flex-basis': props?.basis || 'auto'
    };

    return (
        <div className="column" style={styles}>
            { props.children }
            <style jsx>{`
            .column {
                display: flex;
                flex-direction: column;
                padding: 0 var(--grid-padding);
            }
            `}</style>
        </div>
    );
}
import React from 'react';
import MediaQuery from 'react-responsive';

const breakpoints = {
    desktop: '(min-width: 1025px)',
    tablet: '(min-width: 768px) and (max-width: 1024px)',
    phone: '(max-width: 767px)',
};

export default function Breakpoint( { name, children } ) {
    const breakpoint = breakpoints[name] || breakpoints.desktop;

    return (
        <MediaQuery query={ breakpoint }>
            { children }
        </MediaQuery>
        );
    };


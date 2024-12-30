import React from 'react'


export default function Spinner({ size }) {

    const style = {
        width: size ? `${size}px` : '1.6rem',
        height: size ? `${size}px` : '1.6rem'
    }

    return (
        <img style={style} src="/global/img/spinner.svg" alt="loading..." />
    )
}
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';

const Div = styled.div`
    border: 1px solid red;
`;
const Div2 = styled.div`
    border: 1px solid green;
`;

const useStyles = makeStyles({
    list: {
        width: 550,
    },
    fullList: {
        width: 'auto',
    },
});

export default function LoginDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            style={{ right: 0 }}
            role='presentation'
        >
            Hello...
            <Div className='container' style={{ width: '90%' }}>
                <Div className='row'>
                    <Div className='col-1 text-left'>
                        <button
                            type='button'
                            className='btn btn-sm'
                            onClick={toggleDrawer(anchor, false)}
                        >
                            X
                        </button>
                    </Div>
                    <div className='w-100 d-none d-block'></div>
                    <Div2 className='col-10  text-left'>
                        col-10
                        <Div className='col-9'>col-sm</Div>
                        <Div className='col-3'>col-sm</Div>
                    </Div2>
                    {/* FREE SPACE RIGHT */}
                    <Div className='col-2'>col-2</Div>
                </Div>
                <Div className='row'>
                    <Div className='col'>col-sm</Div>
                    <Div className='col'>col-sm</Div>
                    <Div className='col'>col-sm</Div>
                </Div>
            </Div>
        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <button
                        type='button'
                        className=' btn btn-lg align-self-center font-weight-bold'
                        onClick={toggleDrawer(anchor, true)}
                    >
                        {'Login'}
                    </button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

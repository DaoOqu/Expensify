import React from 'react';
import withWindowDimensions from '@components/withWindowDimensions';
import BaseModal from './BaseModal';
import {defaultProps, propTypes} from './modalPropTypes';

function Modal(props) {
    return (
        <BaseModal
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {props.children}
        </BaseModal>
    );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.displayName = 'Modal';
export default withWindowDimensions(Modal);

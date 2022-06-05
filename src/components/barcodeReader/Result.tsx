// Ref: https://github.com/ericblade/quagga2-react-example/blob/master/src/components/Result.js
import React from 'react';
import PropTypes from 'prop-types';
import { ResultProps } from '../../types/BarcodeReaderTypes';

const Result = ({ result }: ResultProps) => (
    <li>
        {result.codeResult.code} [{result.codeResult.format}]
    </li>
);

Result.propTypes = {
    result: PropTypes.object
};

export default Result;
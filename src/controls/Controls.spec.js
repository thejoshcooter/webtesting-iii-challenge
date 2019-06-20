import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {

    describe('open/close and lock/unlock', () => {
        it('renders buttons', () => {
            const { getByTestId } = render(<Controls />);
            getByTestId('lockUnlock');
            getByTestId('openClose');
        })
        it('shows open/close and lock/unlock state', () => {
            const { getByTestId } = render(<Controls locked={true} closed={true} />);
            const lockButton = getByTestId('lockUnlock');
            const openButton = getByTestId('openClose');
 
            expect(lockButton).toHaveTextContent('Unlock Gate');
            expect(openButton).toHaveTextContent('Open Gate');
        })
    })
 
    describe('flips button state', () => {
         it('flips when locked', () => {
             const { getByTestId } = render(<Controls locked={true} closed={true}/>);
             const openButton = getByTestId('openClose');
             expect(openButton).toHaveAttribute('disabled');
         })
         it('flips when open', () => {
             const { getByTestId } = render(<Controls locked={false} closed={false} />);
             const lockButton = getByTestId('lockUnlock');
             expect(lockButton).toHaveAttribute('disabled');
         })
    })
 })
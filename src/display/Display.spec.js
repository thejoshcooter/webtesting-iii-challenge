import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
    it('checks snapshot', () => {
        const tree = renderer.create(<Display />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('shows open/unlocked', () => {
        const { getByText } = render(<Display />);
        getByText(/unlocked/i);
        getByText(/open/i);
    })
    it('can close', () => {
        const { getByTestId } = render(<Display closed={true} />);
        const open = getByTestId('openClose');
        expect(open).toHaveTextContent(/closed/i);
    })
    it('can lock', () => {
        const { getByTestId } = render(<Display locked={true} />);
        const lock = getByTestId('lockUnlock');
        expect(lock).toHaveTextContent(/locked/i);
    })

    it('styles unlocked/opeen', () => {
        const { getByTestId } = render(<Display locked={false} closed={false} />);
        const lock = getByTestId('lockUnlock');
        const open = getByTestId('openClose');
        expect(lock).toHaveClass('green-led');
        expect(open).toHaveClass('green-led');
    })

    it('styles locked/closed', () => {
        const { getByTestId } = render(<Display locked={true} closed={true} />);
        const lock = getByTestId('lockUnlock');
        const open = getByTestId('openClose');
        expect(lock).toHaveClass('red-led');
        expect(open).toHaveClass('red-led');
    })
    
})
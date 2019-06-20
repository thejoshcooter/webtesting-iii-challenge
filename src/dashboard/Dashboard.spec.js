import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';


import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it ('renders display/controls', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
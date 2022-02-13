import React from 'react';
import Alert from '../Alert.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Alert', function()
{
	const renderedComp = TestUtils.createRenderer()
	const compRendered = renderedComp.render(<Alert />)
	const result_tag = renderedComp.getRenderOutput()

	it('renders the tag', function() {
		expect(result_tag.type).toBe('div')
	})

	it('verify the className', function(){
		expect(result_tag.props.className). toBe('row')
	})

})
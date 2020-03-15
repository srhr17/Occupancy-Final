import React from 'react';

import { shallow, configure } from 'enzyme';

import Facultytimetable from '../components/Facultytimetable.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
it('validates inputs of faculty', () => {
	var wrapper21 = shallow(<Facultytimetable />);
	wrapper21.find('[name="fid"]').at(0).simulate('change', { target: { name: 'fid', value: ' ' } });
	wrapper21.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper21.state().errors['fid']).toBe('Select id');
});

it('validates inputs of faculty', () => {
	var wrapper22 = shallow(<Facultytimetable />);
	wrapper22.find('[name="fid"]').at(0).simulate('change', { target: { name: 'fid', value: ' ' } });

	wrapper23.find('[name="fid"]').at(0).simulate('change', { target: { name: 'fid', value: '401' } });
	wrapper24.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper24.state().errors['fid']).toBe('');
});

it('validates inputs of faculty time table-sem', () => {
	var wrapper25 = shallow(<Facultytimetable />);
	wrapper25.find('[name="sem"]').at(0).simulate('change', { target: { name: 'sem', value: ' ' } });
	wrapper25.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper25.state().errors['sem']).toBe('Select sem');
});
it('validates inputs of faculty time table-sem', () => {
	var wrapper26 = shallow(<Facultytimetable />);

	wrapper26.find('[name="sem"]').at(0).simulate('change', { target: { name: 'sem', value: '2' } });
	wrapper26.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper26.state().errors['sem']).toBe('');
});

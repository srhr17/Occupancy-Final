import React from 'react';

import { shallow, configure } from 'enzyme';
//import Studenttimetable from './Studenttimetable';
import Studentfree from '../studentfree';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
it('validates inputs of student free slots-section', () => {
	var wrapper9 = shallow(<Studentfree />);
	wrapper9.find('[name="section"]').at(0).simulate('change', { target: { name: 'section', value: ' ' } });
	wrapper9.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper9.state().errors['section']).toBe('Select section');
});
configure({ adapter: new Adapter() });
it('validates inputs of student free slots-section', () => {
	var wrapper10 = shallow(<Studentfree />);

	wrapper10.find('[name="section"]').at(0).simulate('change', { target: { name: 'section', value: 'E' } });
	wrapper10.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper10.state().errors['section']).toBe('');
});

it('validates inputs of student free slots-sem', () => {
	var wrapper11 = shallow(<Studentfree />);
	wrapper11.find('[name="sem"]').at(0).simulate('change', { target: { name: 'sem', value: ' ' } });
	wrapper11.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper11.state().errors['sem']).toBe('Select sem');
});
configure({ adapter: new Adapter() });
it('validates inputs of student free slots-sem', () => {
	var wrapper12 = shallow(<Studentfree />);

	wrapper12.find('[name="sem"]').at(0).simulate('change', { target: { name: 'sem', value: '2' } });
	wrapper12.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper12.state().errors['sem']).toBe('');
});

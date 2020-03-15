import React from 'react';

import { shallow, mount, configure } from 'enzyme';
//import Studenttimetable from './Studenttimetable';
import Cancelclass from '../components/cancelclass.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

configure({ adapter: new Adapter() });
it('validates inputs of student faculty', () => {
	var wrapper27 = shallow(<Cancelclass />);
	wrapper27.find('[name="class"]').at(0).simulate('change', { target: { name: 'class', value: ' ' } });
	wrapper27.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)

	expect(wrapper27.state().errors['class']).toBe('Select class');
});
it('validates inputs of student faculty', () => {
	var wrapper28 = shallow(<Cancelclass />);
	wrapper28.find('[name="sem"]').at(0).simulate('change', { target: { name: 'sem', value: ' ' } });
	wrapper28.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)

	expect(wrapper28.state().errors['sem']).toBe('Select sem');
});
it('validates inputs of student faculty', () => {
	var wrapper29 = shallow(<Cancelclass />);
	wrapper29.find('[name="day"]').at(0).simulate('change', { target: { name: 'day', value: ' ' } });
	wrapper29.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)

	expect(wrapper29.state().errors['day']).toBe('Select day');
});
it('validates inputs of student faculty', () => {
	var wrapper30 = shallow(<Cancelclass />);
	wrapper30.find('[name="time"]').at(0).simulate('change', { target: { name: 'time', value: ' ' } });
	wrapper30.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)

	expect(wrapper30.state().errors['time']).toBe('Select time');
});

import React from 'react';

import { shallow, configure } from 'enzyme';
//import Studenttimetable from './Studenttimetable';
import Studentroomwise from '../studentroomwise';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
it('validates inputs of student roomwise-day', () => {
	var wrapper5 = shallow(<Studentroomwise />);
	wrapper5.find('[name="day"]').at(0).simulate('change', { target: { name: 'day', value: ' ' } });
	wrapper5.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)

	expect(wrapper5.state().errors['day']).toBe('Select day');
});
it('validates inputs of student roomwise-day', () => {
	var wrapper6 = shallow(<Studentroomwise />);

	wrapper6.find('[name="day"]').at(0).simulate('change', { target: { name: 'day', value: 'THURSDAY' } });
	wrapper6.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper6.state().errors['day']).toBe('');
});
it('validates inputs of student roomwise-room', () => {
	var wrapper7 = shallow(<Studentroomwise />);
	wrapper7.find('[name="room"]').at(0).simulate('change', { target: { name: 'room', value: ' ' } });
	wrapper7.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)

	expect(wrapper7.state().errors['room']).toBe('Select room');
});
it('validates inputs of student roomwise-room', () => {
	var wrapper8 = shallow(<Studentroomwise />);

	wrapper8.find('[name="room"]').at(0).simulate('change', { target: { name: 'room', value: 'A303' } });
	wrapper8.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper8.state().errors['room']).toBe('');
});

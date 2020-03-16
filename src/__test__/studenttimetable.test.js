import React from 'react';

import { shallow, configure } from 'enzyme';
import Studenttimetable from '../Studenttimetable.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
it('validates inputs of student time table-sem', () => {
	var wrapper1 = shallow(<Studenttimetable />);
	wrapper1.find('[name="sem"]').at(0).simulate('change', { target: { name: 'sem', value: ' ' } });
	wrapper1.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper1.state().errors['sem']).toBe('Select sem');
});
it('validates inputs of student time table-sem', () => {
	var wrapper2 = shallow(<Studenttimetable />);

	wrapper2.find('[name="sem"]').at(0).simulate('change', { target: { name: 'sem', value: '2' } });
	wrapper2.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1st.js

	// expect(data).toBe(1)
	expect(wrapper2.state().errors['sem']).toBe('');
});
it('validates inputs of student time table-section', () => {
	var wrapper3 = shallow(<Studenttimetable />);
	wrapper3.find('[name="section"]').at(0).simulate('change', { target: { name: 'section', value: ' ' } });
	wrapper3.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper3.state().errors['section']).toBe('Select section');
});
it('validates inputs of student time table-section', () => {
	var wrapper4 = shallow(<Studenttimetable />);

	wrapper4.find('[name="section"]').at(0).simulate('change', { target: { name: 'section', value: 'E' } });
	wrapper4.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper4.state().errors['section']).toBe('');
});

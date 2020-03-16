import React from 'react';

import { shallow, mount, configure } from 'enzyme';
//import Studenttimetable from './Studenttimetable';
import Studentfacu from '../studentfac.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

configure({ adapter: new Adapter() });
it('validates inputs of student faculty', () => {
	var wrapper13 = shallow(<Studentfacu />);
	wrapper13.find('[name="fid"]').at(0).simulate('change', { target: { name: 'fid', value: ' ' } });
	wrapper13.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)

	expect(wrapper13.state().errors['fid']).toBe('select name');
});
it('validates inputs of student faculty', () => {
	var wrapper14 = shallow(<Studentfacu />);

	wrapper14.find('[name="fid"]').at(0).simulate('change', { target: { name: 'fid', value: '401' } });
	wrapper14.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper14.state().errors['fid']).toBe('');
});

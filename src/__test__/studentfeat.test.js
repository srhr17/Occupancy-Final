import React from 'react';

import {shallow, mount , configure} from 'enzyme'
//import Studenttimetable from './Studenttimetable';
import Studentfeat from '../studentfeat';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



configure({ adapter: new Adapter() });
it('validates inputs of student faculty',()=>{
    var wrapper15 = shallow(<Studentfeat/>)
    wrapper15.find('[name="proj"]').at(0).simulate('change',{target : {name: 'proj' , value: ' '}})
    wrapper15.find('[data-testid="submitbutton"]').at(0).simulate('click')
    // var data=1
    // expect(data).toBe(1)
    
    expect(wrapper15.state().errors["proj"]).toBe('select yes or no')


})
it('validates inputs of student faculty',()=>{
    var wrapper16 = shallow(<Studentfeat/>)
    wrapper16.find('[name="ac"]').at(0).simulate('change',{target : {name: 'ac' , value: ' '}})
    wrapper16.find('[data-testid="submitbutton"]').at(0).simulate('click')
    // var data=1
    // expect(data).toBe(1)
    
    expect(wrapper16.state().errors["ac"]).toBe('select yes or no')


})
it('validates inputs of student faculty',()=>{
    var wrapper17 = shallow(<Studentfeat/>)
    wrapper17.find('[name="socket"]').at(0).simulate('change',{target : {name: 'socket' , value: ' '}})
    wrapper17.find('[data-testid="submitbutton"]').at(0).simulate('click')
    // var data=1
    // expect(data).toBe(1)
    
    expect(wrapper17.state().errors["socket"]).toBe('select yes or no')


})
it('validates inputs of student faculty',()=>{
    var wrapper18 = shallow(<Studentfeat/>)
    wrapper18.find('[name="sb"]').at(0).simulate('change',{target : {name: 'sb' , value: ' '}})
    wrapper18.find('[data-testid="submitbutton"]').at(0).simulate('click')
    // var data=1
    // expect(data).toBe(1)
    
    expect(wrapper18.state().errors["sb"]).toBe('select yes or no')


})
it('validates inputs of student faculty',()=>{
    var wrapper19 = shallow(<Studentfeat/>)
    wrapper19.find('[name="mb"]').at(0).simulate('change',{target : {name: 'mb' , value: ' '}})
    wrapper19.find('[data-testid="submitbutton"]').at(0).simulate('click')
    // var data=1
    // expect(data).toBe(1)
    
    expect(wrapper19.state().errors["mb"]).toBe('select yes or no')


})
it('validates inputs of student faculty',()=>{
    var wrapper20 = shallow(<Studentfeat/>)
 

    wrapper20.find('[name="mic"]').at(0).simulate('change',{target : {name: 'mic' , value: ' '}})
    wrapper20.find('[data-testid="submitbutton"]').at(0).simulate('click')
    // var data=1
    // expect(data).toBe(1)
    expect(wrapper20.state().errors["mic"]).toBe('select yes or no')

})


import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import "jest-enzyme";
import "jest-environment-enzyme";
import DotEnv from 'dotenv';

DotEnv.config({path: '.env.test' });
// require('dotenv').config({ path: '.env.test' });

Enzyme.configure({
  adapter: new Adapter()
});
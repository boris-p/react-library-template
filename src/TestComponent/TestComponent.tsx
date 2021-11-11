import React from 'react';

import { TestComponentProps } from './types';

import './styles.scss';

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>made and used with love</h2>
  </div>
);

export default TestComponent;

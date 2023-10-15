import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Checkbox' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoIndeterminate = {
  name: '⭐ Demo: indeterminate',
  render: renderDemo(demos.indeterminate),
};

export const DemoStates = {
  name: '⭐ Demo: states',
  render: renderDemo(demos.states),
};

export const DemoIcon = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoGroupConfigurator = {
  name: '⭐ Demo: groupConfigurator',
  render: renderDemo(demos.groupConfigurator),
};

export const DemoAnchor = {
  name: '⭐ Demo: anchor',
  render: renderDemo(demos.anchor),
};

export const DemoCard = {
  name: '⭐ Demo: card',
  render: renderDemo(demos.card),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoCustomize = {
  name: '⭐ Demo: customize',
  render: renderDemo(demos.customize),
};

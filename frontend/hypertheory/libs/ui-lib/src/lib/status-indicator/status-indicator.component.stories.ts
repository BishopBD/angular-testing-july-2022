import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StatusIndicatorComponent as StatusIndicator} from './status-indicator.component';

export default {
  title: 'StatusIndicator',
  component: StatusIndicator,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<StatusIndicator>;

const Template: Story<StatusIndicator> = (args: StatusIndicator) => ({
  props: args,
  argTypes: {
    status: {
      options: ['success', 'error', 'optional'],
      control: {
        type: 'select'
      }
    }
  }
});


export const Primary = Template.bind({});
Primary.args = {
    status:  'success',
    statusText:  '',
}

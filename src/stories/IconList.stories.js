import IconList from './IconList.vue'

export default {
  title: 'Example/圖示列表',
  component: IconList,
};

const Template = () => ({
  components: { IconList },
  template: '<icon-list/>'
});

export const Default = Template.bind({
  component: 'IconList'
});

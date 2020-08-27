import Button from './stories/Button';
import Header from "./stories/Header";
import Footer from "./stories/Footer";
import Page from "./stories/Page";

const Components = [Button, Header, Footer, Page];
const install = function (Vue) {
 Components.forEach(component => {
   Vue.component(component.name, component)
 })
}

export default {
 install
}
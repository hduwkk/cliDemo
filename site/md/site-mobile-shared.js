import Vue from 'vue';
import PackageEntry from './package-entry';
import './package-style';

import ActionSheet from 'E:/web/master/vant-contrib-vant-2.x/vant/src/action-sheet/demo/index.vue';
import AddressEdit from 'E:/web/master/vant-contrib-vant-2.x/vant/src/address-edit/demo/index.vue';
import AddressList from 'E:/web/master/vant-contrib-vant-2.x/vant/src/address-list/demo/index.vue';
import Area from 'E:/web/master/vant-contrib-vant-2.x/vant/src/area/demo/index.vue';
import Badge from 'E:/web/master/vant-contrib-vant-2.x/vant/src/badge/demo/index.vue';
import Button from 'E:/web/master/vant-contrib-vant-2.x/vant/src/button/demo/index.vue';
import Calendar from 'E:/web/master/vant-contrib-vant-2.x/vant/src/calendar/demo/index.vue';
import Card from 'E:/web/master/vant-contrib-vant-2.x/vant/src/card/demo/index.vue';
import Cascader from 'E:/web/master/vant-contrib-vant-2.x/vant/src/cascader/demo/index.vue';
import Cell from 'E:/web/master/vant-contrib-vant-2.x/vant/src/cell/demo/index.vue';
import Checkbox from 'E:/web/master/vant-contrib-vant-2.x/vant/src/checkbox/demo/index.vue';
import Circle from 'E:/web/master/vant-contrib-vant-2.x/vant/src/circle/demo/index.vue';
import Col from 'E:/web/master/vant-contrib-vant-2.x/vant/src/col/demo/index.vue';
import Collapse from 'E:/web/master/vant-contrib-vant-2.x/vant/src/collapse/demo/index.vue';
import ContactCard from 'E:/web/master/vant-contrib-vant-2.x/vant/src/contact-card/demo/index.vue';
import ContactEdit from 'E:/web/master/vant-contrib-vant-2.x/vant/src/contact-edit/demo/index.vue';
import ContactList from 'E:/web/master/vant-contrib-vant-2.x/vant/src/contact-list/demo/index.vue';
import CountDown from 'E:/web/master/vant-contrib-vant-2.x/vant/src/count-down/demo/index.vue';
import CouponList from 'E:/web/master/vant-contrib-vant-2.x/vant/src/coupon-list/demo/index.vue';
import DatetimePicker from 'E:/web/master/vant-contrib-vant-2.x/vant/src/datetime-picker/demo/index.vue';
import Dialog from 'E:/web/master/vant-contrib-vant-2.x/vant/src/dialog/demo/index.vue';
import Divider from 'E:/web/master/vant-contrib-vant-2.x/vant/src/divider/demo/index.vue';
import DropdownMenu from 'E:/web/master/vant-contrib-vant-2.x/vant/src/dropdown-menu/demo/index.vue';
import Empty from 'E:/web/master/vant-contrib-vant-2.x/vant/src/empty/demo/index.vue';
import Field from 'E:/web/master/vant-contrib-vant-2.x/vant/src/field/demo/index.vue';
import Form from 'E:/web/master/vant-contrib-vant-2.x/vant/src/form/demo/index.vue';
import GoodsAction from 'E:/web/master/vant-contrib-vant-2.x/vant/src/goods-action/demo/index.vue';
import Grid from 'E:/web/master/vant-contrib-vant-2.x/vant/src/grid/demo/index.vue';
import Icon from 'E:/web/master/vant-contrib-vant-2.x/vant/src/icon/demo/index.vue';
import Image from 'E:/web/master/vant-contrib-vant-2.x/vant/src/image/demo/index.vue';
import ImagePreview from 'E:/web/master/vant-contrib-vant-2.x/vant/src/image-preview/demo/index.vue';
import IndexBar from 'E:/web/master/vant-contrib-vant-2.x/vant/src/index-bar/demo/index.vue';
import Lazyload from 'E:/web/master/vant-contrib-vant-2.x/vant/src/lazyload/demo/index.vue';
import List from 'E:/web/master/vant-contrib-vant-2.x/vant/src/list/demo/index.vue';
import Loading from 'E:/web/master/vant-contrib-vant-2.x/vant/src/loading/demo/index.vue';
import NavBar from 'E:/web/master/vant-contrib-vant-2.x/vant/src/nav-bar/demo/index.vue';
import NoticeBar from 'E:/web/master/vant-contrib-vant-2.x/vant/src/notice-bar/demo/index.vue';
import Notify from 'E:/web/master/vant-contrib-vant-2.x/vant/src/notify/demo/index.vue';
import NumberKeyboard from 'E:/web/master/vant-contrib-vant-2.x/vant/src/number-keyboard/demo/index.vue';
import Overlay from 'E:/web/master/vant-contrib-vant-2.x/vant/src/overlay/demo/index.vue';
import Pagination from 'E:/web/master/vant-contrib-vant-2.x/vant/src/pagination/demo/index.vue';
import Panel from 'E:/web/master/vant-contrib-vant-2.x/vant/src/panel/demo/index.vue';
import PasswordInput from 'E:/web/master/vant-contrib-vant-2.x/vant/src/password-input/demo/index.vue';
import Picker from 'E:/web/master/vant-contrib-vant-2.x/vant/src/picker/demo/index.vue';
import Popover from 'E:/web/master/vant-contrib-vant-2.x/vant/src/popover/demo/index.vue';
import Popup from 'E:/web/master/vant-contrib-vant-2.x/vant/src/popup/demo/index.vue';
import Progress from 'E:/web/master/vant-contrib-vant-2.x/vant/src/progress/demo/index.vue';
import PullRefresh from 'E:/web/master/vant-contrib-vant-2.x/vant/src/pull-refresh/demo/index.vue';
import Radio from 'E:/web/master/vant-contrib-vant-2.x/vant/src/radio/demo/index.vue';
import Rate from 'E:/web/master/vant-contrib-vant-2.x/vant/src/rate/demo/index.vue';
import Search from 'E:/web/master/vant-contrib-vant-2.x/vant/src/search/demo/index.vue';
import ShareSheet from 'E:/web/master/vant-contrib-vant-2.x/vant/src/share-sheet/demo/index.vue';
import Sidebar from 'E:/web/master/vant-contrib-vant-2.x/vant/src/sidebar/demo/index.vue';
import Skeleton from 'E:/web/master/vant-contrib-vant-2.x/vant/src/skeleton/demo/index.vue';
import Sku from 'E:/web/master/vant-contrib-vant-2.x/vant/src/sku/demo/index.vue';
import Slider from 'E:/web/master/vant-contrib-vant-2.x/vant/src/slider/demo/index.vue';
import Stepper from 'E:/web/master/vant-contrib-vant-2.x/vant/src/stepper/demo/index.vue';
import Steps from 'E:/web/master/vant-contrib-vant-2.x/vant/src/steps/demo/index.vue';
import Sticky from 'E:/web/master/vant-contrib-vant-2.x/vant/src/sticky/demo/index.vue';
import Style from 'E:/web/master/vant-contrib-vant-2.x/vant/src/style/demo/index.vue';
import SubmitBar from 'E:/web/master/vant-contrib-vant-2.x/vant/src/submit-bar/demo/index.vue';
import Swipe from 'E:/web/master/vant-contrib-vant-2.x/vant/src/swipe/demo/index.vue';
import SwipeCell from 'E:/web/master/vant-contrib-vant-2.x/vant/src/swipe-cell/demo/index.vue';
import Switch from 'E:/web/master/vant-contrib-vant-2.x/vant/src/switch/demo/index.vue';
import SwitchCell from 'E:/web/master/vant-contrib-vant-2.x/vant/src/switch-cell/demo/index.vue';
import Tab from 'E:/web/master/vant-contrib-vant-2.x/vant/src/tab/demo/index.vue';
import Tabbar from 'E:/web/master/vant-contrib-vant-2.x/vant/src/tabbar/demo/index.vue';
import Tag from 'E:/web/master/vant-contrib-vant-2.x/vant/src/tag/demo/index.vue';
import Toast from 'E:/web/master/vant-contrib-vant-2.x/vant/src/toast/demo/index.vue';
import TreeSelect from 'E:/web/master/vant-contrib-vant-2.x/vant/src/tree-select/demo/index.vue';
import Uploader from 'E:/web/master/vant-contrib-vant-2.x/vant/src/uploader/demo/index.vue';

Vue.use(PackageEntry);

ActionSheet.name = 'demo-action-sheet';
AddressEdit.name = 'demo-address-edit';
AddressList.name = 'demo-address-list';
Area.name = 'demo-area';
Badge.name = 'demo-badge';
Button.name = 'demo-button';
Calendar.name = 'demo-calendar';
Card.name = 'demo-card';
Cascader.name = 'demo-cascader';
Cell.name = 'demo-cell';
Checkbox.name = 'demo-checkbox';
Circle.name = 'demo-circle';
Col.name = 'demo-col';
Collapse.name = 'demo-collapse';
ContactCard.name = 'demo-contact-card';
ContactEdit.name = 'demo-contact-edit';
ContactList.name = 'demo-contact-list';
CountDown.name = 'demo-count-down';
CouponList.name = 'demo-coupon-list';
DatetimePicker.name = 'demo-datetime-picker';
Dialog.name = 'demo-dialog';
Divider.name = 'demo-divider';
DropdownMenu.name = 'demo-dropdown-menu';
Empty.name = 'demo-empty';
Field.name = 'demo-field';
Form.name = 'demo-form';
GoodsAction.name = 'demo-goods-action';
Grid.name = 'demo-grid';
Icon.name = 'demo-icon';
Image.name = 'demo-image';
ImagePreview.name = 'demo-image-preview';
IndexBar.name = 'demo-index-bar';
Lazyload.name = 'demo-lazyload';
List.name = 'demo-list';
Loading.name = 'demo-loading';
NavBar.name = 'demo-nav-bar';
NoticeBar.name = 'demo-notice-bar';
Notify.name = 'demo-notify';
NumberKeyboard.name = 'demo-number-keyboard';
Overlay.name = 'demo-overlay';
Pagination.name = 'demo-pagination';
Panel.name = 'demo-panel';
PasswordInput.name = 'demo-password-input';
Picker.name = 'demo-picker';
Popover.name = 'demo-popover';
Popup.name = 'demo-popup';
Progress.name = 'demo-progress';
PullRefresh.name = 'demo-pull-refresh';
Radio.name = 'demo-radio';
Rate.name = 'demo-rate';
Search.name = 'demo-search';
ShareSheet.name = 'demo-share-sheet';
Sidebar.name = 'demo-sidebar';
Skeleton.name = 'demo-skeleton';
Sku.name = 'demo-sku';
Slider.name = 'demo-slider';
Stepper.name = 'demo-stepper';
Steps.name = 'demo-steps';
Sticky.name = 'demo-sticky';
Style.name = 'demo-style';
SubmitBar.name = 'demo-submit-bar';
Swipe.name = 'demo-swipe';
SwipeCell.name = 'demo-swipe-cell';
Switch.name = 'demo-switch';
SwitchCell.name = 'demo-switch-cell';
Tab.name = 'demo-tab';
Tabbar.name = 'demo-tabbar';
Tag.name = 'demo-tag';
Toast.name = 'demo-toast';
TreeSelect.name = 'demo-tree-select';
Uploader.name = 'demo-uploader';

export const demos = {
  ActionSheet,
  AddressEdit,
  AddressList,
  Area,
  Badge,
  Button,
  Calendar,
  Card,
  Cascader,
  Cell,
  Checkbox,
  Circle,
  Col,
  Collapse,
  ContactCard,
  ContactEdit,
  ContactList,
  CountDown,
  CouponList,
  DatetimePicker,
  Dialog,
  Divider,
  DropdownMenu,
  Empty,
  Field,
  Form,
  GoodsAction,
  Grid,
  Icon,
  Image,
  ImagePreview,
  IndexBar,
  Lazyload,
  List,
  Loading,
  NavBar,
  NoticeBar,
  Notify,
  NumberKeyboard,
  Overlay,
  Pagination,
  Panel,
  PasswordInput,
  Picker,
  Popover,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  Rate,
  Search,
  ShareSheet,
  Sidebar,
  Skeleton,
  Sku,
  Slider,
  Stepper,
  Steps,
  Sticky,
  Style,
  SubmitBar,
  Swipe,
  SwipeCell,
  Switch,
  SwitchCell,
  Tab,
  Tabbar,
  Tag,
  Toast,
  TreeSelect,
  Uploader
};
export const config = {
  "name": "vant",
  "build": {
    "skipInstall": [
      "lazyload"
    ],
    "site": {
      "publicPath": "https://b.yzcdn.cn/vant/"
    },
    "vetur": {
      "tagPrefix": "van-"
    }
  },
  "site": {
    "defaultLang": "en-US",
    "versions": [
      {
        "label": "v1",
        "link": "/vant/v1/"
      },
      {
        "label": "v3",
        "link": "/vant/v3/"
      }
    ],
    "baiduAnalytics": {
      "seed": "ad6b5732c36321f2dafed737ac2da92f"
    },
    "htmlPluginOptions": {
      "meta": {
        "docsearch:version": "v2"
      }
    },
    "locales": {
      "zh-CN": {
        "title": "Vant",
        "description": "轻量、可靠的移动端 Vue 组件库",
        "logo": "https://img.yzcdn.cn/vant/logo.png",
        "langLabel": "中文",
        "links": [
          {
            "logo": "https://b.yzcdn.cn/vant/logo/weapp.svg",
            "url": "/vant-weapp"
          },
          {
            "logo": "https://b.yzcdn.cn/vant/logo/github.svg",
            "url": "https://github.com/youzan/vant"
          }
        ],
        "searchConfig": {
          "apiKey": "90067aecdaa2c85220e2783cd305caac",
          "indexName": "vant",
          "placeholder": "搜索文档...",
          "algoliaOptions": {
            "facetFilters": [
              "version:v2"
            ]
          }
        },
        "nav": [
          {
            "title": "基础组件",
            "items": [
              {
                "path": "button",
                "title": "Button 按钮"
              },
              {
                "path": "cell",
                "title": "Cell 单元格"
              },
              {
                "path": "icon",
                "title": "Icon 图标"
              },
              {
                "path": "image",
                "title": "Image 图片"
              },
              {
                "path": "col",
                "title": "Layout 布局"
              },
              {
                "path": "popup",
                "title": "Popup 弹出层"
              },
              {
                "path": "style",
                "title": "Style 内置样式"
              },
              {
                "path": "toast",
                "title": "Toast 轻提示"
              }
            ]
          },
          {
            "title": "表单组件",
            "items": [
              {
                "path": "calendar",
                "title": "Calendar 日历"
              },
              {
                "path": "cascader",
                "title": "Cascader 级联选择"
              },
              {
                "path": "checkbox",
                "title": "Checkbox 复选框"
              },
              {
                "path": "datetime-picker",
                "title": "DatetimePicker 时间选择"
              },
              {
                "path": "field",
                "title": "Field 输入框"
              },
              {
                "path": "form",
                "title": "Form 表单"
              },
              {
                "path": "number-keyboard",
                "title": "NumberKeyboard 数字键盘"
              },
              {
                "path": "password-input",
                "title": "PasswordInput 密码输入框"
              },
              {
                "path": "picker",
                "title": "Picker 选择器"
              },
              {
                "path": "radio",
                "title": "Radio 单选框"
              },
              {
                "path": "rate",
                "title": "Rate 评分"
              },
              {
                "path": "search",
                "title": "Search 搜索"
              },
              {
                "path": "slider",
                "title": "Slider 滑块"
              },
              {
                "path": "stepper",
                "title": "Stepper 步进器"
              },
              {
                "path": "switch",
                "title": "Switch 开关"
              },
              {
                "path": "uploader",
                "title": "Uploader 文件上传"
              }
            ]
          },
          {
            "title": "反馈组件",
            "items": [
              {
                "path": "action-sheet",
                "title": "ActionSheet 动作面板"
              },
              {
                "path": "dialog",
                "title": "Dialog 弹出框"
              },
              {
                "path": "dropdown-menu",
                "title": "DropdownMenu 下拉菜单"
              },
              {
                "path": "loading",
                "title": "Loading 加载"
              },
              {
                "path": "notify",
                "title": "Notify 消息通知"
              },
              {
                "path": "overlay",
                "title": "Overlay 遮罩层"
              },
              {
                "path": "pull-refresh",
                "title": "PullRefresh 下拉刷新"
              },
              {
                "path": "share-sheet",
                "title": "ShareSheet 分享面板"
              },
              {
                "path": "swipe-cell",
                "title": "SwipeCell 滑动单元格"
              }
            ]
          },
          {
            "title": "展示组件",
            "items": [
              {
                "path": "badge",
                "title": "Badge 徽标"
              },
              {
                "path": "circle",
                "title": "Circle 环形进度条"
              },
              {
                "path": "collapse",
                "title": "Collapse 折叠面板"
              },
              {
                "path": "count-down",
                "title": "CountDown 倒计时"
              },
              {
                "path": "divider",
                "title": "Divider 分割线"
              },
              {
                "path": "empty",
                "title": "Empty 空状态"
              },
              {
                "path": "image-preview",
                "title": "ImagePreview 图片预览"
              },
              {
                "path": "lazyload",
                "title": "Lazyload 懒加载"
              },
              {
                "path": "list",
                "title": "List 列表"
              },
              {
                "path": "notice-bar",
                "title": "NoticeBar 通知栏"
              },
              {
                "path": "popover",
                "title": "Popover 气泡弹出框"
              },
              {
                "path": "progress",
                "title": "Progress 进度条"
              },
              {
                "path": "skeleton",
                "title": "Skeleton 骨架屏"
              },
              {
                "path": "steps",
                "title": "Steps 步骤条"
              },
              {
                "path": "sticky",
                "title": "Sticky 粘性布局"
              },
              {
                "path": "swipe",
                "title": "Swipe 轮播"
              },
              {
                "path": "tag",
                "title": "Tag 标签"
              }
            ]
          },
          {
            "title": "导航组件",
            "items": [
              {
                "path": "grid",
                "title": "Grid 宫格"
              },
              {
                "path": "index-bar",
                "title": "IndexBar 索引栏"
              },
              {
                "path": "nav-bar",
                "title": "NavBar 导航栏"
              },
              {
                "path": "pagination",
                "title": "Pagination 分页"
              },
              {
                "path": "sidebar",
                "title": "Sidebar 侧边导航"
              },
              {
                "path": "tab",
                "title": "Tab 标签页"
              },
              {
                "path": "tabbar",
                "title": "Tabbar 标签栏"
              },
              {
                "path": "tree-select",
                "title": "TreeSelect 分类选择"
              }
            ]
          },
          {
            "title": "业务组件",
            "items": [
              {
                "path": "address-edit",
                "title": "AddressEdit 地址编辑"
              },
              {
                "path": "address-list",
                "title": "AddressList 地址列表"
              },
              {
                "path": "area",
                "title": "Area 省市区选择"
              },
              {
                "path": "card",
                "title": "Card 商品卡片"
              },
              {
                "path": "contact-card",
                "title": "ContactCard 联系人卡片"
              },
              {
                "path": "contact-edit",
                "title": "ContactEdit 联系人编辑"
              },
              {
                "path": "contact-list",
                "title": "ContactList 联系人列表"
              },
              {
                "path": "coupon-list",
                "title": "Coupon 优惠券"
              },
              {
                "path": "goods-action",
                "title": "GoodsAction 商品导航"
              },
              {
                "path": "submit-bar",
                "title": "SubmitBar 提交订单栏"
              },
              {
                "path": "sku",
                "title": "Sku 商品规格"
              }
            ]
          },
          {
            "title": "废弃",
            "items": [
              {
                "path": "panel",
                "title": "Panel 面板"
              },
              {
                "path": "switch-cell",
                "title": "SwitchCell 开关单元格"
              }
            ]
          }
        ]
      },
      "en-US": {
        "title": "Vant",
        "description": "Mobile UI Components built on Vue",
        "logo": "https://img.yzcdn.cn/vant/logo.png",
        "langLabel": "En",
        "links": [
          {
            "logo": "https://b.yzcdn.cn/vant/logo/weapp.svg",
            "url": "/vant-weapp"
          },
          {
            "logo": "https://b.yzcdn.cn/vant/logo/github.svg",
            "url": "https://github.com/youzan/vant"
          }
        ],
        "searchConfig": {
          "apiKey": "90067aecdaa2c85220e2783cd305caac",
          "indexName": "vant",
          "placeholder": "Search...",
          "algoliaOptions": {
            "facetFilters": [
              "version:v2"
            ]
          }
        },
        "nav": [
          {
            "title": "Basic Components",
            "items": [
              {
                "path": "button",
                "title": "Button"
              },
              {
                "path": "cell",
                "title": "Cell"
              },
              {
                "path": "icon",
                "title": "Icon"
              },
              {
                "path": "image",
                "title": "Image"
              },
              {
                "path": "col",
                "title": "Layout"
              },
              {
                "path": "popup",
                "title": "Popup"
              },
              {
                "path": "style",
                "title": "Built-in style"
              },
              {
                "path": "toast",
                "title": "Toast"
              }
            ]
          },
          {
            "title": "Form Components",
            "items": [
              {
                "path": "calendar",
                "title": "Calendar"
              },
              {
                "path": "cascader",
                "title": "Cascader"
              },
              {
                "path": "checkbox",
                "title": "Checkbox"
              },
              {
                "path": "datetime-picker",
                "title": "DatetimePicker"
              },
              {
                "path": "field",
                "title": "Field"
              },
              {
                "path": "form",
                "title": "Form"
              },
              {
                "path": "number-keyboard",
                "title": "NumberKeyboard"
              },
              {
                "path": "password-input",
                "title": "PasswordInput"
              },
              {
                "path": "picker",
                "title": "Picker"
              },
              {
                "path": "radio",
                "title": "Radio"
              },
              {
                "path": "rate",
                "title": "Rate"
              },
              {
                "path": "search",
                "title": "Search"
              },
              {
                "path": "slider",
                "title": "Slider"
              },
              {
                "path": "stepper",
                "title": "Stepper"
              },
              {
                "path": "switch",
                "title": "Switch"
              },
              {
                "path": "switch-cell",
                "title": "SwitchCell"
              },
              {
                "path": "uploader",
                "title": "Uploader"
              }
            ]
          },
          {
            "title": "Action Components",
            "items": [
              {
                "path": "action-sheet",
                "title": "ActionSheet"
              },
              {
                "path": "dialog",
                "title": "Dialog"
              },
              {
                "path": "dropdown-menu",
                "title": "DropdownMenu"
              },
              {
                "path": "loading",
                "title": "Loading"
              },
              {
                "path": "notify",
                "title": "Notify"
              },
              {
                "path": "overlay",
                "title": "Overlay"
              },
              {
                "path": "pull-refresh",
                "title": "PullRefresh"
              },
              {
                "path": "share-sheet",
                "title": "ShareSheet"
              },
              {
                "path": "swipe-cell",
                "title": "SwipeCell"
              }
            ]
          },
          {
            "title": "Display Components",
            "items": [
              {
                "path": "badge",
                "title": "Badge"
              },
              {
                "path": "circle",
                "title": "Circle"
              },
              {
                "path": "collapse",
                "title": "Collapse"
              },
              {
                "path": "count-down",
                "title": "CountDown"
              },
              {
                "path": "divider",
                "title": "Divider"
              },
              {
                "path": "empty",
                "title": "Empty"
              },
              {
                "path": "image-preview",
                "title": "ImagePreview"
              },
              {
                "path": "lazyload",
                "title": "Lazyload"
              },
              {
                "path": "list",
                "title": "List"
              },
              {
                "path": "notice-bar",
                "title": "NoticeBar"
              },
              {
                "path": "popover",
                "title": "Popover"
              },
              {
                "path": "progress",
                "title": "Progress"
              },
              {
                "path": "skeleton",
                "title": "Skeleton"
              },
              {
                "path": "steps",
                "title": "Steps"
              },
              {
                "path": "sticky",
                "title": "Sticky"
              },
              {
                "path": "swipe",
                "title": "Swipe"
              },
              {
                "path": "tag",
                "title": "Tag"
              }
            ]
          },
          {
            "title": "Navigation Components",
            "items": [
              {
                "path": "grid",
                "title": "Grid"
              },
              {
                "path": "index-bar",
                "title": "IndexBar"
              },
              {
                "path": "nav-bar",
                "title": "NavBar"
              },
              {
                "path": "pagination",
                "title": "Pagination"
              },
              {
                "path": "sidebar",
                "title": "Sidebar"
              },
              {
                "path": "tab",
                "title": "Tab"
              },
              {
                "path": "tabbar",
                "title": "Tabbar"
              },
              {
                "path": "tree-select",
                "title": "TreeSelect"
              }
            ]
          },
          {
            "title": "Business Components",
            "items": [
              {
                "path": "address-edit",
                "title": "AddressEdit"
              },
              {
                "path": "address-list",
                "title": "AddressList"
              },
              {
                "path": "area",
                "title": "Area"
              },
              {
                "path": "card",
                "title": "Card"
              },
              {
                "path": "contact-card",
                "title": "ContactCard"
              },
              {
                "path": "contact-edit",
                "title": "ContactEdit"
              },
              {
                "path": "contact-list",
                "title": "ContactList"
              },
              {
                "path": "coupon-list",
                "title": "Coupon"
              },
              {
                "path": "goods-action",
                "title": "GoodsAction"
              },
              {
                "path": "submit-bar",
                "title": "SubmitBar"
              },
              {
                "path": "sku",
                "title": "Sku"
              }
            ]
          },
          {
            "title": "Deprecated",
            "items": [
              {
                "path": "panel",
                "title": "Panel"
              },
              {
                "path": "switch-cell",
                "title": "SwitchCell"
              }
            ]
          }
        ]
      }
    }
  }
}

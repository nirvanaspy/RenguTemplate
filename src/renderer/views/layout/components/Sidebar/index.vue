<template>
  <scroll-bar>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
    <!--<ul class="nav navbar-nav side-nav" id="sidebar">

      <li class="collapsed-content">
        <ul>
          <li class="search">&lt;!&ndash; Collapsed search pasting here at 768px &ndash;&gt;</li>
        </ul>
      </li>

      <li class="navigation" id="navigation">
        <a href="#" class="sidebar-toggle" data-toggle="#navigation">Navigation <i class="fa fa-angle-up"></i></a>

        <ul class="menu">

          <li class="active">
            <a href="index.html">
              <i class="fa fa-tachometer"></i> Dashboard
              <span class="badge badge-red">1</span>
            </a>
          </li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-list"></i> Forms <b class="fa fa-plus dropdown-plus"></b>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="form-elements.html">
                  <i class="fa fa-caret-right"></i> Common Elements
                </a>
              </li>
              <li>
                <a href="validation-elements.html">
                  <i class="fa fa-caret-right"></i> Validation
                </a>
              </li>
              <li>
                <a href="form-wizard.html">
                  <i class="fa fa-caret-right"></i> Form Wizard
                </a>
              </li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-pencil"></i> Interface <b class="fa fa-plus dropdown-plus"></b>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="ui-elements.html">
                  <i class="fa fa-caret-right"></i> UI Elements
                </a>
              </li>
              <li>
                <a href="typography.html">
                  <i class="fa fa-caret-right"></i> Typography
                </a>
              </li>
              <li>
                <a href="tiles.html">
                  <i class="fa fa-caret-right"></i> Tiles
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="buttons.html">
              <i class="fa fa-tint"></i> Buttons & Icons
            </a>
          </li>
          <li>
            <a href="grid.html">
              <i class="fa fa-th"></i> Grid Layout
            </a>
          </li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-th-large"></i> Tables <b class="fa fa-plus dropdown-plus"></b>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="tables.html">
                  <i class="fa fa-caret-right"></i> Bootstrap Tables
                </a>
              </li>
              <li>
                <a href="datatables.html">
                  <i class="fa fa-caret-right"></i> DataTables
                </a>
              </li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-desktop"></i> Example Pages <b class="fa fa-plus dropdown-plus"></b>
              <span class="label label-greensea">mails</span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="login.html">
                  <i class="fa fa-caret-right"></i> Login Page
                </a>
              </li>
              <li>
                <a href="calendar.html">
                  <i class="fa fa-caret-right"></i> Calendar
                </a>
              </li>
              <li>
                <a href="page404.html">
                  <i class="fa fa-caret-right"></i> Page 404
                </a>
              </li>
              <li>
                <a href="page500.html">
                  <i class="fa fa-caret-right"></i> Page 500
                </a>
              </li>
              <li>
                <a href="page-offline.html">
                  <i class="fa fa-caret-right"></i> Page Offline
                </a>
              </li>
              <li>
                <a href="gallery.html">
                  <i class="fa fa-caret-right"></i> Gallery
                </a>
              </li>
              <li>
                <a href="timeline.html">
                  <i class="fa fa-caret-right"></i> Timeline
                </a>
              </li>
              <li>
                <a href="mail.html">
                  <i class="fa fa-caret-right"></i> Vertical Mail
                  <span class="badge badge-red">5</span>
                </a>
              </li>
              <li>
                <a href="mail-horizontal.html">
                  <i class="fa fa-caret-right"></i> Horizontal Mail
                  <span class="label label-greensea">mails</span>
                </a>
              </li>
              <li>
                <a href="vector-maps.html">
                  <i class="fa fa-caret-right"></i> Vector Maps
                </a>
              </li>
              <li>
                <a href="google-maps.html">
                  <i class="fa fa-caret-right"></i> Google Maps
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="widgets.html">
              <i class="fa fa-play-circle"></i> Widgets
            </a>
          </li>

          <li>
            <a href="charts.html">
              <i class="fa fa-bar-chart-o"></i> Charts & Graphs
            </a>
          </li>


        </ul>

      </li>

      <li class="summary" id="order-summary">
        <a href="#" class="sidebar-toggle underline" data-toggle="#order-summary">Orders Summary <i class="fa fa-angle-up"></i></a>

        <div class="media">
          <a class="pull-right" href="#">
            <span id="sales-chart"></span>
          </a>
          <div class="media-body">
            This week sales
            <h3 class="media-heading">26, 149</h3>
          </div>
        </div>

        <div class="media">
          <a class="pull-right" href="#">
            <span id="balance-chart"></span>
          </a>
          <div class="media-body">
            This week balance
            <h3 class="media-heading">318, 651</h3>
          </div>
        </div>

      </li>

      <li class="settings" id="general-settings">
        <a href="#" class="sidebar-toggle underline" data-toggle="#general-settings">General Settings <i class="fa fa-angle-up"></i></a>

        <div class="form-group">
          <label class="col-xs-8 control-label">Switch ON</label>
          <div class="col-xs-4 control-label">
            <div class="onoffswitch greensea">
              <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch-on" checked="">
              <label class="onoffswitch-label" for="switch-on">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-xs-8 control-label">Switch OFF</label>
          <div class="col-xs-4 control-label">
            <div class="onoffswitch greensea">
              <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch-off">
              <label class="onoffswitch-label" for="switch-off">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
        </div>

      </li>


    </ul>-->
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

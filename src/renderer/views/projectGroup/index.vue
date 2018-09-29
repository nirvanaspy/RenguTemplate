<template>
    <div class="app-container">
        <div id="content" class="col-md-12">
            <!-- page header -->
            <div class="pageheader">
                <h2><i class="fa fa-puzzle-piece" style="line-height: 48px;padding-left: 5px;"></i> 项目组管理<span></span></h2>
                <!--<div class="breadcrumbs">
                    <ol class="breadcrumb">
                        <li>You are here</li>
                        <li><a href="index.html">Minimal</a></li>
                        <li><a href="tables.html">Tables</a></li>
                        <li class="active">Bootstrap Tables</li>
                    </ol>
                </div>-->
            </div>
            <!-- /page header -->
            <!-- content main container -->
            <div class="main">
                <div class="row">
                    <div class="col-md-12">
                        <!-- tile -->
                        <section class="tile color transparent-black">
                            <!-- tile header -->
                            <!--<div class="tile-header">
                                <h1><strong>项目组</strong></h1>
                                <div class="controls">
                                    <a href="#" class="refresh"><i class="fa fa-refresh"></i></a>
                                    <a href="#" class="remove"><i class="fa fa-times"></i></a>
                                </div>
                            </div>-->
                            <!-- /tile header -->

                            <!-- tile body -->
                            <div class="tile-body nopadding">
                                <el-table
                                        :data="tableData"
                                        style="width: 100%">
                                    <el-table-column
                                            prop="date"
                                            label="日期"
                                            width="180">
                                    </el-table-column>
                                    <el-table-column
                                            prop="name"
                                            label="姓名"
                                            width="180">
                                    </el-table-column>
                                    <el-table-column
                                            prop="address"
                                            label="地址">
                                    </el-table-column>
                                </el-table>

                            </div>
                            <!-- /tile body -->
                        </section>

                        <section class="tile color redbrown">



                            <!-- tile header -->
                            <div class="tile-header">
                                <h1><strong>Condensed</strong> Table</h1>
                                <div class="controls">
                                    <a href="#" class="refresh"><i class="fa fa-refresh"></i></a>
                                    <a href="#" class="remove"><i class="fa fa-times"></i></a>
                                </div>
                            </div>
                            <!-- /tile header -->

                            <!-- tile body -->
                            <div class="tile-body nopadding">

                                <table class="table table-condensed">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                            <!-- /tile body -->




                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /*eslint-disable*/
    import { getTeam, deleteTeam, updateTeam, addMember, removeMember } from "../../api/team";

    export default {
        name: 'projectGroup',
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                teamList: []
            }
        },
        create() {
        },
        methods: {
            getTeams() {
                getTeam()
            }
        }
    }
</script>

<style scoped>
</style>

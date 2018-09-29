<template>
    <div>
        <div id="wrap">


            <!-- Make page fluid -->
            <div class="row">


                <!-- Page content -->
                <div id="content" class="col-md-12">

                    <!-- page header -->
                    <div class="pageheader">


                        <h2><i class="fa fa-lightbulb-o" style="line-height: 48px;padding-left: 0;"></i> 用户管理
                        </h2>


                        <div class="breadcrumbs">
                            <ol class="breadcrumb">
                                <li>您当前所在位置</li>
                                <li><a href="index.html">仁谷</a></li>
                                <li class="active">用户管理</li>
                            </ol>
                        </div>

                    </div>
                    <!-- /page header -->

                    <!-- content main container -->
                    <div class="main">

                        <!-- row -->
                        <div class="row">
                            <!-- col 12 -->
                            <div class="col-md-12">
                                <!-- tile -->
                                <section class="tile transparent">


                                    <!-- tile header -->
                                    <div class="tile-header transparent">
                                        <h1><strong>Inline Editing</strong> Datatable</h1>
                                        <div class="controls">
                                            <a href="#" class="refresh"><i class="fa fa-refresh"></i></a>
                                            <a href="#" class="remove"><i class="fa fa-times"></i></a>
                                        </div>
                                    </div>
                                    <!-- /tile header -->
                                    <!-- 搜索添加 -->
                                    <div class="filter-container">
                                        <el-input @keyup.enter.native="handleFilter" style="width:200px; color: rgba(255, 255, 255, 0.6) !important;border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;" class="filter-item" placeholder="姓名" v-model="searchQuery">
                                        </el-input>
                                        <el-button class="filter-item btn-green btn-xs" style="float:right;" type="primary" icon="el-icon-edit">新增用户</el-button>
                                    </div>

                                    <!--<div id="inlineEditDataTable_wrapper" class="dataTables_wrapper form-inline" role="grid">
                                        <div class="row">
                                            <div>
                                                <div class="dataTables_filter" id="inlineEditDataTable_filter">
                                                    <label>
                                                        <input type="text" aria-controls="inlineEditDataTable" placeholder="搜索">
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row pull-right">
                                            <a href="#" id="addRow" class="btn btn-green btn-xs add-row">新增用户</a>
                                        </div>
                                    </div>-->

                                    <!-- tile body -->
                                    <!--<div class="tile-body color transparent-black rounded-corners">

                                        <div class="table-responsive">
                                            <table class="table table-datatable table-custom" id="inlineEditDataTable">
                                                <thead>
                                                <tr>
                                                    <th class="sort-amount">工号</th>
                                                    <th class="sort-alpha">姓名</th>
                                                    <th class="sort-amount">性别</th>
                                                    <th class="sort-numeric">联系方式</th>
                                                    <th>部门</th>
                                                    <th class="no-sort">操作</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr class="odd gradeX">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 4.0</td>
                                                    <td>Win 95+</td>
                                                    <td class="text-center"> 4</td>
                                                    <td class="text-center">X</td>
                                                    <td class="actions text-center">
                                                        <a class="edit" href="#" @click="editUser">Edit</a>
                                                        <a class="delete" href="#">Delete</a>
                                                    </td>
                                                </tr>
                                                <tr class="even gradeC">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 5.0</td>
                                                    <td>Win 95+</td>
                                                    <td class="text-center">5</td>
                                                    <td class="text-center">C</td>
                                                    <td class="actions text-center"><a class="edit" href="#">Edit</a><a
                                                            class="delete" href="#">Delete</a></td>
                                                </tr>
                                                <tr class="odd gradeA">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 5.5</td>
                                                    <td>Win 95+</td>
                                                    <td class="text-center">5.5</td>
                                                    <td class="text-center">A</td>
                                                    <td class="actions text-center"><a class="edit" href="#">Edit</a><a
                                                            class="delete" href="#">Delete</a></td>
                                                </tr>
                                                <tr class="even gradeA">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 6</td>
                                                    <td>Win 98+</td>
                                                    <td class="text-center">6</td>
                                                    <td class="text-center">A</td>
                                                    <td class="actions text-center"><a class="edit" href="#">Edit</a><a
                                                            class="delete" href="#">Delete</a></td>
                                                </tr>
                                                <tr class="odd gradeA">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 7</td>
                                                    <td>Win XP SP2+</td>
                                                    <td class="text-center">7</td>
                                                    <td class="text-center">A</td>
                                                    <td class="actions text-center"><a class="edit" href="#">Edit</a><a
                                                            class="delete" href="#">Delete</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>-->
                                    <el-table :key='tableKey' :data="listA" v-loading="listLoading" element-loading-text="给我一点时间" border fit
                                              highlight-current-row
                                              style="width: 100%">

                                        <el-table-column label="用户名" min-width="100">
                                            <template slot-scope="scope">
                                                <span>{{scope.row.username}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column width="150px" label="姓名">
                                            <template slot-scope="scope">
                                                <span>{{scope.row.name}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column min-width="100px" label="联系方式">
                                            <template slot-scope="scope">
                                                <span>{{scope.row.telephoneNumber}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column min-width="100px" label="邮箱">
                                            <template slot-scope="scope">
                                                <span>{{scope.row.emailAddress}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column label="操作" width="140" class-name="small-padding fixed-width" align="center">
                                            <template slot-scope="scope">
                                                <el-dropdown trigger="click">
                                                    <span class="el-dropdown-link">
                                                      <el-button type="success" plain>更多操作</el-button>
                                                    </span>
                                                    <el-dropdown-menu slot="dropdown">
                                                        <el-dropdown-item>
                                                            <span style="display:inline-block;padding:0 10px;" @click="handleUpdate(scope.row)">编辑</span>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item divided>
                                                            <span style="display:inline-block;padding:0 10px;" @click="handleDelete(scope.row)">删除</span>
                                                        </el-dropdown-item>
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </template>
                                        </el-table-column>

                                    </el-table>
                                    <!-- /tile body -->
                                    <el-pagination
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :current-page="currentPage"
                                            :page-sizes="[10,20,30,50]"
                                            :page-size="listQuery.size"
                                            layout="total, sizes, prev, pager, next, jumper"
                                            :total="this.total"
                                            background
                                            style="text-align: center;margin-top:20px"
                                    >
                                    </el-pagination>

                                </section>
                                <!-- /tile -->

                            </div>
                            <!-- /col 12 -->

                        </div>
                        <!-- /row -->


                    </div>
                    <!-- /content container -->


                </div>
                <!-- Page content end -->

            </div>
            <!-- Make page fluid-->


        </div>
    </div>
</template>

<script>
    import { UserList } from '@/api/user'
    /*eslint-disable*/
    export default {
        name: 'login',
        data() {
            return {
                tableKey: 0,
                list: [],
                listLoading: true,
                listQuery: {
                    page: 0,
                    size:10,
                    limit: 5,
                    tagname: ''
                },
                total: null,
                pagesize:10,//每页的数据条数
                currentPage:1,//默认开始页面
                searchQuery: ''
            }
        },
        created() {
            this.getList()
            /*let oTable02 = document.getElementById('inlineEditDataTable').dataTable({
                "sDom":
                "R<'row'<'col-md-6'l><'col-md-6'f>r>" +
                "t" +
                "<'row'<'col-md-4 sm-center'i><'col-md-4'><'col-md-4 text-right sm-center'p>>",
                "oLanguage": {
                    "sSearch": ""
                },
                "aoColumnDefs": [
                    {'bSortable': false, 'aTargets': ["no-sort"]}
                ],
                "fnInitComplete": function (oSettings, json) {
                    $('.dataTables_filter input').attr("placeholder", "搜索");
                }
            });*/

            // Append add row button to table
            /*let addRowLink = '<a href="#" id="addRow" class="btn btn-green btn-xs add-row">新增用户</a>'
            $('#inlineEditDataTable_wrapper').append(addRowLink);

            let nEditing = null;*/

            // Add row initialize
            /*document.getElementById('addRow').click(function (e) {
                e.preventDefault();

                // Only allow a new row when not currently editing
                if (nEditing !== null) {
                    return;
                }

                let aiNew = oTable02.fnAddData(['', '', '', '', '', '<a class="edit" href="">编辑</a>', '<a class="delete" href="">删除</a>']);
                let nRow = oTable02.fnGetNodes(aiNew[0]);
                editRow(oTable02, nRow);
                nEditing = nRow;

                $(nRow).find('td:last-child').addClass('actions text-center');
            });*/
        },
        methods: {
            getList() {
                this.listLoading = true
                UserList(this.listQuery).then(response => {
                    this.list = response.data.data.content
                    this.total = response.data.data.totalElements
                    this.listLoading = false
                    this.listLength = response.data.data.length
                })
            },
            handleFilter() {
                this.listQuery.page = 1
                this.getList()
            },
            handleSizeChange(val) {
                this.listQuery.size = val
                this.pagesize = val
                this.getList()
            },
            handleCurrentChange(val) {
                this.listQuery.page = val - 1
                this.currentPage = val
                this.getList()
            },
            restoreRow(oTable02, nRow) {
                let aData = oTable02.fnGetData(nRow);
                let jqTds = $('>td', nRow);

                for (let i = 0, iLen = jqTds.length; i < iLen; i++) {
                    oTable02.fnUpdate(aData[i], nRow, i, false);
                }

                oTable02.fnDraw();
            },

            editRow(oTable02, nRow) {
                let aData = oTable02.fnGetData(nRow);
                let jqTds = $('>td', nRow);
                jqTds[0].innerHTML = '<input type="text" value="' + aData[0] + '">';
                jqTds[1].innerHTML = '<input type="text" value="' + aData[1] + '">';
                jqTds[2].innerHTML = '<input type="text" value="' + aData[2] + '">';
                jqTds[3].innerHTML = '<input type="text" value="' + aData[3] + '">';
                jqTds[4].innerHTML = '<input type="text" value="' + aData[4] + '">';
                jqTds[5].innerHTML = '<a class="edit save" href="#">Save</a><a class="delete" href="#">Delete</a>';
            },

            saveRow(oTable02, nRow) {
                let jqInputs = $('input', nRow);
                oTable02.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable02.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable02.fnUpdate(jqInputs[2].value, nRow, 2, false);
                oTable02.fnUpdate(jqInputs[3].value, nRow, 3, false);
                oTable02.fnUpdate(jqInputs[4].value, nRow, 4, false);
                oTable02.fnUpdate('<a class="edit" href="#">Edit</a><a class="delete" href="#">Delete</a>', nRow, 5, false);
                oTable02.fnDraw();
            },

            editUser() {

            }
        },
        computed: {
            listA: function () {
                let self = this;
                return self.list.filter(function (item) {
                    return item.username.toLowerCase().indexOf(self.searchQuery.toLowerCase()) !== -1;
                })
            }
        },
        mounted() {
            //$.fn.dataTableExt.oStdClasses.sPaging = 'dataTables_paginate paging_bootstrap paging_custom';
        }
    }
</script>

<style scoped>

</style>
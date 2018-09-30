<template>
    <div class="app-container">
        <div id="content" class="col-md-12">
            <!-- page header -->
            <div class="pageheader">
                <h2><i class="fa fa-puzzle-piece" style="line-height: 48px;padding-left: 5px;"></i> 项目组管理<span></span>
                </h2>
                <div style="float: right;">
                    <!--<button type="button" class="btn btn-greensea">添加项目组</button>-->
                    <el-button class="filter-item"
                               style="margin-left: 10px;float:right;"
                               type="success" icon="el-icon-edit"
                               @click="handleCreateTeam"
                    >
                        添加
                    </el-button>
                </div>
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
                                <el-table :data="teamList" style="width: 100%" fit @expand-change="expandRow">
                                    <el-table-column align="left" width="40" type="expand">
                                        <template slot-scope="props">
                                            <el-table
                                                    stripe highlight-current-row
                                                    :data="props.row.members"
                                                    style="padding: 0 0"
                                                    :show-header="false"
                                            >
                                                <el-table-column width="40">
                                                    <template slot-scope="scope">
                                                        <span><svg-icon icon-class="组件"></svg-icon></span>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column label="组件名" align="left" width="160">
                                                    <template slot-scope="scope">
                                                        <span class="link-type"></span>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column label="路径" align="left">
                                                    <template slot-scope="scope">
                                                        <span></span>
                                                    </template>
                                                </el-table-column>
                                            </el-table>
                                        </template>
                                    </el-table-column>
                                    <el-table-column align="left" label="组名" min-width="200">
                                        <template slot-scope="scope">
                                            <span class="link-type"
                                                  @click="handleUpdate(scope.row)">{{scope.row.name}}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column align="left" label="描述" min-width="200">
                                        <template slot-scope="scope">
                                            <span>{{scope.row.description}}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column align="center" label="操作" width="200">
                                        <template slot-scope="scope">
                                            <el-dropdown trigger="click">
                                                <span class="el-dropdown-link">
                                                  <el-button type="info" plain size="small">更多操作</el-button>
                                                </span>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item>
                                                        <span style="display:inline-block;padding:0 10px;"
                                                              @click="handleUpdate(scope.row)">编辑</span>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item divided>
                                                        <span style="display:inline-block;padding:0 10px;"
                                                              @click="handleDelete(scope.row)">删除</span>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item divided>
                                                        <span style="display:inline-block;padding:0 10px;"
                                                              @click="handleAddMember(scope.row)">添加组员</span>
                                                    </el-dropdown-item>

                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </template>
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
        <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="40%">
            <el-form ref="dataForm" :model="teamTemp" label-width="100px" style='width: 80%; margin:0 auto;'>
                <el-form-item label="组名" prop="name">
                    <el-input v-model="teamTemp.name"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="description">
                    <el-input v-model="teamTemp.description"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false" style="margin-right: 10px">取消</el-button>
                <el-button v-if="dialogStatus=='create'" type="primary" @click="createTeam">确定</el-button>
                <el-button v-else type="primary" @click="updateTeamInfo">确定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="添加项目组成员" :visible.sync="addMemberVisible" width="40%" class="selectMemberDialog" v-loading="membersLoading">
            <!--表格勾选模式-->
            <!--<el-table :data="allUserList" style="width: 100%"  @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column align="left" label="用户名" min-width="200">
                    <template slot-scope="scope">
                        <span class="link-type">{{scope.row.username}}</span>
                    </template>
                </el-table-column>
                <el-table-column align="left" label="姓名" min-width="200">
                    <template slot-scope="scope">
                        <span class="link-type">{{scope.row.name}}</span>
                    </template>
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addMemberVisible = false" style="margin-right: 10px">取消</el-button>
                <el-button type="primary" @click="addMemberToTeam">确定</el-button>
            </div>-->
            <!--穿梭框形式-->
            <el-transfer
                    style="text-align: left; display: inline-block"
                    v-model="bindedUsers"
                    :titles="['所有成员', '已选成员']"
                    :button-texts="['移出', '加入']"
                    @change="handleChange"
                    :data="allUserList">
            </el-transfer>
        </el-dialog>
    </div>
</template>

<script>
    /*eslint-disable*/
    import {
        getTeam,
        getTeamMembers,
        deleteTeam,
        saveTeam,
        updateTeam,
        addMembers,
        removeMembers,
        getTeamByOwner,
        getTeamByMember
    } from "../../api/team";
    import { UserList } from '../../api/user'

    export default {
        name: 'projectGroup',
        data() {
            return {
                dialogFormVisible: false,
                addMemberVisible: false,
                membersLoading: false,
                teamList: [],
                userId: '',
                teamTemp: {
                    id: '',
                    name: '',
                    description: ''
                },
                listQuery: {
                    page: 0,
                    size:10,
                    limit: 5,
                    tagname: ''
                },
                dialogStatus: '',
                textMap: {
                    update: '编辑项目组',
                    create: '新建项目组'
                },
                selectedTeamId: '',
                bindedUsers: [],
                allUserList: [],
                selectUserList: []
            }
        },
        created() {
            this.userId = this.$store.getters.userId
            this.getUsers()
            this.getTeams()
        },
        methods: {
            handleChange(value, direction, movedKeys) {
                console.log(value, direction, movedKeys)
                // 加入组员
                if(direction === 'right') {
                    let addIds = {userIds: movedKeys}
                    addMembers(this.selectedTeamId, addIds).then(() => {

                    })
                }
                // 移除组员
                if(direction === 'left') {
                    let removeIds = movedKeys
                    removeMembers(this.selectedTeamId, removeIds).then(() => {

                    })
                }
            },
            getUsers() {
                this.allUserList = []
                UserList(this.listQuery).then((res) => {
                    // this.allUserList = res.data.data.content
                    // this.allUserList = res.data.data.content
                    let usrList = res.data.data.content
                    usrList.forEach((item, index) => {
                        this.allUserList.push({
                            key: item.id,
                            label: item.name,
                            userId: item.id,
                            disabled: item.username === 'admin'
                        })
                    })
                    console.log(this.allUserList)
                })
            },
            getTeams() {
                getTeamByOwner(this.userId).then((res) => {
                    this.teamList = res.data.data.content
                })
            },
            resetTemp() {
                this.teamTemp = {
                    name: '',
                    description: ''
                }
            },
            handleCreateTeam() {
                this.resetTemp()
                this.dialogStatus = 'create'
                this.dialogFormVisible = true
            },
            createTeam() {
                let formData = new FormData();
                formData.append('name', this.teamTemp.name);
                formData.append('description', this.teamTemp.description);
                saveTeam(this.userId, formData).then(() => {
                    this.dialogFormVisible = false
                    this.$notify({
                        title: '成功',
                        message: '创建成功',
                        type: 'success',
                        duration: 2000
                    })
                    this.getTeams()
                }).catch(() => {
                    this.$notify({
                        title: '失败',
                        message: '项目组创建失败',
                        type: 'error',
                        duration: 2000
                    })
                })
            },
            handleUpdate(row) {
                this.teamTemp = Object.assign({}, row)
                this.dialogStatus = 'update'
                this.dialogFormVisible = true
                this.selectedTeamId = row.id
            },
            updateTeamInfo() {
                let data = {
                    'name': this.teamTemp.name,
                    'description': this.teamTemp.description
                };
                let qs = require('qs')
                let teamData = qs.stringify(data)
                updateTeam(this.selectedTeamId, teamData).then(() => {
                    this.dialogFormVisible = false
                    this.$notify({
                        title: '成功',
                        message: '项目组更新成功',
                        type: 'success',
                        duration: 2000
                    })
                    this.getTeams()
                }).catch(() =>{
                    this.$notify({
                        title: '失败',
                        message: '项目组更新失败',
                        type: 'error',
                        duration: 2000
                    })
                })
            },
            handleDelete(row) {
                let id = row.id
                this.$confirm('确认删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteTeam(id).then(() => {
                        this.$notify({
                            title: '成功',
                            message: '删除成功',
                            type: 'success',
                            duration: 2000
                        })
                        this.getTeams()
                    }).catch(() => {
                        this.$notify({
                            title: '失败',
                            message: '删除失败！',
                            type: 'error',
                            duration: 2000
                        })
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
            },
            handleAddMember(row) {
                this.selectedTeamId = row.id
                this.addMemberVisible = true
                this.membersLoading = true
                this.selectUserList = []
                // this.allUserList = []
                // this.getUsers()
                /*UserList(this.listQuery).then((res) => {
                    // this.allUserList = res.data.data.content
                    let usrList = res.data.data.content
                    usrList.forEach((item, index) => {
                        this.allUserList.push({
                            key: item.id,
                            label: item.name,
                            userId: item.id,
                            disabled: item.username === 'admin'
                        })
                    })
                    console.log(this.allUserList)
                })*/
                getTeamMembers(row.id).then((res) => {
                    this.bindedUsers = res.data.data
                    // 遍历所有组员和该项目组已绑定组员，生成穿梭框左侧可选数据
                    for(let i = 0; i < this.allUserList.length; i++) {
                        for(let j = 0; j < this.bindedUsers.length; j++) {
                            if(this.allUserList[i].userId === this.bindedUsers[j].id) {
                                this.allUserList.splice(i,1)
                            }
                        }
                    }
                    this.membersLoading = false
                })
            },
            expandRow(row, expandedRows) {
                console.log(row)
                getTeam(row.id).then(() => {})
            },
            handleSelectionChange(val) {
                console.log(val)
                this.selectUserList = []
                for(let i = 0; i < val.length; i++) {
                    this.selectUserList.push(val[i].id)
                }
                console.log(this.selectUserList)
            },
            addMemberToTeam() {
                if(this.selectUserList.length == 0) {
                    this.$message({
                        type: 'warning',
                        message: '请选择至少一位组员！'
                    })
                    return
                }
                let data = {
                    'userId': this.selectUserList[0]
                };
                console.log(data)
                let qs = require('qs')
                let userData = qs.stringify(data)
                console.log(userData)
                addMember(this.selectedTeamId, userData).then(() => {
                    this.$notify({
                        title: '成功',
                        message: '添加组员成功',
                        type: 'success',
                        duration: 2000
                    })
                    this.addMemberVisible = false
                    this.getTeams()
                })
            }
        }
    }
</script>

<style scoped>
</style>

import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './ClientsView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { fetchUsers } from "./useFetchUsers";
import Loading from "../../../../components/shared-components/Loading";
import Editor from '../editor'

export class UserList extends Component {

  state = {
    users: [],
    userProfileVisible: false,
    selectedUser: null,
    showEditor: false,
    currentUser: {},
  }

  async componentDidMount() {
    try {
      const users = await fetchUsers();
      this.setState({ users });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  deleteUser = userId => {
    this.setState({
      users: this.state.users.filter(item => item.id !== userId),
    })
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  }

  showUserProfile = userInfo => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo
    });
  };

  editUserProfile = ({name, subTitle, src, id}) => {
    const currentUser = this.state.users.find(user => user.id === id)

    this.setState({
      showEditor: true,
      currentUser,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null
    });
  }

  render() {
    const { users, userProfileVisible, selectedUser, showEditor, currentUser } = this.state;

    const tableColumns = [
      {
        title: 'User',
        dataIndex: 'name',
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus id={record.id} src={record.img} name={record.name} subTitle={record.email} onNameClick={this.editUserProfile}/>
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Role',
        dataIndex: 'role',
        sorter: {
          compare: (a, b) => a.role.length - b.role.length,
        },
      },
      {
        title: 'Last online',
        dataIndex: 'lastOnline',
        render: date => (
          <span>{moment.unix(date).format("MM/DD/YYYY")} </span>
        ),
        sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: status => (
          <Tag className ="text-capitalize" color={status === 'active'? 'cyan' : 'red'}>{status}</Tag>
        ),
        sorter: {
          compare: (a, b) => a.status.length - b.status.length,
        },
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
            </Tooltip>
            <Tooltip title="Delete">
              <Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
            </Tooltip>
          </div>
        )
      }
    ];
    return showEditor ? <Editor currentUser={currentUser}/> : users.length > 0 ? (
      <Card bodyStyle={{'padding': '0px'}}>
        <Table columns={tableColumns} dataSource={users} rowKey='id' />
        <UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
      </Card>
    ) : (
      <Card bodyStyle={{'padding': '0px'}}>
        <Loading />
      </Card>

    )
  }
}

export default UserList

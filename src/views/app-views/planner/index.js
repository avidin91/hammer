import React, {Component} from 'react';
import {Card, Row, Col, Switch, Segmented, Tabs} from "antd";

const rows = [...Array(10)];
const lines = rows.map(row => [...Array(10)]);
const { TabPane } = Tabs;
const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

export class Planner extends Component {

  state = {
    lines,
    isShowBorder: true,
    activeTabKey: '1',
  }

  toggleBorder = () => {
    this.setState((prevState) => ({
      isShowBorder: !prevState.isShowBorder
    }));
  }

  changeActiveTabKey = (key) => {
    this.setState({
      activeTabKey: key
  });
  }


  render() {
    const {lines, isShowBorder, activeTabKey} = this.state;
console.log(activeTabKey)
    return (
      <>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <Card>
                  <Row>
                    <Tabs defaultActiveKey={activeTabKey}  items={items} onTabClick={this.changeActiveTabKey} />
                  </Row>
                  <Row>12</Row>
                </Card>
              </Col>
              <Col span={24}>
                <Card>2</Card>
              </Col>
              <Col span={24}>
                <Card>3</Card>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row >
              <Col span={24}>
                <Card>
                  <Row justify={"space-between"}>
                    <p>Карта заведения</p>
                    <Row gutter={[16, 0]} wrap={false}>
                      <Col><p>Сетка</p></Col>
                      <Col><Switch checked={isShowBorder} onClick={this.toggleBorder}/></Col>
                    </Row>
                  </Row>
                  <Row justify={"center"}>
                    {lines.map((row, index) => {
                      return <Row key={index} wrap={false}>
                        {row.map((col, index) => {
                          return <div style={{width: '50px', height: '50px', border: isShowBorder && '1px solid yellow'}} key={index}>2</div>
                        })}
                      </Row>
                    })}
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    )
  }
}

export default Planner;
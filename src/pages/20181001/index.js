import {Pagination,Input} from 'antd';
import React from 'react'
import {getContestRankByOwner, getPagedContestRanks} from '../../common/utils/relay'

export default class RankList extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      items:[], // {Owner, Rank, TradeCount}
      pageIndex:1,
      pageSize:20,
      recordCount:0,
      pageCount:0
    }
  }

  getRandDatas(pageIndex) {
    getPagedContestRanks({round:1, pageIndex, pageSize:this.state.pageSize}).then(res=>{
      if(res.result.data) {
        this.setState({
          items:res.result.data,
          recordCount:res.result.total,
          pageCount:Math.ceil(res.result.total / this.state.pageSize)
        })
      }
    })
  }

  componentDidMount() {
    this.getRandDatas(this.state.pageIndex)
  }

  render() {
    const search = (address) => {
      if(address) {
        getContestRankByOwner({round:1, owner:address}).then(res=>{
          if(res.result) {
            this.setState({
              items:[res.result],
              recordCount:1,
              pageCount:1
            })
          } else {
            this.setState({
              items:[],
              recordCount:0,
              pageCount:0
            })
          }
        })
      }
    }
    return (
      <div className="wrap">
        <div className="top-content">
          <div className="logo"><img src={require('./assets/images/logo-white.svg')} /></div>
          <div className="banner"><img src={require('./assets/images/banner.jpg')} className="img-responsive" /></div>
          <a href="https://blogs.loopring.org/dex-trading-competition/" target='_blank' className="btn">活动详情</a>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>交易奖励</h2>
            <p>通过任何一个集成路印协议且接入路印官方中继的钱包进行LRC/WETH或VITE/WETH两个交易对的撮合交易。为了测试路印中继1.0的性能，本次活动不包括P2P非撮合交易，也不包括第三方中继撮合的交易。</p>
          </div>
          <div className="awards-content">
            <div className="item">
              <div className="innner">
                <div>
                  <em>第1名 至 第5名</em>
                  <h4>每人奖励 60,000 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第6名 至 第10名</em>
                  <h4>每人奖励 30,000 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第11名 至 第20名</em>
                  <h4>每人奖励 20,000 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第21名 至 第30名</em>
                  <h4>每人奖励 10,000 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第31名 至 第40名</em>
                  <h4>每人奖励 8,000 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第41名 至 第50名</em>
                  <h4>每人奖励 60,000 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第51名 至 第100名</em>
                  <h4>每人奖励 40,000 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第101名 至 第150名</em>
                  <h4>每人奖励 2,000 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第151名 至 第200名</em>
                  <h4>每人奖励 1,800 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第201名 至 第250名</em>
                  <h4>每人奖励 1,600 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第251名 至 第300名</em>
                  <h4>每人奖励 1,400 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第301名 至 第400名</em>
                  <h4>每人奖励 1,200 VITE</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="innner">
                <div>
                  <em>第401名 至 第500名</em>
                  <h4>每人奖励 1,000 VITE</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-header">
            <h2>交易榜</h2>
          </div>
          <div className="trade-top">
            <div className="d-flex align-items-center">
              <div className="search" style={{flex:'1'}}>
                <Input.Search
                  placeholder="地址"
                  onSearch={value => search(value)}
                  className="d-block"
                />
              </div>
              <div className="" style={{flex:'none',paddingLeft:'15px'}}>
                <Pagination
                  pageSize={this.state.pageSize}
                  total={this.state.recordCount}
                  simple={true}
                  hideOnSinglePage={true}
                  onChange={(page, pageSize) => this.getRandDatas(page)}
                />
              </div>
            </div>
            <div className="blk"></div>
            <table className="table datatable table-striped table-hover text-center text-left-col1 text-left-col2 text-left-col4">
              <thead>
              <tr>
                <th>排名<i className="sorting-asc"></i></th>
                <th>地址</th>
                <th>交易笔数<i className="sorting-desc"></i></th>
                {false && <th>成交规模<i className="sorting"></i></th>}
              </tr>
              </thead>
              <tbody>
              {this.state.items &&
                this.state.items.map(item=>{
                  return (
                    <tr key={item.Rank}>
                      <td>{item.Rank}</td>
                      <td>{item.Owner}</td>
                      <td>{item.TradeCount}</td>
                      {false && <td>8,648.0456</td>}
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
            {
              !this.state.items || this.state.items.length === 0 &&
              <div style={{textAlign:'center',color:"rgba(0,0,0,0.5)"}}>
                暂无数据
              </div>
            }
            <div className="blk"></div>
            <div>
              <Pagination
                pageSize={this.state.pageSize}
                total={this.state.recordCount}
                showTotal={(total)=><div className="mr5">共计{total}条记录</div>}
                pageSizeOptions={['10','20','50','100']}
                showQuickJumper={true}
                showSizeChanger={true}
                hideOnSinglePage={true}
                onChange={(page, pageSize) => this.getRandDatas(page)}
              />
            </div>
          </div>
        </div>
        <footer>© 2018 Loopring Foundation. All rights reserved.</footer>
      </div>
    );
  }
}

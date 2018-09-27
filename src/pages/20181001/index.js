import Pagination from 'antd/lib/pagination';
import 'antd/lib/pagination/style'; 

export default function() {
  return (
    <div className="wrap">
        <div className="top-content">
            <div className="logo"><img src={require('./assets/images/logo-white.svg')} /></div>
            <div className="banner"><img src={require('./assets/images/banner.jpg')} className="img-responsive" /></div>
            <a href="#" className="btn">活动详情</a>
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
                        <input type="" name="" placeholder="地址" />
                        <img src={require('./assets/images/icon-search.svg')} />
                    </div>
                    <div className="" style={{flex:'none',paddingLeft:'15px'}}>
                       <Pagination pageSize={20} total={588} simple={true} hideOnSinglePage={true}/>
                    </div>
                </div>
                <div className="blk"></div>
                <table className="table datatable table-striped table-hover text-center text-left-col1 text-left-col2 text-left-col4">
                    <thead>
                        <tr>
                            <th>排名<i className="sorting-asc"></i></th>
                            <th>地址</th>
                            <th>交易笔数<i className="sorting-desc"></i></th>
                            <th>成交规模<i className="sorting"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0001</td>
                            <td>0x8d7291a4fcf0b2193cd17516e3574cda01bdf8ce</td>
                            <td>8426</td>
                            <td>8,648.0456</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>0x7cf0a4532f0c76611316792b0caee7461336eed7</td>
                            <td>8348</td>
                            <td>7,435.3458</td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>0xffac8975b336c20f3f37df1da6d22a4e249e29d7</td>
                            <td>8348</td>
                            <td>7,435.3458</td>
                        </tr>
                        <tr>
                            <td>0004</td>
                            <td>0x53a5afc1074b34567ea7ee7fb8000cb0ffeb020e</td>
                            <td>8021</td>
                            <td>7,689.2367</td>
                        </tr>
                        <tr>
                            <td>0005</td>
                            <td>0x12b2398405f49dec00d7ceef9c0925e6fc96c51f</td>
                            <td>7836</td>
                            <td>7,165.0045</td>
                        </tr>
                        <tr>
                            <td>0006</td>
                            <td>0xffac8975b336c20f3f37df1da6d22a4e249e29d7</td>
                            <td>7623</td>
                            <td>7,023.1256</td>
                        </tr>
                        <tr>
                            <td>0007</td>
                            <td>0x6482ccfc48cd7ff95bb4def3355617fe0d507052</td>
                            <td>7125</td>
                            <td>6,534.0310</td>
                        </tr>
                        <tr>
                            <td>0008</td>
                            <td>0xe9d01254e747129e2a8b38e1bdfc54007e5786b0</td>
                            <td>6527</td>
                            <td>6,423.0560</td>
                        </tr>
                        <tr>
                            <td>0009</td>
                            <td>0x59bd40e1d8bce609f4fcf76cb28257b3f9fd35f0</td>
                            <td>86368</td>
                            <td>6,315.6704</td>
                        </tr>
                        <tr>
                            <td>0010</td>
                            <td>0x06012c8cf97bead5deae237070f9587f8e7a266d</td>
                            <td>6205</td>
                            <td>6,216.4508</td>
                        </tr>
                        <tr>
                            <td>0011</td>
                            <td>0x0429c8d18b916dffa9d3ac0bc56d34d9014456ef</td>
                            <td>5831</td>
                            <td>8,648.0456</td>
                        </tr>
                        <tr>
                            <td>0012</td>
                            <td>0xc9c4d9ec2b44b241361707679d3db0876ac10ca6</td>
                            <td>5626</td>
                            <td>6,012.1274</td>
                        </tr>
                        <tr>
                            <td>0013</td>
                            <td>0x6ec8754173aed37bdc1544192da983c2879e333b</td>
                            <td>5418</td>
                            <td>5,903.2368</td>
                        </tr>
                        <tr>
                            <td>0014</td>
                            <td>0x8bd7cb50adefc4bbe27bf2a1129e04234bebe505</td>
                            <td>4827</td>
                            <td>5,838.0900</td>
                        </tr>
                        <tr>
                            <td>0015</td>
                            <td>0x35c04dd71b72b1bc34c72e78639cc472b9168608</td>
                            <td>4398</td>
                            <td>5,512.4560</td>
                        </tr>
                        <tr>
                            <td>0016</td>
                            <td>0x53a5afc1074b34567ea7ee7fb8000cb0ffeb020e</td>
                            <td>4002</td>
                            <td>5,389.1230</td>
                        </tr>
                    </tbody>
                </table>
                <div className="blk"></div>
                <div>
                	<Pagination pageSize={20} total={588} showTotal={(total)=><div className="mr5">共计{total}条记录</div>} pageSizeOptions={['10','20','50','100']} showQuickJumper={true} showSizeChanger={true} hideOnSinglePage={true}/>
                </div>
            </div>
        </div>
        <footer>© 2018 Loopring Foundation. All rights reserved.</footer>
    </div>
  );
}

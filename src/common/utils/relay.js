import request from './request'

/**
 * 按owner地址获取排名信息 (返回结果是单个ContestRankItem)
 * @param round
 * @param owner
 * @returns {*}
 */
export function getContestRankByOwner({round, owner}) {
  const params = [{round, owner}];
  let body = {};
  body.method = 'loopring_getContestRankByOwner';
  body.params = params;
  return request({
    method: 'post',
    body
  })
}

/**
 * 获取前多少名的排名信息列表（最多获取前500名，返回结果是列表 List[ContestRankItem]）
 * @param round
 * @param head
 * @returns {*}
 */
export function getHeadContestRanks({round, head = 100}) {
  const params = [{round, head}];
  let body = {};
  body.method = 'loopring_getHeadContestRanks';
  body.params = params;
  return request({
    method: 'post',
    body
  })
}

/**
 * 按分页获取所有地址的交易排名信息（每分页最大100，默认10，返回结果是PageResul
 * @param round
 * @param pageIndex
 * @param pageSize
 * @returns {*}
 */
export function getPagedContestRanks({round, pageIndex, pageSize}) {
  const params = [{round, pageIndex, pageSize}];
  let body = {};
  body.method = 'loopring_getPagedContestRanks';
  body.params = params;
  return request({
    method: 'post',
    body
  })
}

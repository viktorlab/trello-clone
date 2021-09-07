import HttpClient from 'httpClient';

class BatchService extends HttpClient {
  getListsAndCardsByBoardId(boardId) {
    return this.instance.get(`/batch?urls=/boards/${boardId}/cards,/boards/${boardId}/lists`);
  }
}

export default new BatchService();

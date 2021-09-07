import HttpClient from 'httpClient';

class BoardsService extends HttpClient {
  getAllBoards() {
    return this.instance.get('/members/me/boards');
  }

  addNewBoard(data) {
    return this.instance.post('/boards', data);
  }

  updateBoard(boardId, params) {
    return this.instance.put(`/boards/${boardId}`, null, { params });
  }

  deleteBoard(boardId) {
    return this.instance.delete(`/boards/${boardId}`);
  }
}

export default new BoardsService();

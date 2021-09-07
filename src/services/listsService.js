import HttpClient from 'httpClient';

class ListsService extends HttpClient {
  addNewList(params) {
    return this.instance.post('/lists', null, { params });
  }

  updateList(listId, params) {
    return this.instance.put(`/lists/${listId}`, null, { params });
  }
}

export default new ListsService();

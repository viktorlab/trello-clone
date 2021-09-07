import HttpClient from 'httpClient';

class CardsService extends HttpClient {
  addNewCard(params) {
    return this.instance.post('/cards', null, { params });
  }

  updateCard(cardId, params) {
    return this.instance.put(`/cards/${cardId}`, null, { params });
  }

  deleteCard(cardId) {
    return this.instance.delete(`/cards/${cardId}`);
  }

  getCommentsFromACard(cardId) {
    return this.instance.get(`/cards/${cardId}/actions`, { params: { filter: 'commentCard' } });
  }

  addNewCommentToCard(cardId, params) {
    return this.instance.post(`/cards/${cardId}/actions/comments`, null, { params });
  }

  updateCommentFromCard(commentId, params) {
    return this.instance.put(`/actions/${commentId}`, null, { params });
  }

  deleteCommentFromCard(commentId) {
    return this.instance.delete(`/actions/${commentId}`);
  }
}

export default new CardsService();

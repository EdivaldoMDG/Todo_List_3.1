class Lists {
  constructor(list) {
    this.list = list;
  }

  //funcao fetch item and return it/feito
  fetchItems() {
    return this.lists;
  }
  //funcao adicionar valores na lista/feito
  addItem(item) {
    return (this.lists = { ...this.lists, [item.id]: item });
  }

  //function remover
  removeItem(item) {
    if (Object.values(this.lists).length === 0) {
      return {};
    }
    return delete this.lists[item];
  }

  //function updateItem atualiza um item
  updateItem(id, property) {
    this.lists[id] = {
      ...this.lists[id],
      ...property,
    };
  }
  //function clearList
  clearList() {
    return (this.lists = {});
  }
}

//const lists = new Lists({});

module.exports = { Lists };

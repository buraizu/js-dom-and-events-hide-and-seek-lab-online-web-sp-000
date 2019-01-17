function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list li');
  for(let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
  return rankedList;
}

function deepestChild() {
  const grand_node = document.getElementById('grand-node');
  return grand_node.querySelector('div').querySelector('div').querySelector('div').querySelector('div');
}

const elList = document.querySelector('.hero__list');
const elFigureList = document.querySelector('.figure__list');

function createWay () {
}

function castleUp () {

}



chessBoardArr.forEach(arr => {
  const li = document.createElement('li');
  li.classList.add('hero__item');
  li.id = arr.idBoard;
  li.dataset.x = arr.xArrow;
  li.dataset.y = arr.yArrow;
  li.style.backgroundColor = `#${arr.color}`

  elList.appendChild(li);
})

const itemsBoars = document.querySelectorAll('.hero__item');

chessFigures.forEach(figure => {
  const li = document.createElement('li');
  li.classList.add('figure__item');
  li.id = figure.idFigure;
  li.dataset.x = figure.xArr;
  li.dataset.y = figure.yArr;
  li.dataset.name = figure.nameFigure;
  li.style.backgroundImage = `url(${figure.img})`;
  elFigureList.appendChild(li)
})

const itemsFigure = document.querySelectorAll('.figure__item');

const figureNewObj = {};

const boardNewObj = {};

elFigureList.addEventListener('click', e => {
  figureNewObj.nameFigure = e.target.dataset.name;
  figureNewObj.xArr = e.target.dataset.x;
  figureNewObj.yArr = e.target.dataset.y;
  figureNewObj.img = e.target.style.backgroundImage;
})

elList.addEventListener('click', evt => {
  boardNewObj.idBoard = evt.target.id;
  boardNewObj.xArrow = evt.target.dataset.x;
  boardNewObj.yArrow = evt.target.dataset.y;
  evt.target.style.backgroundImage = figureNewObj.img;
  figureNewObj.xArr = evt.target.dataset.x;
  figureNewObj.yArr = evt.target.dataset.y;
  figureNewObj.idFigure = evt.target.id;

  if (figureNewObj.nameFigure == 'castle') {
    // up
    figureMove[0].xMove = evt.target.dataset.x;
    figureMove[0].yMove = evt.target.dataset.y;

    for (let i = figureMove[0].yMove;i <= 8; ++i) {
        itemsBoars.forEach(item => {
          if (item.dataset.y == figureMove[0].yMove) {
            item.style.opacity = '0.3';
          }
        })
    }

    // down
    figureMove[1].xMove = evt.target.dataset.x;
    figureMove[1].yMove = evt.target.dataset.y;

    for (let i = figureMove[1].xMove;i <= 8; ++i) {
      itemsBoars.forEach(item => {
        if (item.dataset.x == figureMove[1].xMove) {
          item.style.opacity = '0.3';
        }
      })
    }
  }
  if (figureNewObj.nameFigure == 'bishop') {

    // up
    figureMove[0].xMove = evt.target.dataset.x;
    figureMove[0].yMove = evt.target.dataset.y;

    for (let i = figureMove[0].yMove;i <= 8; ++i) {
      figureMove[0].yMove++;
        itemsBoars.forEach(item => {
          if (item.dataset.y == figureMove[0].yMove) {
            item.style.opacity = '0.3';
          }
        })
    }

    // down
    figureMove[1].xMove = evt.target.dataset.x;
    figureMove[1].yMove = evt.target.dataset.y;

    for (let i = figureMove[1].xMove;i <= 8; ++i) {
      itemsBoars.forEach(item => {
        if (item.dataset.x == figureMove[1].xMove) {
          item.style.opacity = '0.3';
        }
      })
    }
  }
})

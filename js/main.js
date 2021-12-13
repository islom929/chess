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
  boardNewObj.figureName = figureNewObj.nameFigure
  figureNewObj.xArr = evt.target.dataset.x;
  figureNewObj.yArr = evt.target.dataset.y;
  figureNewObj.idFigure = evt.target.id;

    if (figureNewObj.nameFigure == 'castle') {
      // up
      figureMove[0].xMove = evt.target.dataset.x;
      figureMove[0].yMove = evt.target.dataset.y;
      let j = figureMove[0].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[0].yMove++;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[0].yMove && item.dataset.x == figureMove[0].xMove) {
              item.style.opacity = '0.3';
            }
          })
      }

      // down
      figureMove[1].xMove = evt.target.dataset.x;
      figureMove[1].yMove = evt.target.dataset.y;
      j = figureMove[1].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[1].yMove--;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[1].yMove && item.dataset.x == figureMove[1].xMove) {
              item.style.opacity = '0.3';
            }
          })
      }

      // left
      figureMove[2].xMove = evt.target.dataset.x;
      figureMove[2].yMove = evt.target.dataset.y;
      j = figureMove[2].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[2].xMove--;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[2].yMove && item.dataset.x == figureMove[2].xMove) {
              item.style.opacity = '0.3';
            }
          })
      }

      // right
      figureMove[3].xMove = evt.target.dataset.x;
      figureMove[3].yMove = evt.target.dataset.y;
      j = figureMove[3].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[3].xMove++;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[3].yMove && item.dataset.x == figureMove[3].xMove) {
              item.style.opacity = '0.3';
            }
          })
      }
    }

    if (figureNewObj.nameFigure == 'bishop') {

      // leftup
      figureMove[4].xMove = evt.target.dataset.x;
      figureMove[4].yMove = evt.target.dataset.y;
      let j = figureMove[4].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[4].yMove++;
        figureMove[4].xMove--;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[4].yMove && item.dataset.x == figureMove[4].xMove) {
              item.style.opacity = '0.3';
            }
          })
      }

      // leftdown
      figureMove[5].xMove = evt.target.dataset.x;
      figureMove[5].yMove = evt.target.dataset.y;
      j = figureMove[5].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[5].yMove--;
        figureMove[5].xMove--;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[5].yMove && item.dataset.x == figureMove[5].xMove) {
              item.style.opacity = '0.3';
            }
          })
        }

        // rightup
      figureMove[6].xMove = evt.target.dataset.x;
      figureMove[6].yMove = evt.target.dataset.y;
      j = figureMove[6].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[6].yMove++;
        figureMove[6].xMove++;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[6].yMove && item.dataset.x == figureMove[6].xMove) {
              item.style.opacity = '0.3';
            }
          })
        }

      // rightdown
      figureMove[7].xMove = evt.target.dataset.x;
      figureMove[7].yMove = evt.target.dataset.y;
      j = figureMove[7].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[7].yMove--;
        figureMove[7].xMove++;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[7].yMove && item.dataset.x == figureMove[7].xMove) {
              item.style.opacity = '0.3';
            }
          })
        }
      }

    if (figureNewObj.nameFigure == 'queen') {
      // up
      figureMove[0].xMove = evt.target.dataset.x;
      figureMove[0].yMove = evt.target.dataset.y;
      let j = figureMove[0].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[0].yMove++;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[0].yMove && item.dataset.x == figureMove[0].xMove) {
              item.style.opacity = '0.3';
            }
          })
      }

      // down
      figureMove[1].xMove = evt.target.dataset.x;
      figureMove[1].yMove = evt.target.dataset.y;
      j = figureMove[1].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[1].yMove--;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[1].yMove && item.dataset.x == figureMove[1].xMove) {
              item.style.opacity = '0.3';
            }
          })
      }

      // left
      figureMove[2].xMove = evt.target.dataset.x;
      figureMove[2].yMove = evt.target.dataset.y;
      j = figureMove[2].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[2].xMove--;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[2].yMove && item.dataset.x == figureMove[2].xMove) {
              item.style.opacity = '0.3';
            }
          })
      }

      // right
      figureMove[3].xMove = evt.target.dataset.x;
      figureMove[3].yMove = evt.target.dataset.y;
      j = figureMove[3].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[3].xMove++;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[3].yMove && item.dataset.x == figureMove[3].xMove) {
              item.style.opacity = '0.3';
            }
          })
      }

      // leftup
      figureMove[4].xMove = evt.target.dataset.x;
      figureMove[4].yMove = evt.target.dataset.y;
      j = figureMove[4].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[4].yMove++;
        figureMove[4].xMove--;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[4].yMove && item.dataset.x == figureMove[4].xMove) {
              item.style.opacity = '0.3';
            }
          })
      }

      // leftdown
      figureMove[5].xMove = evt.target.dataset.x;
      figureMove[5].yMove = evt.target.dataset.y;
      j = figureMove[5].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[5].yMove--;
        figureMove[5].xMove--;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[5].yMove && item.dataset.x == figureMove[5].xMove) {
              item.style.opacity = '0.3';
            }
          })
        }

        // rightup
      figureMove[6].xMove = evt.target.dataset.x;
      figureMove[6].yMove = evt.target.dataset.y;
      j = figureMove[6].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[6].yMove++;
        figureMove[6].xMove++;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[6].yMove && item.dataset.x == figureMove[6].xMove) {
              item.style.opacity = '0.3';
            }
          })
        }

      // rightdown
      figureMove[7].xMove = evt.target.dataset.x;
      figureMove[7].yMove = evt.target.dataset.y;
      j = figureMove[7].xMove
      for (let i = 0;i <= 8; ++i) {
        figureMove[7].yMove--;
        figureMove[7].xMove++;
          itemsBoars.forEach(item => {
            if (item.dataset.y == figureMove[7].yMove && item.dataset.x == figureMove[7].xMove) {
              item.style.opacity = '0.3';
            }
          })
        }


    }

    if (figureNewObj.nameFigure == 'knight') {

      // up
      figureMove[0].xMove = Number(evt.target.dataset.x);
      figureMove[0].yMove = Number(evt.target.dataset.y);
      figureMove[0].xMove += 1;
      figureMove[0].yMove += 2;
        itemsBoars.forEach(item => {
          if (item.dataset.y == figureMove[0].yMove && item.dataset.x == figureMove[0].xMove) {
            item.style.opacity = '0.3';
          }
        })

      // down
      figureMove[1].xMove = Number(evt.target.dataset.x);
      figureMove[1].yMove = Number(evt.target.dataset.y);
      figureMove[1].xMove += 2;
      figureMove[1].yMove += 1;
        itemsBoars.forEach(item => {
          if (item.dataset.y == figureMove[1].yMove && item.dataset.x == figureMove[1].xMove) {
            item.style.opacity = '0.3';
          }
        })

      // left
      figureMove[2].xMove = Number(evt.target.dataset.x);
      figureMove[2].yMove = Number(evt.target.dataset.y);
      figureMove[2].xMove += 1;
      figureMove[2].yMove -= 2;
        itemsBoars.forEach(item => {
          if (item.dataset.y == figureMove[2].yMove && item.dataset.x == figureMove[2].xMove) {
            item.style.opacity = '0.3';
          }
        })

      // right
      figureMove[3].xMove = Number(evt.target.dataset.x);
      figureMove[3].yMove = Number(evt.target.dataset.y);
      figureMove[3].xMove += 2;
      figureMove[3].yMove -= 1;
        itemsBoars.forEach(item => {
          if (item.dataset.y == figureMove[3].yMove && item.dataset.x == figureMove[3].xMove) {
            item.style.opacity = '0.3';
          }
        })

      // leftup
      figureMove[4].xMove = Number(evt.target.dataset.x);
      figureMove[4].yMove = Number(evt.target.dataset.y);
      figureMove[4].yMove -= 1;
      figureMove[4].xMove -= 2;
        itemsBoars.forEach(item => {
          if (item.dataset.y == figureMove[4].yMove && item.dataset.x == figureMove[4].xMove) {
            item.style.opacity = '0.3';
          }
        })

      // leftdown
      figureMove[5].xMove = Number(evt.target.dataset.x);
      figureMove[5].yMove = Number(evt.target.dataset.y);
      figureMove[5].yMove -= 2;
      figureMove[5].xMove -= 1;
        itemsBoars.forEach(item => {
          if (item.dataset.y == figureMove[5].yMove && item.dataset.x == figureMove[5].xMove) {
            item.style.opacity = '0.3';
          }
        })

        // rightup
      figureMove[6].xMove = Number(evt.target.dataset.x);
      figureMove[6].yMove = Number(evt.target.dataset.y);
      figureMove[6].yMove += 1;
      figureMove[6].xMove -= 2;
        itemsBoars.forEach(item => {
          if (item.dataset.y == figureMove[6].yMove && item.dataset.x == figureMove[6].xMove) {
            item.style.opacity = '0.3';
          }
        })

      // rightdown
      figureMove[7].xMove = Number(evt.target.dataset.x);
      figureMove[7].yMove = Number(evt.target.dataset.y);
      figureMove[7].yMove += 2;
      figureMove[7].xMove -= 1;
        itemsBoars.forEach(item => {
          if (item.dataset.y == figureMove[7].yMove && item.dataset.x == figureMove[7].xMove) {
            item.style.opacity = '0.3';
          }
        })

    }
  

})

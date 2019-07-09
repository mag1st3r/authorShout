
const id = document.getElementById('root');
const ul = document.createElement('ul');

id.appendChild(ul);

authorsList.map( (item) => {
    const li = document.createElement('li');
        li.className = item.name;
        li.innerText = item.name;
    const divShout = document.createElement('div');
        divShout.innerText = 'Shout:'
        divShout.className = `-shout`;
    const divShoutCount = document.createElement('div');
        divShoutCount.innerText = 'Count:'
        divShoutCount.className = `-count`;
        li.appendChild(divShoutCount);
        li.appendChild(divShout);
        ul.appendChild(li);
});
    const buttonStop = document.createElement('button');
    buttonStop.innerText = 'StopEvent';
    buttonStop.addEventListener('click', touratte.stop, false);
    id.appendChild((buttonStop));


document.addEventListener('shout', function (e)  {
    let {name, _id, count} = e.detail.author;
    let countShount = authorsList[_id -1].count++;
    const item = document.getElementsByClassName(name);
    item[0].getElementsByClassName('-shout')[0].innerText = `Shout: ${e.detail.shoutText}`;
    item[0].getElementsByClassName('-shout')[0].style.color = 'red';
    setTimeout( () => {
        item[0].getElementsByClassName('-shout')[0].innerText = `Shout: `;
        item[0].getElementsByClassName('-shout')[0].style.color = 'black';
    }, 1000);
    item[0].getElementsByClassName('-count')[0].innerText = `Count: ${++countShount}`;
});



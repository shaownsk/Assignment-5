document.getElementById('Discover').addEventListener('click',
    function(){
        window.location.href = './sub-page.html';
        
})

document.getElementById('btn-1').addEventListener('click',
    function(event){
        event.preventDefault();
        const task = getInnerTextById('task');
        const counts = getInnerTextById('count');
        // console.log(task);
        if (task) {
            alert('board update successfully')
            const sum = task - 1 ;
            const sum2 = counts + 1 ;
            setInnerTextById('task',sum)
            setInnerTextById('count',sum2)
            const tName = document.getElementById('card-title-1').innerText;
            const history =document.getElementById('history')
            const p = document.createElement('p');
            p.innerText = `You have Complete The Task ${tName} at 12:48:15 PM `;
            history.appendChild(p)
            disable ('btn-1');
        }
        else{

        }
    });
document.getElementById('btn-2').addEventListener('click',
    function(event){
        event.preventDefault();
        const task = getInnerTextById('task');
        const counts = getInnerTextById('count');
        // console.log(task);
        if (task) {
            alert('board update successfully')
            const sum = task - 1 ;
            const sum2 = counts + 1 ;
            setInnerTextById('task',sum)
            setInnerTextById('count',sum2)
            const tName = document.getElementById('card-title-2').innerText;
            const history =document.getElementById('history')
            const p = document.createElement('p');
            p.innerText = `You have Complete The Task ${tName} at 12:48:15 PM `;
            history.appendChild(p)
            disable ('btn-2');
        }
        else{

        }
    });
document.getElementById('btn-3').addEventListener('click',
    function(event){
        event.preventDefault();
        const task = getInnerTextById('task');
        const counts = getInnerTextById('count');
            // console.log(task);
        if (task) {
            alert('board update successfully')
            const sum = task - 1 ;
            const sum2 = counts + 1 ;
            setInnerTextById('task',sum)
            setInnerTextById('count',sum2)
            const tName = document.getElementById('card-title-3').innerText;
            const history =document.getElementById('history')
            const p = document.createElement('p');
            p.innerText = `You have Complete The Task ${tName} at 12:48:15 PM `;
            history.appendChild(p)
            disable ('btn-3');
        }
        else{
    
        }
    });

    document.getElementById('btn-4').addEventListener('click',
        function(event){
            event.preventDefault();
            const task = getInnerTextById('task');
            const counts = getInnerTextById('count');
            // console.log(task);
            if (task) {
                alert('board update successfully')
                const sum = task - 1 ;
                const sum2 = counts + 1 ;
                setInnerTextById('task',sum)
                setInnerTextById('count',sum2)
                const tName = document.getElementById('card-title-4').innerText;
                const history =document.getElementById('history')
                const p = document.createElement('p');
                p.innerText = `You have Complete The Task ${tName} at 12:48:15 PM `;
                history.appendChild(p)
                disable ('btn-4');
            }
            else{
    
            }
        });
document.getElementById('btn-5').addEventListener('click',
    function(event){
        event.preventDefault();
        const task = getInnerTextById('task');
        const counts = getInnerTextById('count');
        // console.log(task);
        if (task) {
            alert('board update successfully')
            const sum = task - 1 ;
            const sum2 = counts + 1 ;
            setInnerTextById('task',sum)
            setInnerTextById('count',sum2)
            const tName = document.getElementById('card-title-5').innerText;
            const history =document.getElementById('history')
            const p = document.createElement('p');
            p.innerText = `You have Complete The Task ${tName} at 12:48:15 PM `;
            history.appendChild(p)
            disable ('btn-5');
        }
        else{

        }
    });
document.getElementById('btn-6').addEventListener('click',
    function(event){
        event.preventDefault();
        const task = getInnerTextById('task');
        const counts = getInnerTextById('count');
        // console.log(task);
        if (task) {
            alert('board update successfully')
            alert('Congratulations, You have completed all current tasks')
            const sum = task - 1 ;
            const sum2 = counts + 1 ;
            setInnerTextById('task',sum)
            setInnerTextById('count',sum2)
            const tName = document.getElementById('card-title-6').innerText;
            const history =document.getElementById('history')
            const p = document.createElement('p');
            p.innerText = `You have Complete The Task ${tName} at 12:48:15 PM `;
            history.appendChild(p)
            disable ('btn-6');
        }
        else{

        }
    });

const list = document.querySelector('.conpca'), 
items=document.querySelectorAll('.list')
function filter() {
List.addEventListener('click',event ={
	const targetid = event.target.dataset.id
	console.log(targetId)

	switch(targetId){
	case 'all':
		break
	case ' cr':
		items.fotEach(items={
			if(items.classlist.contains('cr')){
				items.style.display='bloc'
			} else{
				items.style.display='none'
			}
		})
		break
	}
})
}
filter
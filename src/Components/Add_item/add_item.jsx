import './add_item.css'
const Add_item = () => {
    return ( 
        <>
            <form>
                <div className='object'>
                <div className='NameAndImg'>
                    <input className='name_item' type="text" placeholder ="Name" />
                    <input type='text' placeholder = "Image"/> 
                    <div className='CostAndCategory'>
                        <input type='text' placeholder = "Цена"/>
                        <input type='text' placeholder = "Категория"/>
                        <textarea className='characteristics' type = 'text' placeholder='characteristics '/>
                    </div>                   
                </div>
                <textarea className='description' type='text' placeholder = "Описание"/>
                </div>
                <div className='createObject'>
                    <button type="submit">Создать объект</button>
                </div>
            </form>
        </>
     );
}
 
export default Add_item;
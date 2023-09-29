import './add_item.css';
import React, { useState } from 'react';


const Add_item = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [characteristics, setCharacteristics] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Создаем объект FormData для отправки данных в формате multipart/form-data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('img', image);
    formData.append('description', description);
    formData.append('characteristics', characteristics);
    formData.append('quantity', 1); // Пример числового значения
    formData.append('cost', price);
    formData.append('category_id', category);

    const jwt = localStorage.getItem('jwt');
    // Отправляем запрос на сервер с использованием fetch или другой библиотеки для HTTP-запросов
    try {
      
      const response = await fetch('http://127.0.0.1:8000/items/add', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Успешно создан объект');
        // Очистите состояние или выполните другие действия после успешной отправки данных
        setName('');
        setImage(null);
        setPrice('');
        setCategory('');
        setCharacteristics('');
        setDescription('');
      } else {
        // Обработка ошибки
        console.error('Ошибка при создании объекта');
      }
    } catch (error) {
      // Обработка сетевой ошибки
      console.error('Сетевая ошибка:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='object'>
          <div className='NameAndImg'>
            <input
              
              className='name_item'
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='file'
              placeholder="Image"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <div className='CostAndCategory'>
              <input
                type='text'
                placeholder="Цена"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type='text'
                placeholder="Категория"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <textarea
                className='characteristics'
                type='text'
                placeholder='Характеристики'
                value={characteristics}
                onChange={(e) => setCharacteristics(e.target.value)}
              />
            </div>
          </div>
          <textarea
            className='description'
            type='text'
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='createObject'>
          <button type="submit">Создать объект</button>
        </div>
      </form>
    </>
  );
}

export default Add_item;

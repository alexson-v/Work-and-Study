'use strict';

/**
 *  Задания на урок:
 *  
 *  1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
 *  новый фильм добавляется в список. Страница не должна перезагружаться.
 *  Новый фильм должен добавляться в movieDB.movies.
 *  Для получения доступа к значению input - обращаемся к нему как input.value;
 *  P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
 * 
 *  2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки.
 * 
 *  3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно).
 * 
 *  4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
 *  "Добавляем любимый фильм".
 * 
 *  5) Фильмы должны быть отсортированы по алфавиту.
 */

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против...'
		]
	};
    
	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = document.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		addInput = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector('input[type="checkbox"]');

	const sortArray = (arr) => {
		arr.sort();
	};

	const createMovieList = (parent, movies) => {
		parent.innerHTML = '';
		sortArray(movies);
		movies.forEach((film, i) => {
			parent.innerHTML += `
            <li class="promo__interactive-item">
                ${i + 1}. ${film}
                <div class="delete"></div>
            </li>
            `;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				createMovieList(parent, movies);
			});
		});
	};
    
	addForm.addEventListener('submit', (e) => {
		e.preventDefault();

		let newMovie = addInput.value.trim();
		const favourite = checkbox.checked;

		if (newMovie) {
			if (newMovie.length > 21) {
				newMovie = `${newMovie.substring(0, 22)}...`;
			}

			if (favourite) {
				console.log('Добавляем любимый фильм');
			}

			movieDB.movies.push(newMovie);
			sortArray(movieDB.movies);
			createMovieList(movieList, movieDB.movies);
		}

		e.target.reset();
	});

	const deleteAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	};

	const makeChanges = () => {
		genre.textContent = 'драма';
		poster.style.backgroundImage = 'url("img/bg.jpg")';
	};

	deleteAdv(adv);
	makeChanges();
	createMovieList(movieList, movieDB.movies);
});
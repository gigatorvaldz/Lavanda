## Запуск проекта:

**В Dev режиме**

# Server:

По умолчанию порт ``5000``
Настройка env в файле ``.development.env``
``Обязательно внести данные от Postgres в env файл``

Запуск:
`
    npm install
`
`
    npm run start:dev
`


# Client:

По умолчанию порт ``3000``
Настройка env в файле ``.env``, в нём можно изменить URL API

Запуск:
`
    npm install
`
`
    npm run dev
`

### [Ссылка на макет на иврите](https://github.com/gigatorvaldz/Lavanda-Hebrew)

### Примечания:

 - Проект на иврите имеет небольшие отличия, так как сделан немного раньше. Отличия в реализации функционала, в вёрстке отличий нет.
 - В случае каких либо обшибок, прошу отписать мне в скайпе, на почту (artem.malakhov.frontend@mail.ru), Telegram (@e_luminous)
 

### Дополнительно

Есть пара вещей, которые я бы хотел доделать, но не хватило времени:

`
[Client]:
`

- Добавить Redux, это сильно упростило бы компонент с авторизацией. Я уже делал похожий компонент раньше, с использованием REST API и Redux Toolkit:   [Тут](https://github.com/gigatorvaldz/ivi/tree/main/components/PopupAuth).

`
[Server]
`     
- Добавить документацию с помощью Swagger

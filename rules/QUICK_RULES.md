# ШВИДКІ ПРАВИЛА Jane Korea
**Версія: 2.0**

## 📁 ШЛЯХ
```
C:\Claude\jane-korea\
```

## 🎯 ОСНОВНІ ФАЙЛИ
- `reading-content.html` - основний файл з `storyDatabase`
- `reading-texts.html` - список уроків
- `index.html` - головна сторінка

## 🏗️ СТРУКТУРА storyDatabase
```javascript
'textId': {
    title: "Назва російською",
    subtitle: "한글로 제목",
    korean: `<span class="korean-word" 
                   data-translation="переклад" 
                   data-pronunciation="발음 [romanization]">한글</span>...`,
    translation: "Переклад російською",
    image: "images/file.jpg",
    quiz: [4 питання]
}
```

## ✅ ОБОВ'ЯЗКОВО
- Кожне слово в `<span class="korean-word">`
- Атрибути: `data-translation`, `data-pronunciation`
- Транскрипція в [квадратних дужках]
- Рівно 4 питання в quiz
- Аудіо: `{level}-{category}-{textId}.mp3`

## 🚫 ЗАБОРОНИ
- НЕ ламай структуру `storyDatabase`
- НЕ змінюй структуру аннотованих слів
- НЕ використовуй Unicode в консолі (✓ → [OK])

## 📊 КАТЕГОРІЇ
personal, daily, travel, study, work, food, culture, hobbies, stories

## 🎓 РІВНІ
1급(A1), 2급(A2), 3급(B1), 4급(B2), 5급(C1), 6급(C2)

## 🛠️ MCP ІНСТРУМЕНТИ
```javascript
filesystem:read_file
filesystem:write_file
filesystem:edit_file
filesystem:list_directory
puppeteer:puppeteer_navigate
puppeteer:puppeteer_screenshot
```

## 💡 СТИЛЬ
- Реальний код, не "Here's how..."
- Коротко і по суті
- Українською/російською
- Антиципуй потреби
- Не ламай функціонал

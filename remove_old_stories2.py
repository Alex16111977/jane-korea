# -*- coding: utf-8 -*-
import codecs
import re

# Читаємо файл
with codecs.open('C:/Claude/jane-korea/reading-content.html', 'r', 'utf-8') as f:
    content = f.read()

# Знаходимо і видаляємо старий stories-2 про книжний магазин
# Він починається з "id: 'stories-2'," і закінчується перед "id: 'personal-2',"
pattern = r",\s*\{\s*id: 'stories-2',\s*title: \"Неожиданная встреча\".*?correct: 1\s*\}\s*\]\s*\}"
content = re.sub(pattern, '', content, flags=re.DOTALL)

# Записуємо файл назад
with codecs.open('C:/Claude/jane-korea/reading-content.html', 'w', 'utf-8') as f:
    f.write(content)

print("[OK] Old stories-2 removed successfully!")

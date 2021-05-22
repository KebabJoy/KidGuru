theme: /MathGuru


    state: MathGuru
        q!: (Математика|MathGuru|Арифметика|Первая игра)
        random:
            a: Полетели!
            a: Готовим листочки!
        script:
            goToMathGuru($context);
            addSuggestions([12,50,7,80], $context);
        
        state: Математика
            q!: @pymorphy.intg::number
            
            script:
                answerGiven($parseTree._number, $context);
                addSuggestions([12,50,7,80], $context);
            
            if: check_correctness(get_request($context)) == 1
                random:
                    a: Лучший из моих учеников
                    a: Отлично выходит. Идём дальше
                    a: КРУТОЙ ЧУВАК)
            else: 
               random:
                    a: Повезёт в другой раз
                    a: Не повезло
                    a: Потрясающе
            
            q!: (Дальше|Далее|Вперёд|Следующее|Следующий)
            
            script:
                next($context);
        
         
    state: Животные
        q!: (Animal Guru|Угадать животное|Животные|Вторая игра)
        
        random:
            a: Слушаюсь!
            a: Круто!
            
        script: 
            goToAnimals($context);
        
        state: AnimalGuru
            q!: $AnyText::anyText
            
            script:
                animalGiven($parseTree._anyText, $context);
                addSuggestions(["Слон", "Чита", "Кот"], $context);
            
            if: check_correctness(get_request($context)) == 1
                random:
                    a: Лучший из моих учеников
                    a: Отлично выходит. Идём дальше
                    a: Потрясающе
            else: 
                 random:
                     a: Повезёт в другой раз
                     a: Не повезло
                     a: Ошибки делают нас сильнее

                
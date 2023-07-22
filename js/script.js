function mudarfrase() {
   
    let frases = ['"A medida do amor é amar sem medida". Santo agostinho', 
                  '"O essencial não é pensar muito, é amar muito". Santa Teresa de Ávila', 
                  '"Exulte sempre no Senhor... Não se deixe envolver pela amargura e o desânimo". Santa Clara de Assis',
                  '"A vida é apenas um sonho, embreve acordaremos, e que alegria!" Santa teresinha',
                  '"Ó, Mestre, fazei que eu procure mais consolar que ser consolado; compreender que ser compreendido; amar que ser amado". São Francisco de Assis',
                  '"Que me importa estar no purgatório até o dia do juízo, se com as minhas orações pudesse ser salva mesmo uma única alma?" Santa Teresinha',
                  '"Quem não busca a cruz de Cristo não busca a glória de Cristo." São João da Cruz',
                  '"Não há lugar para a sabedoria onde não há paciência." Santo Agostinho',
                  '"Há três caminhos para o fracasso: não ensinar o que se sabe, não praticar o que se ensina, e não perguntar o que se ignora." São Beda',
                  '"O demônio teme a alma unida a Deus como ao próprio Deus." São João da Cruz',
                  '"Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível." São Francisco de Assis',
                  '"A essência mais íntima do amor é a doação. Deus que é amor, dá-se à criatura que ele mesmo criou por amor." Santa Teresa Benedita da Cruz',
                  '"Humildade é a verdade." Santa Teresa de Ávila',
                  '"A luz divina pode mais num momento do que o meu tormento de vários dias." Santa Faustina',
                  '"Com a confiança de uma criança entrego-me hoje a Vós, Senhor Jesus e meu Mestre." Santa Faustina',
                  '"Se a meta principal de um capitão fosse preservar seu barco, ele o conservaria no porto para sempre ." São Tomás de Aquino',
                  '"É obrigação de todos edificar os demais com uma vida boa, santa e honesta." Santa Catarina de Sena',
                  '"O supérfluo dos ricos é propriedade dos pobres." Santo Agostinho',
                  '"Quem se encontra mais no alto, tem que recear mais e confiar menos em si próprio." Santa Teresa de Jesus',
                  '"Apenas um raio de sol é suficiente para afastar várias sombras." São Francisco de Assis',
                  '"E se por esse motivo tiver de suportar perseguições da parte de alguém, que então o ame ainda mais por amor de Deus." São Francisco de Assis',
                  '"Por causa de prazeres passageiros, sofrem-se grandes tormentos eternos." São João da Cruz',
                  '"Santidade é alegria." São João Bosco',
                  '"Aqueles que amam a castidade, cujas consciências estão completamente limpas, mantêm seus corações puros. Não é necessária nenhuma outra virtude para ver a Deus" São João Crisóstomo',
                  '"A oração é a respiração da alma." Santa Teresinha',
                  '"Jesus, minha esperança e meu amor, para não me perderdes, quisestes perder a vida." Santo Afonso Maria de Ligório',
                  '"Felizes as pessoas que rezam bem o Santo Rosário, porque Maria Santíssima lhes obterá graças na vida, graças na hora da morte e glória no Céu." Santo Antônio Maria Claret',
                  '"Todas as minhas obras e trabalhos têm como base duas coisas: a Missa e o Rosário." São João Bosco',
                  '"Com tal intercessora, quem não terá amorosa confiança? Com Jesus e Maria, tudo é possível." Beata Maria Maravilhas de Jesus',
                  '"Não se atemorizem diante da nova vida que se apresenta, pois sendo filhas de Maria a Virgem as cobrirá com seu manto." Santa Teresa dos Andes',
                  '"É tão transparente, tão luminosa, que julgaríamos ser ela ( a Virgem Maria) a própria luz. No entanto, é apenas o “espelho do Sol de Justiça”." Beata Elizabete da Trindade',
                  '"Quem nos poderá separar de Cristo, se vivermos unidos a Maria?" Serva de Deus, Madre Maria José de Jesus',
                  '"Aprenda no Coração de Maria como amar a Jesus." Beata Maria Maravilhas de Jesus'];
    
    let randomIndex = Math.floor(Math.random() * frases.length);
    
    let fraseAleatoria = frases[randomIndex];
    
    document.getElementById('phrasefield').innerHTML = fraseAleatoria;
}
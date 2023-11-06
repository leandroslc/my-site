---
title: 'Dicas de responsividade com acessibilidade na web'
excerpt: 'Neste artigo, reuni algumas dicas que têm me ajudado a construir layouts cada vez mais responsivos e acessíveis que espero poderem ser úteis para você 😊.'
coverImage: '/assets/blog/tips-of-responsiveness-with-accessibility-in-web/cover.webp'
date: '2023-11-06T10:57:00.000Z'
ogImageUrl: '/assets/blog/tips-of-responsiveness-with-accessibility-in-web/cover.webp'
tags:
  - Web
  - CSS
  - Acessibilidade
---

Muitas vezes quando construímos layouts responsivos ficamos em dúvida de quais padrões e quais unidades de medida usar para cada situação, principalmente se não estamos usando algum framework CSS pronto.

Neste artigo, reuni algumas dicas que têm me ajudado a construir layouts cada vez mais responsivos e acessíveis que espero poderem ser úteis para você 😊.

## Evite alterar o tamanho de fonte padrão

Definir um tamanho de fonte fixa significa alterar o `font-size` no elemento `root` ou `html`, desta forma:

```css
:root { font-size: 14px; } /* OU */ html { font-size: 14px; }
```

Isso afeta a unidade `rem`, mas não somente isso, alterar o tamanho da fonte no elemento raiz impede que o tamanho de fonte do navegador seja configurável.

Como parte da especificação [UAAG](https://www.w3.org/TR/WAI-USERAGENT/guidelines.html#tech-configure-text-scale), a fonte padrão pode ser configurada no navegador, por exemplo, por uma pessoa que possua algum tipo de limitação visual.

Apesar de talvez não ser um recurso expressivamente usado, seria importante pensar em um design que garanta esses casos de uso desde o início. Além disso, é totalmente possível criar um layout usando o tamanho de fonte padrão, sem alterá-lo.

Mesmo assim, se necessário, é possível alterar o tamanho da fonte inicial relativamente, usando porcentagem ou `rem`, por exemplo:

```css
/* Considerando que o navegador está configurado com um tamanho de 16px */

:root { font-size: 0.9rem; } /* 16 x 0.9rem = 14.4px */

:root { font-size: 90%; } /* 16 x 90% = 14.4px */
```

Muito cuidado ao alterar esse tamanho senão as pessoas desenvolvedoras também acabarão com um nó na cabeça quando usarem o `rem` 😄.

## Evite usar `rem` ou `em` em box layouts

Muitas vezes quando usamos `rem` ou `em` ficamos tentados a usar em `margin`, `padding`, `border`, `border-radius` e outras coisas. Mas isso gera um problema, já que o aumento do tamanho da fonte também afeta o layout negativamente.

Quando usamos `rem` nesses casos, quanto o maior o tamanho da fonte, menos espaço iremos ter para o conteúdo, pois a margem também irá aumentar empurrando o conteúdo e diminuindo espaço.

Nesses casos, é preferível usar unidades fixas, como `px`.

![Evite usar rem em box layouts](/assets/blog/tips-of-responsiveness-with-accessibility-in-web/prevent-using-rem-in-box-layouts.webp)

## Use `rem` ou `em` em width e height fixos

Usualmente é sempre bom evitar larguras e alturas fixas, mas quando inevitavelmente precisamos deixar fixos, é muito útil usar `rem` (ou `em`).

Diferentemente do `padding` ou do `margin`, como vimos anteriormente, usar `rem` em `width` ou `height` fixos irá tornar o contêiner melhor ajustável conforme a fonte aumenta ou diminui.

![Use rem em width e height fixos](/assets/blog/tips-of-responsiveness-with-accessibility-in-web/use-rem-in-fixed-width-and-height.webp)

## Use `rem` em _media queries_

Considerando que a pessoa pode configurar um tamanho de fonte no navegador, o `rem` é uma ótima solução para uso em _media queries_, já que as queries de `min-width` e `max-width` irão ser aplicadas conforme o tamanho da fonte também, e não somente conforme o tamanho da tela.

O uso é semelhante, basta trocar o valor em pixels por rem:
```css
@media (min-width: 48rem) {
  ...
}
```

![Use rem em media queries](/assets/blog/tips-of-responsiveness-with-accessibility-in-web/use-rem-in-media-queries.webp)

## Opte pelo padrão _mobile-first_

Aproveitando que estamos falando de media queries, se estiver usando elas para layouts responsivos, opte por usar queries _mobile-first_, ou seja, usando `min-width`.

Com esse padrão, pessoas que acessam o site em dispositivos com telas menores serão beneficiadas pelo fato de o navegador do dispositivo ter menos instruções para interpretar e assim menos poder computacional é necessário, gastando menos bateria.

Também evita o download de recursos como ícones, imagens e vídeos que não seriam apresentados em uma tela menor, economizando dados móveis.

Não é exatamente uma regra de acessibilidade, mas é sempre bom ter em mente que muitas pessoas acabam acessando um site por um dispositivo móvel (às vezes até por não terem um computador desktop ou notebook).

## Evite usar _media queries_

Apesar de ter uma dica de media queries com `rem` nesse artigo, será que devemos usá-las em tudo?

Com os navegadores mais modernos e a evolução do CSS, é importante sempre optar por depender cada vez menos de media queries para construir layouts responsivos. Media queries tendem a serem confusas e tendem para uma maior duplicação de código.

Atualmente é possível fazer muitas coisas usando flexbox e grid, muitas vezes com muito menos código do que se usássemos media queries. [Este artigo muito bom](https://css-tricks.com/responsive-layouts-fewer-media-queries/) apresenta um estudo mais detalhado como alternativa às media queries.

## Considerações finais

É válido ressaltar que é importante manter um padrão, mesmo que uma das dicas não sejam seguidas, já que uma base de código de CSS, se não muito bem escrita, pode se tornar um empecilho enorme.

Além disso, a não ser que o conteúdo esteja totalmente desalinhado (claro 😄), as pessoas não vão se importar se um margem tiver 2 ou 4 pixels a mais ou a menos. O que realmente elas vão se importar é se conseguem entender, ler e navegar adequadamente no seu site.

Por isso, nunca pense em construir um site com pixels contados. Sempre opte por manter o seu site fluído, de fácil navegação e, acessível, independente de qual dispositivo ele será acessado.

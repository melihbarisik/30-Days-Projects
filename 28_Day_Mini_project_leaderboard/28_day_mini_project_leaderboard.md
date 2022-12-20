<!-- <div align="center">
  <h1> 30 Days Of JavaScript</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> January, 2020</small>
</sub>

</div>

[<< Day 27](../27_Day_Mini_project_portfolio/27_day_mini_project_portfolio.md) | [Day 29>>](../29_Day_Mini_project_animating_characters/29_day_mini_project_animating_characters.md)

![Thirty Days Of JavaScript](../images/banners/day_1_28.png)

- [Day 28](#day-28)
  - [Exercises](#exercises)
    - [Exercise: Level 1](#exercise-level-1)

# Day 28

## Exercises

### Exercise: Level 1

1. Create the following using HTML, CSS, and JavaScript

![Slider](./../images/projects/dom_mini_project_leaderboard_day_8.1.gif)

🎉 CONGRATULATIONS ! 🎉

[<< Day 27](../27_Day_Mini_project_portfolio/27_day_mini_project_portfolio.md) | [Day 29>>](../29_Day_Mini_project_animating_characters/29_day_mini_project_animating_characters.md) -->

This challange is basically a leaderboard. You can add your play with some informations and you can decrease or increase the score of player.

-About Project-
In the beginning we have a form with four inputs. You can not skip any input in this case you will have "All fields are required" error on the screen.

-Code Sample-
While coding this challange I didn't determine big problem however I learned a new and usefull <I think :)> method to clear the screen. 

```
function clearScreen() {
    while(allPlayersDiv.firstChild) {
        allPlayersDiv.removeChild(allPlayersDiv.lastChild);
    }
 }
```

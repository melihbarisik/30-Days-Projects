<!-- <div align="center">
  <h1> 30 Days Of JavaScript: World Countries Data Visualization</h1>
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

[<< Day 24](../24_Day_Project_solar_system/24_day_project_solar_system.md) | [Day 26 >>](../26_Day_World_countries_data_visualization_2/26_day_world_countries_data_visualization_2.md)

![Thirty Days Of JavaScript](../images/banners/day_1_25.png)

- [Day 25](#day-25)
	- [Exercises](#exercises)
		- [Exercise: Level 1](#exercise-level-1)

# Day 25

## Exercises

### Exercise: Level 1

1. Visualize the ten most populated countries and the ten most spoken languages in the world using DOM(HTML, CSS, JS)

![Bar Graph](./../images/projects/dom_min_project_bar_graph_day_5.1.gif)

![Bar Graph](./../images/projects/dom_min_project_bar_graph_day_5.1.png)

🎉 CONGRATULATIONS ! 🎉

[<< Day 24](../24_Day_Project_soloar_system/24_day_project_soloar_system.md) | [Day 26 >>](../26_Day_World_countries_data_visualization_2/26_day_world_countries_data_visualization_2.md) -->

In 25th day I made data visualization project. Basely this project display ten most using languages or most crowded ten countries.

-About Project-
You can click the one button and see the result as a progress. The data is coming form data>countries_data file. The js file will clear and ready the ten countries/languages before displaying. Population progress chart max value is based from world's population. When it comes to languages progress max value is a hundred.

-Code Samples-
The biggest algorithm  for me was holding languages and the replay count at the same time (Some junior problems :) ).

![25CodeSample](https://user-images.githubusercontent.com/45101301/208662064-51c6f758-f13c-4925-9e97-db5799e1e778.PNG)

 countriesData.forEach(country => {
        country.languages.forEach(language =>{
            languages.push(language);
        })
    })

In first part of that code I used forEach to reach every country in the file however some countries have more than one languages in the languages array (to see the data data > countries_data). Whereas I used another forEach to reach every languages in that file. In the end I have languages array with repeating data. One thing I have learned from previous lessons is Set().
Under favour of set I cleared repeated languages easily.

  languageSet.forEach(language => {
   languageCount = languages.filter(lang => lang === language);
   languageWCounts.push({lang: language, count: languageCount.length});
   })
  
Second part of the code I used forEach in the langugaeSet. Inside of my forEach I filtered old and repating languages array to determine which language repeats how many times. Now I am able to create object array and hold the language and value at the same time.
